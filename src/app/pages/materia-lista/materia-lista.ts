import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MateriaService, Materia } from '../../services/materia.service';
import { Categoria, CategoriaService } from '../../services/categoria.service';
import { Assunto, RegistroService } from '../../services/registro.service';

// Módulos do NG-ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NzInputModule } from 'ng-zorro-antd/input'; 
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageService } from 'ng-zorro-antd/message';

// Importações de Ícone do Zorro
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon'; // 🔥 Injetamos o NzIconService aqui
import { BookOutline, TagsOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-materia-lista',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule, 
    NzTableModule, 
    NzTagModule, 
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzIconModule // Mantemos o módulo aqui
  ], 
  templateUrl: './materia-lista.html',
  styleUrl: './materia-lista.css'
})
export class MateriaListaComponent implements OnInit {
  
  private materiaService = inject(MateriaService);
  private categoriaService = inject(CategoriaService);
  private registroService = inject(RegistroService);
  private fb = inject(FormBuilder); 
  private iconService = inject(NzIconService); // 🔥 Injetamos o serviço de ícones aqui
  private message = inject(NzMessageService);
 private cdr = inject(ChangeDetectorRef); // 🔥 Injetamos o detector de mudanças aqui
  listaMaterias: Materia[] = [];
  listaCategorias: Categoria[] = [];
  categoriaSelecionadaId: number | null = null;
  materiaSelecionadaId: number | null = null;
  assuntosDaMateria: Assunto[] = [];
  assuntosCarregando = false;
  private assuntosCache = new Map<number, Assunto[]>();
  assuntoEditandoId: number | null = null;
  nomeAssuntoEdicao = '';
  carregando = true;
  salvando = false;
  editandoId: number | null = null;
  formularioEdicao = { nome: '', categorias: [] as number[] };
  validateForm!: FormGroup;

  constructor() {
    // 🔥 FORÇA O REGISTRO DOS ÍCONES DIRETO NO MOTOR DO NG-ZORRO
    this.iconService.addIcon(...[BookOutline, TagsOutline]);
  }

  ngOnInit(): void {
    this.obterMaterias();
    
    this.validateForm = this.fb.group({
      nome: [null, [Validators.required]],
      categorias: [[], [Validators.required]]
    });
    this.obterCategorias();
  }

  obterCategorias(): void {
    this.categoriaService.listarTodas().subscribe({
      next: (categorias) => this.listaCategorias = categorias,
      error: (erro) => console.error('Erro ao buscar categorias:', erro)
    });
  }

  selecionarCategoria(id: number | null): void {
    this.categoriaSelecionadaId = id;
  }

  selecionarMateria(materia: Materia): void {
    if (!materia.id) return;
    const materiaId = materia.id;
    if (this.materiaSelecionadaId === materia.id) {
      this.materiaSelecionadaId = null;
      this.assuntosDaMateria = [];
      return;
    }
    this.materiaSelecionadaId = materiaId;

    const assuntosEmCache = this.assuntosCache.get(materiaId);
    if (assuntosEmCache) {
      this.assuntosDaMateria = assuntosEmCache;
      this.assuntosCarregando = false;
      this.cdr.detectChanges();
      return;
    }

    this.assuntosDaMateria = [];
    this.assuntosCarregando = true;
    this.registroService.listarAssuntosPorMateria(materiaId).subscribe({
      next: assuntos => {
        // Ignora a resposta se o usuário já selecionou outra matéria.
        this.assuntosCache.set(materiaId, assuntos);
        if (this.materiaSelecionadaId === materiaId) {
          this.assuntosDaMateria = assuntos;
          this.assuntosCarregando = false;
          this.cdr.detectChanges();
        }
      },
      error: erro => {
        console.error('Erro ao buscar assuntos:', erro);
        if (this.materiaSelecionadaId === materiaId) {
          this.assuntosCarregando = false;
          this.cdr.detectChanges();
        }
      }
    });
  }

  iniciarEdicaoAssunto(assunto: Assunto): void {
    this.assuntoEditandoId = assunto.id;
    this.nomeAssuntoEdicao = assunto.nome;
  }

  cancelarEdicaoAssunto(): void {
    this.assuntoEditandoId = null;
    this.nomeAssuntoEdicao = '';
  }

  salvarEdicaoAssunto(assunto: Assunto): void {
    const nome = this.nomeAssuntoEdicao.trim();
    if (!nome) {
      this.message.warning('Informe o nome do assunto antes de salvar.');
      return;
    }
    this.registroService.atualizarAssunto(assunto.id, nome).subscribe({
      next: atualizado => {
        this.assuntosDaMateria = this.assuntosDaMateria.map(item =>
          item.id === atualizado.id ? atualizado : item
        );
        if (this.materiaSelecionadaId !== null) {
          this.assuntosCache.set(this.materiaSelecionadaId, this.assuntosDaMateria);
        }
        this.message.success('Assunto editado com sucesso.');
        this.cancelarEdicaoAssunto();
      },
      error: erro => {
        console.error('Erro ao atualizar assunto:', erro);
        this.message.error('Não foi possível editar o assunto.');
      }
    });
  }

  trackByAssuntoId(_: number, assunto: Assunto): number {
    return assunto.id;
  }

  materiasExibidas(): Materia[] {
    if (this.categoriaSelecionadaId === null) return this.listaMaterias;

    return this.listaMaterias.filter(materia =>
      materia.categorias?.some(categoria => categoria.id === this.categoriaSelecionadaId)
    );
  }

  obterMaterias(): void {
    this.carregando = true;
    
    this.materiaService.listarTodas().subscribe({
      next: (dados) => {
        console.log('Dados que chegaram do Java:', dados); 
        this.listaMaterias = [...dados]; 
        this.carregando = false;
        
        // 🔥 FORÇA O ANGULAR A REDESENHAR A TABELA IMEDIATAMENTE
        this.cdr.detectChanges(); 
      },
      error: (erro) => {
        console.error('Erro ao buscar matérias no front:', erro);
        this.carregando = false;
        this.cdr.detectChanges(); // Força atualização mesmo no erro para sumir o loading
      }
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.salvando = true;
      const valores = this.validateForm.value;
      const novaMateria: Materia = {
        nome: valores.nome,
        categorias: this.categoriasPorIds(valores.categorias ?? [])
      };

      this.materiaService.criar(novaMateria).subscribe({
        next: () => {
          this.salvando = false;
          this.validateForm.reset(); 
          this.message.success('Matéria salva com sucesso.');
          this.obterMaterias();     
        },
        error: (erro) => {
          console.error('Erro ao salvar matéria:', erro);
          this.salvando = false;
          this.message.error('Não foi possível salvar a matéria.');
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

  iniciarEdicao(materia: Materia): void {
    if (!materia.id) return;
    this.editandoId = materia.id;
    this.formularioEdicao = {
      nome: materia.nome,
      categorias: materia.categorias?.map(categoria => categoria.id) ?? []
    };
  }

  cancelarEdicao(): void {
    this.editandoId = null;
  }

  salvarEdicao(materia: Materia): void {
    if (!materia.id || !this.formularioEdicao.nome.trim()) {
      this.message.warning('Informe o nome da matéria antes de salvar.');
      return;
    }

    this.salvando = true;
    this.materiaService.atualizar(materia.id, {
      ...materia,
      nome: this.formularioEdicao.nome.trim(),
      categorias: this.categoriasPorIds(this.formularioEdicao.categorias)
    }).subscribe({
      next: (atualizada) => {
        const indice = this.listaMaterias.findIndex(item => item.id === materia.id);
        if (indice >= 0) {
          this.listaMaterias = this.listaMaterias.map((item, i) =>
            i === indice ? atualizada : item
          );
        }
        this.editandoId = null;
        this.salvando = false;
        this.message.success('Matéria editada com sucesso.');
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao atualizar matéria:', erro);
        this.salvando = false;
        this.message.error('Não foi possível editar a matéria.');
        this.cdr.detectChanges();
      }
    });
  }

  converterCategorias(categorias: Categoria[] = []): string[] {
    return categorias.map(categoria => categoria.nome);
  }

  private categoriasPorIds(ids: number[]): Categoria[] {
    return ids
      .map(id => this.listaCategorias.find(categoria => categoria.id === id))
      .filter((categoria): categoria is Categoria => !!categoria);
  }
}
