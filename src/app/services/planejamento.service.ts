import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { Materia } from './materia.service';
import { Assunto, MaterialTipo } from './registro.service';

export interface Planejamento {
  id?: number;
  nome: string;
  descricao?: string;
  dataInicio?: string;
  dataPrevista?: string;
  status?: string;
  dataFinalizacao?: string;
}

export interface Ciclo {
  id?: number;
  nome: string;
}

export interface PlanejamentoMateria {
  id?: number;
  planejamento?: Planejamento;
  materia: Materia;
  prioridade?: string;
  dataPrevista?: string;
  status?: string;
  dataFinalizacao?: string;
  ordem?: number;
  observacoes?: string;
}

export interface PlanejamentoItem {
  id?: number;
  planejamento?: Planejamento;
  planejamentoMateria?: PlanejamentoMateria;
  materia: Materia;
  assunto?: Assunto | null;
  materialTipo?: MaterialTipo | null;
  materialNome?: string;
  prioridade?: string;
  meta?: string;
  dataPrevista?: string;
  linkDocumento?: string;
  status?: string;
  dataFinalizacao?: string;
  ordem?: number;
  observacoes?: string;
}

export interface PlanejamentoCiclo {
  id?: number;
  planejamento: Planejamento;
  ciclo: Ciclo;
}

@Injectable({
  providedIn: 'root'
})
export class PlanejamentoService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/planejamentos`;
  private ciclosUrl = `${environment.apiUrl}/ciclos`;
  private planejamentosCache$?: Observable<Planejamento[]>;
  private ciclosCache$?: Observable<Ciclo[]>;

  listarTodos(): Observable<Planejamento[]> {
    if (!this.planejamentosCache$) {
      this.planejamentosCache$ = this.http.get<Planejamento[]>(this.apiUrl).pipe(shareReplay(1));
    }

    return this.planejamentosCache$;
  }

  buscarPorId(id: number): Observable<Planejamento> {
    return this.http.get<Planejamento>(`${this.apiUrl}/${id}`);
  }

  criar(planejamento: Planejamento): Observable<Planejamento> {
    return this.http.post<Planejamento>(this.apiUrl, planejamento).pipe(tap(() => this.limparCache()));
  }

  atualizar(id: number, planejamento: Planejamento): Observable<Planejamento> {
    return this.http.put<Planejamento>(`${this.apiUrl}/${id}`, planejamento).pipe(tap(() => this.limparCache()));
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(tap(() => this.limparCache()));
  }

  listarMaterias(planejamentoId: number): Observable<PlanejamentoMateria[]> {
    return this.http.get<PlanejamentoMateria[]>(`${this.apiUrl}/${planejamentoId}/materias`);
  }

  criarMateria(planejamentoId: number, materia: PlanejamentoMateria): Observable<PlanejamentoMateria> {
    return this.http.post<PlanejamentoMateria>(`${this.apiUrl}/${planejamentoId}/materias`, materia);
  }

  atualizarMateria(planejamentoMateriaId: number, materia: PlanejamentoMateria): Observable<PlanejamentoMateria> {
    return this.http.put<PlanejamentoMateria>(`${this.apiUrl}/materias/${planejamentoMateriaId}`, materia);
  }

  excluirMateria(planejamentoMateriaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/materias/${planejamentoMateriaId}`);
  }

  listarItensDaMateria(planejamentoMateriaId: number): Observable<PlanejamentoItem[]> {
    return this.http.get<PlanejamentoItem[]>(`${this.apiUrl}/materias/${planejamentoMateriaId}/itens`);
  }

  criarItemDaMateria(planejamentoMateriaId: number, item: PlanejamentoItem): Observable<PlanejamentoItem> {
    return this.http.post<PlanejamentoItem>(`${this.apiUrl}/materias/${planejamentoMateriaId}/itens`, item);
  }

  listarItens(planejamentoId: number): Observable<PlanejamentoItem[]> {
    return this.http.get<PlanejamentoItem[]>(`${this.apiUrl}/${planejamentoId}/itens`);
  }

  criarItem(planejamentoId: number, item: PlanejamentoItem): Observable<PlanejamentoItem> {
    return this.http.post<PlanejamentoItem>(`${this.apiUrl}/${planejamentoId}/itens`, item);
  }

  atualizarItem(itemId: number, item: PlanejamentoItem): Observable<PlanejamentoItem> {
    return this.http.put<PlanejamentoItem>(`${this.apiUrl}/itens/${itemId}`, item);
  }

  excluirItem(itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/itens/${itemId}`);
  }

  listarCiclosDoPlanejamento(planejamentoId: number): Observable<PlanejamentoCiclo[]> {
    return this.http.get<PlanejamentoCiclo[]>(`${this.apiUrl}/${planejamentoId}/ciclos`);
  }

  vincularCiclo(planejamentoId: number, cicloId: number): Observable<PlanejamentoCiclo> {
    return this.http.post<PlanejamentoCiclo>(`${this.apiUrl}/${planejamentoId}/ciclos/${cicloId}`, {});
  }

  desvincularCiclo(planejamentoId: number, cicloId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${planejamentoId}/ciclos/${cicloId}`);
  }

  listarCiclos(): Observable<Ciclo[]> {
    if (!this.ciclosCache$) {
      this.ciclosCache$ = this.http.get<Ciclo[]>(this.ciclosUrl).pipe(shareReplay(1));
    }

    return this.ciclosCache$;
  }

  criarCiclo(ciclo: Ciclo): Observable<Ciclo> {
    return this.http.post<Ciclo>(this.ciclosUrl, ciclo).pipe(tap(() => this.limparCacheCiclos()));
  }

  atualizarCiclo(id: number, ciclo: Ciclo): Observable<Ciclo> {
    return this.http.put<Ciclo>(`${this.ciclosUrl}/${id}`, ciclo).pipe(tap(() => this.limparCacheCiclos()));
  }

  excluirCiclo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ciclosUrl}/${id}`).pipe(tap(() => this.limparCacheCiclos()));
  }

  private limparCache(): void {
    this.planejamentosCache$ = undefined;
  }

  private limparCacheCiclos(): void {
    this.ciclosCache$ = undefined;
  }
}
