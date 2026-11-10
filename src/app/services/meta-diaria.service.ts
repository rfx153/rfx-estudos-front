import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface MetaDiaria {
  id: number;
  data: string;
  metaMinutos: number;
}

export interface MetaDiariaResumo extends MetaDiaria {
  tempoRealizadoMinutos: number;
}

export interface MetaDiariaPayload {
  data: string;
  metaMinutos: number;
}

@Injectable({ providedIn: 'root' })
export class MetaDiariaService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/metas-diarias`;

  resumir(inicio: string, fim: string): Observable<MetaDiariaResumo[]> {
    const params = new HttpParams().set('inicio', inicio).set('fim', fim);
    return this.http.get<MetaDiariaResumo[]>(`${this.apiUrl}/resumo`, { params });
  }

  criar(payload: MetaDiariaPayload): Observable<MetaDiaria> {
    return this.http.post<MetaDiaria>(this.apiUrl, payload);
  }

  atualizar(id: number, payload: MetaDiariaPayload): Observable<MetaDiaria> {
    return this.http.put<MetaDiaria>(`${this.apiUrl}/${id}`, payload);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
