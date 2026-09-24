import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { Categoria } from './categoria.service';

// Interface para tipar os dados que vêm do Java
export interface Materia {
  id?: number;
  nome: string;
  categorias?: Categoria[];
}

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

// 🌍 URL dinâmica baseada no ambiente (Local ou Produção)
  private apiUrl = `${environment.apiUrl}/materias`;
  private materiasCache$?: Observable<Materia[]>;

  constructor(private http: HttpClient) { }

  // Busca todas as matérias do banco
  listarTodas(): Observable<Materia[]> {
    if (!this.materiasCache$) {
      this.materiasCache$ = this.http.get<Materia[]>(this.apiUrl).pipe(shareReplay(1));
    }

    return this.materiasCache$;
  }

  // Envia uma nova matéria para salvar no banco
  criar(materia: Materia): Observable<Materia> {
    return this.http.post<Materia>(this.apiUrl, materia).pipe(tap(() => this.limparCache()));
  }

  atualizar(id: number, materia: Materia): Observable<Materia> {
    return this.http.put<Materia>(`${this.apiUrl}/${id}`, materia).pipe(tap(() => this.limparCache()));
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(tap(() => this.limparCache()));
  }

  private limparCache(): void {
    this.materiasCache$ = undefined;
  }
}
