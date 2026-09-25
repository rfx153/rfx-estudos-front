import { Component, OnInit, inject, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService, Registro, Assunto, MaterialTipo, TipoRegistro } from '../../services/registro.service';
import { MateriaService, Materia } from '../../services/materia.service';
import { PlanejamentoService, Planejamento } from '../../services/planejamento.service';

// Módulos do NG-ZORRO necessários para o formulário denso de registros
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { PlusOutline, CalendarOutline, ClockCircleOutline, InfoCircleOutline } from '@ant-design/icons-angular/icons';
import { NzCardModule } from 'ng-zorro-antd/card';       // <-- INSTALE ESTE IMPORT
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'; // <-- INSTALE ESTE IMPORT
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-registro-lista',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzInputNumberModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule,     
    NzTooltipModule
  ],
  templateUrl: 'registro-lista.html',
  styleUrl: 'registro-lista.css',
})
export class RegistroListaComponent implements OnInit {
  
  private registroService = inject(RegistroService);
  private materiaService = inject(MateriaService);
  private planejamentoService = inject(PlanejamentoService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private iconService = inject(NzIconService);
  private message = inject(NzMessageService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  listaRegistros: Registro[] = [];
  totalRegistros = 0;
  listaMaterias: Materia[] = [];
  listaPlanejamentos: Planejamento[] = [];
  
  // Listas fictícias iniciais (ajuste conforme criar os services delas depois)
  listaAssuntos: Assunto[] = [] 
listaTiposMaterial: MaterialTipo[] = [];
listaTiposRegistro: TipoRegistro[] = [];

  carregando = true;
  salvando = false;
  revisaoAberta = false;
  etapasQraqrMarcadas = new Set<string>();
  modoEdicao = false;
  registroEditandoId: number | null = null;
  validateForm!: FormGroup;

  constructor() {
    this.iconService.addIcon(...[PlusOutline, CalendarOutline, ClockCircleOutline, InfoCircleOutline]);
  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.carregarDadosIniciais();
    this.escutarMudancaDeMateria();
    this.prepararEdicaoSeNecessario();
  }

  inicializarFormulario(): void {
    this.validateForm = this.fb.group({
      materia: [null, [Validators.required]],
      assunto: [null, [Validators.required]],
      planejamento: [null],
      tipoRegistro: [null, [Validators.required]],
      materialTipo: [null, [Validators.required]],
      materialNome: [null],
      puntoParada: [null],
      questoesFeitas: [0],
      questoesAcertadas: [0],
      revisaoAssunto: [null],
      revisaoComplemento: [null],
      questoesRevisaoFeitas: [0],
      questoesRevisaoAcertadas: [0],
      dataEstudo: [new Date(), [Validators.required]],
      tempoEstudado: [null, [Validators.required]],
      linkDocumento: [null],
      observacoes: [null]
    });
  }

  alternarEtapaQraqr(etapa: string): void {
    if (this.etapasQraqrMarcadas.has(etapa)) {
      this.etapasQraqrMarcadas.delete(etapa);
    } else {
      this.etapasQraqrMarcadas.add(etapa);
    }
  }

  etapaQraqrMarcada(etapa: string): boolean {
    return this.etapasQraqrMarcadas.has(etapa);
  }

  carregarDadosIniciais(): void {
    this.carregando = true;
    
    // Busca os registros e as matérias em paralelo
    this.materiaService.listarTodas().subscribe(materias => {
      this.listaMaterias = materias;
      this.cdr.detectChanges();
    });
    this.planejamentoService.listarTodos().subscribe({
      next: planejamentos => {
        this.listaPlanejamentos = planejamentos;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao carregar planejamentos:', err);
      }
    });
    //listar os tipos de materias
    this.registroService.listarTiposMaterial().subscribe({
    next: (tipos) => {
      this.listaTiposMaterial = tipos;
      this.cdr.detectChanges(); // Atualiza a tela com os dados novos do banco
    },
    error: (err) => {
      console.error('Erro ao carregar tipos de material:', err);
    }
    });
    this.registroService.listarTiposRegistro().subscribe({
    next: (tipos) => {
      this.listaTiposRegistro = tipos;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Erro ao carregar tipos de registro:', err);
    }
    });

    this.registroService.contarTodos().subscribe({
      next: (total) => {
        this.totalRegistros = total;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao contar registros:', err);
        this.carregando = false;
        this.cdr.detectChanges();
      }
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
      materia: formValue.materia ? { id: formValue.materia } as any : null,
      assunto: formValue.assunto ? { id: formValue.assunto } as any : null,
      planejamento: formValue.planejamento ? { id: formValue.planejamento } as any : null,
      tipoRegistro: formValue.tipoRegistro ? { id: formValue.tipoRegistro } as any : null,
      revisaoAssunto: formValue.revisaoAssunto ? { id: formValue.revisaoAssunto } as any : null,
      // Se materialTipo também for apenas ID no formulário, converta aqui também:
      materialTipo: formValue.materialTipo && typeof formValue.materialTipo !== 'object' 
        ? { id: formValue.materialTipo } as any 
        : formValue.materialTipo,
      
      // Formatação de datas e horas
      dataEstudo: formValue.dataEstudo ? formValue.dataEstudo.toISOString().split('T')[0] : null,
      tempoEstudado: formValue.tempoEstudado ? formValue.tempoEstudado.toTimeString().split(' ')[0] : null
    };

    const request$ = this.modoEdicao && this.registroEditandoId
      ? this.registroService.atualizar(this.registroEditandoId, payload)
      : this.registroService.criar(payload);

    request$.subscribe({
      next: () => {
        this.salvando = false;
        this.message.success(this.modoEdicao ? 'Registro atualizado com sucesso.' : 'Registro salvo com sucesso.');
        if (this.modoEdicao) {
          this.router.navigate(['/visualizar-registros']);
          return;
        }

        this.validateForm.reset({
          dataEstudo: new Date(),
          questoesFeitas: 0,
          questoesAcertadas: 0,
          questoesRevisaoFeitas: 0,
          questoesRevisaoAcertadas: 0
        });
        this.revisaoAberta = false;
        this.carregarDadosIniciais();
      },
      error: (err) => {
        console.error('Erro ao salvar registro:', err);
        this.salvando = false;
        this.message.error(this.modoEdicao ? 'Não foi possível atualizar o registro.' : 'Não foi possível salvar o registro.');
        this.cdr.detectChanges();
      }
    });
  } else {
    Object.values(this.validateForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
    this.message.warning('Preencha os campos obrigatórios antes de salvar.');
  }
}

  calcularAproveitamento(feitas: number, acertadas: number): string {
    if (!feitas || feitas === 0) return '0%';
    const percentual = (acertadas / feitas) * 100;
    return `${percentual.toFixed(0)}%`;
  }
  

 escutarMudancaDeMateria(): void {
  this.validateForm.get('materia')?.valueChanges.subscribe((materiaId: number | null) => {
    const campoAssunto = this.validateForm.get('assunto');
    const campoRevisao = this.validateForm.get('revisaoAssunto');

    // Reseta os assuntos quando troca a matéria
    campoAssunto?.reset();
    campoRevisao?.reset();

    if (materiaId) {
      // 🔥 LIBERA OS CAMPOS IMEDIATAMENTE
      campoAssunto?.enable();
      campoRevisao?.enable();
      
      this.listaAssuntos = [];
      this.cdr.detectChanges();

      this.carregarAssuntosDaMateria(materiaId);
    } else {
      // Se não houver matéria selecionada, bloqueia
      this.listaAssuntos = [];
      campoAssunto?.disable();
      campoRevisao?.disable();
      this.cdr.detectChanges();
    }
  });
}

private prepararEdicaoSeNecessario(): void {
  const navigationState = this.router.getCurrentNavigation()?.extras.state;
  const browserState = isPlatformBrowser(this.platformId) ? history.state : {};
  const registro = (navigationState?.['registroParaEditar'] ?? browserState?.registroParaEditar) as Registro | undefined;

  if (!registro?.id) return;

  this.modoEdicao = true;
  this.registroEditandoId = registro.id;
  this.revisaoAberta = !!registro.revisaoAssunto;

  this.validateForm.patchValue({
    materia: registro.materia?.id ?? null,
    planejamento: registro.planejamento?.id ?? null,
    tipoRegistro: registro.tipoRegistro?.id ?? null,
    materialTipo: registro.materialTipo?.id ?? null,
    materialNome: registro.materialNome ?? null,
    puntoParada: registro.puntoParada ?? null,
    questoesFeitas: registro.questoesFeitas ?? 0,
    questoesAcertadas: registro.questoesAcertadas ?? 0,
    revisaoComplemento: registro.revisaoComplemento ?? null,
    questoesRevisaoFeitas: registro.questoesRevisaoFeitas ?? 0,
    questoesRevisaoAcertadas: registro.questoesRevisaoAcertadas ?? 0,
    dataEstudo: this.dataParaFormulario(registro.dataEstudo),
    tempoEstudado: this.horaParaFormulario(registro.tempoEstudado),
    linkDocumento: registro.linkDocumento ?? null,
    observacoes: registro.observacoes ?? null
  }, { emitEvent: false });

  if (registro.materia?.id) {
    this.validateForm.get('assunto')?.enable();
    this.validateForm.get('revisaoAssunto')?.enable();
    this.carregarAssuntosDaMateria(registro.materia.id, () => {
      this.validateForm.patchValue({
        assunto: registro.assunto?.id ?? null,
        revisaoAssunto: registro.revisaoAssunto?.id ?? null
      }, { emitEvent: false });
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
    }
  });
}

private dataParaFormulario(data?: string): Date | null {
  if (!data) return null;

  const [ano, mes, dia] = data.substring(0, 10).split('-').map(Number);
  return new Date(ano, mes - 1, dia);
}

private horaParaFormulario(hora?: string): Date | null {
  if (!hora) return null;

  const [horas = 0, minutos = 0, segundos = 0] = hora.split(':').map(Number);
  const data = new Date();
  data.setHours(horas, minutos, segundos, 0);
  return data;
}
 
// Adicione este método dentro da classe RegistroListaComponent
cadastrarAssuntoRapido(inputElement: HTMLInputElement): void {
  const nomeAssunto = inputElement.value.trim();
  const materiaFormValue = this.validateForm.get('materia')?.value;

  if (!nomeAssunto) {
    return; // Se estiver em branco, ignora
  }

  // Garante que pegamos o ID correto da matéria
  const materiaId = materiaFormValue && typeof materiaFormValue === 'object'
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
    materiaId: materiaId
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
    }
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
    }
  });
}

cadastrarPlanejamentoRapido(inputElement: HTMLInputElement): void {
  const nomePlanejamento = inputElement.value.trim();

  if (!nomePlanejamento) {
    return;
  }

  this.planejamentoService.criar({ nome: nomePlanejamento }).subscribe({
    next: (planejamentoSalvo) => {
      this.listaPlanejamentos = [...this.listaPlanejamentos, planejamentoSalvo];
      this.validateForm.get('planejamento')?.setValue(planejamentoSalvo.id);
      inputElement.value = '';
      this.message.success('Planejamento criado com sucesso.');
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Erro ao cadastrar planejamento rápido:', err);
      this.message.error('Não foi possível criar o planejamento.');
    }
  });
}

}
