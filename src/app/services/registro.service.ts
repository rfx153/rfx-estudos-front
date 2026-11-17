import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Materia } from './materia.service';
import { Planejamento } from './planejamento.service';
import { MaterialGuia } from './material-guia.service';
import { environment } from '../../environments/environment.development';

// Interfaces espelhando o seu modelo Java
export interface Assunto {
  id: number;
  nome: string;
  ativo?: boolean;
  materia?: Materia;
}

export interface TipoRegistro {
  id: number;
  nome: string;
  ativo?: boolean;
}

export interface Registro {
  id?: number;
  materia: Materia;
  assunto: Assunto;
  tipoRegistro?: TipoRegistro;
  concluido?: boolean;
  planejamentoEtapa?: { id?: number };
  planejamento?: Planejamento;
  materialGuia?: MaterialGuia;
  questoesFeitas: number;
  questoesAcertadas: number;
  dataEstudo: string; // LocalDate mapeia como string (YYYY-MM-DD)
  horarioInicio: string; // LocalTime mapeia como string (HH:mm:ss)
  tempoEstudado: string; // LocalTime mapeia como string (HH:mm:ss)
  observacoes?: string;
}

export interface PaginaRegistros {
  content: Registro[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private http = inject(HttpClient);

  // 🌍 1. Centralizando as URLs base dinâmicas
  private apiUrl = `${environment.apiUrl}/registros`;
  private tiposRegistroUrl = `${environment.apiUrl}/tipos-registro`;
  private assuntosUrl = `${environment.apiUrl}/assuntos`; // Ajuste se o endpoint de assuntos no seu Java for diferente
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

  listarRecentes(
    limite = 100,
    materiaId?: number | null,
    assuntoId?: number | null,
    materialGuiaId?: number | null,
    tipoRegistroId?: number | null
  ): Observable<Registro[]> {
    let params = new HttpParams().set('limite', limite);
    params = this.adicionarFiltrosHistorico(
      params,
      materiaId,
      assuntoId,
      materialGuiaId,
      tipoRegistroId
    );

    return this.http.get<PaginaRegistros>(`${this.apiUrl}/recentes`, { params }).pipe(
      map(pagina => pagina.content)
    );
  }

  listarRecentesPaginado(
    page = 0,
    size = 10,
    materiaId?: number | null,
    assuntoId?: number | null,
    materialGuiaId?: number | null,
    tipoRegistroId?: number | null
  ): Observable<PaginaRegistros> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    params = this.adicionarFiltrosHistorico(
      params,
      materiaId,
      assuntoId,
      materialGuiaId,
      tipoRegistroId
    );

    return this.http.get<PaginaRegistros>(`${this.apiUrl}/recentes`, { params });
  }

  listarTodosRegistros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  criar(registro: Partial<Registro>): Observable<Registro> {
    return this.http.post<Registro>(this.apiUrl, registro);
  }

  atualizar(id: number, registro: Partial<Registro>): Observable<Registro> {
    return this.http.put<Registro>(`${this.apiUrl}/${id}`, registro);
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

  listarAssuntos(incluirInativos = false): Observable<Assunto[]> {
    const params = incluirInativos
      ? new HttpParams().set('incluirInativos', true)
      : undefined;
    return this.http.get<Assunto[]>(this.assuntosUrl, { params });
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

  listarTiposRegistro(incluirInativos = false): Observable<TipoRegistro[]> {
    if (incluirInativos) {
      const params = new HttpParams().set('incluirInativos', true);
      return this.http.get<TipoRegistro[]>(this.tiposRegistroUrl, { params });
    }

    if (!this.tiposRegistroCache$) {
      this.tiposRegistroCache$ = this.http.get<TipoRegistro[]>(this.tiposRegistroUrl).pipe(shareReplay(1));
    }

    return this.tiposRegistroCache$;
  }

  private adicionarFiltrosHistorico(
    params: HttpParams,
    materiaId?: number | null,
    assuntoId?: number | null,
    materialGuiaId?: number | null,
    tipoRegistroId?: number | null
  ): HttpParams {
    if (materiaId != null) params = params.set('materiaId', materiaId);
    if (assuntoId != null) params = params.set('assuntoId', assuntoId);
    if (materialGuiaId != null) params = params.set('materialGuiaId', materialGuiaId);
    if (tipoRegistroId != null) params = params.set('tipoRegistroId', tipoRegistroId);
    return params;
  }


}
