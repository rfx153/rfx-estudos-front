import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin, map, of, switchMap } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Ciclo, CicloItem, CicloService } from '../../services/ciclo.service';

interface CicloQuadro {
  ciclo: Ciclo;
  itens: CicloItem[];
}

@Component({
  selector: 'app-ciclo-visualizacao',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ciclo-visualizacao.html',
  styleUrl: './ciclo-visualizacao.css',
})
export class CicloVisualizacaoComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly cicloService = inject(CicloService);
  private readonly cdr = inject(ChangeDetectorRef);

  quadros: CicloQuadro[] = [];
  carregando = true;
  erro = false;
  visualizacaoIndividual = false;

  ngOnInit(): void {
    const parametroId = this.route.snapshot.paramMap.get('id');
    const id = parametroId ? Number(parametroId) : null;
    this.visualizacaoIndividual = id !== null;

    if (id !== null && (!Number.isInteger(id) || id <= 0)) {
      this.erro = true;
      this.carregando = false;
      return;
    }

    const ciclos$ = id
      ? this.cicloService.buscarPorId(id).pipe(map((ciclo) => [ciclo]))
      : this.cicloService.listarTodos();

    ciclos$
      .pipe(
        switchMap((ciclos) => {
          if (!ciclos.length) return of([] as CicloQuadro[]);

          return forkJoin(
            ciclos.map((ciclo) =>
              this.cicloService.listarItens(ciclo.id!).pipe(
                map((itens) => ({
                  ciclo,
                  itens: [...itens].sort((a, b) => a.ordem - b.ordem),
                })),
              ),
            ),
          );
        }),
        finalize(() => {
          this.carregando = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (quadros) => {
          this.quadros = quadros;
          this.cdr.detectChanges();
        },
        error: (erro) => {
          console.error('Erro ao carregar ciclos:', erro);
          this.erro = true;
          this.cdr.detectChanges();
        },
      });
  }

  nomeItem(item: CicloItem): string {
    return item.materia?.nome ?? item.planejamentoGrupoMateria?.nome ?? 'Item sem nome';
  }

  tipoItem(item: CicloItem): 'Matéria' | 'Bloco' {
    return item.materia ? 'Matéria' : 'Bloco';
  }

  conclusaoItem(item: CicloItem): string {
    const registro = item.registroConclusao;
    if (!registro?.dataEstudo || !registro.tempoEstudado) return '';
    const [ano, mes, dia] = registro.dataEstudo.substring(0, 10).split('-');
    return `Feito em ${dia}/${mes}/${ano} · ${registro.tempoEstudado.substring(0, 5)} de estudo`;
  }
}
