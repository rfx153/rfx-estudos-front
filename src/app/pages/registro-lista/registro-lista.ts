import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService, Registro, Assunto, MaterialTipo } from '../../services/registro.service';
import { MateriaService, Materia } from '../../services/materia.service';

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
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private iconService = inject(NzIconService);

  listaRegistros: Registro[] = [];
  listaMaterias: Materia[] = [];
  
  // Listas fictícias iniciais (ajuste conforme criar os services delas depois)
  listaAssuntos: Assunto[] = [] 
listaTiposMaterial: MaterialTipo[] = [];

  carregando = true;
  salvando = false;
  validateForm!: FormGroup;

  constructor() {
    this.iconService.addIcon(...[PlusOutline, CalendarOutline, ClockCircleOutline, InfoCircleOutline]);
  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.carregarDadosIniciais();
    this.escutarMudancaDeMateria();
  }

  inicializarFormulario(): void {
    this.validateForm = this.fb.group({
      materia: [null, [Validators.required]],
      assunto: [null, [Validators.required]],
      materialTipo: [null, [Validators.required]],
      materialNome: [null],
      puntoParada: [null],
      questoesFeitas: [0],
      questoesAcertadas: [0],
      revisaoAssunto: [null],
      revisaoComplemento: [null],
      dataEstudo: [new Date(), [Validators.required]],
      tempoEstudado: [null, [Validators.required]],
      linkDocumento: [null],
      observacoes: [null]
    });
  }

  carregarDadosIniciais(): void {
    this.carregando = true;
    
    // Busca os registros e as matérias em paralelo
    this.materiaService.listarTodas().subscribe(materias => {
      this.listaMaterias = materias;
      this.cdr.detectChanges();
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

    this.registroService.listarTodos().subscribe({
      next: (dados) => {
        this.listaRegistros = [...dados];
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao buscar registros:', err);
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.salvando = true;
      const formValue = this.validateForm.value;

      // Tratamento de formatação de datas e horas antes de enviar para o Spring Boot
      const payload: Partial<Registro> = {
        ...formValue,
        dataEstudo: formValue.dataEstudo ? formValue.dataEstudo.toISOString().split('T')[0] : null,
        tempoEstudado: formValue.tempoEstudado ? formValue.tempoEstudado.toTimeString().split(' ')[0] : null
      };

      this.registroService.criar(payload).subscribe({
        next: () => {
          this.salvando = false;
          this.validateForm.reset({ dataEstudo: new Date(), questoesFeitas: 0, questoesAcertadas: 0 });
          this.carregarDadosIniciais();
        },
        error: (err) => {
          console.error('Erro ao salvar registro:', err);
          this.salvando = false;
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
    }
  }

  calcularAproveitamento(feitas: number, acertadas: number): string {
    if (!feitas || feitas === 0) return '0%';
    const percentual = (acertadas / feitas) * 100;
    return `${percentual.toFixed(0)}%`;
  }
  

  escutarMudancaDeMateria(): void {
  this.validateForm.get('materia')?.valueChanges.subscribe((materiaSelecionada: Materia | null) => {
    const campoAssunto = this.validateForm.get('assunto');
    
    // Reseta o valor do assunto sempre que mudar a matéria
    campoAssunto?.reset();

    if (materiaSelecionada && materiaSelecionada.id) {
      // Busca no Java os assuntos daquela matéria específica
      this.registroService.listarAssuntosPorMateria(materiaSelecionada.id).subscribe({
        next: (assuntos) => {
          this.listaAssuntos = assuntos;
          campoAssunto?.enable(); // 🔥 Libera o campo para seleção
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro ao buscar assuntos:', err);
          this.listaAssuntos = [];
          campoAssunto?.disable();
          this.cdr.detectChanges();
        }
      });
    } else {
      // Se limpar a matéria, limpa os assuntos e bloqueia o campo
      this.listaAssuntos = [];
      campoAssunto?.disable();
      this.cdr.detectChanges();
    }
  });
 
  

  
}
// Adicione este método dentro da classe RegistroListaComponent
cadastrarAssuntoRapido(inputElement: HTMLInputElement): void {
  const nomeAssunto = inputElement.value.trim();
  const materiaSelecionada = this.validateForm.get('materia')?.value as Materia;

  if (!nomeAssunto) {
    return; // Se estiver em branco, não faz nada
  }

  if (!materiaSelecionada || !materiaSelecionada.id) {
    console.warn('Selecione uma matéria antes de cadastrar um assunto.');
    return;
  }

  // Objeto preparado para o Spring Boot receber (Nome + FK da matéria)
  const novoAssuntoPayload = {
    nome: nomeAssunto,
    materiaId: materiaSelecionada.id
  };

  // Dispara o salvamento no banco Neon
  this.registroService.criarAssunto(novoAssuntoPayload).subscribe({
    next: (assuntoSalvo) => { // 🔥 Corrigido de -> para =>
      // 1. Adiciona o novo assunto vindo do Java na lista da tela
      this.listaAssuntos = [...this.listaAssuntos, assuntoSalvo];
      
      // 2. Já deixa ele selecionado automaticamente no formulário
      this.validateForm.get('assunto')?.setValue(assuntoSalvo);
      
      // 3. Limpa o input do dropdown
      inputElement.value = '';
      
      // 4. Avisa o Angular para atualizar os elementos visuais
      this.cdr.detectChanges();
    },
    error: (err) => { // 🔥 Corrigido de -> para =>
      console.error('Erro ao cadastrar assunto rápido:', err);
    }
  });
}

}