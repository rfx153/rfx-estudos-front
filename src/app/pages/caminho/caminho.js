import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = () => ["Nova York", "Tokyo", "Alemanha", "Paris", "R\u00FAssia", "Am\u00E9rica Latina"];
function CaminhoComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const destino_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(destino_r1);
} }
function CaminhoComponent_article_52_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1, "Nenhum marco definido ainda.");
    i0.ɵɵelementEnd();
} }
function CaminhoComponent_article_52_div_10_article_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 27);
} }
function CaminhoComponent_article_52_div_10_article_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 22)(1, "span", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CaminhoComponent_article_52_div_10_article_1_div_3_Template, 1, 0, "div", 24);
    i0.ɵɵelementStart(4, "div", 25)(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 26);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const marco_r2 = ctx.$implicit;
    const ultimo_r3 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵclassMap("status-" + marco_r2.status.toLowerCase().replace(" ", "-"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(marco_r2.status === "Feito" ? "\u2713" : "\u2022");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ultimo_r3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(marco_r2.nome);
    i0.ɵɵadvance();
    i0.ɵɵclassMap("status-" + marco_r2.status.toLowerCase().replace(" ", "-"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(marco_r2.status);
} }
function CaminhoComponent_article_52_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CaminhoComponent_article_52_div_10_article_1_Template, 9, 8, "article", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const area_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", area_r4.marcos);
} }
function CaminhoComponent_article_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 16)(1, "div", 8)(2, "div")(3, "span", 2);
    i0.ɵɵtext(4, "\u00C1rea do caminho");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(9, CaminhoComponent_article_52_div_9_Template, 2, 0, "div", 17)(10, CaminhoComponent_article_52_div_10_Template, 2, 1, "div", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const area_r4 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(area_r4.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(area_r4.descricao);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !area_r4.marcos.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", area_r4.marcos.length);
} }
export class CaminhoComponent {
    areas = [
        {
            nome: 'Graduação / Pesquisa',
            descricao: 'Formação acadêmica, produção e aprofundamento científico.',
            marcos: [
                { nome: 'Engenharia elétrica', status: 'Feito' },
                { nome: 'Computação', status: 'Feito' },
                { nome: 'Análise de sistemas', status: 'Feito' },
                { nome: 'Técnico em informática', status: 'Feito' },
                { nome: 'Pós-graduação', status: 'A fazer' },
                { nome: 'Mestrado', status: 'A fazer' },
                { nome: 'Artigos para congresso', status: 'Fazendo' }
            ]
        },
        {
            nome: 'Concursos',
            descricao: 'Construção da base e preparação para os próximos níveis.',
            marcos: [
                { nome: 'Concurso tribunal', status: 'Feito' },
                { nome: 'Refinar a base', status: 'A fazer' },
                { nome: 'Estudos para concurso de alto nível', status: 'Fazendo' }
            ]
        },
        {
            nome: 'Línguas',
            descricao: 'Idiomas que ampliam possibilidades acadêmicas e profissionais.',
            marcos: [
                { nome: 'Inglês', status: 'Feito' },
                { nome: 'Espanhol', status: 'Feito' },
                { nome: 'Francês', status: 'Fazendo' },
                { nome: 'Alemão', status: 'A fazer' }
            ]
        },
        {
            nome: 'Habilidades em tecnologia',
            descricao: 'Competências técnicas para apoiar os projetos e a carreira.',
            marcos: []
        }
    ];
    todosOsMarcos() {
        return this.areas.flatMap(area => area.marcos);
    }
    totalMarcos() {
        return this.todosOsMarcos().length;
    }
    totalPorStatus(status) {
        return this.todosOsMarcos().filter(marco => marco.status === status).length;
    }
    static ɵfac = function CaminhoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CaminhoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CaminhoComponent, selectors: [["app-caminho"]], decls: 53, vars: 7, consts: [[1, "caminho-page", "page-card"], [1, "caminho-heading"], [1, "eyebrow"], [1, "caminho-summary"], [1, "lembrete-section"], [1, "lembrete"], ["src", "/imagens/caminho-motivacao.png", "alt", "Painel de inspira\u00E7\u00E3o com fotos pessoais e destinos para conhecer"], [1, "destinos-section"], [1, "section-heading"], [1, "destinos-list"], [4, "ngFor", "ngForOf"], [1, "amores-section"], ["src", "/imagens/coisas-que-amo.png", "alt", "Ilustra\u00E7\u00E3o reunindo matem\u00E1tica, computa\u00E7\u00E3o, l\u00EDnguas, fam\u00EDlia, bolos, s\u00E9ries, academia, m\u00FAsica e corridas", 1, "amores-image"], ["aria-label", "Resumo do caminho", 1, "status-resumo"], [1, "areas-grid"], ["class", "caminho-section area-section", 4, "ngFor", "ngForOf"], [1, "caminho-section", "area-section"], ["class", "area-vazia", 4, "ngIf"], ["class", "marcos-list", 4, "ngIf"], [1, "area-vazia"], [1, "marcos-list"], ["class", "marco", 4, "ngFor", "ngForOf"], [1, "marco"], [1, "marco-marker"], ["class", "marco-line", 4, "ngIf"], [1, "marco-content"], [1, "status-pill"], [1, "marco-line"]], template: function CaminhoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "Planejamento macro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Meu caminho");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Uma vis\u00E3o de longo prazo para acompanhar conquistas, pr\u00F3ximos passos e a dire\u00E7\u00E3o da sua jornada.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 3)(10, "strong");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, "marcos no caminho");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "section", 4)(15, "p", 5);
            i0.ɵɵtext(16, "Lembre-se onde voc\u00EA quer chegar....");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "img", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "section", 7)(19, "div", 8)(20, "div")(21, "span", 2);
            i0.ɵɵtext(22, "Vis\u00E3o de futuro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "h2");
            i0.ɵɵtext(24, "Lugares para conhecer");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "div", 9);
            i0.ɵɵtemplate(26, CaminhoComponent_span_26_Template, 2, 1, "span", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "section", 11)(28, "div", 8)(29, "div")(30, "span", 2);
            i0.ɵɵtext(31, "Minha identidade");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "h2");
            i0.ɵɵtext(33, "Coisas que amo");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(34, "img", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "section", 13)(36, "div")(37, "strong");
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "span");
            i0.ɵɵtext(40, "Feitos");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "div")(42, "strong");
            i0.ɵɵtext(43);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "span");
            i0.ɵɵtext(45, "Em andamento");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "div")(47, "strong");
            i0.ɵɵtext(48);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "span");
            i0.ɵɵtext(50, "A fazer");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(51, "section", 14);
            i0.ɵɵtemplate(52, CaminhoComponent_article_52_Template, 11, 4, "article", 15);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.totalMarcos());
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.totalPorStatus("Feito"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.totalPorStatus("Fazendo"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.totalPorStatus("A fazer"));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.areas);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf], styles: [".caminho-page[_ngcontent-%COMP%] { padding: clamp(20px, 4vw, 36px); }\n.caminho-heading[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }\n.caminho-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 4px 0 0; color: var(--%NS%text, #0f172a); }\n.caminho-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: 660px; margin: 8px 0 0; color: var(--%NS%text-muted, #64748b); }\n.eyebrow[_ngcontent-%COMP%] { color: #1677ff; font-size: 12px; font-weight: 850; letter-spacing: .04em; text-transform: uppercase; }\n.caminho-summary[_ngcontent-%COMP%] { display: grid; min-width: 130px; padding: 14px 18px; border-radius: 12px; color: #fff; background: #1677ff; text-align: center; }\n.caminho-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 28px; }\n.caminho-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 12px; opacity: .85; }\n.lembrete-section[_ngcontent-%COMP%] { position: relative; min-height: 230px; overflow: hidden; margin: 28px 0 20px; border-radius: 14px; background: #0f172a; }\n.lembrete-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { display: block; width: 100%; height: 300px; object-fit: cover; opacity: .72; }\n.lembrete[_ngcontent-%COMP%] { position: absolute; z-index: 1; top: 22px; left: 26px; max-width: 520px; margin: 0; color: #fff; font-family: Georgia, serif; font-size: clamp(24px, 4vw, 42px); font-style: italic; font-weight: 700; line-height: 1.1; text-shadow: 0 2px 14px rgba(0,0,0,.55); }\n.destinos-section[_ngcontent-%COMP%] { margin: 20px 0 24px; padding: 20px; border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 12px; background: var(--%NS%surface-soft, #f8fafc); }\n.destinos-list[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }\n.destinos-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { padding: 14px 8px; border-radius: 8px; color: #fff; background: linear-gradient(135deg, #1e3a8a, #1677ff); font-size: 13px; font-weight: 850; text-align: center; }\n.amores-section[_ngcontent-%COMP%] { margin: 20px 0 24px; padding: 20px; border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 12px; background: var(--%NS%surface, #fff); }\n.amores-image[_ngcontent-%COMP%] { display: block; width: 100%; max-height: 420px; border-radius: 10px; object-fit: cover; }\n.status-resumo[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 28px 0; }\n.status-resumo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: grid; gap: 4px; padding: 16px; border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 10px; background: var(--%NS%surface-soft, #f8fafc); }\n.status-resumo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--%NS%text, #0f172a); font-size: 28px; }\n.status-resumo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--%NS%text-muted, #64748b); font-size: 13px; font-weight: 750; }\n.caminho-section[_ngcontent-%COMP%] { margin: 20px 0 24px; padding: 20px; border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 12px; background: var(--%NS%surface-soft, #f8fafc); }\n.areas-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2px 16px; }\n.area-section[_ngcontent-%COMP%] { margin: 0 0 16px; }\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 6px 0 0; color: var(--%NS%text-muted, #64748b); font-size: 13px; }\n.area-vazia[_ngcontent-%COMP%] { padding: 18px 0 4px; color: var(--%NS%text-muted, #64748b); font-size: 13px; font-style: italic; }\n.section-heading[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.marcos-list[_ngcontent-%COMP%] { position: relative; }\n.marco[_ngcontent-%COMP%] { position: relative; display: flex; min-height: 76px; gap: 16px; }\n.marco-marker[_ngcontent-%COMP%] { z-index: 1; display: grid; width: 34px; height: 34px; flex: 0 0 auto; place-items: center; border: 3px solid var(--%NS%surface-soft, #f8fafc); border-radius: 50%; color: #fff; background: #94a3b8; font-weight: 900; }\n.marco-line[_ngcontent-%COMP%] { position: absolute; left: 16px; top: 34px; bottom: -4px; width: 2px; background: #cbd5e1; }\n.marco-content[_ngcontent-%COMP%] { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 12px; padding: 4px 0 20px; border-bottom: 1px solid var(--%NS%border, #e5e7eb); }\n.marco[_ngcontent-%COMP%]:last-child   .marco-content[_ngcontent-%COMP%] { border-bottom: 0; }\n.marco-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; color: var(--%NS%text, #0f172a); font-size: 16px; }\n.status-pill[_ngcontent-%COMP%] { display: inline-flex; padding: 5px 10px; border-radius: 999px; font-size: 12px; font-weight: 850; white-space: nowrap; }\n.status-feito[_ngcontent-%COMP%] { color: #166534; background: #dcfce7; }\n.status-fazendo[_ngcontent-%COMP%] { color: #92400e; background: #fef3c7; }\n.status-a-fazer[_ngcontent-%COMP%] { color: #475569; background: #e2e8f0; }\n.marcos-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }\n.marco-card[_ngcontent-%COMP%] { padding: 18px; border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 10px; background: var(--%NS%surface, #fff); }\n.marco-card-topo[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 8px; }\n.marco-card-icon[_ngcontent-%COMP%] { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 8px; color: #fff; background: #1677ff; font-size: 18px; font-weight: 900; }\n.marco-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 18px 0 6px; color: var(--%NS%text, #0f172a); font-size: 16px; }\n.marco-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; color: var(--%NS%text-muted, #64748b); font-size: 13px; }\n@media (max-width: 700px) { .caminho-heading[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%] { flex-direction: column; } .caminho-summary[_ngcontent-%COMP%] { width: 100%; } .status-resumo[_ngcontent-%COMP%], .areas-grid[_ngcontent-%COMP%], .destinos-list[_ngcontent-%COMP%] { grid-template-columns: 1fr 1fr; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CaminhoComponent, [{
        type: Component,
        args: [{ selector: 'app-caminho', standalone: true, imports: [CommonModule], template: "<section class=\"caminho-page page-card\">\n  <header class=\"caminho-heading\">\n    <div>\n      <span class=\"eyebrow\">Planejamento macro</span>\n      <h1>Meu caminho</h1>\n      <p>Uma vis\u00E3o de longo prazo para acompanhar conquistas, pr\u00F3ximos passos e a dire\u00E7\u00E3o da sua jornada.</p>\n    </div>\n    <div class=\"caminho-summary\">\n      <strong>{{ totalMarcos() }}</strong>\n      <span>marcos no caminho</span>\n    </div>\n  </header>\n\n  <section class=\"lembrete-section\">\n    <p class=\"lembrete\">Lembre-se onde voc\u00EA quer chegar....</p>\n    <img src=\"/imagens/caminho-motivacao.png\" alt=\"Painel de inspira\u00E7\u00E3o com fotos pessoais e destinos para conhecer\" />\n  </section>\n\n  <section class=\"destinos-section\">\n    <div class=\"section-heading\">\n      <div>\n        <span class=\"eyebrow\">Vis\u00E3o de futuro</span>\n        <h2>Lugares para conhecer</h2>\n      </div>\n    </div>\n    <div class=\"destinos-list\">\n      <span *ngFor=\"let destino of ['Nova York', 'Tokyo', 'Alemanha', 'Paris', 'R\u00FAssia', 'Am\u00E9rica Latina']\">{{ destino }}</span>\n    </div>\n  </section>\n\n  <section class=\"amores-section\">\n    <div class=\"section-heading\">\n      <div>\n        <span class=\"eyebrow\">Minha identidade</span>\n        <h2>Coisas que amo</h2>\n      </div>\n    </div>\n    <img class=\"amores-image\" src=\"/imagens/coisas-que-amo.png\" alt=\"Ilustra\u00E7\u00E3o reunindo matem\u00E1tica, computa\u00E7\u00E3o, l\u00EDnguas, fam\u00EDlia, bolos, s\u00E9ries, academia, m\u00FAsica e corridas\" />\n  </section>\n\n  <section class=\"status-resumo\" aria-label=\"Resumo do caminho\">\n    <div><strong>{{ totalPorStatus('Feito') }}</strong><span>Feitos</span></div>\n    <div><strong>{{ totalPorStatus('Fazendo') }}</strong><span>Em andamento</span></div>\n    <div><strong>{{ totalPorStatus('A fazer') }}</strong><span>A fazer</span></div>\n  </section>\n\n  <section class=\"areas-grid\">\n    <article class=\"caminho-section area-section\" *ngFor=\"let area of areas\">\n      <div class=\"section-heading\">\n        <div>\n          <span class=\"eyebrow\">\u00C1rea do caminho</span>\n          <h2>{{ area.nome }}</h2>\n          <p>{{ area.descricao }}</p>\n        </div>\n      </div>\n\n      <div class=\"area-vazia\" *ngIf=\"!area.marcos.length\">Nenhum marco definido ainda.</div>\n      <div class=\"marcos-list\" *ngIf=\"area.marcos.length\">\n        <article class=\"marco\" *ngFor=\"let marco of area.marcos; let ultimo = last\">\n          <span class=\"marco-marker\" [class]=\"'status-' + marco.status.toLowerCase().replace(' ', '-')\">{{ marco.status === 'Feito' ? '\u2713' : '\u2022' }}</span>\n          <div class=\"marco-line\" *ngIf=\"!ultimo\"></div>\n          <div class=\"marco-content\">\n            <h3>{{ marco.nome }}</h3>\n            <span class=\"status-pill\" [class]=\"'status-' + marco.status.toLowerCase().replace(' ', '-')\">{{ marco.status }}</span>\n          </div>\n        </article>\n      </div>\n    </article>\n  </section>\n</section>\n", styles: [".caminho-page { padding: clamp(20px, 4vw, 36px); }\n.caminho-heading, .section-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }\n.caminho-heading h1, .section-heading h2 { margin: 4px 0 0; color: var(--text, #0f172a); }\n.caminho-heading p { max-width: 660px; margin: 8px 0 0; color: var(--text-muted, #64748b); }\n.eyebrow { color: #1677ff; font-size: 12px; font-weight: 850; letter-spacing: .04em; text-transform: uppercase; }\n.caminho-summary { display: grid; min-width: 130px; padding: 14px 18px; border-radius: 12px; color: #fff; background: #1677ff; text-align: center; }\n.caminho-summary strong { font-size: 28px; }\n.caminho-summary span { font-size: 12px; opacity: .85; }\n.lembrete-section { position: relative; min-height: 230px; overflow: hidden; margin: 28px 0 20px; border-radius: 14px; background: #0f172a; }\n.lembrete-section img { display: block; width: 100%; height: 300px; object-fit: cover; opacity: .72; }\n.lembrete { position: absolute; z-index: 1; top: 22px; left: 26px; max-width: 520px; margin: 0; color: #fff; font-family: Georgia, serif; font-size: clamp(24px, 4vw, 42px); font-style: italic; font-weight: 700; line-height: 1.1; text-shadow: 0 2px 14px rgba(0,0,0,.55); }\n.destinos-section { margin: 20px 0 24px; padding: 20px; border: 1px solid var(--border, #e5e7eb); border-radius: 12px; background: var(--surface-soft, #f8fafc); }\n.destinos-list { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }\n.destinos-list span { padding: 14px 8px; border-radius: 8px; color: #fff; background: linear-gradient(135deg, #1e3a8a, #1677ff); font-size: 13px; font-weight: 850; text-align: center; }\n.amores-section { margin: 20px 0 24px; padding: 20px; border: 1px solid var(--border, #e5e7eb); border-radius: 12px; background: var(--surface, #fff); }\n.amores-image { display: block; width: 100%; max-height: 420px; border-radius: 10px; object-fit: cover; }\n.status-resumo { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 28px 0; }\n.status-resumo div { display: grid; gap: 4px; padding: 16px; border: 1px solid var(--border, #e5e7eb); border-radius: 10px; background: var(--surface-soft, #f8fafc); }\n.status-resumo strong { color: var(--text, #0f172a); font-size: 28px; }\n.status-resumo span { color: var(--text-muted, #64748b); font-size: 13px; font-weight: 750; }\n.caminho-section { margin: 20px 0 24px; padding: 20px; border: 1px solid var(--border, #e5e7eb); border-radius: 12px; background: var(--surface-soft, #f8fafc); }\n.areas-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2px 16px; }\n.area-section { margin: 0 0 16px; }\n.section-heading p { margin: 6px 0 0; color: var(--text-muted, #64748b); font-size: 13px; }\n.area-vazia { padding: 18px 0 4px; color: var(--text-muted, #64748b); font-size: 13px; font-style: italic; }\n.section-heading { margin-bottom: 20px; }\n.marcos-list { position: relative; }\n.marco { position: relative; display: flex; min-height: 76px; gap: 16px; }\n.marco-marker { z-index: 1; display: grid; width: 34px; height: 34px; flex: 0 0 auto; place-items: center; border: 3px solid var(--surface-soft, #f8fafc); border-radius: 50%; color: #fff; background: #94a3b8; font-weight: 900; }\n.marco-line { position: absolute; left: 16px; top: 34px; bottom: -4px; width: 2px; background: #cbd5e1; }\n.marco-content { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 12px; padding: 4px 0 20px; border-bottom: 1px solid var(--border, #e5e7eb); }\n.marco:last-child .marco-content { border-bottom: 0; }\n.marco-content h3 { margin: 0; color: var(--text, #0f172a); font-size: 16px; }\n.status-pill { display: inline-flex; padding: 5px 10px; border-radius: 999px; font-size: 12px; font-weight: 850; white-space: nowrap; }\n.status-feito { color: #166534; background: #dcfce7; }\n.status-fazendo { color: #92400e; background: #fef3c7; }\n.status-a-fazer { color: #475569; background: #e2e8f0; }\n.marcos-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }\n.marco-card { padding: 18px; border: 1px solid var(--border, #e5e7eb); border-radius: 10px; background: var(--surface, #fff); }\n.marco-card-topo { display: flex; align-items: center; justify-content: space-between; gap: 8px; }\n.marco-card-icon { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 8px; color: #fff; background: #1677ff; font-size: 18px; font-weight: 900; }\n.marco-card h3 { margin: 18px 0 6px; color: var(--text, #0f172a); font-size: 16px; }\n.marco-card p { margin: 0; color: var(--text-muted, #64748b); font-size: 13px; }\n@media (max-width: 700px) { .caminho-heading, .section-heading { flex-direction: column; } .caminho-summary { width: 100%; } .status-resumo, .areas-grid, .destinos-list { grid-template-columns: 1fr 1fr; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CaminhoComponent, { className: "CaminhoComponent", filePath: "src/app/pages/caminho/caminho.ts", lineNumber: 24 }); })();
