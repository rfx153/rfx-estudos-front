import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MetodologiaComponent_span_18_small_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "\u2192");
    i0.ɵɵelementEnd();
} }
function MetodologiaComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MetodologiaComponent_span_18_small_3_Template, 2, 0, "small", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const etapa_r1 = ctx.$implicit;
    const ultimo_r2 = ctx.last;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(etapa_r1.sigla);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ultimo_r2);
} }
function MetodologiaComponent_article_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 16)(1, "div", 17)(2, "span", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 19);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 20);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "h3");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 21);
    i0.ɵɵelement(13, "span");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const etapa_r3 = ctx.$implicit;
    const indice_r4 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(indice_r4 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(etapa_r3.sigla);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", etapa_r3.minutos, " min");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(etapa_r3.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(etapa_r3.descricao);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", etapa_r3.minutos * 2, "%");
} }
function MetodologiaComponent_article_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 16)(1, "div", 17)(2, "span", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 19);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 20);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "h3");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 21);
    i0.ɵɵelement(13, "span");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const etapa_r5 = ctx.$implicit;
    const indice_r6 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(indice_r6 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(etapa_r5.sigla);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", etapa_r5.minutos, " min");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(etapa_r5.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(etapa_r5.descricao);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", etapa_r5.minutos * 2, "%");
} }
export class MetodologiaComponent {
    etapas = [
        { sigla: 'Q', nome: 'Questões do assunto antigo', descricao: 'Resolva questões para recuperar o que já foi estudado.', minutos: 5, grupo: 'novo' },
        { sigla: 'R', nome: 'Revisão do assunto antigo', descricao: 'Revise os erros e os pontos importantes do assunto anterior.', minutos: 3, grupo: 'novo' },
        { sigla: 'A', nome: 'Leitura do assunto novo', descricao: 'Leia e compreenda o novo conteúdo com atenção.', minutos: 34, grupo: 'novo' },
        { sigla: 'Q', nome: 'Questões do assunto novo', descricao: 'Resolva questões para aplicar o conteúdo recém-estudado.', minutos: 5, grupo: 'novo' },
        { sigla: 'R', nome: 'Revisão do assunto novo', descricao: 'Revise o conteúdo novo e consolide os pontos principais.', minutos: 3, grupo: 'novo' },
        { sigla: 'R', nome: 'Revisão do assunto antigo', descricao: 'Retome um assunto antigo para manter o conteúdo ativo.', minutos: 3, grupo: 'antigo' },
        { sigla: 'Q', nome: 'Questão do assunto antigo', descricao: 'Finalize testando a retenção do assunto revisado.', minutos: 5, grupo: 'antigo' }
    ];
    get etapasNovas() {
        return this.etapas.filter(etapa => etapa.grupo === 'novo');
    }
    get etapasAntigas() {
        return this.etapas.filter(etapa => etapa.grupo === 'antigo');
    }
    get totalMinutos() {
        return this.etapasNovas.reduce((total, etapa) => total + etapa.minutos, 0);
    }
    static ɵfac = function MetodologiaComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MetodologiaComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MetodologiaComponent, selectors: [["app-metodologia"]], decls: 47, vars: 6, consts: [[1, "metodologia-page", "page-card"], [1, "metodologia-heading"], [1, "eyebrow"], [1, "metodologia-total"], [1, "metodologia-intro"], [1, "sequence-label"], ["aria-label", "Estudo de assunto novo seguido da revis\u00E3o de assunto antigo", 1, "sequence"], [4, "ngFor", "ngForOf"], [1, "etapas-section"], [1, "section-title"], [1, "time-badge"], [1, "grupo-titulo"], [1, "etapas-grid"], ["class", "etapa-card", 4, "ngFor", "ngForOf"], [1, "etapas-grid", "etapas-antigas"], [4, "ngIf"], [1, "etapa-card"], [1, "etapa-topo"], [1, "etapa-numero"], [1, "etapa-sigla"], [1, "etapa-tempo"], [1, "tempo-barra"]], template: function MetodologiaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "M\u00E9todo de estudo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Metodologia de assunto");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 3)(10, "strong");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, "por assunto");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "section", 4)(15, "span", 5);
            i0.ɵɵtext(16, "Ciclo do bloco");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 6);
            i0.ɵɵtemplate(18, MetodologiaComponent_span_18_Template, 4, 2, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p")(20, "strong");
            i0.ɵɵtext(21, "Q\u2013R\u2013A\u2013Q\u2013R");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(22, " para estudar um assunto novo + ");
            i0.ɵɵelementStart(23, "strong");
            i0.ɵɵtext(24, "R\u2013Q");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(25, " no final para revisar um assunto antigo.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "section", 8)(27, "div", 9)(28, "div")(29, "span", 2);
            i0.ɵɵtext(30, "Divis\u00E3o do tempo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "h2");
            i0.ɵɵtext(32, "50 minutos em etapas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "span", 10);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "h3", 11);
            i0.ɵɵtext(36, "Assunto novo \u2014 Q\u2013R\u2013A\u2013Q\u2013R ");
            i0.ɵɵelementStart(37, "span");
            i0.ɵɵtext(38, "50 min");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 12);
            i0.ɵɵtemplate(40, MetodologiaComponent_article_40_Template, 14, 7, "article", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "h3", 11);
            i0.ɵɵtext(42, "Assunto antigo \u2014 R\u2013Q ");
            i0.ɵɵelementStart(43, "span");
            i0.ɵɵtext(44, "8 min");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 14);
            i0.ɵɵtemplate(46, MetodologiaComponent_article_46_Template, 14, 7, "article", 13);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("Um ciclo de ", ctx.totalMinutos, " minutos para estudar, revisar e testar a reten\u00E7\u00E3o do conte\u00FAdo.");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx.totalMinutos, " min");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.etapas);
            i0.ɵɵadvance(16);
            i0.ɵɵtextInterpolate1("", ctx.totalMinutos, " minutos");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.etapasNovas);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.etapasAntigas);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf], styles: [".metodologia-page[_ngcontent-%COMP%] {\n  padding: clamp(20px, 4vw, 36px);\n}\n\n.metodologia-heading[_ngcontent-%COMP%], \n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.metodologia-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--%NS%text, #0f172a);\n}\n\n.metodologia-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.eyebrow[_ngcontent-%COMP%], \n.sequence-label[_ngcontent-%COMP%] {\n  color: #1677ff;\n  font-size: 12px;\n  font-weight: 850;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n\n.metodologia-total[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 100px;\n  padding: 14px 18px;\n  border-radius: 12px;\n  color: #fff;\n  background: #1677ff;\n  text-align: center;\n}\n\n.metodologia-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 24px; }\n.metodologia-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 12px; opacity: .85; }\n\n.metodologia-intro[_ngcontent-%COMP%] {\n  margin: 28px 0;\n  padding: 24px;\n  border: 1px solid #bfdbfe;\n  border-radius: 14px;\n  background: linear-gradient(135deg, #eff6ff, #fff);\n}\n\n.sequence[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; margin: 14px 0 12px; }\n.sequence[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: 8px; }\n.sequence[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 50%; color: #fff; background: #1677ff; }\n.sequence[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #64748b; font-size: 18px; }\n.metodologia-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: #475569; }\n\n.etapas-section[_ngcontent-%COMP%] { padding-top: 4px; }\n.time-badge[_ngcontent-%COMP%] { padding: 7px 12px; border-radius: 999px; color: #1d4ed8; background: #dbeafe; font-weight: 800; }\n.etapas-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 18px; }\n.grupo-titulo[_ngcontent-%COMP%] { display: flex; justify-content: space-between; gap: 12px; margin: 26px 0 0; color: var(--%NS%text, #0f172a); font-size: 16px; }\n.grupo-titulo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #1677ff; font-size: 13px; }\n.etapa-card[_ngcontent-%COMP%] { padding: 18px; border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 12px; background: var(--%NS%surface, #fff); }\n.etapa-topo[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; }\n.etapa-numero[_ngcontent-%COMP%] { color: var(--%NS%text-muted, #64748b); font-size: 12px; font-weight: 800; }\n.etapa-sigla[_ngcontent-%COMP%] { display: grid; width: 30px; height: 30px; place-items: center; border-radius: 8px; color: #fff; background: #1677ff; font-weight: 900; }\n.etapa-tempo[_ngcontent-%COMP%] { margin-left: auto; color: #1677ff; font-size: 13px; font-weight: 850; }\n.etapa-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 16px 0 6px; color: var(--%NS%text, #0f172a); }\n.etapa-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { min-height: 42px; margin: 0; color: var(--%NS%text-muted, #64748b); font-size: 14px; line-height: 1.5; }\n.tempo-barra[_ngcontent-%COMP%] { height: 5px; margin-top: 16px; overflow: hidden; border-radius: 999px; background: #e2e8f0; }\n.tempo-barra[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: block; height: 100%; border-radius: inherit; background: #60a5fa; }\n\n@media (max-width: 640px) {\n  .metodologia-heading[_ngcontent-%COMP%], .section-title[_ngcontent-%COMP%] { flex-direction: column; }\n  .metodologia-total[_ngcontent-%COMP%] { width: 100%; }\n  .sequence[_ngcontent-%COMP%] { flex-wrap: wrap; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MetodologiaComponent, [{
        type: Component,
        args: [{ selector: 'app-metodologia', standalone: true, imports: [CommonModule], template: "<section class=\"metodologia-page page-card\">\n  <header class=\"metodologia-heading\">\n    <div>\n      <span class=\"eyebrow\">M\u00E9todo de estudo</span>\n      <h1>Metodologia de assunto</h1>\n      <p>Um ciclo de {{ totalMinutos }} minutos para estudar, revisar e testar a reten\u00E7\u00E3o do conte\u00FAdo.</p>\n    </div>\n    <div class=\"metodologia-total\">\n      <strong>{{ totalMinutos }} min</strong>\n      <span>por assunto</span>\n    </div>\n  </header>\n\n  <section class=\"metodologia-intro\">\n    <span class=\"sequence-label\">Ciclo do bloco</span>\n    <div class=\"sequence\" aria-label=\"Estudo de assunto novo seguido da revis\u00E3o de assunto antigo\">\n      <span *ngFor=\"let etapa of etapas; let ultimo = last\">\n        <strong>{{ etapa.sigla }}</strong><small *ngIf=\"!ultimo\">\u2192</small>\n      </span>\n    </div>\n    <p><strong>Q\u2013R\u2013A\u2013Q\u2013R</strong> para estudar um assunto novo + <strong>R\u2013Q</strong> no final para revisar um assunto antigo.</p>\n  </section>\n\n  <section class=\"etapas-section\">\n    <div class=\"section-title\">\n      <div>\n        <span class=\"eyebrow\">Divis\u00E3o do tempo</span>\n        <h2>50 minutos em etapas</h2>\n      </div>\n      <span class=\"time-badge\">{{ totalMinutos }} minutos</span>\n    </div>\n\n    <h3 class=\"grupo-titulo\">Assunto novo \u2014 Q\u2013R\u2013A\u2013Q\u2013R <span>50 min</span></h3>\n    <div class=\"etapas-grid\">\n      <article class=\"etapa-card\" *ngFor=\"let etapa of etapasNovas; let indice = index\">\n        <div class=\"etapa-topo\">\n          <span class=\"etapa-numero\">{{ indice + 1 }}</span>\n          <span class=\"etapa-sigla\">{{ etapa.sigla }}</span>\n          <span class=\"etapa-tempo\">{{ etapa.minutos }} min</span>\n        </div>\n        <h3>{{ etapa.nome }}</h3>\n        <p>{{ etapa.descricao }}</p>\n        <div class=\"tempo-barra\"><span [style.width.%]=\"etapa.minutos * 2\"></span></div>\n      </article>\n    </div>\n\n    <h3 class=\"grupo-titulo\">Assunto antigo \u2014 R\u2013Q <span>8 min</span></h3>\n    <div class=\"etapas-grid etapas-antigas\">\n      <article class=\"etapa-card\" *ngFor=\"let etapa of etapasAntigas; let indice = index\">\n        <div class=\"etapa-topo\">\n          <span class=\"etapa-numero\">{{ indice + 1 }}</span>\n          <span class=\"etapa-sigla\">{{ etapa.sigla }}</span>\n          <span class=\"etapa-tempo\">{{ etapa.minutos }} min</span>\n        </div>\n        <h3>{{ etapa.nome }}</h3>\n        <p>{{ etapa.descricao }}</p>\n        <div class=\"tempo-barra\"><span [style.width.%]=\"etapa.minutos * 2\"></span></div>\n      </article>\n    </div>\n  </section>\n</section>\n", styles: [".metodologia-page {\n  padding: clamp(20px, 4vw, 36px);\n}\n\n.metodologia-heading,\n.section-title {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n}\n\n.metodologia-heading h1,\n.section-title h2 {\n  margin: 4px 0 0;\n  color: var(--text, #0f172a);\n}\n\n.metodologia-heading p {\n  margin: 8px 0 0;\n  color: var(--text-muted, #64748b);\n}\n\n.eyebrow,\n.sequence-label {\n  color: #1677ff;\n  font-size: 12px;\n  font-weight: 850;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n\n.metodologia-total {\n  display: grid;\n  min-width: 100px;\n  padding: 14px 18px;\n  border-radius: 12px;\n  color: #fff;\n  background: #1677ff;\n  text-align: center;\n}\n\n.metodologia-total strong { font-size: 24px; }\n.metodologia-total span { font-size: 12px; opacity: .85; }\n\n.metodologia-intro {\n  margin: 28px 0;\n  padding: 24px;\n  border: 1px solid #bfdbfe;\n  border-radius: 14px;\n  background: linear-gradient(135deg, #eff6ff, #fff);\n}\n\n.sequence { display: flex; align-items: center; gap: 8px; margin: 14px 0 12px; }\n.sequence span { display: inline-flex; align-items: center; gap: 8px; }\n.sequence strong { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 50%; color: #fff; background: #1677ff; }\n.sequence small { color: #64748b; font-size: 18px; }\n.metodologia-intro p { margin: 0; color: #475569; }\n\n.etapas-section { padding-top: 4px; }\n.time-badge { padding: 7px 12px; border-radius: 999px; color: #1d4ed8; background: #dbeafe; font-weight: 800; }\n.etapas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 18px; }\n.grupo-titulo { display: flex; justify-content: space-between; gap: 12px; margin: 26px 0 0; color: var(--text, #0f172a); font-size: 16px; }\n.grupo-titulo span { color: #1677ff; font-size: 13px; }\n.etapa-card { padding: 18px; border: 1px solid var(--border, #e5e7eb); border-radius: 12px; background: var(--surface, #fff); }\n.etapa-topo { display: flex; align-items: center; gap: 8px; }\n.etapa-numero { color: var(--text-muted, #64748b); font-size: 12px; font-weight: 800; }\n.etapa-sigla { display: grid; width: 30px; height: 30px; place-items: center; border-radius: 8px; color: #fff; background: #1677ff; font-weight: 900; }\n.etapa-tempo { margin-left: auto; color: #1677ff; font-size: 13px; font-weight: 850; }\n.etapa-card h3 { margin: 16px 0 6px; color: var(--text, #0f172a); }\n.etapa-card p { min-height: 42px; margin: 0; color: var(--text-muted, #64748b); font-size: 14px; line-height: 1.5; }\n.tempo-barra { height: 5px; margin-top: 16px; overflow: hidden; border-radius: 999px; background: #e2e8f0; }\n.tempo-barra span { display: block; height: 100%; border-radius: inherit; background: #60a5fa; }\n\n@media (max-width: 640px) {\n  .metodologia-heading, .section-title { flex-direction: column; }\n  .metodologia-total { width: 100%; }\n  .sequence { flex-wrap: wrap; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MetodologiaComponent, { className: "MetodologiaComponent", filePath: "src/app/pages/metodologia/metodologia.ts", lineNumber: 19 }); })();
