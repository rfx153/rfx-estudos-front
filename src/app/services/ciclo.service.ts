import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Materia } from './materia.service';

export interface Ciclo {
  id?: number;
  nome: string;
  ativo: boolean;
  observacoes?: string | null;
  criadoEm?: string;
  atualizadoEm?: string;
}

export interface CicloMateria {
  id?: number;
  materia: Materia;
  ordem: number;
  ativo: boolean;
}

export interface CicloMateriaDados {
  materiaId: number;
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

  listarMaterias(cicloId: number): Observable<CicloMateria[]> {
    return this.http.get<CicloMateria[]>(`${this.apiUrl}/${cicloId}/materias`);
  }

  adicionarMateria(cicloId: number, dados: CicloMateriaDados): Observable<CicloMateria> {
    return this.http.post<CicloMateria>(`${this.apiUrl}/${cicloId}/materias`, dados);
  }

  atualizarMateria(
    cicloId: number,
    itemId: number,
    dados: CicloMateriaDados,
  ): Observable<CicloMateria> {
    return this.http.put<CicloMateria>(`${this.apiUrl}/${cicloId}/materias/${itemId}`, dados);
  }

  excluirMateria(cicloId: number, itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cicloId}/materias/${itemId}`);
  }

  reordenarMaterias(cicloId: number, itens: CicloMateria[]): Observable<CicloMateria[]> {
    return this.http.put<CicloMateria[]>(`${this.apiUrl}/${cicloId}/materias/ordem`, {
      itens: itens.map((item, indice) => ({ id: item.id, ordem: indice + 1 })),
    });
  }
}
