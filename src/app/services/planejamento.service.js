import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import * as i0 from "@angular/core";
export class PlanejamentoService {
    http = inject(HttpClient);
    apiUrl = `${environment.apiUrl}/planejamentos`;
    cache$;
    listarTodos() {
        if (!this.cache$) {
            this.cache$ = this.http.get(this.apiUrl).pipe(shareReplay(1));
        }
        return this.cache$;
    }
    buscarPorId(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    listarAproveitamentos(planejamentoId) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/aproveitamentos`);
    }
    criar(planejamento) {
        return this.http
            .post(this.apiUrl, planejamento)
            .pipe(tap(() => this.limparCache()));
    }
    atualizar(id, planejamento) {
        return this.http
            .put(`${this.apiUrl}/${id}`, planejamento)
            .pipe(tap(() => this.limparCache()));
    }
    excluir(id) {
        return this.http.delete(`${this.apiUrl}/${id}`).pipe(tap(() => this.limparCache()));
    }
    listarGruposMaterias(planejamentoId) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/grupos-materias`);
    }
    adicionarGrupoMateria(planejamentoId, dados) {
        return this.http.post(`${this.apiUrl}/${planejamentoId}/grupos-materias`, dados);
    }
    atualizarGrupoMateria(planejamentoId, id, dados) {
        return this.http.put(`${this.apiUrl}/${planejamentoId}/grupos-materias/${id}`, dados);
    }
    excluirGrupoMateria(planejamentoId, id) {
        return this.http.delete(`${this.apiUrl}/${planejamentoId}/grupos-materias/${id}`);
    }
    listarMaterias(planejamentoId) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/materias`);
    }
    buscarMateria(planejamentoId, id) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/materias/${id}`);
    }
    adicionarMateria(planejamentoId, dados) {
        return this.http.post(`${this.apiUrl}/${planejamentoId}/materias`, dados);
    }
    atualizarMateria(planejamentoId, id, dados) {
        return this.http.put(`${this.apiUrl}/${planejamentoId}/materias/${id}`, dados);
    }
    excluirMateria(planejamentoId, id) {
        return this.http.delete(`${this.apiUrl}/${planejamentoId}/materias/${id}`);
    }
    listarGrupos(planejamentoId, planejamentoMateriaId) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos`);
    }
    buscarGrupo(planejamentoId, planejamentoMateriaId, id) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${id}`);
    }
    adicionarGrupo(planejamentoId, planejamentoMateriaId, dados) {
        return this.http.post(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos`, dados);
    }
    atualizarGrupo(planejamentoId, planejamentoMateriaId, id, dados) {
        return this.http.put(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${id}`, dados);
    }
    excluirGrupo(planejamentoId, planejamentoMateriaId, id) {
        return this.http.delete(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${id}`);
    }
    listarItens(planejamentoId, planejamentoMateriaId, grupoId) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens`);
    }
    buscarItem(planejamentoId, planejamentoMateriaId, grupoId, id) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens/${id}`);
    }
    adicionarItem(planejamentoId, planejamentoMateriaId, grupoId, dados) {
        return this.http.post(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens`, dados);
    }
    atualizarItem(planejamentoId, planejamentoMateriaId, grupoId, id, dados) {
        return this.http.put(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens/${id}`, dados);
    }
    excluirItem(planejamentoId, planejamentoMateriaId, grupoId, id) {
        return this.http.delete(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens/${id}`);
    }
    listarEtapas(planejamentoId, planejamentoMateriaId, grupoId, itemId) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens/${itemId}/etapas`);
    }
    buscarEtapa(planejamentoId, planejamentoMateriaId, grupoId, itemId, id) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens/${itemId}/etapas/${id}`);
    }
    adicionarEtapa(planejamentoId, planejamentoMateriaId, grupoId, itemId, dados) {
        return this.http.post(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens/${itemId}/etapas`, dados);
    }
    atualizarEtapa(planejamentoId, planejamentoMateriaId, grupoId, itemId, id, dados) {
        return this.http.put(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens/${itemId}/etapas/${id}`, dados);
    }
    excluirEtapa(planejamentoId, planejamentoMateriaId, grupoId, itemId, id) {
        return this.http.delete(`${this.apiUrl}/${planejamentoId}/materias/${planejamentoMateriaId}/grupos/${grupoId}/itens/${itemId}/etapas/${id}`);
    }
    buscarEtapaPorAssunto(planejamentoId, assuntoId, tipoRegistroId) {
        return this.http.get(`${this.apiUrl}/${planejamentoId}/etapas-por-assunto?assuntoId=${assuntoId}&tipoRegistroId=${tipoRegistroId}`);
    }
    adicionarEtapaPorAssunto(planejamentoId, assuntoId, tipoRegistroId) {
        return this.http.post(`${this.apiUrl}/${planejamentoId}/etapas-por-assunto`, { assuntoId, tipoRegistroId });
    }
    limparCache() {
        this.cache$ = undefined;
    }
    static ɵfac = function PlanejamentoService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PlanejamentoService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PlanejamentoService, factory: PlanejamentoService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanejamentoService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
