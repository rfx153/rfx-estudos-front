import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';

export interface Categoria {
  id: number;
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class CategoriaService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/categorias`;
  private categoriasCache$?: Observable<Categoria[]>;

  listarTodas(): Observable<Categoria[]> {
    if (!this.categoriasCache$) {
      this.categoriasCache$ = this.http.get<Categoria[]>(this.apiUrl).pipe(shareReplay(1));
    }

    return this.categoriasCache$;
  }

  criar(categoria: Partial<Categoria>): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria).pipe(tap(() => this.limparCache()));
  }

  atualizar(id: number, categoria: Partial<Categoria>): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiUrl}/${id}`, categoria).pipe(tap(() => this.limparCache()));
  }

  private limparCache(): void {
    this.categoriasCache$ = undefined;
  }
}
