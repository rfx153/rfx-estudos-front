import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import * as i0 from "@angular/core";
export class MaterialGuiaService {
    http = inject(HttpClient);
    apiUrl = `${environment.apiUrl}/materiais-guia`;
    cache$;
    listarTodos() {
        if (!this.cache$) {
            this.cache$ = this.http.get(this.apiUrl).pipe(shareReplay(1));
        }
        return this.cache$;
    }
    criar(materialGuia) {
        return this.http
            .post(this.apiUrl, materialGuia)
            .pipe(tap(() => this.limparCache()));
    }
    atualizar(id, materialGuia) {
        return this.http
            .put(`${this.apiUrl}/${id}`, materialGuia)
            .pipe(tap(() => this.limparCache()));
    }
    excluir(id) {
        return this.http
            .delete(`${this.apiUrl}/${id}`)
            .pipe(tap(() => this.limparCache()));
    }
    limparCache() {
        this.cache$ = undefined;
    }
    static ɵfac = function MaterialGuiaService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MaterialGuiaService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MaterialGuiaService, factory: MaterialGuiaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaterialGuiaService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
