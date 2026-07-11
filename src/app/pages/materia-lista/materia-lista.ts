import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MateriaService, Materia } from '../../services/materia.service';

// Módulos do NG-ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NzInputModule } from 'ng-zorro-antd/input'; 

// Importações de Ícone do Zorro
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon'; // 🔥 Injetamos o NzIconService aqui
import { BookOutline, TagsOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-materia-lista',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    NzTableModule, 
    NzTagModule, 
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzIconModule // Mantemos o módulo aqui
  ], 
  templateUrl: './materia-lista.html',
  styleUrl: './materia-lista.css'
})
export class MateriaListaComponent implements OnInit {
  
  private materiaService = inject(MateriaService);
  private fb = inject(FormBuilder); 
  private iconService = inject(NzIconService); // 🔥 Injetamos o serviço de ícones aqui
 private cdr = inject(ChangeDetectorRef); // 🔥 Injetamos o detector de mudanças aqui
  listaMaterias: Materia[] = [];
  carregando = true;
  salvando = false;
  validateForm!: FormGroup;

  constructor() {
    // 🔥 FORÇA O REGISTRO DOS ÍCONES DIRETO NO MOTOR DO NG-ZORRO
    this.iconService.addIcon(...[BookOutline, TagsOutline]);
  }

  ngOnInit(): void {
    this.obterMaterias();
    
    this.validateForm = this.fb.group({
      nome: [null, [Validators.required]],
      categorias: [null, [Validators.required]]
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
      const novaMateria: Materia = this.validateForm.value;

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

  converterCategorias(categorias: string): string[] {
    if (!categorias) return [];
    return categorias.split(',').map(c => c.trim());
  }
}