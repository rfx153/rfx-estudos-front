import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import * as i0 from "@angular/core";
export class CategoriaService {
    http = inject(HttpClient);
    apiUrl = `${environment.apiUrl}/categorias`;
    categoriasCache$;
    listarTodas() {
        if (!this.categoriasCache$) {
            this.categoriasCache$ = this.http.get(this.apiUrl).pipe(shareReplay(1));
        }
        return this.categoriasCache$;
    }
    criar(categoria) {
        return this.http.post(this.apiUrl, categoria).pipe(tap(() => this.limparCache()));
    }
    atualizar(id, categoria) {
        return this.http.put(`${this.apiUrl}/${id}`, categoria).pipe(tap(() => this.limparCache()));
    }
    excluir(id) {
        return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => this.limparCache()));
    }
    limparCache() {
        this.categoriasCache$ = undefined;
    }
    static ɵfac = function CategoriaService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CategoriaService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CategoriaService, factory: CategoriaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CategoriaService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
