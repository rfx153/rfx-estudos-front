import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MateriaService, Materia } from '../../services/materia.service';
import { Categoria, CategoriaService } from '../../services/categoria.service';

// Módulos do NG-ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NzInputModule } from 'ng-zorro-antd/input'; 
import { NzSelectModule } from 'ng-zorro-antd/select';

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
  private fb = inject(FormBuilder); 
  private iconService = inject(NzIconService); // 🔥 Injetamos o serviço de ícones aqui
 private cdr = inject(ChangeDetectorRef); // 🔥 Injetamos o detector de mudanças aqui
  listaMaterias: Materia[] = [];
  listaCategorias: Categoria[] = [];
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
          this.obterMaterias();     
        },
        error: (erro) => {
          console.error('Erro ao salvar matéria:', erro);
          this.salvando = false;
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
    if (!materia.id || !this.formularioEdicao.nome.trim()) return;

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
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao atualizar matéria:', erro);
        this.salvando = false;
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
