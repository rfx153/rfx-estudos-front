import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { Materia } from './materia.service';
import { Planejamento } from './planejamento.service';
import { environment } from '../../environments/environment.development';

// Interfaces espelhando o seu modelo Java
export interface Assunto {
  id: number;
  nome: string;
}

export interface MaterialTipo {
  id: number;
  nome: string;
}

export interface TipoRegistro {
  id: number;
  nome: string;
}

export interface Registro {
  id?: number;
  materia: Materia;
  assunto: Assunto;
  materialTipo: MaterialTipo;
  tipoRegistro?: TipoRegistro;
  planejamento?: Planejamento;
  materialNome?: string;
  puntoParada?: string;
  questoesFeitas: number;
  questoesAcertadas: number;
  questoesRevisaoFeitas?: number;
  questoesRevisaoAcertadas?: number;
  revisaoAssunto?: Assunto;
  revisaoComplemento?: string;
  dataEstudo: string; // LocalDate mapeia como string (YYYY-MM-DD)
  tempoEstudado: string; // LocalTime mapeia como string (HH:mm:ss)
  linkDocumento?: string;
  observacoes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private http = inject(HttpClient);

  // 🌍 1. Centralizando as URLs base dinâmicas
  private apiUrl = `${environment.apiUrl}/registros`;
  private materialTiposUrl = `${environment.apiUrl}/material-tipos`;
  private tiposRegistroUrl = `${environment.apiUrl}/tipos-registro`;
  private assuntosUrl = `${environment.apiUrl}/assuntos`; // Ajuste se o endpoint de assuntos no seu Java for diferente
  private materialTiposCache$?: Observable<MaterialTipo[]>;
  private tiposRegistroCache$?: Observable<TipoRegistro[]>;
  private assuntosCache = new Map<number, Observable<Assunto[]>>();

  // ==========================================
  // 📝 MÉTODOS DE REGISTROS
  // ==========================================

  listarTodos(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.apiUrl);
  }

  listarHoje(): Observable<Registro[]> {
    return this.http.get<Registro[]>(`${this.apiUrl}/hoje`);
  }

  contarTodos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  }

  listarRecentes(limite = 100, materiaId?: number | null): Observable<Registro[]> {
    let params = new HttpParams().set('limite', limite);

    if (materiaId) {
      params = params.set('materiaId', materiaId);
    }

    return this.http.get<Registro[]>(`${this.apiUrl}/recentes`, { params });
  }

  listarTodosRegistros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  criar(registro: Partial<Registro>): Observable<Registro> {
    return this.http.post<Registro>(this.apiUrl, registro);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // ==========================================
  // 📚 MÉTODOS DE ASSUNTOS
  // ==========================================

  listarAssuntosPorMateria(materiaId: number): Observable<Assunto[]> {
    // 🔥 Corrigido: adicionado o "$" antes de {this.apiUrl} para interpolar a variável corretamente
    const cache = this.assuntosCache.get(materiaId);

    if (cache) return cache;

    const request$ = this.http.get<Assunto[]>(`${this.assuntosUrl}/materia/${materiaId}`).pipe(shareReplay(1));
    this.assuntosCache.set(materiaId, request$);

    return request$;
  }

  criarAssunto(assunto: { nome: string; materiaId: number }): Observable<Assunto> {
    // Usando a rota dinâmica de assuntos
    return this.http.post<Assunto>(this.assuntosUrl, assunto).pipe(
      tap(() => this.assuntosCache.delete(assunto.materiaId))
    );
  }

  atualizarAssunto(id: number, nome: string): Observable<Assunto> {
    return this.http.put<Assunto>(`${this.assuntosUrl}/${id}`, { nome }).pipe(
      tap(() => this.assuntosCache.clear())
    );
  }

  excluirAssunto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.assuntosUrl}/${id}`).pipe(
      tap(() => this.assuntosCache.clear())
    );
  }

  // ==========================================
  // 🛠️ MÉTODOS DE TIPOS DE MATERIAL
  // ==========================================

  listarTiposMaterial(): Observable<MaterialTipo[]> {
    // 🔥 Mudou de localhost para a variável que lê do environment
    if (!this.materialTiposCache$) {
      this.materialTiposCache$ = this.http.get<MaterialTipo[]>(this.materialTiposUrl).pipe(shareReplay(1));
    }

    return this.materialTiposCache$;
  }

  listarTiposRegistro(): Observable<TipoRegistro[]> {
    if (!this.tiposRegistroCache$) {
      this.tiposRegistroCache$ = this.http.get<TipoRegistro[]>(this.tiposRegistroUrl).pipe(shareReplay(1));
    }

    return this.tiposRegistroCache$;
  }


}
