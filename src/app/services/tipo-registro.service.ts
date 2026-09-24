import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { TipoRegistro } from './registro.service';

@Injectable({
  providedIn: 'root'
})
export class TipoRegistroService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/tipos-registro`;
  private tiposCache$?: Observable<TipoRegistro[]>;

  listarTodos(): Observable<TipoRegistro[]> {
    if (!this.tiposCache$) {
      this.tiposCache$ = this.http.get<TipoRegistro[]>(this.apiUrl).pipe(shareReplay(1));
    }

    return this.tiposCache$;
  }

  criar(tipoRegistro: Partial<TipoRegistro>): Observable<TipoRegistro> {
    return this.http.post<TipoRegistro>(this.apiUrl, tipoRegistro).pipe(tap(() => this.limparCache()));
  }

  atualizar(id: number, tipoRegistro: Partial<TipoRegistro>): Observable<TipoRegistro> {
    return this.http.put<TipoRegistro>(`${this.apiUrl}/${id}`, tipoRegistro).pipe(tap(() => this.limparCache()));
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(tap(() => this.limparCache()));
  }

  private limparCache(): void {
    this.tiposCache$ = undefined;
  }
}
