import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface MetaSemanal {
  id: number;
  inicioSemana: string;
  metaMinutos: number;
}

export interface MetaSemanalResumo extends MetaSemanal {
  tempoRealizadoMinutos: number;
}

export interface MetaSemanalPayload {
  inicioSemana: string;
  metaMinutos: number;
}

@Injectable({ providedIn: 'root' })
export class MetaSemanalService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/metas-semanais`;

  resumir(inicioSemana: string): Observable<MetaSemanalResumo[]> {
    const params = new HttpParams().set('inicioSemana', inicioSemana);
    return this.http.get<MetaSemanalResumo[]>(`${this.apiUrl}/resumo`, { params });
  }

  criar(payload: MetaSemanalPayload): Observable<MetaSemanal> {
    return this.http.post<MetaSemanal>(this.apiUrl, payload);
  }

  atualizar(id: number, payload: MetaSemanalPayload): Observable<MetaSemanal> {
    return this.http.put<MetaSemanal>(`${this.apiUrl}/${id}`, payload);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
