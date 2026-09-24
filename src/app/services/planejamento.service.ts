import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';

export interface Planejamento {
  id?: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlanejamentoService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/planejamentos`;
  private planejamentosCache$?: Observable<Planejamento[]>;

  listarTodos(): Observable<Planejamento[]> {
    if (!this.planejamentosCache$) {
      this.planejamentosCache$ = this.http.get<Planejamento[]>(this.apiUrl).pipe(shareReplay(1));
    }

    return this.planejamentosCache$;
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
    this.planejamentosCache$ = undefined;
  }
}
