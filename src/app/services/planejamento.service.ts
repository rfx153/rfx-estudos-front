import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface Planejamento {
  id?: number;
  nome: string;
  descricao?: string | null;
}

@Injectable({ providedIn: 'root' })
export class PlanejamentoService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/planejamentos`;
  private cache$?: Observable<Planejamento[]>;

  listarTodos(): Observable<Planejamento[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<Planejamento[]>(this.apiUrl).pipe(shareReplay(1));
    }

    return this.cache$;
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

  private limparCache(): void {
    this.cache$ = undefined;
  }
}
