import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import * as i0 from "@angular/core";
export class CicloService {
    http = inject(HttpClient);
    apiUrl = `${environment.apiUrl}/ciclos`;
    listarTodos() {
        return this.http.get(this.apiUrl);
    }
    buscarPorId(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    criar(ciclo) {
        return this.http.post(this.apiUrl, ciclo);
    }
    atualizar(id, ciclo) {
        return this.http.put(`${this.apiUrl}/${id}`, ciclo);
    }
    excluir(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
    listarItens(cicloId) {
        return this.http.get(`${this.apiUrl}/${cicloId}/itens`);
    }
    adicionarItem(cicloId, dados) {
        return this.http.post(`${this.apiUrl}/${cicloId}/itens`, dados);
    }
    atualizarItem(cicloId, itemId, dados) {
        return this.http.put(`${this.apiUrl}/${cicloId}/itens/${itemId}`, dados);
    }
    excluirItem(cicloId, itemId) {
        return this.http.delete(`${this.apiUrl}/${cicloId}/itens/${itemId}`);
    }
    reordenarItens(cicloId, itens) {
        return this.http.put(`${this.apiUrl}/${cicloId}/itens/ordem`, {
            itens: itens.map((item, indice) => ({ id: item.id, ordem: indice + 1 })),
        });
    }
    reiniciar(cicloId) {
        return this.http.put(`${this.apiUrl}/${cicloId}/reiniciar`, {});
    }
    static ɵfac = function CicloService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CicloService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CicloService, factory: CicloService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CicloService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
