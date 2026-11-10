import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import * as i0 from "@angular/core";
export class RegistroService {
    http = inject(HttpClient);
    // 🌍 1. Centralizando as URLs base dinâmicas
    apiUrl = `${environment.apiUrl}/registros`;
    tiposRegistroUrl = `${environment.apiUrl}/tipos-registro`;
    assuntosUrl = `${environment.apiUrl}/assuntos`; // Ajuste se o endpoint de assuntos no seu Java for diferente
    tiposRegistroCache$;
    assuntosCache = new Map();
    // ==========================================
    // 📝 MÉTODOS DE REGISTROS
    // ==========================================
    listarTodos() {
        return this.http.get(this.apiUrl);
    }
    listarHoje() {
        return this.http.get(`${this.apiUrl}/hoje`);
    }
    contarTodos() {
        return this.http.get(`${this.apiUrl}/total`);
    }
    listarRecentes(limite = 100, materiaId) {
        let params = new HttpParams().set('limite', limite);
        if (materiaId) {
            params = params.set('materiaId', materiaId);
        }
        return this.http.get(`${this.apiUrl}/recentes`, { params }).pipe(map(pagina => pagina.content));
    }
    listarRecentesPaginado(page = 0, size = 10, materiaId) {
        let params = new HttpParams()
            .set('page', page)
            .set('size', size);
        if (materiaId) {
            params = params.set('materiaId', materiaId);
        }
        return this.http.get(`${this.apiUrl}/recentes`, { params });
    }
    listarTodosRegistros() {
        return this.http.get(this.apiUrl);
    }
    criar(registro) {
        return this.http.post(this.apiUrl, registro);
    }
    atualizar(id, registro) {
        return this.http.put(`${this.apiUrl}/${id}`, registro);
    }
    excluir(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    // ==========================================
    // 📚 MÉTODOS DE ASSUNTOS
    // ==========================================
    listarAssuntosPorMateria(materiaId) {
        // 🔥 Corrigido: adicionado o "$" antes de {this.apiUrl} para interpolar a variável corretamente
        const cache = this.assuntosCache.get(materiaId);
        if (cache)
            return cache;
        const request$ = this.http.get(`${this.assuntosUrl}/materia/${materiaId}`).pipe(shareReplay(1));
        this.assuntosCache.set(materiaId, request$);
        return request$;
    }
    criarAssunto(assunto) {
        // Usando a rota dinâmica de assuntos
        return this.http.post(this.assuntosUrl, assunto).pipe(tap(() => this.assuntosCache.delete(assunto.materiaId)));
    }
    atualizarAssunto(id, nome) {
        return this.http.put(`${this.assuntosUrl}/${id}`, { nome }).pipe(tap(() => this.assuntosCache.clear()));
    }
    excluirAssunto(id) {
        return this.http.delete(`${this.assuntosUrl}/${id}`).pipe(tap(() => this.assuntosCache.clear()));
    }
    listarTiposRegistro() {
        if (!this.tiposRegistroCache$) {
            this.tiposRegistroCache$ = this.http.get(this.tiposRegistroUrl).pipe(shareReplay(1));
        }
        return this.tiposRegistroCache$;
    }
    static ɵfac = function RegistroService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegistroService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RegistroService, factory: RegistroService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegistroService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
