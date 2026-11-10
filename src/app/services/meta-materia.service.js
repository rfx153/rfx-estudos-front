import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import * as i0 from "@angular/core";
export class MetaMateriaService {
    http = inject(HttpClient);
    apiUrl = `${environment.apiUrl}/metas-materias`;
    listar() {
        return this.http.get(this.apiUrl);
    }
    resumir(inicio, fim, periodo) {
        const params = new HttpParams()
            .set('inicio', inicio)
            .set('fim', fim)
            .set('periodo', periodo);
        return this.http.get(`${this.apiUrl}/resumo`, { params });
    }
    criar(payload) {
        return this.http.post(this.apiUrl, payload);
    }
    atualizar(id, payload) {
        return this.http.put(`${this.apiUrl}/${id}`, payload);
    }
    excluir(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    static ɵfac = function MetaMateriaService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MetaMateriaService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MetaMateriaService, factory: MetaMateriaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MetaMateriaService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
