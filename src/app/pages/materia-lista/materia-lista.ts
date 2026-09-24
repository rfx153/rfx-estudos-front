import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MateriaService, Materia } from '../../services/materia.service';
import { Categoria, CategoriaService } from '../../services/categoria.service';
import { Assunto, RegistroService, TipoRegistro } from '../../services/registro.service';
import { Planejamento, PlanejamentoService } from '../../services/planejamento.service';
import { TipoRegistroService } from '../../services/tipo-registro.service';

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
  private planejamentoService = inject(PlanejamentoService);
  private tipoRegistroService = inject(TipoRegistroService);
  private fb = inject(FormBuilder); 
  private iconService = inject(NzIconService); // 🔥 Injetamos o serviço de ícones aqui
  private message = inject(NzMessageService);
 private cdr = inject(ChangeDetectorRef); // 🔥 Injetamos o detector de mudanças aqui
  listaMaterias: Materia[] = [];
  listaCategorias: Categoria[] = [];
  listaPlanejamentos: Planejamento[] = [];
  listaTiposRegistro: TipoRegistro[] = [];
  categoriaSelecionadaId: number | null = null;
  materiaSelecionadaId: number | null = null;
  assuntosDaMateria: Assunto[] = [];
  assuntosCarregando = false;
  private assuntosCache = new Map<number, Assunto[]>();
  assuntoEditandoId: number | null = null;
  nomeAssuntoEdicao = '';
  carregando = true;
  planejamentosCarregando = true;
  salvando = false;
  salvandoPlanejamento = false;
  salvandoCategoria = false;
  salvandoTipoRegistro = false;
  editandoId: number | null = null;
  categoriaEditandoId: number | null = null;
  planejamentoEditandoId: number | null = null;
  tipoRegistroEditandoId: number | null = null;
  nomeCategoriaEdicao = '';
  nomePlanejamentoEdicao = '';
  nomeTipoRegistroEdicao = '';
  formularioEdicao = { nome: '', categorias: [] as number[] };
  validateForm!: FormGroup;
  planejamentoForm!: FormGroup;
  categoriaForm!: FormGroup;
  tipoRegistroForm!: FormGroup;

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
    this.planejamentoForm = this.fb.group({
      nome: [null, [Validators.required]]
    });
    this.categoriaForm = this.fb.group({
      nome: [null, [Validators.required]]
    });
    this.tipoRegistroForm = this.fb.group({
      nome: [null, [Validators.required]]
    });
    this.obterCategorias();
    this.obterPlanejamentos();
    this.obterTiposRegistro();
  }

  obterCategorias(): void {
    this.categoriaService.listarTodas().subscribe({
      next: (categorias) => {
        this.listaCategorias = categorias;
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao buscar categorias:', erro)
    });
  }

  submitCategoria(): void {
    if (this.categoriaForm.invalid) {
      this.categoriaForm.markAllAsTouched();
      this.message.warning('Informe o nome da categoria antes de salvar.');
      return;
    }

    this.salvandoCategoria = true;
    const nome = this.categoriaForm.value.nome.trim();

    this.categoriaService.criar({ nome }).subscribe({
      next: categoria => {
        this.listaCategorias = [...this.listaCategorias, categoria].sort((a, b) => a.nome.localeCompare(b.nome));
        this.categoriaForm.reset();
        this.salvandoCategoria = false;
        this.message.success('Categoria salva com sucesso.');
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao salvar categoria:', erro);
        this.salvandoCategoria = false;
        this.message.error('Não foi possível salvar a categoria.');
        this.cdr.detectChanges();
      }
    });
  }

  selecionarCategoria(id: number | null): void {
    this.categoriaSelecionadaId = id;
  }

  obterPlanejamentos(): void {
    this.planejamentosCarregando = true;
    this.planejamentoService.listarTodos().subscribe({
      next: planejamentos => {
        this.listaPlanejamentos = planejamentos;
        this.planejamentosCarregando = false;
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao buscar planejamentos:', erro);
        this.planejamentosCarregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  obterTiposRegistro(): void {
    this.tipoRegistroService.listarTodos().subscribe({
      next: tipos => {
        this.listaTiposRegistro = tipos;
        this.cdr.detectChanges();
      },
      error: erro => console.error('Erro ao buscar tipos de registro:', erro)
    });
  }

  submitPlanejamento(): void {
    if (this.planejamentoForm.invalid) {
      this.planejamentoForm.markAllAsTouched();
      this.message.warning('Informe o nome do planejamento antes de salvar.');
      return;
    }

    this.salvandoPlanejamento = true;
    const nome = this.planejamentoForm.value.nome.trim();

    this.planejamentoService.criar({ nome }).subscribe({
      next: planejamento => {
        this.listaPlanejamentos = [...this.listaPlanejamentos, planejamento].sort((a, b) =>
          a.nome.localeCompare(b.nome)
        );
        this.planejamentoForm.reset();
        this.salvandoPlanejamento = false;
        this.message.success('Planejamento salvo com sucesso.');
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao salvar planejamento:', erro);
        this.salvandoPlanejamento = false;
        this.message.error('Não foi possível salvar o planejamento.');
        this.cdr.detectChanges();
      }
    });
  }

  submitTipoRegistro(): void {
    if (this.tipoRegistroForm.invalid) {
      this.tipoRegistroForm.markAllAsTouched();
      this.message.warning('Informe o nome do tipo de registro antes de salvar.');
      return;
    }

    this.salvandoTipoRegistro = true;
    const nome = this.tipoRegistroForm.value.nome.trim();

    this.tipoRegistroService.criar({ nome }).subscribe({
      next: tipo => {
        this.listaTiposRegistro = [...this.listaTiposRegistro, tipo].sort((a, b) => a.nome.localeCompare(b.nome));
        this.tipoRegistroForm.reset();
        this.salvandoTipoRegistro = false;
        this.message.success('Tipo de registro salvo com sucesso.');
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao salvar tipo de registro:', erro);
        this.salvandoTipoRegistro = false;
        this.message.error('Não foi possível salvar o tipo de registro.');
        this.cdr.detectChanges();
      }
    });
  }

  iniciarEdicaoCategoria(categoria: Categoria): void {
    this.categoriaEditandoId = categoria.id;
    this.nomeCategoriaEdicao = categoria.nome;
  }

  salvarEdicaoCategoria(categoria: Categoria): void {
    const nome = this.nomeCategoriaEdicao.trim();
    if (!nome) return;

    this.categoriaService.atualizar(categoria.id, { nome }).subscribe({
      next: atualizada => {
        this.listaCategorias = this.listaCategorias.map(item => item.id === atualizada.id ? atualizada : item);
        this.categoriaEditandoId = null;
        this.message.success('Categoria editada com sucesso.');
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao editar categoria:', erro);
        this.message.error('Não foi possível editar a categoria.');
      }
    });
  }

  iniciarEdicaoPlanejamento(planejamento: Planejamento): void {
    if (!planejamento.id) return;
    this.planejamentoEditandoId = planejamento.id;
    this.nomePlanejamentoEdicao = planejamento.nome;
  }

  salvarEdicaoPlanejamento(planejamento: Planejamento): void {
    if (!planejamento.id) return;
    const nome = this.nomePlanejamentoEdicao.trim();
    if (!nome) return;

    this.planejamentoService.atualizar(planejamento.id, { nome }).subscribe({
      next: atualizado => {
        this.listaPlanejamentos = this.listaPlanejamentos.map(item => item.id === atualizado.id ? atualizado : item);
        this.planejamentoEditandoId = null;
        this.message.success('Planejamento editado com sucesso.');
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao editar planejamento:', erro);
        this.message.error('Não foi possível editar o planejamento.');
      }
    });
  }

  iniciarEdicaoTipoRegistro(tipo: TipoRegistro): void {
    this.tipoRegistroEditandoId = tipo.id;
    this.nomeTipoRegistroEdicao = tipo.nome;
  }

  salvarEdicaoTipoRegistro(tipo: TipoRegistro): void {
    const nome = this.nomeTipoRegistroEdicao.trim();
    if (!nome) return;

    this.tipoRegistroService.atualizar(tipo.id, { nome }).subscribe({
      next: atualizado => {
        this.listaTiposRegistro = this.listaTiposRegistro.map(item => item.id === atualizado.id ? atualizado : item);
        this.tipoRegistroEditandoId = null;
        this.message.success('Tipo de registro editado com sucesso.');
        this.cdr.detectChanges();
      },
      error: erro => {
        console.error('Erro ao editar tipo de registro:', erro);
        this.message.error('Não foi possível editar o tipo de registro.');
      }
    });
  }

  cancelarEdicaoGerenciador(): void {
    this.categoriaEditandoId = null;
    this.planejamentoEditandoId = null;
    this.tipoRegistroEditandoId = null;
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
