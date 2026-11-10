import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class MateriaService {
    http;
    // 🌍 URL dinâmica baseada no ambiente (Local ou Produção)
    apiUrl = `${environment.apiUrl}/materias`;
    materiasCache$;
    constructor(http) {
        this.http = http;
    }
    // Busca todas as matérias do banco
    listarTodas() {
        if (!this.materiasCache$) {
            this.materiasCache$ = this.http.get(this.apiUrl).pipe(shareReplay(1));
        }
        return this.materiasCache$;
    }
    // Envia uma nova matéria para salvar no banco
    criar(materia) {
        return this.http.post(this.apiUrl, materia).pipe(tap(() => this.limparCache()));
    }
    atualizar(id, materia) {
        return this.http.put(`${this.apiUrl}/${id}`, materia).pipe(tap(() => this.limparCache()));
    }
    excluir(id) {
        return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => this.limparCache()));
    }
    limparCache() {
        this.materiasCache$ = undefined;
    }
    static ɵfac = function MateriaService_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || MateriaService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MateriaService, factory: MateriaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MateriaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
