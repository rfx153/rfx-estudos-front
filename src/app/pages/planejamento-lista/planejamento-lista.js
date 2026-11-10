import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PlanejamentoService } from '../../services/planejamento.service';
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/button";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/core/wave";
const _c0 = a0 => ["/planejamentos", a0];
function PlanejamentoListaComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "Carregando planejamentos...");
    i0.ɵɵelementEnd();
} }
function PlanejamentoListaComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "Nenhum planejamento cadastrado.");
    i0.ɵɵelementEnd();
} }
function PlanejamentoListaComponent_div_11_a_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const planejamento_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Fim previsto: ", i0.ɵɵpipeBind2(2, 1, planejamento_r2.dataFimPrevista, "dd/MM/yyyy"), " ");
} }
function PlanejamentoListaComponent_div_11_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 11)(1, "div")(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PlanejamentoListaComponent_div_11_a_1_small_6_Template, 3, 4, "small", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 13)(8, "button", 14);
    i0.ɵɵlistener("click", function PlanejamentoListaComponent_div_11_a_1_Template_button_click_8_listener($event) { const planejamento_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.editar($event, planejamento_r2)); });
    i0.ɵɵtext(9, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 15);
    i0.ɵɵlistener("click", function PlanejamentoListaComponent_div_11_a_1_Template_button_click_10_listener($event) { const planejamento_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.remover($event, planejamento_r2)); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 16);
    i0.ɵɵtext(13, "\u203A");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const planejamento_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, planejamento_r2.id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(planejamento_r2.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(planejamento_r2.descricao || "Sem descri\u00E7\u00E3o");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", planejamento_r2.dataFimPrevista);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.excluindoId === planejamento_r2.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.excluindoId === planejamento_r2.id ? "Removendo..." : "Remover", " ");
} }
function PlanejamentoListaComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, PlanejamentoListaComponent_div_11_a_1_Template, 14, 8, "a", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.planejamentos);
} }
function PlanejamentoListaComponent_div_12_small_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 30);
    i0.ɵɵtext(1, "Informe o nome do planejamento.");
    i0.ɵɵelementEnd();
} }
function PlanejamentoListaComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("click", function PlanejamentoListaComponent_div_12_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fecharModal()); });
    i0.ɵɵelementStart(1, "section", 19);
    i0.ɵɵlistener("click", function PlanejamentoListaComponent_div_12_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header")(3, "div")(4, "h3", 20);
    i0.ɵɵtext(5, "Editar planejamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Altere apenas as informa\u00E7\u00F5es principais.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 21);
    i0.ɵɵlistener("click", function PlanejamentoListaComponent_div_12_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fecharModal()); });
    i0.ɵɵtext(9, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "form", 22);
    i0.ɵɵlistener("ngSubmit", function PlanejamentoListaComponent_div_12_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.salvarEdicao()); });
    i0.ɵɵelementStart(11, "label");
    i0.ɵɵtext(12, "Nome ");
    i0.ɵɵelementStart(13, "input", 23);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, PlanejamentoListaComponent_div_12_small_14_Template, 2, 0, "small", 24);
    i0.ɵɵelementStart(15, "label");
    i0.ɵɵtext(16, "Descri\u00E7\u00E3o ");
    i0.ɵɵelementStart(17, "textarea", 25);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "label");
    i0.ɵɵtext(19, "Data fim prevista ");
    i0.ɵɵelementStart(20, "input", 26);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 27)(22, "button", 28);
    i0.ɵɵlistener("click", function PlanejamentoListaComponent_div_12_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.fecharModal()); });
    i0.ɵɵtext(23, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 29);
    i0.ɵɵtext(25, "Salvar");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("formGroup", ctx_r2.editForm);
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.editForm.controls.nome.touched && ctx_r2.editForm.controls.nome.invalid);
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzLoading", ctx_r2.salvando);
} }
export class PlanejamentoListaComponent {
    service = inject(PlanejamentoService);
    router = inject(Router);
    message = inject(NzMessageService);
    cdr = inject(ChangeDetectorRef);
    fb = inject(FormBuilder);
    planejamentos = [];
    carregando = true;
    salvando = false;
    excluindoId;
    planejamentoEditando;
    editForm = this.fb.group({
        nome: ['', [Validators.required, Validators.maxLength(150)]],
        descricao: [''],
        dataFimPrevista: [null]
    });
    ngOnInit() {
        this.service.listarTodos().pipe(finalize(() => {
            this.carregando = false;
            this.cdr.detectChanges();
        })).subscribe({
            next: dados => {
                this.planejamentos = dados;
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao carregar planejamentos:', erro);
                this.message.error('Não foi possível carregar os planejamentos.');
                this.cdr.detectChanges();
            }
        });
    }
    novo() { this.router.navigate(['/planejamentos/novo']); }
    abrir(planejamento) { if (planejamento.id)
        this.router.navigate(['/planejamentos', planejamento.id]); }
    editar(evento, planejamento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.planejamentoEditando = planejamento;
        this.editForm.setValue({
            nome: planejamento.nome,
            descricao: planejamento.descricao || '',
            dataFimPrevista: planejamento.dataFimPrevista || null
        });
    }
    remover(evento, planejamento) {
        evento.preventDefault();
        evento.stopPropagation();
        if (!planejamento.id || !window.confirm(`Remover o planejamento "${planejamento.nome}"?`))
            return;
        const id = planejamento.id;
        this.excluindoId = id;
        this.service.excluir(id).pipe(finalize(() => {
            this.excluindoId = undefined;
            this.cdr.detectChanges();
        })).subscribe({
            next: () => {
                this.planejamentos = this.planejamentos.filter(item => item.id !== id);
                this.message.success('Planejamento removido.');
            },
            error: erro => {
                console.error('Erro ao remover planejamento:', erro);
                this.message.error('Não foi possível remover o planejamento.');
            }
        });
    }
    fecharModal() {
        if (this.salvando)
            return;
        this.planejamentoEditando = undefined;
        this.editForm.reset({ nome: '', descricao: '', dataFimPrevista: null });
    }
    salvarEdicao() {
        if (!this.planejamentoEditando?.id || this.editForm.invalid) {
            this.editForm.markAllAsTouched();
            return;
        }
        const id = this.planejamentoEditando.id;
        const dados = {
            nome: this.editForm.controls.nome.value.trim(),
            descricao: this.editForm.controls.descricao.value?.trim() || null,
            dataFimPrevista: this.editForm.controls.dataFimPrevista.value || null
        };
        this.salvando = true;
        this.service.atualizar(id, dados).pipe(finalize(() => {
            this.salvando = false;
            this.cdr.detectChanges();
        })).subscribe({
            next: atualizado => {
                const indice = this.planejamentos.findIndex(item => item.id === id);
                if (indice >= 0)
                    this.planejamentos[indice] = atualizado;
                this.message.success('Planejamento atualizado.');
                this.planejamentoEditando = undefined;
            },
            error: erro => {
                console.error('Erro ao atualizar planejamento:', erro);
                this.message.error('Não foi possível atualizar o planejamento.');
            }
        });
    }
    static ɵfac = function PlanejamentoListaComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PlanejamentoListaComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PlanejamentoListaComponent, selectors: [["app-planejamento-lista"]], decls: 13, vars: 4, consts: [[1, "planning-list-page", "page-card"], [1, "page-heading"], ["nz-button", "", "nzType", "primary", 3, "click"], ["class", "planning-loading", 4, "ngIf"], ["class", "planning-empty", 4, "ngIf"], ["class", "planning-list-grid", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "planning-loading"], [1, "planning-empty"], [1, "planning-list-grid"], ["class", "planning-list-card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "planning-list-card", 3, "routerLink"], ["class", "planning-deadline", 4, "ngIf"], [1, "card-actions"], ["type", "button", 1, "edit-button", 3, "click"], ["type", "button", 1, "remove-button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "card-arrow"], [1, "planning-deadline"], [1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "edit-title", 1, "edit-modal", 3, "click"], ["id", "edit-title"], ["type", "button", "aria-label", "Fechar", 1, "modal-close", 3, "click"], [3, "ngSubmit", "formGroup"], ["formControlName", "nome", "maxlength", "150"], ["class", "field-error", 4, "ngIf"], ["formControlName", "descricao", "rows", "3"], ["type", "date", "formControlName", "dataFimPrevista"], [1, "modal-actions"], ["nz-button", "", "type", "button", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], [1, "field-error"]], template: function PlanejamentoListaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h2");
            i0.ɵɵtext(4, "Planejamentos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Organize seus objetivos de estudo.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 2);
            i0.ɵɵlistener("click", function PlanejamentoListaComponent_Template_button_click_7_listener() { return ctx.novo(); });
            i0.ɵɵtext(8, "Novo planejamento");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, PlanejamentoListaComponent_div_9_Template, 2, 0, "div", 3)(10, PlanejamentoListaComponent_div_10_Template, 2, 0, "div", 4)(11, PlanejamentoListaComponent_div_11_Template, 2, 1, "div", 5)(12, PlanejamentoListaComponent_div_12_Template, 26, 3, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.planejamentos.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.planejamentos.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.planejamentoEditando);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, RouterLink, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, NzButtonModule, i3.NzButtonComponent, i4.ɵNzTransitionPatchDirective, i5.NzWaveDirective, i1.DatePipe], styles: [".planning-list-page[_ngcontent-%COMP%] { padding: 28px; }\n.page-heading[_ngcontent-%COMP%] { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:24px; }\n.page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin:0; font-size:24px; }\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin:6px 0 0; color:var(--%NS%text-muted,#64748b); }\n.planning-list-grid[_ngcontent-%COMP%] { display:grid; gap:10px; }\n.planning-list-card[_ngcontent-%COMP%] { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:18px; border:1px solid var(--%NS%border,#e5e7eb); border-radius:8px; background:var(--%NS%surface,#fff); cursor:pointer; }\n.planning-list-card[_ngcontent-%COMP%]:hover { border-color:#1677ff; box-shadow:0 0 0 2px rgba(22,119,255,.1); }\n.planning-list-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin:0; color:var(--%NS%text,#0f172a); }\n.planning-list-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin:6px 0 0; color:var(--%NS%text-muted,#64748b); }\n.planning-deadline[_ngcontent-%COMP%] { display:block; margin-top:8px; color:var(--%NS%text-muted,#64748b); font-size:12px; }\n.planning-loading[_ngcontent-%COMP%], .planning-empty[_ngcontent-%COMP%] { padding:28px; text-align:center; color:var(--%NS%text-muted,#64748b); }\n\n.planning-list-card[_ngcontent-%COMP%] { text-decoration: none; color: inherit; }\n.card-actions[_ngcontent-%COMP%] { display:flex; align-items:center; gap:12px; }\n.edit-button[_ngcontent-%COMP%], .remove-button[_ngcontent-%COMP%] { padding:6px 10px; border:1px solid var(--%NS%border,#e5e7eb); border-radius:6px; background:transparent; color:var(--%NS%text-muted,#64748b); cursor:pointer; }\n.edit-button[_ngcontent-%COMP%]:hover { border-color:#1677ff; color:#1677ff; }\n.remove-button[_ngcontent-%COMP%] { color:#dc2626; }\n.remove-button[_ngcontent-%COMP%]:hover:not(:disabled) { border-color:#dc2626; background:rgba(220,38,38,.05); }\n.remove-button[_ngcontent-%COMP%]:disabled { cursor:wait; opacity:.55; }\n.card-arrow[_ngcontent-%COMP%] { color:var(--%NS%text-muted,#64748b); font-size:25px; line-height:1; }\n.modal-backdrop[_ngcontent-%COMP%] { position:fixed; inset:0; z-index:1000; display:grid; place-items:center; padding:20px; background:rgba(15,23,42,.45); }\n.edit-modal[_ngcontent-%COMP%] { width:min(460px,100%); padding:20px; border:1px solid var(--%NS%border,#e5e7eb); border-radius:12px; background:var(--%NS%surface,#fff); box-shadow:0 24px 70px rgba(15,23,42,.22); }\n.edit-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:18px; }\n.edit-modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin:0; color:var(--%NS%text,#0f172a); }\n.edit-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin:4px 0 0; color:var(--%NS%text-muted,#64748b); font-size:13px; }\n.modal-close[_ngcontent-%COMP%] { border:0; background:transparent; color:var(--%NS%text-muted,#64748b); cursor:pointer; font-size:24px; line-height:1; }\n.edit-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], .edit-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display:grid; gap:7px; }\n.edit-modal[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] { gap:15px; }\n.edit-modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { color:var(--%NS%text,#0f172a); font-size:13px; font-weight:700; }\n.edit-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .edit-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { width:100%; padding:9px 10px; border:1px solid var(--%NS%border,#d1d5db); border-radius:6px; background:var(--%NS%surface,#fff); color:var(--%NS%text,#0f172a); font:inherit; font-weight:400; }\n.field-error[_ngcontent-%COMP%] { margin-top:-10px; color:#dc2626; }\n.modal-actions[_ngcontent-%COMP%] { display:flex; justify-content:flex-end; gap:8px; margin-top:3px; }\n@media (max-width:600px) { .planning-list-page[_ngcontent-%COMP%]{padding:18px}.page-heading[_ngcontent-%COMP%]{flex-direction:column}.planning-list-card[_ngcontent-%COMP%]{align-items:flex-start}.card-actions[_ngcontent-%COMP%]{align-self:center}.planning-list-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:220px} }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanejamentoListaComponent, [{
        type: Component,
        args: [{ selector: 'app-planejamento-lista', standalone: true, imports: [CommonModule, RouterLink, ReactiveFormsModule, NzButtonModule], template: "<div class=\"planning-list-page page-card\">\n  <header class=\"page-heading\">\n    <div>\n      <h2>Planejamentos</h2>\n      <p>Organize seus objetivos de estudo.</p>\n    </div>\n    <button nz-button nzType=\"primary\" (click)=\"novo()\">Novo planejamento</button>\n  </header>\n\n  <div class=\"planning-loading\" *ngIf=\"carregando\">Carregando planejamentos...</div>\n  <div class=\"planning-empty\" *ngIf=\"!carregando && !planejamentos.length\">Nenhum planejamento cadastrado.</div>\n\n  <div class=\"planning-list-grid\" *ngIf=\"!carregando && planejamentos.length\">\n    <a class=\"planning-list-card\" *ngFor=\"let planejamento of planejamentos\" [routerLink]=\"['/planejamentos', planejamento.id]\">\n      <div>\n        <h3>{{ planejamento.nome }}</h3>\n        <p>{{ planejamento.descricao || 'Sem descri\u00E7\u00E3o' }}</p>\n        <small class=\"planning-deadline\" *ngIf=\"planejamento.dataFimPrevista\">\n          Fim previsto: {{ planejamento.dataFimPrevista | date: 'dd/MM/yyyy' }}\n        </small>\n      </div>\n      <div class=\"card-actions\">\n        <button type=\"button\" class=\"edit-button\" (click)=\"editar($event, planejamento)\">Editar</button>\n        <button type=\"button\" class=\"remove-button\" [disabled]=\"excluindoId === planejamento.id\" (click)=\"remover($event, planejamento)\">\n          {{ excluindoId === planejamento.id ? 'Removendo...' : 'Remover' }}\n        </button>\n        <span class=\"card-arrow\" aria-hidden=\"true\">\u203A</span>\n      </div>\n    </a>\n  </div>\n\n  <div class=\"modal-backdrop\" *ngIf=\"planejamentoEditando\" (click)=\"fecharModal()\">\n    <section class=\"edit-modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"edit-title\" (click)=\"$event.stopPropagation()\">\n      <header>\n        <div>\n          <h3 id=\"edit-title\">Editar planejamento</h3>\n          <p>Altere apenas as informa\u00E7\u00F5es principais.</p>\n        </div>\n        <button type=\"button\" class=\"modal-close\" aria-label=\"Fechar\" (click)=\"fecharModal()\">\u00D7</button>\n      </header>\n\n      <form [formGroup]=\"editForm\" (ngSubmit)=\"salvarEdicao()\">\n        <label>Nome\n          <input formControlName=\"nome\" maxlength=\"150\" />\n        </label>\n        <small class=\"field-error\" *ngIf=\"editForm.controls.nome.touched && editForm.controls.nome.invalid\">Informe o nome do planejamento.</small>\n        <label>Descri\u00E7\u00E3o\n          <textarea formControlName=\"descricao\" rows=\"3\"></textarea>\n        </label>\n        <label>Data fim prevista\n          <input type=\"date\" formControlName=\"dataFimPrevista\" />\n        </label>\n        <div class=\"modal-actions\">\n          <button nz-button type=\"button\" (click)=\"fecharModal()\">Cancelar</button>\n          <button nz-button nzType=\"primary\" [nzLoading]=\"salvando\">Salvar</button>\n        </div>\n      </form>\n    </section>\n  </div>\n</div>\n", styles: [".planning-list-page { padding: 28px; }\n.page-heading { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:24px; }\n.page-heading h2 { margin:0; font-size:24px; }\n.page-heading p { margin:6px 0 0; color:var(--text-muted,#64748b); }\n.planning-list-grid { display:grid; gap:10px; }\n.planning-list-card { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:18px; border:1px solid var(--border,#e5e7eb); border-radius:8px; background:var(--surface,#fff); cursor:pointer; }\n.planning-list-card:hover { border-color:#1677ff; box-shadow:0 0 0 2px rgba(22,119,255,.1); }\n.planning-list-card h3 { margin:0; color:var(--text,#0f172a); }\n.planning-list-card p { margin:6px 0 0; color:var(--text-muted,#64748b); }\n.planning-deadline { display:block; margin-top:8px; color:var(--text-muted,#64748b); font-size:12px; }\n.planning-loading,.planning-empty { padding:28px; text-align:center; color:var(--text-muted,#64748b); }\n\n.planning-list-card { text-decoration: none; color: inherit; }\n.card-actions { display:flex; align-items:center; gap:12px; }\n.edit-button,.remove-button { padding:6px 10px; border:1px solid var(--border,#e5e7eb); border-radius:6px; background:transparent; color:var(--text-muted,#64748b); cursor:pointer; }\n.edit-button:hover { border-color:#1677ff; color:#1677ff; }\n.remove-button { color:#dc2626; }\n.remove-button:hover:not(:disabled) { border-color:#dc2626; background:rgba(220,38,38,.05); }\n.remove-button:disabled { cursor:wait; opacity:.55; }\n.card-arrow { color:var(--text-muted,#64748b); font-size:25px; line-height:1; }\n.modal-backdrop { position:fixed; inset:0; z-index:1000; display:grid; place-items:center; padding:20px; background:rgba(15,23,42,.45); }\n.edit-modal { width:min(460px,100%); padding:20px; border:1px solid var(--border,#e5e7eb); border-radius:12px; background:var(--surface,#fff); box-shadow:0 24px 70px rgba(15,23,42,.22); }\n.edit-modal header { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:18px; }\n.edit-modal h3 { margin:0; color:var(--text,#0f172a); }\n.edit-modal header p { margin:4px 0 0; color:var(--text-muted,#64748b); font-size:13px; }\n.modal-close { border:0; background:transparent; color:var(--text-muted,#64748b); cursor:pointer; font-size:24px; line-height:1; }\n.edit-modal form,.edit-modal label { display:grid; gap:7px; }\n.edit-modal form { gap:15px; }\n.edit-modal label { color:var(--text,#0f172a); font-size:13px; font-weight:700; }\n.edit-modal input,.edit-modal textarea { width:100%; padding:9px 10px; border:1px solid var(--border,#d1d5db); border-radius:6px; background:var(--surface,#fff); color:var(--text,#0f172a); font:inherit; font-weight:400; }\n.field-error { margin-top:-10px; color:#dc2626; }\n.modal-actions { display:flex; justify-content:flex-end; gap:8px; margin-top:3px; }\n@media (max-width:600px) { .planning-list-page{padding:18px}.page-heading{flex-direction:column}.planning-list-card{align-items:flex-start}.card-actions{align-self:center}.planning-list-card p{max-width:220px} }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PlanejamentoListaComponent, { className: "PlanejamentoListaComponent", filePath: "src/app/pages/planejamento-lista/planejamento-lista.ts", lineNumber: 17 }); })();
