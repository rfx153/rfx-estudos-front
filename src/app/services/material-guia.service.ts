import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

export interface MaterialGuia {
  id?: number;
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class MaterialGuiaService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/materiais-guia`;
  private cache$?: Observable<MaterialGuia[]>;

  listarTodos(): Observable<MaterialGuia[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<MaterialGuia[]>(this.apiUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }

  criar(materialGuia: MaterialGuia): Observable<MaterialGuia> {
    return this.http
      .post<MaterialGuia>(this.apiUrl, materialGuia)
      .pipe(tap(() => this.limparCache()));
  }

  atualizar(id: number, materialGuia: MaterialGuia): Observable<MaterialGuia> {
    return this.http
      .put<MaterialGuia>(`${this.apiUrl}/${id}`, materialGuia)
      .pipe(tap(() => this.limparCache()));
  }

  excluir(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(tap(() => this.limparCache()));
  }

  private limparCache(): void {
    this.cache$ = undefined;
  }
}
