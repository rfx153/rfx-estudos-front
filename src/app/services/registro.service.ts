import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from './materia.service';
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

export interface Registro {
  id?: number;
  materia: Materia;
  assunto: Assunto;
  materialTipo: MaterialTipo;
  materialNome?: string;
  puntoParada?: string;
  questoesFeitas: number;
  questoesAcertadas: number;
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
  private assuntosUrl = `${environment.apiUrl}/assuntos`; // Ajuste se o endpoint de assuntos no seu Java for diferente

  // ==========================================
  // 📝 MÉTODOS DE REGISTROS
  // ==========================================

  listarTodos(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.apiUrl);
  }

  listarTodosRegistros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  criar(registro: Partial<Registro>): Observable<Registro> {
    return this.http.post<Registro>(this.apiUrl, registro);
  }

  // ==========================================
  // 📚 MÉTODOS DE ASSUNTOS
  // ==========================================

  listarAssuntosPorMateria(materiaId: number): Observable<Assunto[]> {
    // 🔥 Corrigido: adicionado o "$" antes de {this.apiUrl} para interpolar a variável corretamente
    return this.http.get<Assunto[]>(`${this.assuntosUrl}/materia/${materiaId}`);
  }

  criarAssunto(assunto: { nome: string; materiaId: number }): Observable<Assunto> {
    // Usando a rota dinâmica de assuntos
    return this.http.post<Assunto>(this.assuntosUrl, assunto);
  }

  // ==========================================
  // 🛠️ MÉTODOS DE TIPOS DE MATERIAL
  // ==========================================

  listarTiposMaterial(): Observable<MaterialTipo[]> {
    // 🔥 Mudou de localhost para a variável que lê do environment
    return this.http.get<MaterialTipo[]>(this.materialTiposUrl);
  }


}