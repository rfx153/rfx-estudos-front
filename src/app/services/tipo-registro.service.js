import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import * as i0 from "@angular/core";
export class TipoRegistroService {
    http = inject(HttpClient);
    apiUrl = `${environment.apiUrl}/tipos-registro`;
    tiposCache$;
    listarTodos() {
        if (!this.tiposCache$) {
            this.tiposCache$ = this.http.get(this.apiUrl).pipe(shareReplay(1));
        }
        return this.tiposCache$;
    }
    criar(tipoRegistro) {
        return this.http.post(this.apiUrl, tipoRegistro).pipe(tap(() => this.limparCache()));
    }
    atualizar(id, tipoRegistro) {
        return this.http.put(`${this.apiUrl}/${id}`, tipoRegistro).pipe(tap(() => this.limparCache()));
    }
    excluir(id) {
        return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => this.limparCache()));
    }
    limparCache() {
        this.tiposCache$ = undefined;
    }
    static ɵfac = function TipoRegistroService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TipoRegistroService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TipoRegistroService, factory: TipoRegistroService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TipoRegistroService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
