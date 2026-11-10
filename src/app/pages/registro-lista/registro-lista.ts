import { Component, OnDestroy, OnInit, inject, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  RegistroService,
  Registro,
  Assunto,
  TipoRegistro,
} from '../../services/registro.service';
import { MateriaService, Materia } from '../../services/materia.service';
import { PlanejamentoService, Planejamento } from '../../services/planejamento.service';
import { MaterialGuia, MaterialGuiaService } from '../../services/material-guia.service';

// Módulos do NG-ZORRO necessários para o formulário denso de registros
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import {
  PlusOutline,
  DeleteOutline,
} from '@ant-design/icons-angular/icons';
import { NzCardModule } from 'ng-zorro-antd/card'; // <-- INSTALE ESTE IMPORT
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

interface RegistroQuestoesTemporario {
  descricao: string;
  feitas: number;
  acertadas: number;
}

@Component({
  selector: 'app-registro-lista',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzInputNumberModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule,
    NzModalModule,
  ],
  templateUrl: 'registro-lista.html',
  styleUrl: 'registro-lista.css',
})
export class RegistroListaComponent implements OnInit, OnDestroy {
  private registroService = inject(RegistroService);
  private materiaService = inject(MateriaService);
  private planejamentoService = inject(PlanejamentoService);
  private materialGuiaService = inject(MaterialGuiaService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private iconService = inject(NzIconService);
  private message = inject(NzMessageService);
  private modal = inject(NzModalService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  listaMaterias: Materia[] = [];
  listaPlanejamentos: Planejamento[] = [];
  listaMateriaisGuia: MaterialGuia[] = [];

  // Listas fictícias iniciais (ajuste conforme criar os services delas depois)
  listaAssuntos: Assunto[] = [];
  listaTiposRegistro: TipoRegistro[] = [];

  salvando = false;
  questoesAbaAberta = false;
  modoEdicao = false;
  registroEditandoId: number | null = null;
  validateForm!: FormGroup;
  registroQuestoesForm!: FormGroup;
  registrosQuestoes: RegistroQuestoesTemporario[] = [];
  cronometroSegundos = 0;
  cronometroRodando = false;
  private cronometroIntervalo: ReturnType<typeof setInterval> | null = null;
  private cronometroInicioMs: number | null = null;
  private cronometroAcumuladoMs = 0;
  private tituloOriginal = 'RFX Estudos';

  constructor() {
    this.iconService.addIcon(
      ...[PlusOutline, DeleteOutline],
    );
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.tituloOriginal = document.title;
    }
    this.inicializarFormulario();
    this.carregarDadosIniciais();
    this.escutarMudancaDeMateria();
    this.escutarMudancaDePlanejamento();
    this.prepararEdicaoSeNecessario();
  }

  ngOnDestroy(): void {
    this.pararIntervaloCronometro();
    this.restaurarTituloNavegador();
  }

  get cronometroFormatado(): string {
    const horas = Math.floor(this.cronometroSegundos / 3600);
    const minutos = Math.floor((this.cronometroSegundos % 3600) / 60);
    const segundos = this.cronometroSegundos % 60;
    return [horas, minutos, segundos].map(valor => String(valor).padStart(2, '0')).join(':');
  }

  iniciarCronometro(): void {
    if (this.cronometroRodando || !isPlatformBrowser(this.platformId)) return;

    if (this.cronometroSegundos === 0) {
      this.validateForm.patchValue({ horarioInicio: new Date() });
    }

    this.cronometroInicioMs = Date.now();
    this.cronometroRodando = true;
    this.atualizarCronometro();
    this.cronometroIntervalo = setInterval(() => this.atualizarCronometro(), 1000);
  }

  pausarCronometro(): void {
    if (!this.cronometroRodando) return;

    this.acumularTempoCronometro();
    this.cronometroRodando = false;
    this.pararIntervaloCronometro();
    this.atualizarTempoEstudado();
    this.atualizarTituloNavegador();
  }

  zerarCronometro(): void {
    this.pararIntervaloCronometro();
    this.cronometroRodando = false;
    this.cronometroInicioMs = null;
    this.cronometroAcumuladoMs = 0;
    this.cronometroSegundos = 0;
    this.validateForm.patchValue({ tempoEstudado: null });
    this.restaurarTituloNavegador();
  }

  inicializarFormulario(): void {
    this.validateForm = this.fb.group({
      materia: [null, [Validators.required]],
      assunto: [null, [Validators.required]],
      planejamento: [null],
      materialGuia: [null],
      tipoRegistro: [null, [Validators.required]],
      concluido: [false],
      questoesFeitas: [0],
      questoesAcertadas: [0],
      dataEstudo: [new Date(), [Validators.required]],
      horarioInicio: [new Date(), [Validators.required]],
      tempoEstudado: [null, [Validators.required]],
      observacoes: [null],
    });

    this.registroQuestoesForm = this.criarFormularioRegistroQuestoes();
  }

  private criarFormularioRegistroQuestoes(): FormGroup {
    return this.fb.group({
      descricao: [null],
      feitas: [0],
      acertadas: [0],
    });
  }

  carregarDadosIniciais(): void {
    // Busca as listas necessárias para preencher o formulário.
    this.materiaService.listarTodas(true).subscribe((materias) => {
      this.mesclarMaterias(materias);
      this.cdr.detectChanges();
    });
    this.planejamentoService.listarTodos().subscribe({
      next: (planejamentos) => {
        this.listaPlanejamentos = planejamentos;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao carregar planejamentos:', err);
      },
    });
    this.materialGuiaService.listarTodos().subscribe({
      next: (materiaisGuia) => {
        this.listaMateriaisGuia = materiaisGuia;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao carregar materiais-guia:', err),
    });
    this.registroService.listarTiposRegistro().subscribe({
      next: (tipos) => {
        this.listaTiposRegistro = tipos;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao carregar tipos de registro:', err);
      },
    });

  }

  get tituloFormulario(): string {
    return this.modoEdicao ? 'Editar registro de estudo' : 'Novo registro de estudo';
  }

  get textoBotaoSalvar(): string {
    return this.modoEdicao ? 'Salvar alterações' : 'Salvar Sessão de Estudo';
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.salvando = true;
      const formValue = this.validateForm.value;

      // Converte os IDs numéricos em objetos com a chave { id: X } para o Jackson/Spring aceitar
      const payload: Partial<Registro> = {
        ...formValue,
        materia: formValue.materia ? ({ id: formValue.materia } as any) : null,
        assunto: formValue.assunto ? ({ id: formValue.assunto } as any) : null,
        planejamento: formValue.planejamento ? ({ id: formValue.planejamento } as any) : null,
        materialGuia: formValue.materialGuia ? ({ id: formValue.materialGuia } as any) : null,
        tipoRegistro: formValue.tipoRegistro ? ({ id: formValue.tipoRegistro } as any) : null,
        // Formatação de datas e horas
        // `toISOString()` converte para UTC e pode mudar o dia no fuso de Brasília.
        // Como o backend espera um LocalDate, envie a data usando os campos locais.
        dataEstudo: formValue.dataEstudo ? this.formatarDataLocal(formValue.dataEstudo) : null,
        horarioInicio: formValue.horarioInicio
          ? formValue.horarioInicio.toTimeString().split(' ')[0]
          : null,
        tempoEstudado: formValue.tempoEstudado
          ? formValue.tempoEstudado.toTimeString().split(' ')[0]
          : null,
      };

      if (formValue.planejamento) {
        this.planejamentoService
          .buscarEtapaPorAssunto(formValue.planejamento, formValue.assunto, formValue.tipoRegistro)
          .subscribe({
            next: (etapa) => {
              if (etapa) {
                this.salvarRegistro(payload);
                return;
              }
              this.salvando = false;
              this.modal.confirm({
                nzTitle: 'Etapa não configurada',
                nzContent:
                  'Este assunto ainda não está configurado no planejamento. Deseja adicioná-lo à matéria existente e criar a etapa agora?',
                nzOkText: 'Adicionar assunto',
                nzCancelText: 'Salvar sem etapa',
                nzOnOk: () => {
                  this.salvando = true;
                  this.planejamentoService
                    .adicionarEtapaPorAssunto(
                      formValue.planejamento,
                      formValue.assunto,
                      formValue.tipoRegistro,
                    )
                    .subscribe({
                      next: () => this.salvarRegistro(payload),
                      error: () => {
                        this.salvando = false;
                        this.message.error(
                          'Não foi possível adicionar o assunto. A matéria precisa existir no planejamento.',
                        );
                      },
                    });
                },
                nzOnCancel: () => this.salvarRegistro(payload),
              });
            },
            error: () => {
              this.salvando = false;
              this.message.error('Não foi possível verificar a etapa do planejamento.');
            },
          });
        return;
      }

      this.salvarRegistro(payload);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.message.warning('Preencha os campos obrigatórios antes de salvar.');
    }
  }

  private salvarRegistro(payload: Partial<Registro>): void {
    const request$ =
      this.modoEdicao && this.registroEditandoId
        ? this.registroService.atualizar(this.registroEditandoId, payload)
        : this.registroService.criar(payload);

    request$.subscribe({
      next: (registroSalvo) => {
        this.salvando = false;
        this.zerarCronometro();
        this.message.success(
          this.modoEdicao ? 'Registro atualizado com sucesso.' : 'Registro salvo com sucesso.',
        );
        if (this.modoEdicao) {
          this.router.navigate(['/visualizar-registros']);
          return;
        }

        this.validateForm.reset({
          dataEstudo: new Date(),
          horarioInicio: new Date(),
          questoesFeitas: 0,
          questoesAcertadas: 0,
          concluido: false,
        });
        this.registrosQuestoes = [];
        this.registroQuestoesForm.reset({ feitas: 0, acertadas: 0 });
        this.questoesAbaAberta = false;
        this.carregarDadosIniciais();
      },
      error: (err) => {
        console.error('Erro ao salvar registro:', err);
        this.salvando = false;
        this.message.error(
          this.modoEdicao
            ? 'Não foi possível atualizar o registro.'
            : 'Não foi possível salvar o registro.',
        );
        this.cdr.detectChanges();
      },
    });
  }

  adicionarRegistroQuestoes(): void {
    const form = this.registroQuestoesForm;
    const lista = this.registrosQuestoes;
    const descricao = (form.value.descricao || '').trim();
    const feitas = Number(form.value.feitas || 0);
    const acertadas = Number(form.value.acertadas || 0);

    if (feitas <= 0 && acertadas <= 0 && !descricao) {
      this.message.warning('Informe ao menos uma anotação ou quantidade de questões.');
      return;
    }

    if (acertadas > feitas) {
      this.message.warning('Os acertos não podem ser maiores que as questões feitas.');
      return;
    }

    lista.push({ descricao, feitas, acertadas });
    form.reset({ feitas: 0, acertadas: 0 });
    this.atualizarTotaisQuestoes();
    this.cdr.detectChanges();
  }

  removerRegistroQuestoes(index: number): void {
    this.registrosQuestoes.splice(index, 1);
    this.atualizarTotaisQuestoes();
    this.cdr.detectChanges();
  }

  totalQuestoes(campo: 'feitas' | 'acertadas'): number {
    return this.registrosQuestoes.reduce((total, registro) => total + (registro[campo] || 0), 0);
  }

  private atualizarTotaisQuestoes(): void {
    this.validateForm.patchValue({
      questoesFeitas: this.totalQuestoes('feitas'),
      questoesAcertadas: this.totalQuestoes('acertadas'),
    });
  }

  calcularAproveitamento(feitas: number, acertadas: number): string {
    if (!feitas || feitas === 0) return '0%';
    const percentual = (acertadas / feitas) * 100;
    return `${percentual.toFixed(0)}%`;
  }

  escutarMudancaDeMateria(): void {
    this.validateForm.get('materia')?.valueChanges.subscribe((materiaId: number | null) => {
      const campoAssunto = this.validateForm.get('assunto');

      // Reseta os assuntos quando troca a matéria
      campoAssunto?.reset();

      if (materiaId) {
        // 🔥 LIBERA OS CAMPOS IMEDIATAMENTE
        campoAssunto?.enable();

        this.listaAssuntos = [];
        this.cdr.detectChanges();

        this.carregarAssuntosDaMateria(materiaId);
      } else {
        // Se não houver matéria selecionada, bloqueia
        this.listaAssuntos = [];
        campoAssunto?.disable();
        this.cdr.detectChanges();
      }
    });
  }

  private escutarMudancaDePlanejamento(): void {
    this.validateForm.get('planejamento')?.valueChanges.subscribe((planejamentoId: number | null) => {
      if (!planejamentoId) return;

      this.planejamentoService.listarMaterias(planejamentoId).subscribe({
        next: (materiasDoPlanejamento) => {
          this.mesclarMaterias(materiasDoPlanejamento.map((item) => item.materia));
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao carregar matérias do planejamento:', err);
        },
      });
    });
  }

  private mesclarMaterias(materias: Materia[]): void {
    const materiasPorId = new Map<number, Materia>();

    [...this.listaMaterias, ...materias].forEach((materia) => {
      if (materia.id != null) {
        materiasPorId.set(materia.id, materia);
      }
    });

    this.listaMaterias = Array.from(materiasPorId.values()).sort((a, b) =>
      a.nome.localeCompare(b.nome, 'pt-BR'),
    );
  }

  private prepararEdicaoSeNecessario(): void {
    const navigationState = this.router.getCurrentNavigation()?.extras.state;
    const browserState = isPlatformBrowser(this.platformId) ? history.state : {};
    const registro = (navigationState?.['registroParaEditar'] ??
      browserState?.registroParaEditar) as Registro | undefined;

    if (!registro?.id) return;

    this.modoEdicao = true;
    this.registroEditandoId = registro.id;

    this.validateForm.patchValue(
      {
        materia: registro.materia?.id ?? null,
        planejamento: registro.planejamento?.id ?? null,
        materialGuia: registro.materialGuia?.id ?? null,
        tipoRegistro: registro.tipoRegistro?.id ?? null,
        concluido: registro.concluido ?? false,
        questoesFeitas: registro.questoesFeitas ?? 0,
        questoesAcertadas: registro.questoesAcertadas ?? 0,
        dataEstudo: this.dataParaFormulario(registro.dataEstudo),
        horarioInicio: this.horaParaFormulario(registro.horarioInicio),
        tempoEstudado: this.horaParaFormulario(registro.tempoEstudado),
        observacoes: registro.observacoes ?? null,
      },
      { emitEvent: false },
    );

    if (registro.materia?.id) {
      this.validateForm.get('assunto')?.enable();
      this.carregarAssuntosDaMateria(registro.materia.id, () => {
        this.validateForm.patchValue(
          {
            assunto: registro.assunto?.id ?? null,
          },
          { emitEvent: false },
        );
        this.cdr.detectChanges();
      });
    }
  }

  private carregarAssuntosDaMateria(materiaId: number, aoCarregar?: () => void): void {
    this.registroService.listarAssuntosPorMateria(materiaId).subscribe({
      next: (assuntos) => {
        this.listaAssuntos = assuntos;
        aoCarregar?.();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao buscar assuntos:', err);
        this.listaAssuntos = [];
        this.cdr.detectChanges();
      },
    });
  }

  private dataParaFormulario(data?: string): Date | null {
    if (!data) return null;

    const [ano, mes, dia] = data.substring(0, 10).split('-').map(Number);
    return new Date(ano, mes - 1, dia);
  }

  private formatarDataLocal(data: Date): string {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  private horaParaFormulario(hora?: string): Date | null {
    if (!hora) return null;

    const [horas = 0, minutos = 0, segundos = 0] = hora.split(':').map(Number);
    const data = new Date();
    data.setHours(horas, minutos, segundos, 0);
    return data;
  }

  private atualizarCronometro(): void {
    const tempoAtualMs = this.cronometroAcumuladoMs
      + (this.cronometroInicioMs === null ? 0 : Date.now() - this.cronometroInicioMs);
    this.cronometroSegundos = Math.floor(tempoAtualMs / 1000);
    this.atualizarTempoEstudado();
    this.atualizarTituloNavegador();
    this.cdr.detectChanges();
  }

  private acumularTempoCronometro(): void {
    if (this.cronometroInicioMs === null) return;
    this.cronometroAcumuladoMs += Date.now() - this.cronometroInicioMs;
    this.cronometroInicioMs = null;
    this.cronometroSegundos = Math.floor(this.cronometroAcumuladoMs / 1000);
  }

  private atualizarTempoEstudado(): void {
    const horas = Math.floor(this.cronometroSegundos / 3600);
    const minutos = Math.floor((this.cronometroSegundos % 3600) / 60);
    const segundos = this.cronometroSegundos % 60;
    const tempo = new Date();
    tempo.setHours(horas, minutos, segundos, 0);
    this.validateForm.patchValue({ tempoEstudado: tempo }, { emitEvent: false });
  }

  private atualizarTituloNavegador(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const estado = this.cronometroRodando ? '▶' : '⏸';
    document.title = `${estado} ${this.cronometroFormatado} · ${this.tituloOriginal}`;
  }

  private restaurarTituloNavegador(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.title = this.tituloOriginal;
    }
  }

  private pararIntervaloCronometro(): void {
    if (this.cronometroIntervalo !== null) {
      clearInterval(this.cronometroIntervalo);
      this.cronometroIntervalo = null;
    }
  }

  // Adicione este método dentro da classe RegistroListaComponent
  cadastrarAssuntoRapido(inputElement: HTMLInputElement): void {
    const nomeAssunto = inputElement.value.trim();
    const materiaFormValue = this.validateForm.get('materia')?.value;

    if (!nomeAssunto) {
      return; // Se estiver em branco, ignora
    }

    // Garante que pegamos o ID correto da matéria
    const materiaId =
      materiaFormValue && typeof materiaFormValue === 'object'
        ? materiaFormValue.id
        : materiaFormValue;

    if (!materiaId) {
      console.warn('Selecione uma matéria antes de cadastrar um assunto.');
      this.message.warning('Selecione uma matéria antes de criar o assunto.');
      return;
    }

    // DTO esperado pelo Spring Boot (nome + materiaId)
    const novoAssuntoPayload = {
      nome: nomeAssunto,
      materiaId: materiaId,
    };

    this.registroService.criarAssunto(novoAssuntoPayload).subscribe({
      next: (assuntoSalvo) => {
        // 1. Adiciona o novo assunto retornado do Java na lista da tela
        this.listaAssuntos = [...this.listaAssuntos, assuntoSalvo];

        // 2. 🔥 CORREÇÃO: Passamos apenas o ID 'assuntoSalvo.id' para bater com o [nzValue]="a.id" do HTML
        this.validateForm.get('assunto')?.setValue(assuntoSalvo.id);

        // 3. Limpa o input de texto do dropdown
        inputElement.value = '';

        // 4. Força o Angular a renderizar a alteração e selecionar o item
        this.message.success('Assunto criado com sucesso.');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao cadastrar assunto rápido:', err);
        this.message.error('Não foi possível criar o assunto.');
      },
    });
  }

  cadastrarMateriaRapida(inputElement: HTMLInputElement): void {
    const nomeMateria = inputElement.value.trim();

    if (!nomeMateria) {
      return; // Se estiver em branco, não faz nada
    }

    this.materiaService.criar({ nome: nomeMateria }).subscribe({
      next: (materiaSalva) => {
        // 1. Adiciona a nova matéria retornada do Java na lista da tela
        this.listaMaterias = [...this.listaMaterias, materiaSalva];

        // 2. Já seleciona ela automaticamente no formulário usando o ID
        this.validateForm.get('materia')?.setValue(materiaSalva.id);

        // 3. Limpa o campo de texto do dropdown
        inputElement.value = '';

        // 4. Força o Angular a renderizar a alteração na tela
        this.message.success('Matéria criada com sucesso.');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao cadastrar matéria rápida:', err);
        this.message.error('Não foi possível criar a matéria.');
      },
    });
  }

  cadastrarMaterialGuiaRapido(inputElement: HTMLInputElement): void {
    const nomeMaterialGuia = inputElement.value.trim();

    if (!nomeMaterialGuia) {
      return;
    }

    this.materialGuiaService.criar({ nome: nomeMaterialGuia }).subscribe({
      next: (materialGuiaSalvo) => {
        this.listaMateriaisGuia = [...this.listaMateriaisGuia, materialGuiaSalvo];
        this.validateForm.get('materialGuia')?.setValue(materialGuiaSalvo.id);
        inputElement.value = '';
        this.message.success('Material-guia criado com sucesso.');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao cadastrar material-guia rápido:', err);
        this.message.error('Não foi possível criar o material-guia.');
      },
    });
  }
}
