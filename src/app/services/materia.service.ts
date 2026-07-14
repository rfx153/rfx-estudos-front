import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

// Interface para tipar os dados que vêm do Java
export interface Materia {
  id?: number;
  nome: string;
  categorias: string;
}

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

// 🌍 URL dinâmica baseada no ambiente (Local ou Produção)
  private apiUrl = `${environment.apiUrl}/materias`;

  constructor(private http: HttpClient) { }

  // Busca todas as matérias do banco
  listarTodas(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.apiUrl);
  }

  // Envia uma nova matéria para salvar no banco
  criar(materia: Materia): Observable<Materia> {
    return this.http.post<Materia>(this.apiUrl, materia);
  }
}
