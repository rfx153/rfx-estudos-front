import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin, map, of, switchMap } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CicloService } from '../../services/ciclo.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CicloVisualizacaoComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵtext(1, "Todos os ciclos");
    i0.ɵɵelementEnd();
} }
function CicloVisualizacaoComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, "Carregando ciclos...");
    i0.ɵɵelementEnd();
} }
function CicloVisualizacaoComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "strong");
    i0.ɵɵtext(2, "N\u00E3o foi poss\u00EDvel carregar os ciclos.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Verifique se a API de ciclos est\u00E1 dispon\u00EDvel.");
    i0.ɵɵelementEnd()();
} }
function CicloVisualizacaoComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "strong");
    i0.ɵɵtext(2, "Nenhum ciclo cadastrado.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Crie um ciclo e adicione mat\u00E9rias para montar o quadro.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 13);
    i0.ɵɵtext(6, "Criar ciclo");
    i0.ɵɵelementEnd()();
} }
function CicloVisualizacaoComponent_section_16_article_1_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const quadro_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(quadro_r1.ciclo.observacoes);
} }
function CicloVisualizacaoComponent_section_16_article_1_ol_10_li_1_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r2.tipoItem(item_r2), " \u00B7 ", item_r2.ativo ? "Na rota\u00E7\u00E3o" : "Pausado");
} }
function CicloVisualizacaoComponent_section_16_article_1_ol_10_li_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r2.tipoItem(item_r2), " \u00B7 ", ctx_r2.conclusaoItem(item_r2));
} }
function CicloVisualizacaoComponent_section_16_article_1_ol_10_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span", 24);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CicloVisualizacaoComponent_section_16_article_1_ol_10_li_1_small_5_Template, 2, 2, "small", 25)(6, CicloVisualizacaoComponent_section_16_article_1_ol_10_li_1_small_6_Template, 2, 2, "small", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const indice_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("inactive", !item_r2.ativo)("completed", !!item_r2.registroConclusao);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(indice_r4 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.nomeItem(item_r2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r2.registroConclusao);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r2.registroConclusao);
} }
function CicloVisualizacaoComponent_section_16_article_1_ol_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ol", 22);
    i0.ɵɵtemplate(1, CicloVisualizacaoComponent_section_16_article_1_ol_10_li_1_Template, 7, 8, "li", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const quadro_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", quadro_r1.itens);
} }
function CicloVisualizacaoComponent_section_16_article_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1, "Nenhum item adicionado.");
    i0.ɵɵelementEnd();
} }
function CicloVisualizacaoComponent_section_16_article_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 16)(1, "header", 17)(2, "div")(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 18);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, CicloVisualizacaoComponent_section_16_article_1_p_9_Template, 2, 1, "p", 19)(10, CicloVisualizacaoComponent_section_16_article_1_ol_10_Template, 2, 1, "ol", 20)(11, CicloVisualizacaoComponent_section_16_article_1_ng_template_11_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const quadro_r1 = ctx.$implicit;
    const cicloSemMaterias_r5 = i0.ɵɵreference(12);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(quadro_r1.ciclo.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", quadro_r1.itens.length, " item(ns)");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("paused", !quadro_r1.ciclo.ativo);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", quadro_r1.ciclo.ativo ? "Ativo" : "Pausado", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", quadro_r1.ciclo.observacoes);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", quadro_r1.itens.length)("ngIfElse", cicloSemMaterias_r5);
} }
function CicloVisualizacaoComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14);
    i0.ɵɵtemplate(1, CicloVisualizacaoComponent_section_16_article_1_Template, 13, 8, "article", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("single-cycle", ctx_r2.visualizacaoIndividual);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.quadros);
} }
export class CicloVisualizacaoComponent {
    route = inject(ActivatedRoute);
    cicloService = inject(CicloService);
    cdr = inject(ChangeDetectorRef);
    quadros = [];
    carregando = true;
    erro = false;
    visualizacaoIndividual = false;
    ngOnInit() {
        const parametroId = this.route.snapshot.paramMap.get('id');
        const id = parametroId ? Number(parametroId) : null;
        this.visualizacaoIndividual = id !== null;
        if (id !== null && (!Number.isInteger(id) || id <= 0)) {
            this.erro = true;
            this.carregando = false;
            return;
        }
        const ciclos$ = id
            ? this.cicloService.buscarPorId(id).pipe(map((ciclo) => [ciclo]))
            : this.cicloService.listarTodos();
        ciclos$
            .pipe(switchMap((ciclos) => {
            if (!ciclos.length)
                return of([]);
            return forkJoin(ciclos.map((ciclo) => this.cicloService.listarItens(ciclo.id).pipe(map((itens) => ({
                ciclo,
                itens: [...itens].sort((a, b) => a.ordem - b.ordem),
            })))));
        }), finalize(() => {
            this.carregando = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (quadros) => {
                this.quadros = quadros;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar ciclos:', erro);
                this.erro = true;
                this.cdr.detectChanges();
            },
        });
    }
    nomeItem(item) {
        return item.materia?.nome ?? item.planejamentoGrupoMateria?.nome ?? 'Item sem nome';
    }
    tipoItem(item) {
        return item.materia ? 'Matéria' : 'Bloco';
    }
    conclusaoItem(item) {
        const registro = item.registroConclusao;
        if (!registro?.dataEstudo || !registro.tempoEstudado)
            return '';
        const [ano, mes, dia] = registro.dataEstudo.substring(0, 10).split('-');
        return `Feito em ${dia}/${mes}/${ano} · ${registro.tempoEstudado.substring(0, 5)} de estudo`;
    }
    static ɵfac = function CicloVisualizacaoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CicloVisualizacaoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CicloVisualizacaoComponent, selectors: [["app-ciclo-visualizacao"]], decls: 17, vars: 7, consts: [["cicloSemMaterias", ""], [1, "cycle-view-page"], [1, "cycle-page-heading"], [1, "eyebrow"], [1, "heading-actions"], ["class", "secondary-link", "routerLink", "/ciclos", 4, "ngIf"], ["routerLink", "/ciclos/editar", 1, "edit-link"], ["class", "state-card", 4, "ngIf"], ["class", "state-card error", 4, "ngIf"], ["class", "cycles-board", "aria-label", "Quadro de ciclos", 3, "single-cycle", 4, "ngIf"], ["routerLink", "/ciclos", 1, "secondary-link"], [1, "state-card"], [1, "state-card", "error"], ["routerLink", "/ciclos/editar", 1, "edit-link", "inline"], ["aria-label", "Quadro de ciclos", 1, "cycles-board"], ["class", "cycle-column", 4, "ngFor", "ngForOf"], [1, "cycle-column"], [1, "cycle-column-heading"], [1, "cycle-status"], ["class", "cycle-notes", 4, "ngIf"], ["class", "subjects-grid", 4, "ngIf", "ngIfElse"], [1, "cycle-notes"], [1, "subjects-grid"], [3, "inactive", "completed", 4, "ngFor", "ngForOf"], [1, "subject-order"], [4, "ngIf"], ["class", "completion-time", 4, "ngIf"], [1, "completion-time"], [1, "empty-column"]], template: function CicloVisualizacaoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 1)(1, "header", 2)(2, "div")(3, "span", 3);
            i0.ɵɵtext(4, "Rota\u00E7\u00E3o de estudos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 4);
            i0.ɵɵtemplate(10, CicloVisualizacaoComponent_a_10_Template, 2, 0, "a", 5);
            i0.ɵɵelementStart(11, "a", 6);
            i0.ɵɵtext(12, "Editar ciclos");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(13, CicloVisualizacaoComponent_div_13_Template, 2, 0, "div", 7)(14, CicloVisualizacaoComponent_div_14_Template, 5, 0, "div", 8)(15, CicloVisualizacaoComponent_div_15_Template, 7, 0, "div", 7)(16, CicloVisualizacaoComponent_section_16_Template, 2, 3, "section", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.visualizacaoIndividual ? ctx.quadros[0]?.ciclo?.nome || "Ciclo" : "Ciclos");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.visualizacaoIndividual ? "Mat\u00E9rias e blocos organizados na ordem deste ciclo." : "Visualize lado a lado os ciclos cadastrados e seus itens.", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.visualizacaoIndividual);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.erro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.erro && !ctx.quadros.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.erro && ctx.quadros.length);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RouterLink], styles: [".cycle-view-page[_ngcontent-%COMP%] { display: grid; gap: 22px; }\n.cycle-page-heading[_ngcontent-%COMP%] { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; }\n.eyebrow[_ngcontent-%COMP%] { display: block; margin-bottom: 6px; color: #1677ff; font-size: 11px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }\n.cycle-page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: 0; color: var(--%NS%text, #0f172a); font-size: clamp(28px, 5vw, 40px); }\n.cycle-page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .state-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 7px 0 0; color: var(--%NS%text-muted, #64748b); }\n.heading-actions[_ngcontent-%COMP%] { display: flex; gap: 9px; }\n.edit-link[_ngcontent-%COMP%], .secondary-link[_ngcontent-%COMP%] { padding: 9px 13px; border: 1px solid var(--%NS%border, #d1d5db); border-radius: 8px; color: var(--%NS%text, #0f172a); font-size: 13px; font-weight: 750; text-decoration: none; white-space: nowrap; }\n.edit-link[_ngcontent-%COMP%] { border-color: #1677ff; background: #1677ff; color: #fff; }\n.edit-link.inline[_ngcontent-%COMP%] { display: inline-block; margin-top: 15px; }\n.cycles-board[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 18px; align-items: start; }\n.cycles-board.single-cycle[_ngcontent-%COMP%] { grid-template-columns: minmax(0, 720px); }\n.cycle-column[_ngcontent-%COMP%], .state-card[_ngcontent-%COMP%] { overflow: hidden; border: 1px solid var(--%NS%border, #dfe3e8); border-radius: 12px; background: var(--%NS%surface, #fff); }\n.cycle-column-heading[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 72px; padding: 15px 17px; border-bottom: 1px solid var(--%NS%border, #dfe3e8); background: var(--%NS%surface-soft, #f8fafc); }\n.cycle-column-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: var(--%NS%text, #0f172a); font-size: 18px; }\n.cycle-column-heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: var(--%NS%text-muted, #64748b); }\n.cycle-status[_ngcontent-%COMP%] { padding: 4px 8px; border-radius: 999px; background: #dcfce7; color: #15803d; font-size: 11px; font-weight: 800; }\n.cycle-status.paused[_ngcontent-%COMP%] { background: #e2e8f0; color: #64748b; }\n.cycle-notes[_ngcontent-%COMP%] { margin: 0; padding: 11px 17px; border-bottom: 1px solid var(--%NS%border, #e5e7eb); color: var(--%NS%text-muted, #64748b); font-size: 12px; }\n.subjects-grid[_ngcontent-%COMP%] { display: grid; gap: 1px; margin: 0; padding: 0; background: var(--%NS%border, #dfe3e8); list-style: none; }\n.subjects-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { display: grid; grid-template-columns: 28px minmax(0, 1fr) auto; align-items: center; gap: 9px; min-height: 48px; padding: 9px 12px; background: var(--%NS%surface, #fff); color: var(--%NS%text, #0f172a); }\n.subjects-grid[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%] { background: #bbf7d0; color: #14532d; }\n.subjects-grid[_ngcontent-%COMP%]   li.inactive[_ngcontent-%COMP%] { background: var(--%NS%surface, #fff); color: var(--%NS%text-muted, #64748b); }\n.subject-order[_ngcontent-%COMP%] { display: grid; width: 25px; height: 25px; place-items: center; border-radius: 6px; background: rgba(255, 255, 255, .68); font-size: 11px; font-weight: 850; }\n.subjects-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { overflow: hidden; font-size: 13px; text-overflow: ellipsis; white-space: nowrap; }\n.subjects-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { font-size: 10px; font-weight: 750; text-transform: uppercase; }\n.empty-column[_ngcontent-%COMP%], .state-card[_ngcontent-%COMP%] { padding: 30px 18px; color: var(--%NS%text-muted, #64748b); text-align: center; }\n.state-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--%NS%text, #0f172a); }\n\n@media (max-width: 640px) {\n  .cycle-page-heading[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; }\n  .heading-actions[_ngcontent-%COMP%] { flex-wrap: wrap; }\n  .subjects-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { grid-template-columns: 28px minmax(0, 1fr); }\n  .subjects-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { grid-column: 2; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CicloVisualizacaoComponent, [{
        type: Component,
        args: [{ selector: 'app-ciclo-visualizacao', standalone: true, imports: [CommonModule, RouterLink], template: "<section class=\"cycle-view-page\">\n  <header class=\"cycle-page-heading\">\n    <div>\n      <span class=\"eyebrow\">Rota\u00E7\u00E3o de estudos</span>\n      <h1>{{ visualizacaoIndividual ? quadros[0]?.ciclo?.nome || 'Ciclo' : 'Ciclos' }}</h1>\n      <p>\n        {{\n          visualizacaoIndividual\n            ? 'Mat\u00E9rias e blocos organizados na ordem deste ciclo.'\n            : 'Visualize lado a lado os ciclos cadastrados e seus itens.'\n        }}\n      </p>\n    </div>\n    <div class=\"heading-actions\">\n      <a *ngIf=\"visualizacaoIndividual\" class=\"secondary-link\" routerLink=\"/ciclos\">Todos os ciclos</a>\n      <a class=\"edit-link\" routerLink=\"/ciclos/editar\">Editar ciclos</a>\n    </div>\n  </header>\n\n  <div class=\"state-card\" *ngIf=\"carregando\">Carregando ciclos...</div>\n\n  <div class=\"state-card error\" *ngIf=\"!carregando && erro\">\n    <strong>N\u00E3o foi poss\u00EDvel carregar os ciclos.</strong>\n    <p>Verifique se a API de ciclos est\u00E1 dispon\u00EDvel.</p>\n  </div>\n\n  <div class=\"state-card\" *ngIf=\"!carregando && !erro && !quadros.length\">\n    <strong>Nenhum ciclo cadastrado.</strong>\n    <p>Crie um ciclo e adicione mat\u00E9rias para montar o quadro.</p>\n    <a class=\"edit-link inline\" routerLink=\"/ciclos/editar\">Criar ciclo</a>\n  </div>\n\n  <section\n    class=\"cycles-board\"\n    [class.single-cycle]=\"visualizacaoIndividual\"\n    *ngIf=\"!carregando && !erro && quadros.length\"\n    aria-label=\"Quadro de ciclos\"\n  >\n    <article class=\"cycle-column\" *ngFor=\"let quadro of quadros\">\n      <header class=\"cycle-column-heading\">\n        <div>\n          <h2>{{ quadro.ciclo.nome }}</h2>\n          <small>{{ quadro.itens.length }} item(ns)</small>\n        </div>\n        <span class=\"cycle-status\" [class.paused]=\"!quadro.ciclo.ativo\">\n          {{ quadro.ciclo.ativo ? 'Ativo' : 'Pausado' }}\n        </span>\n      </header>\n\n      <p class=\"cycle-notes\" *ngIf=\"quadro.ciclo.observacoes\">{{ quadro.ciclo.observacoes }}</p>\n\n      <ol class=\"subjects-grid\" *ngIf=\"quadro.itens.length; else cicloSemMaterias\">\n        <li\n          *ngFor=\"let item of quadro.itens; let indice = index\"\n          [class.inactive]=\"!item.ativo\"\n          [class.completed]=\"!!item.registroConclusao\">\n          <span class=\"subject-order\">{{ indice + 1 }}</span>\n          <strong>{{ nomeItem(item) }}</strong>\n          <small *ngIf=\"!item.registroConclusao\">{{ tipoItem(item) }} \u00B7 {{ item.ativo ? 'Na rota\u00E7\u00E3o' : 'Pausado' }}</small>\n          <small class=\"completion-time\" *ngIf=\"item.registroConclusao\">{{ tipoItem(item) }} \u00B7 {{ conclusaoItem(item) }}</small>\n        </li>\n      </ol>\n\n      <ng-template #cicloSemMaterias>\n        <div class=\"empty-column\">Nenhum item adicionado.</div>\n      </ng-template>\n    </article>\n  </section>\n</section>\n", styles: [".cycle-view-page { display: grid; gap: 22px; }\n.cycle-page-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; }\n.eyebrow { display: block; margin-bottom: 6px; color: #1677ff; font-size: 11px; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }\n.cycle-page-heading h1 { margin: 0; color: var(--text, #0f172a); font-size: clamp(28px, 5vw, 40px); }\n.cycle-page-heading p, .state-card p { margin: 7px 0 0; color: var(--text-muted, #64748b); }\n.heading-actions { display: flex; gap: 9px; }\n.edit-link, .secondary-link { padding: 9px 13px; border: 1px solid var(--border, #d1d5db); border-radius: 8px; color: var(--text, #0f172a); font-size: 13px; font-weight: 750; text-decoration: none; white-space: nowrap; }\n.edit-link { border-color: #1677ff; background: #1677ff; color: #fff; }\n.edit-link.inline { display: inline-block; margin-top: 15px; }\n.cycles-board { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 18px; align-items: start; }\n.cycles-board.single-cycle { grid-template-columns: minmax(0, 720px); }\n.cycle-column, .state-card { overflow: hidden; border: 1px solid var(--border, #dfe3e8); border-radius: 12px; background: var(--surface, #fff); }\n.cycle-column-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 72px; padding: 15px 17px; border-bottom: 1px solid var(--border, #dfe3e8); background: var(--surface-soft, #f8fafc); }\n.cycle-column-heading h2 { margin: 0; color: var(--text, #0f172a); font-size: 18px; }\n.cycle-column-heading small { color: var(--text-muted, #64748b); }\n.cycle-status { padding: 4px 8px; border-radius: 999px; background: #dcfce7; color: #15803d; font-size: 11px; font-weight: 800; }\n.cycle-status.paused { background: #e2e8f0; color: #64748b; }\n.cycle-notes { margin: 0; padding: 11px 17px; border-bottom: 1px solid var(--border, #e5e7eb); color: var(--text-muted, #64748b); font-size: 12px; }\n.subjects-grid { display: grid; gap: 1px; margin: 0; padding: 0; background: var(--border, #dfe3e8); list-style: none; }\n.subjects-grid li { display: grid; grid-template-columns: 28px minmax(0, 1fr) auto; align-items: center; gap: 9px; min-height: 48px; padding: 9px 12px; background: var(--surface, #fff); color: var(--text, #0f172a); }\n.subjects-grid li.completed { background: #bbf7d0; color: #14532d; }\n.subjects-grid li.inactive { background: var(--surface, #fff); color: var(--text-muted, #64748b); }\n.subject-order { display: grid; width: 25px; height: 25px; place-items: center; border-radius: 6px; background: rgba(255, 255, 255, .68); font-size: 11px; font-weight: 850; }\n.subjects-grid strong { overflow: hidden; font-size: 13px; text-overflow: ellipsis; white-space: nowrap; }\n.subjects-grid small { font-size: 10px; font-weight: 750; text-transform: uppercase; }\n.empty-column, .state-card { padding: 30px 18px; color: var(--text-muted, #64748b); text-align: center; }\n.state-card strong { color: var(--text, #0f172a); }\n\n@media (max-width: 640px) {\n  .cycle-page-heading { align-items: stretch; flex-direction: column; }\n  .heading-actions { flex-wrap: wrap; }\n  .subjects-grid li { grid-template-columns: 28px minmax(0, 1fr); }\n  .subjects-grid small { grid-column: 2; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CicloVisualizacaoComponent, { className: "CicloVisualizacaoComponent", filePath: "src/app/pages/ciclo-visualizacao/ciclo-visualizacao.ts", lineNumber: 20 }); })();
