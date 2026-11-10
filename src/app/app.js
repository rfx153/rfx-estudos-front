import { Component, PLATFORM_ID, inject, signal, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import * as i0 from "@angular/core";
const _c0 = () => ({ exact: true });
export class App {
    platformId = inject(PLATFORM_ID);
    title = signal('rfx-estudos-front', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    modoEscuro = false;
    ngOnInit() {
        if (!this.estaNoBrowser())
            return;
        const preferenciaSalva = localStorage.getItem('rfx-theme');
        this.modoEscuro = preferenciaSalva
            ? preferenciaSalva === 'dark'
            : window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
        this.aplicarTema();
    }
    alternarTema() {
        this.modoEscuro = !this.modoEscuro;
        this.aplicarTema();
    }
    aplicarTema() {
        if (!this.estaNoBrowser())
            return;
        document.documentElement.classList.toggle('dark-theme', this.modoEscuro);
        localStorage.setItem('rfx-theme', this.modoEscuro ? 'dark' : 'light');
    }
    estaNoBrowser() {
        return isPlatformBrowser(this.platformId);
    }
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 37, vars: 4, consts: [[1, "app-header"], ["routerLink", "/", "aria-label", "RFX Estudos", 1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], ["viewBox", "0 0 24 24", "role", "img"], ["d", "M13.6 2 5 14.7h5.8L9.4 22 19 9.3h-6.1L13.6 2Z"], [1, "header-actions"], ["aria-label", "Navega\u00E7\u00E3o principal", 1, "main-nav"], ["routerLink", "/", "routerLinkActive", "active-link", 3, "routerLinkActiveOptions"], ["routerLink", "/novo-registro", "routerLinkActive", "active-link"], ["routerLink", "/visualizar-registros", "routerLinkActive", "active-link"], ["routerLink", "/planejamento", "routerLinkActive", "active-link"], ["routerLink", "/planejamentos", "routerLinkActive", "active-link"], ["routerLink", "/metas", "routerLinkActive", "active-link"], ["routerLink", "/ciclos", "routerLinkActive", "active-link"], ["routerLink", "/caminho", "routerLinkActive", "active-link"], ["routerLink", "/metodologia", "routerLinkActive", "active-link"], ["routerLink", "/materias", "routerLinkActive", "active-link"], ["type", "button", 1, "theme-toggle", 3, "click"], ["aria-hidden", "true"], [1, "app-shell"]], template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "a", 1)(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(5, "span")(6, "strong");
            i0.ɵɵtext(7, "RFX Estudos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "small");
            i0.ɵɵtext(9, "Painel de acompanhamento");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 5)(11, "nav", 6)(12, "a", 7);
            i0.ɵɵtext(13, "In\u00EDcio");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 8);
            i0.ɵɵtext(15, "Novo registro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "a", 9);
            i0.ɵɵtext(17, "Hist\u00F3rico");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "a", 10);
            i0.ɵɵtext(19, "Planejamento");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "a", 11);
            i0.ɵɵtext(21, "Editar planejamento");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "a", 12);
            i0.ɵɵtext(23, "Metas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "a", 13);
            i0.ɵɵtext(25, "Ciclos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "a", 14);
            i0.ɵɵtext(27, "Caminho");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "a", 15);
            i0.ɵɵtext(29, "Metodologia");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "a", 16);
            i0.ɵɵtext(31, "Gerenciador de dados");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "button", 17);
            i0.ɵɵlistener("click", function App_Template_button_click_32_listener() { return ctx.alternarTema(); });
            i0.ɵɵelementStart(33, "span", 18);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "main", 19);
            i0.ɵɵelement(36, "router-outlet");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(3, _c0));
            i0.ɵɵadvance(20);
            i0.ɵɵattribute("aria-label", ctx.modoEscuro ? "Ativar modo claro" : "Ativar modo escuro");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.modoEscuro ? "\u2600" : "\u263E");
        } }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], styles: [".app-header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 14px clamp(18px, 4vw, 48px);\n  background: rgba(255, 255, 255, 0.92);\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);\n  backdrop-filter: blur(14px);\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: #111827;\n  text-decoration: none;\n}\n\n.brand-mark {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 8px;\n  background: #1677ff;\n  box-shadow: 0 10px 24px rgba(22, 119, 255, 0.25);\n}\n\n.brand-mark svg {\n  width: 25px;\n  height: 25px;\n  fill: #fff;\n}\n\n.brand strong,\n.brand small {\n  display: block;\n  line-height: 1.1;\n}\n\n.brand strong {\n  font-size: 17px;\n}\n\n.brand small {\n  margin-top: 4px;\n  color: #64748b;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 10px;\n  background: #f8fafc;\n}\n\n.main-nav a {\n  padding: 9px 14px;\n  border-radius: 8px;\n  color: #475569;\n  font-weight: 700;\n  text-decoration: none;\n  transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;\n}\n\n.main-nav a:hover {\n  color: #1677ff;\n}\n\n.main-nav a.active-link {\n  background: #fff;\n  color: #0f172a;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);\n}\n\n.theme-toggle {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 8px;\n  background: #fff;\n  color: #0f172a;\n  font-size: 19px;\n  font-weight: 850;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);\n}\n\n.app-shell {\n  width: min(1240px, calc(100% - 32px));\n  margin: 0 auto;\n  padding: 28px 0 44px;\n}\n\n@media (max-width: 760px) {\n  .app-header {\n    position: static;\n    align-items: stretch;\n    flex-direction: column;\n    gap: 14px;\n    padding: 12px 14px;\n  }\n\n  .brand {\n    min-width: 0;\n  }\n\n  .brand-mark {\n    width: 38px;\n    height: 38px;\n  }\n\n  .brand strong {\n    font-size: 15px;\n  }\n\n  .brand small {\n    font-size: 11px;\n  }\n\n  .header-actions {\n    align-items: stretch;\n    gap: 8px;\n  }\n\n  .main-nav {\n    flex: 1;\n    overflow-x: auto;\n    scrollbar-width: thin;\n  }\n\n  .main-nav a {\n    padding: 8px 11px;\n    font-size: 13px;\n    white-space: nowrap;\n  }\n\n  .theme-toggle {\n    flex: 0 0 38px;\n    width: 38px;\n    height: 38px;\n  }\n\n  .app-shell {\n    width: min(100% - 20px, 1240px);\n    padding: 14px 0 28px;\n  }\n}\n"], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', imports: [RouterOutlet, RouterLink, RouterLinkActive], encapsulation: ViewEncapsulation.None, template: "<header class=\"app-header\">\n  <a class=\"brand\" routerLink=\"/\" aria-label=\"RFX Estudos\">\n    <span class=\"brand-mark\" aria-hidden=\"true\">\n      <svg viewBox=\"0 0 24 24\" role=\"img\">\n        <path d=\"M13.6 2 5 14.7h5.8L9.4 22 19 9.3h-6.1L13.6 2Z\" />\n      </svg>\n    </span>\n    <span>\n      <strong>RFX Estudos</strong>\n      <small>Painel de acompanhamento</small>\n    </span>\n  </a>\n\n  <div class=\"header-actions\">\n    <nav class=\"main-nav\" aria-label=\"Navega\u00E7\u00E3o principal\">\n      <a routerLink=\"/\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\">In\u00EDcio</a>\n      <a routerLink=\"/novo-registro\" routerLinkActive=\"active-link\">Novo registro</a>\n      <a routerLink=\"/visualizar-registros\" routerLinkActive=\"active-link\">Hist\u00F3rico</a>\n      <a routerLink=\"/planejamento\" routerLinkActive=\"active-link\">Planejamento</a>\n      <a routerLink=\"/planejamentos\" routerLinkActive=\"active-link\">Editar planejamento</a>\n      <a routerLink=\"/metas\" routerLinkActive=\"active-link\">Metas</a>\n      <a routerLink=\"/ciclos\" routerLinkActive=\"active-link\">Ciclos</a>\n      <a routerLink=\"/caminho\" routerLinkActive=\"active-link\">Caminho</a>\n      <a routerLink=\"/metodologia\" routerLinkActive=\"active-link\">Metodologia</a>\n      <a routerLink=\"/materias\" routerLinkActive=\"active-link\">Gerenciador de dados</a>\n    </nav>\n\n    <button\n      type=\"button\"\n      class=\"theme-toggle\"\n      (click)=\"alternarTema()\"\n      [attr.aria-label]=\"modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'\">\n      <span aria-hidden=\"true\">{{ modoEscuro ? '\u2600' : '\u263E' }}</span>\n    </button>\n  </div>\n</header>\n\n<main class=\"app-shell\">\n  <router-outlet></router-outlet>\n</main>\n", styles: [".app-header {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 14px clamp(18px, 4vw, 48px);\n  background: rgba(255, 255, 255, 0.92);\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);\n  backdrop-filter: blur(14px);\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: #111827;\n  text-decoration: none;\n}\n\n.brand-mark {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 8px;\n  background: #1677ff;\n  box-shadow: 0 10px 24px rgba(22, 119, 255, 0.25);\n}\n\n.brand-mark svg {\n  width: 25px;\n  height: 25px;\n  fill: #fff;\n}\n\n.brand strong,\n.brand small {\n  display: block;\n  line-height: 1.1;\n}\n\n.brand strong {\n  font-size: 17px;\n}\n\n.brand small {\n  margin-top: 4px;\n  color: #64748b;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 10px;\n  background: #f8fafc;\n}\n\n.main-nav a {\n  padding: 9px 14px;\n  border-radius: 8px;\n  color: #475569;\n  font-weight: 700;\n  text-decoration: none;\n  transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;\n}\n\n.main-nav a:hover {\n  color: #1677ff;\n}\n\n.main-nav a.active-link {\n  background: #fff;\n  color: #0f172a;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);\n}\n\n.theme-toggle {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 8px;\n  background: #fff;\n  color: #0f172a;\n  font-size: 19px;\n  font-weight: 850;\n  cursor: pointer;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);\n}\n\n.app-shell {\n  width: min(1240px, calc(100% - 32px));\n  margin: 0 auto;\n  padding: 28px 0 44px;\n}\n\n@media (max-width: 760px) {\n  .app-header {\n    position: static;\n    align-items: stretch;\n    flex-direction: column;\n    gap: 14px;\n    padding: 12px 14px;\n  }\n\n  .brand {\n    min-width: 0;\n  }\n\n  .brand-mark {\n    width: 38px;\n    height: 38px;\n  }\n\n  .brand strong {\n    font-size: 15px;\n  }\n\n  .brand small {\n    font-size: 11px;\n  }\n\n  .header-actions {\n    align-items: stretch;\n    gap: 8px;\n  }\n\n  .main-nav {\n    flex: 1;\n    overflow-x: auto;\n    scrollbar-width: thin;\n  }\n\n  .main-nav a {\n    padding: 8px 11px;\n    font-size: 13px;\n    white-space: nowrap;\n  }\n\n  .theme-toggle {\n    flex: 0 0 38px;\n    width: 38px;\n    height: 38px;\n  }\n\n  .app-shell {\n    width: min(100% - 20px, 1240px);\n    padding: 14px 0 28px;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 }); })();
