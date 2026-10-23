import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface Ciclo {
  id?: number;
  nome: string;
}

/** Serviço legado dos ciclos cadastrados no gerenciador de matérias. */
@Injectable({ providedIn: 'root' })
export class CicloService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/ciclos`;
  private cache$?: Observable<Ciclo[]>;

  listarTodos(): Observable<Ciclo[]> {
    if (!this.cache$) this.cache$ = this.http.get<Ciclo[]>(this.apiUrl).pipe(shareReplay(1));
    return this.cache$;
  }

  criar(ciclo: Ciclo): Observable<Ciclo> {
    return this.http.post<Ciclo>(this.apiUrl, ciclo).pipe(tap(() => this.limparCache()));
  }

  atualizar(id: number, ciclo: Ciclo): Observable<Ciclo> {
    return this.http.put<Ciclo>(`${this.apiUrl}/${id}`, ciclo).pipe(tap(() => this.limparCache()));
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(tap(() => this.limparCache()));
  }

  private limparCache(): void { this.cache$ = undefined; }
}
