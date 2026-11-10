import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/modal";
import * as i3 from "ng-zorro-antd/tag";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/core/wave";
function RegistroDetalhesModalComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1, " Nenhum registro para exibir. ");
    i0.ɵɵelementEnd();
} }
function RegistroDetalhesModalComponent_ng_container_1_div_2_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 7)(1, "header")(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 8)(8, "nz-tag", 9);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 10);
    i0.ɵɵlistener("click", function RegistroDetalhesModalComponent_ng_container_1_div_2_article_1_Template_button_click_11_listener() { const registro_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.editarRegistro(registro_r2)); });
    i0.ɵɵtext(12, "Editar");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 11)(14, "div")(15, "small");
    i0.ɵɵtext(16, "Tipo do registro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div")(20, "small");
    i0.ɵɵtext(21, "Material-guia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "small");
    i0.ɵɵtext(26, "Planejamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div")(30, "small");
    i0.ɵɵtext(31, "Tempo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "span");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div")(35, "small");
    i0.ɵɵtext(36, "Quest\u00F5es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "span");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div", 12)(40, "p")(41, "strong");
    i0.ɵɵtext(42, "Observa\u00E7\u00F5es:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const registro_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(registro_r2.materia?.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(registro_r2.assunto?.nome);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 11, registro_r2.dataEstudo, "dd/MM/yyyy"));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(registro_r2.tipoRegistro?.nome || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(registro_r2.materialGuia?.nome || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(registro_r2.planejamento?.nome || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(registro_r2.tempoEstudado || "N\u00E3o informado");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate3("", registro_r2.questoesAcertadas || 0, "/", registro_r2.questoesFeitas || 0, " (", ctx_r2.aproveitamento(registro_r2.questoesFeitas, registro_r2.questoesAcertadas), ")");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", registro_r2.observacoes || "Sem observa\u00E7\u00F5es.");
} }
function RegistroDetalhesModalComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, RegistroDetalhesModalComponent_ng_container_1_div_2_article_1_Template, 44, 14, "article", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.registros);
} }
function RegistroDetalhesModalComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RegistroDetalhesModalComponent_ng_container_1_div_1_Template, 2, 0, "div", 2)(2, RegistroDetalhesModalComponent_ng_container_1_div_2_Template, 2, 1, "div", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.registros.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.registros.length);
} }
export class RegistroDetalhesModalComponent {
    visivel = false;
    titulo = 'Detalhes do estudo';
    registros = [];
    visivelChange = new EventEmitter();
    editar = new EventEmitter();
    fechar() {
        this.visivel = false;
        this.visivelChange.emit(false);
    }
    aproveitamento(feitas = 0, acertadas = 0) {
        if (!feitas)
            return '0%';
        return `${Math.round((acertadas / feitas) * 100)}%`;
    }
    editarRegistro(registro) {
        this.editar.emit(registro);
    }
    static ɵfac = function RegistroDetalhesModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegistroDetalhesModalComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegistroDetalhesModalComponent, selectors: [["app-registro-detalhes-modal"]], inputs: { visivel: "visivel", titulo: "titulo", registros: "registros" }, outputs: { visivelChange: "visivelChange", editar: "editar" }, decls: 2, vars: 4, consts: [[3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter", "nzWidth"], [4, "nzModalContent"], ["class", "modal-empty", 4, "ngIf"], ["class", "registro-detail-list", 4, "ngIf"], [1, "modal-empty"], [1, "registro-detail-list"], ["class", "registro-detail", 4, "ngFor", "ngForOf"], [1, "registro-detail"], [1, "detail-actions"], ["nzColor", "blue"], ["nz-button", "", "nzType", "default", "nzSize", "small", "type", "button", 3, "click"], [1, "detail-grid"], [1, "detail-notes"]], template: function RegistroDetalhesModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-modal", 0);
            i0.ɵɵlistener("nzOnCancel", function RegistroDetalhesModalComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.fechar(); });
            i0.ɵɵtemplate(1, RegistroDetalhesModalComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("nzVisible", ctx.visivel)("nzTitle", ctx.titulo)("nzFooter", null)("nzWidth", 860);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, NzModalModule, i2.NzModalComponent, i2.NzModalContentDirective, NzTagModule, i3.NzTagComponent, NzButtonModule, i4.NzButtonComponent, i5.ɵNzTransitionPatchDirective, i6.NzWaveDirective, i1.DatePipe], styles: [".registro-detail-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n  max-height: 70vh;\n  overflow: auto;\n  padding-right: 4px;\n}\n\n.registro-detail[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-muted, #fbfdff);\n}\n\n.registro-detail[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n\n.registro-detail[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.registro-detail[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.registro-detail[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%text, #0f172a);\n  font-size: 17px;\n}\n\n.registro-detail[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.detail-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n\n.detail-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n}\n\n.detail-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.detail-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.detail-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 11px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.detail-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--%NS%text, #0f172a);\n  font-weight: 800;\n}\n\n.detail-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n}\n\n.modal-empty[_ngcontent-%COMP%] {\n  padding: 18px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--%NS%text-muted, #64748b);\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n@media (max-width: 760px) {\n  .registro-detail-list[_ngcontent-%COMP%] {\n    max-height: 68vh;\n    padding-right: 0;\n  }\n\n  .registro-detail[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .registro-detail[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-shrink: 0;\n  gap: 8px;\n}\n\n@media (max-width: 560px) {\n  .detail-actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegistroDetalhesModalComponent, [{
        type: Component,
        args: [{ selector: 'app-registro-detalhes-modal', standalone: true, imports: [CommonModule, NzModalModule, NzTagModule, NzButtonModule], template: "<nz-modal\n  [nzVisible]=\"visivel\"\n  [nzTitle]=\"titulo\"\n  [nzFooter]=\"null\"\n  [nzWidth]=\"860\"\n  (nzOnCancel)=\"fechar()\">\n  <ng-container *nzModalContent>\n    <div class=\"modal-empty\" *ngIf=\"!registros.length\">\n      Nenhum registro para exibir.\n    </div>\n\n    <div class=\"registro-detail-list\" *ngIf=\"registros.length\">\n      <article class=\"registro-detail\" *ngFor=\"let registro of registros\">\n        <header>\n          <div>\n            <strong>{{ registro.materia?.nome }}</strong>\n            <span>{{ registro.assunto?.nome }}</span>\n          </div>\n          <div class=\"detail-actions\">\n            <nz-tag nzColor=\"blue\">{{ registro.dataEstudo | date: 'dd/MM/yyyy' }}</nz-tag>\n            <button nz-button nzType=\"default\" nzSize=\"small\" type=\"button\" (click)=\"editarRegistro(registro)\">Editar</button>\n          </div>\n        </header>\n\n        <div class=\"detail-grid\">\n          <div>\n            <small>Tipo do registro</small>\n            <span>{{ registro.tipoRegistro?.nome || 'N\u00E3o informado' }}</span>\n          </div>\n          <div>\n            <small>Material-guia</small>\n            <span>{{ registro.materialGuia?.nome || 'N\u00E3o informado' }}</span>\n          </div>\n          <div>\n            <small>Planejamento</small>\n            <span>{{ registro.planejamento?.nome || 'N\u00E3o informado' }}</span>\n          </div>\n          <div>\n            <small>Tempo</small>\n            <span>{{ registro.tempoEstudado || 'N\u00E3o informado' }}</span>\n          </div>\n          <div>\n            <small>Quest\u00F5es</small>\n            <span>{{ registro.questoesAcertadas || 0 }}/{{ registro.questoesFeitas || 0 }} ({{ aproveitamento(registro.questoesFeitas, registro.questoesAcertadas) }})</span>\n          </div>\n        </div>\n\n        <div class=\"detail-notes\">\n          <p><strong>Observa\u00E7\u00F5es:</strong> {{ registro.observacoes || 'Sem observa\u00E7\u00F5es.' }}</p>\n        </div>\n\n      </article>\n    </div>\n  </ng-container>\n</nz-modal>\n", styles: [".registro-detail-list {\n  display: grid;\n  gap: 14px;\n  max-height: 70vh;\n  overflow: auto;\n  padding-right: 4px;\n}\n\n.registro-detail {\n  padding: 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-muted, #fbfdff);\n}\n\n.registro-detail header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n\n.registro-detail header strong,\n.registro-detail header span {\n  display: block;\n}\n\n.registro-detail header strong {\n  color: var(--text, #0f172a);\n  font-size: 17px;\n}\n\n.registro-detail header span,\n.detail-notes p {\n  color: var(--text-muted, #64748b);\n}\n\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n\n.detail-grid div {\n  padding: 10px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n}\n\n.detail-grid small,\n.detail-grid span {\n  display: block;\n}\n\n.detail-grid small {\n  color: var(--text-muted, #64748b);\n  font-size: 11px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.detail-grid span {\n  margin-top: 4px;\n  color: var(--text, #0f172a);\n  font-weight: 800;\n}\n\n.detail-notes p {\n  margin-bottom: 7px;\n}\n\n.modal-empty {\n  padding: 18px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--text-muted, #64748b);\n  background: var(--surface-soft, #f8fafc);\n}\n\n@media (max-width: 760px) {\n  .registro-detail-list {\n    max-height: 68vh;\n    padding-right: 0;\n  }\n\n  .registro-detail {\n    padding: 14px;\n  }\n\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .registro-detail header {\n    flex-direction: column;\n  }\n}\n.detail-actions {\n  display: inline-flex;\n  align-items: center;\n  flex-shrink: 0;\n  gap: 8px;\n}\n\n@media (max-width: 560px) {\n  .detail-actions {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n"] }]
    }], null, { visivel: [{
            type: Input
        }], titulo: [{
            type: Input
        }], registros: [{
            type: Input
        }], visivelChange: [{
            type: Output
        }], editar: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegistroDetalhesModalComponent, { className: "RegistroDetalhesModalComponent", filePath: "src/app/shared/registro-detalhes-modal/registro-detalhes-modal.ts", lineNumber: 15 }); })();
