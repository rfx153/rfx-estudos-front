import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Materia } from './materia.service';

export type PeriodoMeta = 'SEMANAL' | 'MENSAL';

export interface MetaMateria {
  id: number;
  materia: Materia;
  metaSemanalMinutos: number;
}

export interface MetaMateriaResumo {
  id: number;
  materiaId: number;
  materiaNome: string;
  metaSemanalMinutos: number;
  metaPeriodoMinutos: number;
  tempoRealizadoMinutos: number;
}

export interface MetaMateriaPayload {
  materiaId: number;
  metaSemanalMinutos: number;
}

@Injectable({ providedIn: 'root' })
export class MetaMateriaService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/metas-materias`;

  listar(): Observable<MetaMateria[]> {
    return this.http.get<MetaMateria[]>(this.apiUrl);
  }

  resumir(inicio: string, fim: string, periodo: PeriodoMeta): Observable<MetaMateriaResumo[]> {
    const params = new HttpParams()
      .set('inicio', inicio)
      .set('fim', fim)
      .set('periodo', periodo);
    return this.http.get<MetaMateriaResumo[]>(`${this.apiUrl}/resumo`, { params });
  }

  criar(payload: MetaMateriaPayload): Observable<MetaMateria> {
    return this.http.post<MetaMateria>(this.apiUrl, payload);
  }

  atualizar(id: number, payload: MetaMateriaPayload): Observable<MetaMateria> {
    return this.http.put<MetaMateria>(`${this.apiUrl}/${id}`, payload);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
