import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Materia } from './materia.service';
import { PlanejamentoGrupoMateria } from './planejamento.service';

export interface Ciclo {
  id?: number;
  nome: string;
  ativo: boolean;
  observacoes?: string | null;
  criadoEm?: string;
  atualizadoEm?: string;
}

export interface CicloItem {
  id?: number;
  materia?: Materia | null;
  planejamentoGrupoMateria?: PlanejamentoGrupoMateria | null;
  registroConclusao?: {
    id?: number;
    dataEstudo: string;
    tempoEstudado: string;
  } | null;
  ordem: number;
  ativo: boolean;
}

export interface CicloItemDados {
  materiaId?: number | null;
  planejamentoGrupoMateriaId?: number | null;
  ordem: number;
  ativo: boolean;
}

@Injectable({ providedIn: 'root' })
export class CicloService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/ciclos`;

  listarTodos(): Observable<Ciclo[]> {
    return this.http.get<Ciclo[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Ciclo> {
    return this.http.get<Ciclo>(`${this.apiUrl}/${id}`);
  }

  criar(ciclo: Ciclo): Observable<Ciclo> {
    return this.http.post<Ciclo>(this.apiUrl, ciclo);
  }

  atualizar(id: number, ciclo: Ciclo): Observable<Ciclo> {
    return this.http.put<Ciclo>(`${this.apiUrl}/${id}`, ciclo);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  listarItens(cicloId: number): Observable<CicloItem[]> {
    return this.http.get<CicloItem[]>(`${this.apiUrl}/${cicloId}/itens`);
  }

  adicionarItem(cicloId: number, dados: CicloItemDados): Observable<CicloItem> {
    return this.http.post<CicloItem>(`${this.apiUrl}/${cicloId}/itens`, dados);
  }

  atualizarItem(
    cicloId: number,
    itemId: number,
    dados: CicloItemDados,
  ): Observable<CicloItem> {
    return this.http.put<CicloItem>(`${this.apiUrl}/${cicloId}/itens/${itemId}`, dados);
  }

  excluirItem(cicloId: number, itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cicloId}/itens/${itemId}`);
  }

  reordenarItens(cicloId: number, itens: CicloItem[]): Observable<CicloItem[]> {
    return this.http.put<CicloItem[]>(`${this.apiUrl}/${cicloId}/itens/ordem`, {
      itens: itens.map((item, indice) => ({ id: item.id, ordem: indice + 1 })),
    });
  }

  reiniciar(cicloId: number): Observable<CicloItem[]> {
    return this.http.put<CicloItem[]>(`${this.apiUrl}/${cicloId}/reiniciar`, {});
  }
}
