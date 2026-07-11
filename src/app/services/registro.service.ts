import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from './materia.service';

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
  private apiUrl = 'http://localhost:8080/api/registros';

  listarTodos(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.apiUrl);
  }

  criar(registro: Partial<Registro>): Observable<Registro> {
    return this.http.post<Registro>(this.apiUrl, registro);
  }

  // Adicione esse método dentro da classe RegistroService
  listarAssuntosPorMateria(materiaId: number): Observable<Assunto[]> {
    return this.http.get<Assunto[]>(`http://localhost:8080/api/assuntos/materia/${materiaId}`);
  }

  criarAssunto(assunto: { nome: string; materiaId: number }): Observable<Assunto> {
    return this.http.post<Assunto>('http://localhost:8080/api/assuntos', assunto);
  }
    // Adicione esse método dentro da classe RegistroService
  listarTiposMaterial(): Observable<MaterialTipo[]> {
      return this.http.get<MaterialTipo[]>('http://localhost:8080/api/material-tipos');
    }

  listarTodosRegistros(): Observable<any[]> {
  return this.http.get<any[]>('http://localhost:8080/api/registros');
    }

}