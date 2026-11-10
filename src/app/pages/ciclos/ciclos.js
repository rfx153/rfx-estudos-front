import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CicloService } from '../../services/ciclo.service';
import { MateriaService } from '../../services/materia.service';
import { PlanejamentoService, } from '../../services/planejamento.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/button";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/core/wave";
const _c0 = a0 => ["/ciclos", a0];
function CiclosComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1, "Carregando ciclos...");
    i0.ɵɵelementEnd();
} }
function CiclosComponent_div_12_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function CiclosComponent_div_12_button_7_Template_button_click_0_listener() { const ciclo_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.selecionarCiclo(ciclo_r3)); });
    i0.ɵɵelement(1, "span", 33);
    i0.ɵɵelementStart(2, "span", 34)(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 35);
    i0.ɵɵtext(8, "\u203A");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ciclo_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("selected", ctx_r3.cicloSelecionado?.id === ciclo_r3.id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ciclo_r3.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ciclo_r3.ativo ? "Ativo" : "Pausado");
} }
function CiclosComponent_div_12_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "strong");
    i0.ɵɵtext(2, "Nenhum ciclo ainda");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Crie o primeiro para organizar sua sequ\u00EAncia de mat\u00E9rias.");
    i0.ɵɵelementEnd()();
} }
function CiclosComponent_div_12_small_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 37);
    i0.ɵɵtext(1, " Informe um nome para o ciclo. ");
    i0.ɵɵelementEnd();
} }
function CiclosComponent_div_12_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function CiclosComponent_div_12_button_37_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.excluirCiclo()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r3.excluindoCiclo);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.excluindoCiclo ? "Excluindo..." : "Excluir ciclo", " ");
} }
function CiclosComponent_div_12_a_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 39);
    i0.ɵɵtext(1, " Visualizar ciclo ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c0, ctx_r3.cicloSelecionado?.id));
} }
function CiclosComponent_div_12_section_42_label_23_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const materia_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngValue", materia_r7.id)("disabled", !ctx_r3.materiaDisponivel(materia_r7));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", materia_r7.nome, "", ctx_r3.materiaDisponivel(materia_r7) ? "" : " \u2014 j\u00E1 adicionada", " ");
} }
function CiclosComponent_div_12_section_42_label_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Mat\u00E9ria");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 53);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(4, "option", 54);
    i0.ɵɵtext(5, "Selecione uma mat\u00E9ria");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CiclosComponent_div_12_section_42_label_23_option_6_Template, 2, 4, "option", 55);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.materias);
} }
function CiclosComponent_div_12_section_42_label_24_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opcao_r8 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngValue", opcao_r8.grupo.id)("disabled", !ctx_r3.grupoDisponivel(opcao_r8.grupo));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", opcao_r8.planejamento.nome, " \u2014 ", opcao_r8.grupo.nome, "", ctx_r3.grupoDisponivel(opcao_r8.grupo) ? "" : " \u2014 j\u00E1 adicionado", " ");
} }
function CiclosComponent_div_12_section_42_label_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Bloco do planejamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 53);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementStart(4, "option", 54);
    i0.ɵɵtext(5, "Selecione um bloco");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CiclosComponent_div_12_section_42_label_24_option_6_Template, 2, 5, "option", 55);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.gruposPlanejamento);
} }
function CiclosComponent_div_12_section_42_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵtext(1, "Carregando sequ\u00EAncia...");
    i0.ɵɵelementEnd();
} }
function CiclosComponent_div_12_section_42_ol_28_li_1_small_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r3.tipoItem(item_r10), " \u00B7 ", item_r10.ativo ? "Participa da sequ\u00EAncia" : "Temporariamente pausado");
} }
function CiclosComponent_div_12_section_42_ol_28_li_1_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 68);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r3.tipoItem(item_r10), " \u00B7 ", ctx_r3.conclusaoItem(item_r10));
} }
function CiclosComponent_div_12_section_42_ol_28_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "span", 60);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 61)(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CiclosComponent_div_12_section_42_ol_28_li_1_small_6_Template, 2, 2, "small", 49)(7, CiclosComponent_div_12_section_42_ol_28_li_1_small_7_Template, 2, 2, "small", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 63)(9, "button", 64);
    i0.ɵɵlistener("click", function CiclosComponent_div_12_section_42_ol_28_li_1_Template_button_click_9_listener() { const indice_r11 = i0.ɵɵrestoreView(_r9).index; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.moverItem(indice_r11, -1)); });
    i0.ɵɵtext(10, "\u2191");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 65);
    i0.ɵɵlistener("click", function CiclosComponent_div_12_section_42_ol_28_li_1_Template_button_click_11_listener() { const indice_r11 = i0.ɵɵrestoreView(_r9).index; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.moverItem(indice_r11, 1)); });
    i0.ɵɵtext(12, "\u2193");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 66);
    i0.ɵɵlistener("click", function CiclosComponent_div_12_section_42_ol_28_li_1_Template_button_click_13_listener() { const item_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.alternarItem(item_r10)); });
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 67);
    i0.ɵɵlistener("click", function CiclosComponent_div_12_section_42_ol_28_li_1_Template_button_click_15_listener() { const item_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.removerItem(item_r10)); });
    i0.ɵɵtext(16, "Remover");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const indice_r11 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("inactive", !item_r10.ativo)("completed", !!item_r10.registroConclusao);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(indice_r11 + 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.nomeItem(item_r10));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r10.registroConclusao);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r10.registroConclusao);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", indice_r11 === 0 || ctx_r3.reordenando);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", indice_r11 === ctx_r3.itensDoCiclo.length - 1 || ctx_r3.reordenando);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r10.ativo ? "Pausar" : "Ativar");
} }
function CiclosComponent_div_12_section_42_ol_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ol", 58);
    i0.ɵɵtemplate(1, CiclosComponent_div_12_section_42_ol_28_li_1_Template, 17, 11, "li", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.itensDoCiclo);
} }
function CiclosComponent_div_12_section_42_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69)(1, "span", 70);
    i0.ɵɵtext(2, "\u21BB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "A sequ\u00EAncia est\u00E1 vazia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Adicione mat\u00E9rias ou blocos acima para montar a altern\u00E2ncia deste ciclo.");
    i0.ɵɵelementEnd()();
} }
function CiclosComponent_div_12_section_42_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 40)(1, "header", 41)(2, "div")(3, "span", 16);
    i0.ɵɵtext(4, "Sequ\u00EAncia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6, "Itens do ciclo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Misture mat\u00E9rias e blocos; a ordem define o pr\u00F3ximo item da altern\u00E2ncia.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 42)(10, "span", 43);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 44);
    i0.ɵɵlistener("click", function CiclosComponent_div_12_section_42_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.reiniciarCiclo()); });
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "form", 45);
    i0.ɵɵlistener("ngSubmit", function CiclosComponent_div_12_section_42_Template_form_ngSubmit_14_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.adicionarItem()); });
    i0.ɵɵelementStart(15, "label")(16, "span");
    i0.ɵɵtext(17, "Tipo do item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 46);
    i0.ɵɵcontrolCreate();
    i0.ɵɵlistener("change", function CiclosComponent_div_12_section_42_Template_select_change_18_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.aoTrocarTipoItem()); });
    i0.ɵɵelementStart(19, "option", 47);
    i0.ɵɵtext(20, "Mat\u00E9ria");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 48);
    i0.ɵɵtext(22, "Bloco de mat\u00E9rias");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(23, CiclosComponent_div_12_section_42_label_23_Template, 7, 2, "label", 49)(24, CiclosComponent_div_12_section_42_label_24_Template, 7, 2, "label", 49);
    i0.ɵɵelementStart(25, "button", 30);
    i0.ɵɵtext(26, "Adicionar");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(27, CiclosComponent_div_12_section_42_div_27_Template, 2, 0, "div", 50)(28, CiclosComponent_div_12_section_42_ol_28_Template, 2, 1, "ol", 51)(29, CiclosComponent_div_12_section_42_div_29_Template, 7, 0, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("", ctx_r3.itensDoCiclo.length, " item(ns)");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r3.reiniciando || !ctx_r3.itensDoCiclo.length);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.reiniciando ? "Reiniciando..." : "Reiniciar ciclo", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("formGroup", ctx_r3.itemForm);
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r3.itemForm.controls.tipo.value === "MATERIA");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.itemForm.controls.tipo.value === "GRUPO");
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzLoading", ctx_r3.adicionandoItem);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.carregandoItens);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r3.carregandoItens && ctx_r3.itensDoCiclo.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r3.carregandoItens && !ctx_r3.itensDoCiclo.length);
} }
function CiclosComponent_div_12_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 71)(1, "span", 70);
    i0.ɵɵtext(2, "01");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5, "Salve o ciclo para montar a sequ\u00EAncia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Depois voc\u00EA poder\u00E1 adicionar e ordenar mat\u00E9rias e blocos.");
    i0.ɵɵelementEnd()()();
} }
function CiclosComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "aside", 9)(2, "div", 10)(3, "strong");
    i0.ɵɵtext(4, "Seus ciclos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, CiclosComponent_div_12_button_7_Template, 9, 4, "button", 11)(8, CiclosComponent_div_12_div_8_Template, 5, 0, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "main", 13)(10, "form", 14);
    i0.ɵɵlistener("ngSubmit", function CiclosComponent_div_12_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.salvarCiclo()); });
    i0.ɵɵelementStart(11, "div", 15)(12, "div")(13, "span", 16);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "h2");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "span", 17);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 18)(20, "label", 19)(21, "span");
    i0.ɵɵtext(22, "Nome do ciclo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "input", 20);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(24, CiclosComponent_div_12_small_24_Template, 2, 0, "small", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "label", 22)(26, "input", 23);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span")(28, "strong");
    i0.ɵɵtext(29, "Ciclo ativo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "small");
    i0.ɵɵtext(31, "Desative para pausar sem excluir.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "label", 24)(33, "span");
    i0.ɵɵtext(34, "Observa\u00E7\u00F5es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "textarea", 25);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 26);
    i0.ɵɵtemplate(37, CiclosComponent_div_12_button_37_Template, 2, 2, "button", 27);
    i0.ɵɵelement(38, "span", 28);
    i0.ɵɵtemplate(39, CiclosComponent_div_12_a_39_Template, 2, 3, "a", 29);
    i0.ɵɵelementStart(40, "button", 30);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(42, CiclosComponent_div_12_section_42_Template, 30, 10, "section", 31)(43, CiclosComponent_div_12_ng_template_43_Template, 8, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const salvePrimeiro_r12 = i0.ɵɵreference(44);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.ciclos.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3.ciclos);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r3.ciclos.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r3.cicloForm);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.modoNovo ? "Novo ciclo" : "Configura\u00E7\u00E3o");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.modoNovo ? "Defina uma nova sequ\u00EAncia" : ctx_r3.cicloSelecionado?.nome);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("paused", !ctx_r3.cicloForm.controls.ativo.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.cicloForm.controls.ativo.value ? "Ativo" : "Pausado", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.cicloForm.controls.nome.touched && ctx_r3.cicloForm.controls.nome.invalid);
    i0.ɵɵadvance(2);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(9);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.cicloSelecionado?.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.cicloSelecionado?.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzLoading", ctx_r3.salvandoCiclo);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.modoNovo ? "Criar ciclo" : "Salvar altera\u00E7\u00F5es", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.cicloSelecionado?.id)("ngIfElse", salvePrimeiro_r12);
} }
export class CiclosComponent {
    cicloService = inject(CicloService);
    materiaService = inject(MateriaService);
    planejamentoService = inject(PlanejamentoService);
    fb = inject(FormBuilder);
    message = inject(NzMessageService);
    cdr = inject(ChangeDetectorRef);
    ciclos = [];
    materias = [];
    gruposPlanejamento = [];
    itensDoCiclo = [];
    cicloSelecionado;
    modoNovo = false;
    carregando = true;
    carregandoItens = false;
    salvandoCiclo = false;
    adicionandoItem = false;
    excluindoCiclo = false;
    reordenando = false;
    reiniciando = false;
    cicloForm = this.fb.group({
        nome: ['', [Validators.required, Validators.maxLength(150)]],
        observacoes: [''],
        ativo: [true],
    });
    itemForm = this.fb.group({
        tipo: ['MATERIA', Validators.required],
        itemId: [null, Validators.required],
    });
    ngOnInit() {
        forkJoin({
            ciclos: this.cicloService.listarTodos(),
            materias: this.materiaService.listarTodas(),
            planejamentos: this.planejamentoService.listarTodos(),
        }).pipe(finalize(() => {
            this.carregando = false;
            this.cdr.detectChanges();
        })).subscribe({
            next: ({ ciclos, materias, planejamentos }) => {
                this.ciclos = this.ordenarCiclos(ciclos);
                this.materias = [...materias].sort((a, b) => a.nome.localeCompare(b.nome));
                this.carregarGruposPlanejamento(planejamentos);
                if (this.ciclos.length) {
                    this.selecionarCiclo(this.ciclos[0]);
                }
                else {
                    this.novoCiclo();
                }
            },
            error: (erro) => {
                console.error('Erro ao carregar ciclos:', erro);
                this.message.error('Não foi possível carregar os ciclos.');
            },
        });
    }
    novoCiclo() {
        this.modoNovo = true;
        this.cicloSelecionado = undefined;
        this.itensDoCiclo = [];
        this.cicloForm.reset({ nome: '', observacoes: '', ativo: true });
    }
    selecionarCiclo(ciclo) {
        if (!ciclo.id || this.salvandoCiclo)
            return;
        this.modoNovo = false;
        this.cicloSelecionado = ciclo;
        this.cicloForm.reset({
            nome: ciclo.nome,
            observacoes: ciclo.observacoes || '',
            ativo: ciclo.ativo,
        });
        this.carregarItens(ciclo.id);
    }
    salvarCiclo() {
        if (this.cicloForm.invalid) {
            this.cicloForm.markAllAsTouched();
            return;
        }
        const dados = {
            nome: this.cicloForm.controls.nome.value.trim(),
            observacoes: this.cicloForm.controls.observacoes.value?.trim() || null,
            ativo: Boolean(this.cicloForm.controls.ativo.value),
        };
        if (!dados.nome) {
            this.cicloForm.controls.nome.setErrors({ required: true });
            return;
        }
        this.salvandoCiclo = true;
        const requisicao = this.cicloSelecionado?.id
            ? this.cicloService.atualizar(this.cicloSelecionado.id, dados)
            : this.cicloService.criar(dados);
        requisicao.pipe(finalize(() => {
            this.salvandoCiclo = false;
            this.cdr.detectChanges();
        })).subscribe({
            next: cicloSalvo => {
                const indice = this.ciclos.findIndex(item => item.id === cicloSalvo.id);
                if (indice >= 0) {
                    this.ciclos[indice] = cicloSalvo;
                }
                else {
                    this.ciclos.push(cicloSalvo);
                }
                this.ciclos = this.ordenarCiclos(this.ciclos);
                this.message.success(this.modoNovo ? 'Ciclo criado.' : 'Ciclo atualizado.');
                this.selecionarCiclo(cicloSalvo);
            },
            error: erro => {
                console.error('Erro ao salvar ciclo:', erro);
                this.message.error('Não foi possível salvar o ciclo.');
            },
        });
    }
    excluirCiclo() {
        const ciclo = this.cicloSelecionado;
        if (!ciclo?.id || !window.confirm(`Apagar o ciclo "${ciclo.nome}"?`))
            return;
        this.excluindoCiclo = true;
        this.cicloService.excluir(ciclo.id).pipe(finalize(() => {
            this.excluindoCiclo = false;
            this.cdr.detectChanges();
        })).subscribe({
            next: () => {
                this.ciclos = this.ciclos.filter(item => item.id !== ciclo.id);
                this.message.success('Ciclo removido.');
                if (this.ciclos.length) {
                    this.selecionarCiclo(this.ciclos[0]);
                }
                else {
                    this.novoCiclo();
                }
            },
            error: erro => {
                console.error('Erro ao excluir ciclo:', erro);
                this.message.error('Não foi possível remover o ciclo.');
            },
        });
    }
    adicionarItem() {
        const cicloId = this.cicloSelecionado?.id;
        const tipo = this.itemForm.controls.tipo.value;
        const itemId = this.itemForm.controls.itemId.value;
        if (!cicloId || !tipo || !itemId) {
            this.itemForm.markAllAsTouched();
            return;
        }
        if (!this.itemDisponivel(tipo, itemId)) {
            this.message.warning(tipo === 'MATERIA'
                ? 'Esta matéria já faz parte do ciclo.'
                : 'Este bloco já faz parte do ciclo.');
            return;
        }
        this.adicionandoItem = true;
        this.cicloService.adicionarItem(cicloId, {
            materiaId: tipo === 'MATERIA' ? itemId : null,
            planejamentoGrupoMateriaId: tipo === 'GRUPO' ? itemId : null,
            ordem: this.itensDoCiclo.length + 1,
            ativo: true,
        }).pipe(finalize(() => {
            this.adicionandoItem = false;
            this.cdr.detectChanges();
        })).subscribe({
            next: item => {
                this.itensDoCiclo = [...this.itensDoCiclo, item].sort((a, b) => a.ordem - b.ordem);
                this.itemForm.reset({ tipo, itemId: null });
                this.message.success(`${tipo === 'MATERIA' ? 'Matéria' : 'Bloco'} adicionado ao ciclo.`);
            },
            error: erro => {
                console.error('Erro ao adicionar item ao ciclo:', erro);
                this.message.error('Não foi possível adicionar o item.');
            },
        });
    }
    removerItem(item) {
        const cicloId = this.cicloSelecionado?.id;
        if (!cicloId || !item.id || !window.confirm(`Remover "${this.nomeItem(item)}" deste ciclo?`))
            return;
        this.cicloService.excluirItem(cicloId, item.id).subscribe({
            next: () => {
                this.itensDoCiclo = this.itensDoCiclo
                    .filter(cicloItem => cicloItem.id !== item.id)
                    .map((cicloItem, indice) => ({ ...cicloItem, ordem: indice + 1 }));
                this.message.success('Item removido do ciclo.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao remover item do ciclo:', erro);
                this.message.error('Não foi possível remover o item.');
            },
        });
    }
    alternarItem(item) {
        const cicloId = this.cicloSelecionado?.id;
        if (!cicloId || !item.id)
            return;
        this.cicloService.atualizarItem(cicloId, item.id, {
            materiaId: item.materia?.id ?? null,
            planejamentoGrupoMateriaId: item.planejamentoGrupoMateria?.id ?? null,
            ordem: item.ordem,
            ativo: !item.ativo,
        }).subscribe({
            next: atualizado => {
                this.itensDoCiclo = this.itensDoCiclo.map(cicloItem => cicloItem.id === atualizado.id ? atualizado : cicloItem);
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao alterar item do ciclo:', erro);
                this.message.error('Não foi possível alterar o item.');
            },
        });
    }
    moverItem(indice, deslocamento) {
        const destino = indice + deslocamento;
        const cicloId = this.cicloSelecionado?.id;
        if (!cicloId || destino < 0 || destino >= this.itensDoCiclo.length || this.reordenando)
            return;
        const anterior = [...this.itensDoCiclo];
        const reordenadas = [...this.itensDoCiclo];
        [reordenadas[indice], reordenadas[destino]] = [reordenadas[destino], reordenadas[indice]];
        this.itensDoCiclo = reordenadas.map((item, posicao) => ({ ...item, ordem: posicao + 1 }));
        this.reordenando = true;
        this.cicloService.reordenarItens(cicloId, this.itensDoCiclo).pipe(finalize(() => {
            this.reordenando = false;
            this.cdr.detectChanges();
        })).subscribe({
            next: itens => {
                this.itensDoCiclo = [...itens].sort((a, b) => a.ordem - b.ordem);
            },
            error: erro => {
                this.itensDoCiclo = anterior;
                console.error('Erro ao reordenar itens:', erro);
                this.message.error('Não foi possível alterar a ordem dos itens.');
            },
        });
    }
    reiniciarCiclo() {
        const cicloId = this.cicloSelecionado?.id;
        if (!cicloId || this.reiniciando || !window.confirm('Iniciar uma nova rodada e desmarcar todos os itens?')) {
            return;
        }
        this.reiniciando = true;
        this.cicloService.reiniciar(cicloId).pipe(finalize(() => {
            this.reiniciando = false;
            this.cdr.detectChanges();
        })).subscribe({
            next: itens => {
                this.itensDoCiclo = [...itens].sort((a, b) => a.ordem - b.ordem);
                this.message.success('Nova rodada do ciclo iniciada.');
            },
            error: erro => {
                console.error('Erro ao reiniciar ciclo:', erro);
                this.message.error('Não foi possível reiniciar o ciclo.');
            },
        });
    }
    materiaDisponivel(materia) {
        return !!materia.id && this.itemDisponivel('MATERIA', materia.id);
    }
    grupoDisponivel(grupo) {
        return !!grupo.id && this.itemDisponivel('GRUPO', grupo.id);
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
    aoTrocarTipoItem() {
        this.itemForm.controls.itemId.reset();
    }
    itemDisponivel(tipo, id) {
        return !this.itensDoCiclo.some(item => tipo === 'MATERIA'
            ? item.materia?.id === id
            : item.planejamentoGrupoMateria?.id === id);
    }
    carregarItens(cicloId) {
        this.carregandoItens = true;
        this.itensDoCiclo = [];
        this.cicloService.listarItens(cicloId).pipe(finalize(() => {
            this.carregandoItens = false;
            this.cdr.detectChanges();
        })).subscribe({
            next: itens => {
                if (this.cicloSelecionado?.id === cicloId) {
                    this.itensDoCiclo = [...itens].sort((a, b) => a.ordem - b.ordem);
                }
            },
            error: erro => {
                console.error('Erro ao carregar itens do ciclo:', erro);
                this.message.error('Não foi possível carregar os itens do ciclo.');
            },
        });
    }
    carregarGruposPlanejamento(planejamentos) {
        const validos = planejamentos.filter((planejamento) => !!planejamento.id);
        if (!validos.length) {
            this.gruposPlanejamento = [];
            return;
        }
        forkJoin(validos.map(planejamento => this.planejamentoService.listarGruposMaterias(planejamento.id).pipe(map(grupos => grupos.map(grupo => ({ grupo, planejamento })))))).subscribe({
            next: grupos => {
                this.gruposPlanejamento = grupos.flat().sort((a, b) => a.planejamento.nome.localeCompare(b.planejamento.nome)
                    || a.grupo.nome.localeCompare(b.grupo.nome));
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao carregar blocos dos planejamentos:', erro);
                this.message.error('Não foi possível carregar os blocos dos planejamentos.');
            },
        });
    }
    ordenarCiclos(ciclos) {
        return [...ciclos].sort((a, b) => a.nome.localeCompare(b.nome));
    }
    static ɵfac = function CiclosComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CiclosComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CiclosComponent, selectors: [["app-ciclos"]], decls: 13, vars: 2, consts: [["salvePrimeiro", ""], [1, "cycles-page"], [1, "cycles-heading"], [1, "eyebrow"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], ["class", "cycles-loading", 4, "ngIf"], ["class", "cycles-layout", 4, "ngIf"], [1, "cycles-loading"], [1, "cycles-layout"], ["aria-label", "Ciclos cadastrados", 1, "cycles-sidebar"], [1, "sidebar-title"], ["type", "button", "class", "cycle-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "sidebar-empty", 4, "ngIf"], [1, "cycle-editor"], [1, "cycle-form", 3, "ngSubmit", "formGroup"], [1, "editor-heading"], [1, "editor-kicker"], [1, "status-badge"], [1, "form-grid"], [1, "field", "field-name"], ["formControlName", "nome", "maxlength", "150", "placeholder", "Ex.: PT / Matem\u00E1tica"], ["class", "field-error", 4, "ngIf"], [1, "active-toggle"], ["type", "checkbox", "formControlName", "ativo"], [1, "field", "field-notes"], ["formControlName", "observacoes", "rows", "3", "placeholder", "Objetivo ou contexto deste ciclo"], [1, "form-actions"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "form-spacer"], ["nz-button", "", 3, "routerLink", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["class", "sequence-section", 4, "ngIf", "ngIfElse"], ["type", "button", 1, "cycle-option", 3, "click"], ["aria-hidden", "true", 1, "cycle-option-mark"], [1, "cycle-option-copy"], ["aria-hidden", "true", 1, "cycle-option-arrow"], [1, "sidebar-empty"], [1, "field-error"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click", "disabled"], ["nz-button", "", 3, "routerLink"], [1, "sequence-section"], [1, "sequence-heading"], [1, "sequence-heading-actions"], [1, "subject-count"], ["nz-button", "", "type", "button", 3, "click", "disabled"], [1, "add-subject", 3, "ngSubmit", "formGroup"], ["formControlName", "tipo", 3, "change"], ["value", "MATERIA"], ["value", "GRUPO"], [4, "ngIf"], ["class", "sequence-loading", 4, "ngIf"], ["class", "sequence-list", 4, "ngIf"], ["class", "sequence-empty", 4, "ngIf"], ["formControlName", "itemId"], [3, "ngValue"], [3, "ngValue", "disabled", 4, "ngFor", "ngForOf"], [3, "ngValue", "disabled"], [1, "sequence-loading"], [1, "sequence-list"], [3, "inactive", "completed", 4, "ngFor", "ngForOf"], [1, "order-number"], [1, "subject-copy"], ["class", "completion-time", 4, "ngIf"], [1, "subject-actions"], ["type", "button", "aria-label", "Mover item para cima", 1, "icon-button", 3, "click", "disabled"], ["type", "button", "aria-label", "Mover item para baixo", 1, "icon-button", 3, "click", "disabled"], ["type", "button", 1, "text-button", 3, "click"], ["type", "button", 1, "text-button", "danger", 3, "click"], [1, "completion-time"], [1, "sequence-empty"], ["aria-hidden", "true"], [1, "save-first"]], template: function CiclosComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 1)(1, "header", 2)(2, "div")(3, "span", 3);
            i0.ɵɵtext(4, "Rota\u00E7\u00E3o de estudos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Ciclos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Monte sequ\u00EAncias de mat\u00E9rias e mantenha cada frente de estudo independente.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "button", 4);
            i0.ɵɵlistener("click", function CiclosComponent_Template_button_click_9_listener() { return ctx.novoCiclo(); });
            i0.ɵɵtext(10, "Novo ciclo");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(11, CiclosComponent_div_11_Template, 2, 0, "div", 5)(12, CiclosComponent_div_12_Template, 45, 16, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MaxLengthValidator, i2.FormGroupDirective, i2.FormControlName, RouterLink, NzButtonModule, i3.NzButtonComponent, i4.ɵNzTransitionPatchDirective, i5.NzWaveDirective], styles: [".cycles-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 22px;\n}\n\n.cycles-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 8px 2px;\n}\n\n.eyebrow[_ngcontent-%COMP%], \n.editor-kicker[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #1677ff;\n  font-size: 11px;\n  font-weight: 850;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n\n.cycles-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.editor-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.sequence-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n}\n\n.cycles-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.sequence-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.save-first[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.sidebar-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.sequence-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.cycles-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(230px, 300px) minmax(0, 1fr);\n  gap: 18px;\n  align-items: start;\n}\n\n.cycles-sidebar[_ngcontent-%COMP%], \n.cycle-form[_ngcontent-%COMP%], \n.sequence-section[_ngcontent-%COMP%], \n.save-first[_ngcontent-%COMP%], \n.cycles-loading[_ngcontent-%COMP%] {\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 12px;\n  background: var(--%NS%surface, #fff);\n}\n\n.cycles-sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 94px;\n  overflow: hidden;\n  padding: 10px;\n}\n\n.sidebar-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 9px 13px;\n  color: var(--%NS%text, #0f172a);\n}\n\n.sidebar-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.subject-count[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: var(--%NS%surface-soft, #f8fafc);\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.cycle-option[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 9px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 12px 10px;\n  border: 0;\n  border-radius: 9px;\n  background: transparent;\n  color: var(--%NS%text, #0f172a);\n  text-align: left;\n  cursor: pointer;\n}\n\n.cycle-option[_ngcontent-%COMP%]:hover { background: var(--%NS%surface-soft, #f8fafc); }\n.cycle-option.selected[_ngcontent-%COMP%] { background: rgba(22, 119, 255, .1); }\n.cycle-option-mark[_ngcontent-%COMP%] { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; }\n.cycle-option-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; color: var(--%NS%text-muted, #64748b); font-size: 11px; }\n\n.sidebar-empty[_ngcontent-%COMP%], \n.sequence-empty[_ngcontent-%COMP%] {\n  padding: 26px 16px;\n  text-align: center;\n}\n\n.cycle-editor[_ngcontent-%COMP%] { display: grid; gap: 18px; min-width: 0; }\n.cycle-form[_ngcontent-%COMP%], \n.sequence-section[_ngcontent-%COMP%] { padding: clamp(18px, 3vw, 28px); }\n.editor-heading[_ngcontent-%COMP%], \n.sequence-heading[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }\n.editor-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.sequence-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 21px; }\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: rgba(34, 197, 94, .09);\n  color: #15803d;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.status-badge.paused[_ngcontent-%COMP%] { border-color: rgba(100, 116, 139, .22); background: rgba(100, 116, 139, .09); color: var(--%NS%text-muted, #64748b); }\n.form-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px 24px; margin-top: 24px; }\n.field[_ngcontent-%COMP%] { display: grid; gap: 7px; color: var(--%NS%text, #0f172a); font-size: 13px; font-weight: 750; }\n.field-notes[_ngcontent-%COMP%] { grid-column: 1 / -1; }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.add-subject[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--%NS%border, #d1d5db);\n  border-radius: 8px;\n  outline: none;\n  background: var(--%NS%surface, #fff);\n  color: var(--%NS%text, #0f172a);\n  font: inherit;\n  font-weight: 400;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { padding: 10px 11px; }\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { padding: 10px 11px; resize: vertical; }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.add-subject[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus { border-color: #1677ff; }\n.field-error[_ngcontent-%COMP%] { color: #dc2626; }\n\n.active-toggle[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; align-self: end; min-height: 42px; color: var(--%NS%text, #0f172a); cursor: pointer; }\n.active-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 18px; height: 18px; accent-color: #1677ff; }\n.active-toggle[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; color: var(--%NS%text-muted, #64748b); font-size: 11px; }\n\n.form-actions[_ngcontent-%COMP%] { display: flex; gap: 10px; margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--%NS%border, #e5e7eb); }\n.form-spacer[_ngcontent-%COMP%] { flex: 1; }\n.sequence-heading[_ngcontent-%COMP%] { padding-bottom: 20px; border-bottom: 1px solid var(--%NS%border, #e5e7eb); }\n.sequence-heading-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\n.add-subject[_ngcontent-%COMP%] { display: flex; align-items: end; gap: 10px; padding: 18px 0; }\n.add-subject[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: grid; flex: 1; gap: 7px; color: var(--%NS%text, #0f172a); font-size: 13px; font-weight: 750; }\n.add-subject[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { min-height: 40px; padding: 8px 10px; }\n.sequence-list[_ngcontent-%COMP%] { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.sequence-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { display: grid; grid-template-columns: 38px minmax(0, 1fr) auto; align-items: center; gap: 12px; padding: 12px; border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 9px; background: var(--%NS%surface-muted, #fbfdff); }\n.sequence-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%] { border-color: #86efac; background: #dcfce7; }\n.sequence-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] { background: #22c55e; color: #fff; }\n.sequence-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]   .subject-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.sequence-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]   .completion-time[_ngcontent-%COMP%] { color: #166534; }\n.sequence-list[_ngcontent-%COMP%]   li.inactive[_ngcontent-%COMP%] { opacity: .62; }\n.order-number[_ngcontent-%COMP%] { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 8px; background: rgba(22, 119, 255, .1); color: #1677ff; font-weight: 850; }\n.subject-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--%NS%text, #0f172a); }\n.subject-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; color: var(--%NS%text-muted, #64748b); font-size: 11px; }\n.subject-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 5px; }\n.icon-button[_ngcontent-%COMP%], \n.text-button[_ngcontent-%COMP%] { border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 6px; background: var(--%NS%surface, #fff); color: var(--%NS%text-muted, #64748b); cursor: pointer; }\n.icon-button[_ngcontent-%COMP%] { width: 30px; height: 30px; font-size: 15px; }\n.text-button[_ngcontent-%COMP%] { padding: 6px 8px; font-size: 12px; font-weight: 750; }\n.icon-button[_ngcontent-%COMP%]:hover:not(:disabled), \n.text-button[_ngcontent-%COMP%]:hover { border-color: #1677ff; color: #1677ff; }\n.icon-button[_ngcontent-%COMP%]:disabled { cursor: not-allowed; opacity: .35; }\n.text-button.danger[_ngcontent-%COMP%] { color: #dc2626; }\n.text-button.danger[_ngcontent-%COMP%]:hover { border-color: #dc2626; }\n.sequence-empty[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { display: block; margin-bottom: 8px; color: #1677ff; font-size: 22px; }\n.sequence-loading[_ngcontent-%COMP%], \n.cycles-loading[_ngcontent-%COMP%] { padding: 32px; color: var(--%NS%text-muted, #64748b); text-align: center; }\n.save-first[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 14px; padding: 20px; }\n.save-first[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { display: grid; flex: 0 0 42px; width: 42px; height: 42px; place-items: center; border-radius: 10px; background: rgba(22, 119, 255, .1); color: #1677ff; font-weight: 850; }\n.save-first[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--%NS%text, #0f172a); }\n\n@media (max-width: 860px) {\n  .cycles-layout[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .cycles-sidebar[_ngcontent-%COMP%] { position: static; display: flex; gap: 7px; overflow-x: auto; }\n  .sidebar-title[_ngcontent-%COMP%] { flex: 0 0 auto; gap: 8px; }\n  .cycle-option[_ngcontent-%COMP%] { flex: 0 0 210px; }\n  .sidebar-empty[_ngcontent-%COMP%] { min-width: 260px; padding: 10px; text-align: left; }\n}\n\n@media (max-width: 640px) {\n  .cycles-heading[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; }\n  .cycles-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { align-self: flex-start; }\n  .form-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .field-notes[_ngcontent-%COMP%] { grid-column: auto; }\n  .active-toggle[_ngcontent-%COMP%] { align-self: auto; }\n  .sequence-heading[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; }\n  .sequence-heading-actions[_ngcontent-%COMP%] { flex-wrap: wrap; }\n  .add-subject[_ngcontent-%COMP%] { align-items: stretch; flex-direction: column; }\n  .sequence-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { grid-template-columns: 34px minmax(0, 1fr); }\n  .subject-actions[_ngcontent-%COMP%] { grid-column: 1 / -1; justify-content: flex-end; flex-wrap: wrap; padding-top: 7px; border-top: 1px solid var(--%NS%border, #e5e7eb); }\n  .form-actions[_ngcontent-%COMP%] { flex-wrap: wrap; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CiclosComponent, [{
        type: Component,
        args: [{ selector: 'app-ciclos', standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, NzButtonModule], template: "<section class=\"cycles-page\">\n  <header class=\"cycles-heading\">\n    <div>\n      <span class=\"eyebrow\">Rota\u00E7\u00E3o de estudos</span>\n      <h1>Ciclos</h1>\n      <p>Monte sequ\u00EAncias de mat\u00E9rias e mantenha cada frente de estudo independente.</p>\n    </div>\n    <button nz-button nzType=\"primary\" type=\"button\" (click)=\"novoCiclo()\">Novo ciclo</button>\n  </header>\n\n  <div class=\"cycles-loading\" *ngIf=\"carregando\">Carregando ciclos...</div>\n\n  <div class=\"cycles-layout\" *ngIf=\"!carregando\">\n    <aside class=\"cycles-sidebar\" aria-label=\"Ciclos cadastrados\">\n      <div class=\"sidebar-title\">\n        <strong>Seus ciclos</strong>\n        <span>{{ ciclos.length }}</span>\n      </div>\n\n      <button\n        type=\"button\"\n        class=\"cycle-option\"\n        *ngFor=\"let ciclo of ciclos\"\n        [class.selected]=\"cicloSelecionado?.id === ciclo.id\"\n        (click)=\"selecionarCiclo(ciclo)\">\n        <span class=\"cycle-option-mark\" aria-hidden=\"true\"></span>\n        <span class=\"cycle-option-copy\">\n          <strong>{{ ciclo.nome }}</strong>\n          <small>{{ ciclo.ativo ? 'Ativo' : 'Pausado' }}</small>\n        </span>\n        <span class=\"cycle-option-arrow\" aria-hidden=\"true\">\u203A</span>\n      </button>\n\n      <div class=\"sidebar-empty\" *ngIf=\"!ciclos.length\">\n        <strong>Nenhum ciclo ainda</strong>\n        <p>Crie o primeiro para organizar sua sequ\u00EAncia de mat\u00E9rias.</p>\n      </div>\n    </aside>\n\n    <main class=\"cycle-editor\">\n      <form class=\"cycle-form\" [formGroup]=\"cicloForm\" (ngSubmit)=\"salvarCiclo()\">\n        <div class=\"editor-heading\">\n          <div>\n            <span class=\"editor-kicker\">{{ modoNovo ? 'Novo ciclo' : 'Configura\u00E7\u00E3o' }}</span>\n            <h2>{{ modoNovo ? 'Defina uma nova sequ\u00EAncia' : cicloSelecionado?.nome }}</h2>\n          </div>\n          <span class=\"status-badge\" [class.paused]=\"!cicloForm.controls.ativo.value\">\n            {{ cicloForm.controls.ativo.value ? 'Ativo' : 'Pausado' }}\n          </span>\n        </div>\n\n        <div class=\"form-grid\">\n          <label class=\"field field-name\">\n            <span>Nome do ciclo</span>\n            <input formControlName=\"nome\" maxlength=\"150\" placeholder=\"Ex.: PT / Matem\u00E1tica\" />\n            <small class=\"field-error\" *ngIf=\"cicloForm.controls.nome.touched && cicloForm.controls.nome.invalid\">\n              Informe um nome para o ciclo.\n            </small>\n          </label>\n\n          <label class=\"active-toggle\">\n            <input type=\"checkbox\" formControlName=\"ativo\" />\n            <span>\n              <strong>Ciclo ativo</strong>\n              <small>Desative para pausar sem excluir.</small>\n            </span>\n          </label>\n\n          <label class=\"field field-notes\">\n            <span>Observa\u00E7\u00F5es</span>\n            <textarea formControlName=\"observacoes\" rows=\"3\" placeholder=\"Objetivo ou contexto deste ciclo\"></textarea>\n          </label>\n        </div>\n\n        <div class=\"form-actions\">\n          <button\n            *ngIf=\"cicloSelecionado?.id\"\n            nz-button\n            nzDanger\n            type=\"button\"\n            [disabled]=\"excluindoCiclo\"\n            (click)=\"excluirCiclo()\">\n            {{ excluindoCiclo ? 'Excluindo...' : 'Excluir ciclo' }}\n          </button>\n          <span class=\"form-spacer\"></span>\n          <a\n            *ngIf=\"cicloSelecionado?.id\"\n            nz-button\n            [routerLink]=\"['/ciclos', cicloSelecionado?.id]\">\n            Visualizar ciclo\n          </a>\n          <button nz-button nzType=\"primary\" [nzLoading]=\"salvandoCiclo\">\n            {{ modoNovo ? 'Criar ciclo' : 'Salvar altera\u00E7\u00F5es' }}\n          </button>\n        </div>\n      </form>\n\n      <section class=\"sequence-section\" *ngIf=\"cicloSelecionado?.id; else salvePrimeiro\">\n        <header class=\"sequence-heading\">\n          <div>\n            <span class=\"editor-kicker\">Sequ\u00EAncia</span>\n            <h2>Itens do ciclo</h2>\n            <p>Misture mat\u00E9rias e blocos; a ordem define o pr\u00F3ximo item da altern\u00E2ncia.</p>\n          </div>\n          <div class=\"sequence-heading-actions\">\n            <span class=\"subject-count\">{{ itensDoCiclo.length }} item(ns)</span>\n            <button nz-button type=\"button\" [disabled]=\"reiniciando || !itensDoCiclo.length\" (click)=\"reiniciarCiclo()\">\n              {{ reiniciando ? 'Reiniciando...' : 'Reiniciar ciclo' }}\n            </button>\n          </div>\n        </header>\n\n        <form class=\"add-subject\" [formGroup]=\"itemForm\" (ngSubmit)=\"adicionarItem()\">\n          <label>\n            <span>Tipo do item</span>\n            <select formControlName=\"tipo\" (change)=\"aoTrocarTipoItem()\">\n              <option value=\"MATERIA\">Mat\u00E9ria</option>\n              <option value=\"GRUPO\">Bloco de mat\u00E9rias</option>\n            </select>\n          </label>\n          <label *ngIf=\"itemForm.controls.tipo.value === 'MATERIA'\">\n            <span>Mat\u00E9ria</span>\n            <select formControlName=\"itemId\">\n              <option [ngValue]=\"null\">Selecione uma mat\u00E9ria</option>\n              <option *ngFor=\"let materia of materias\" [ngValue]=\"materia.id\" [disabled]=\"!materiaDisponivel(materia)\">\n                {{ materia.nome }}{{ materiaDisponivel(materia) ? '' : ' \u2014 j\u00E1 adicionada' }}\n              </option>\n            </select>\n          </label>\n          <label *ngIf=\"itemForm.controls.tipo.value === 'GRUPO'\">\n            <span>Bloco do planejamento</span>\n            <select formControlName=\"itemId\">\n              <option [ngValue]=\"null\">Selecione um bloco</option>\n              <option *ngFor=\"let opcao of gruposPlanejamento\" [ngValue]=\"opcao.grupo.id\" [disabled]=\"!grupoDisponivel(opcao.grupo)\">\n                {{ opcao.planejamento.nome }} \u2014 {{ opcao.grupo.nome }}{{ grupoDisponivel(opcao.grupo) ? '' : ' \u2014 j\u00E1 adicionado' }}\n              </option>\n            </select>\n          </label>\n          <button nz-button nzType=\"primary\" [nzLoading]=\"adicionandoItem\">Adicionar</button>\n        </form>\n\n        <div class=\"sequence-loading\" *ngIf=\"carregandoItens\">Carregando sequ\u00EAncia...</div>\n\n        <ol class=\"sequence-list\" *ngIf=\"!carregandoItens && itensDoCiclo.length\">\n          <li\n            *ngFor=\"let item of itensDoCiclo; let indice = index\"\n            [class.inactive]=\"!item.ativo\"\n            [class.completed]=\"!!item.registroConclusao\">\n            <span class=\"order-number\">{{ indice + 1 }}</span>\n            <div class=\"subject-copy\">\n              <strong>{{ nomeItem(item) }}</strong>\n              <small *ngIf=\"!item.registroConclusao\">{{ tipoItem(item) }} \u00B7 {{ item.ativo ? 'Participa da sequ\u00EAncia' : 'Temporariamente pausado' }}</small>\n              <small class=\"completion-time\" *ngIf=\"item.registroConclusao\">{{ tipoItem(item) }} \u00B7 {{ conclusaoItem(item) }}</small>\n            </div>\n            <div class=\"subject-actions\">\n              <button type=\"button\" class=\"icon-button\" [disabled]=\"indice === 0 || reordenando\" aria-label=\"Mover item para cima\" (click)=\"moverItem(indice, -1)\">\u2191</button>\n              <button type=\"button\" class=\"icon-button\" [disabled]=\"indice === itensDoCiclo.length - 1 || reordenando\" aria-label=\"Mover item para baixo\" (click)=\"moverItem(indice, 1)\">\u2193</button>\n              <button type=\"button\" class=\"text-button\" (click)=\"alternarItem(item)\">{{ item.ativo ? 'Pausar' : 'Ativar' }}</button>\n              <button type=\"button\" class=\"text-button danger\" (click)=\"removerItem(item)\">Remover</button>\n            </div>\n          </li>\n        </ol>\n\n        <div class=\"sequence-empty\" *ngIf=\"!carregandoItens && !itensDoCiclo.length\">\n          <span aria-hidden=\"true\">\u21BB</span>\n          <strong>A sequ\u00EAncia est\u00E1 vazia</strong>\n          <p>Adicione mat\u00E9rias ou blocos acima para montar a altern\u00E2ncia deste ciclo.</p>\n        </div>\n      </section>\n\n      <ng-template #salvePrimeiro>\n        <section class=\"save-first\">\n          <span aria-hidden=\"true\">01</span>\n          <div>\n            <strong>Salve o ciclo para montar a sequ\u00EAncia</strong>\n            <p>Depois voc\u00EA poder\u00E1 adicionar e ordenar mat\u00E9rias e blocos.</p>\n          </div>\n        </section>\n      </ng-template>\n    </main>\n  </div>\n</section>\n", styles: [".cycles-page {\n  display: grid;\n  gap: 22px;\n}\n\n.cycles-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 8px 2px;\n}\n\n.eyebrow,\n.editor-kicker {\n  display: block;\n  margin-bottom: 6px;\n  color: #1677ff;\n  font-size: 11px;\n  font-weight: 850;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n\n.cycles-heading h1,\n.editor-heading h2,\n.sequence-heading h2 {\n  margin: 0;\n  color: var(--text, #0f172a);\n}\n\n.cycles-heading p,\n.sequence-heading p,\n.save-first p,\n.sidebar-empty p,\n.sequence-empty p {\n  margin: 7px 0 0;\n  color: var(--text-muted, #64748b);\n}\n\n.cycles-layout {\n  display: grid;\n  grid-template-columns: minmax(230px, 300px) minmax(0, 1fr);\n  gap: 18px;\n  align-items: start;\n}\n\n.cycles-sidebar,\n.cycle-form,\n.sequence-section,\n.save-first,\n.cycles-loading {\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 12px;\n  background: var(--surface, #fff);\n}\n\n.cycles-sidebar {\n  position: sticky;\n  top: 94px;\n  overflow: hidden;\n  padding: 10px;\n}\n\n.sidebar-title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 9px 13px;\n  color: var(--text, #0f172a);\n}\n\n.sidebar-title span,\n.subject-count {\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: var(--surface-soft, #f8fafc);\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.cycle-option {\n  display: grid;\n  grid-template-columns: 9px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 12px 10px;\n  border: 0;\n  border-radius: 9px;\n  background: transparent;\n  color: var(--text, #0f172a);\n  text-align: left;\n  cursor: pointer;\n}\n\n.cycle-option:hover { background: var(--surface-soft, #f8fafc); }\n.cycle-option.selected { background: rgba(22, 119, 255, .1); }\n.cycle-option-mark { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; }\n.cycle-option-copy small { display: block; color: var(--text-muted, #64748b); font-size: 11px; }\n\n.sidebar-empty,\n.sequence-empty {\n  padding: 26px 16px;\n  text-align: center;\n}\n\n.cycle-editor { display: grid; gap: 18px; min-width: 0; }\n.cycle-form,\n.sequence-section { padding: clamp(18px, 3vw, 28px); }\n.editor-heading,\n.sequence-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }\n.editor-heading h2,\n.sequence-heading h2 { font-size: 21px; }\n\n.status-badge {\n  padding: 5px 10px;\n  border-radius: 999px;\n  background: rgba(34, 197, 94, .09);\n  color: #15803d;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.status-badge.paused { border-color: rgba(100, 116, 139, .22); background: rgba(100, 116, 139, .09); color: var(--text-muted, #64748b); }\n.form-grid { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px 24px; margin-top: 24px; }\n.field { display: grid; gap: 7px; color: var(--text, #0f172a); font-size: 13px; font-weight: 750; }\n.field-notes { grid-column: 1 / -1; }\n.field input,\n.field textarea,\n.add-subject select {\n  width: 100%;\n  border: 1px solid var(--border, #d1d5db);\n  border-radius: 8px;\n  outline: none;\n  background: var(--surface, #fff);\n  color: var(--text, #0f172a);\n  font: inherit;\n  font-weight: 400;\n}\n.field input { padding: 10px 11px; }\n.field textarea { padding: 10px 11px; resize: vertical; }\n.field input:focus,\n.field textarea:focus,\n.add-subject select:focus { border-color: #1677ff; }\n.field-error { color: #dc2626; }\n\n.active-toggle { display: flex; align-items: center; gap: 10px; align-self: end; min-height: 42px; color: var(--text, #0f172a); cursor: pointer; }\n.active-toggle input { width: 18px; height: 18px; accent-color: #1677ff; }\n.active-toggle small { display: block; color: var(--text-muted, #64748b); font-size: 11px; }\n\n.form-actions { display: flex; gap: 10px; margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--border, #e5e7eb); }\n.form-spacer { flex: 1; }\n.sequence-heading { padding-bottom: 20px; border-bottom: 1px solid var(--border, #e5e7eb); }\n.sequence-heading-actions { display: flex; align-items: center; gap: 10px; }\n.add-subject { display: flex; align-items: end; gap: 10px; padding: 18px 0; }\n.add-subject label { display: grid; flex: 1; gap: 7px; color: var(--text, #0f172a); font-size: 13px; font-weight: 750; }\n.add-subject select { min-height: 40px; padding: 8px 10px; }\n.sequence-list { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.sequence-list li { display: grid; grid-template-columns: 38px minmax(0, 1fr) auto; align-items: center; gap: 12px; padding: 12px; border: 1px solid var(--border, #e5e7eb); border-radius: 9px; background: var(--surface-muted, #fbfdff); }\n.sequence-list li.completed { border-color: #86efac; background: #dcfce7; }\n.sequence-list li.completed .order-number { background: #22c55e; color: #fff; }\n.sequence-list li.completed .subject-copy strong,\n.sequence-list li.completed .completion-time { color: #166534; }\n.sequence-list li.inactive { opacity: .62; }\n.order-number { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 8px; background: rgba(22, 119, 255, .1); color: #1677ff; font-weight: 850; }\n.subject-copy strong { color: var(--text, #0f172a); }\n.subject-copy small { display: block; color: var(--text-muted, #64748b); font-size: 11px; }\n.subject-actions { display: flex; align-items: center; gap: 5px; }\n.icon-button,\n.text-button { border: 1px solid var(--border, #e5e7eb); border-radius: 6px; background: var(--surface, #fff); color: var(--text-muted, #64748b); cursor: pointer; }\n.icon-button { width: 30px; height: 30px; font-size: 15px; }\n.text-button { padding: 6px 8px; font-size: 12px; font-weight: 750; }\n.icon-button:hover:not(:disabled),\n.text-button:hover { border-color: #1677ff; color: #1677ff; }\n.icon-button:disabled { cursor: not-allowed; opacity: .35; }\n.text-button.danger { color: #dc2626; }\n.text-button.danger:hover { border-color: #dc2626; }\n.sequence-empty > span { display: block; margin-bottom: 8px; color: #1677ff; font-size: 22px; }\n.sequence-loading,\n.cycles-loading { padding: 32px; color: var(--text-muted, #64748b); text-align: center; }\n.save-first { display: flex; align-items: center; gap: 14px; padding: 20px; }\n.save-first > span { display: grid; flex: 0 0 42px; width: 42px; height: 42px; place-items: center; border-radius: 10px; background: rgba(22, 119, 255, .1); color: #1677ff; font-weight: 850; }\n.save-first strong { color: var(--text, #0f172a); }\n\n@media (max-width: 860px) {\n  .cycles-layout { grid-template-columns: 1fr; }\n  .cycles-sidebar { position: static; display: flex; gap: 7px; overflow-x: auto; }\n  .sidebar-title { flex: 0 0 auto; gap: 8px; }\n  .cycle-option { flex: 0 0 210px; }\n  .sidebar-empty { min-width: 260px; padding: 10px; text-align: left; }\n}\n\n@media (max-width: 640px) {\n  .cycles-heading { align-items: stretch; flex-direction: column; }\n  .cycles-heading button { align-self: flex-start; }\n  .form-grid { grid-template-columns: 1fr; }\n  .field-notes { grid-column: auto; }\n  .active-toggle { align-self: auto; }\n  .sequence-heading { align-items: flex-start; flex-direction: column; }\n  .sequence-heading-actions { flex-wrap: wrap; }\n  .add-subject { align-items: stretch; flex-direction: column; }\n  .sequence-list li { grid-template-columns: 34px minmax(0, 1fr); }\n  .subject-actions { grid-column: 1 / -1; justify-content: flex-end; flex-wrap: wrap; padding-top: 7px; border-top: 1px solid var(--border, #e5e7eb); }\n  .form-actions { flex-wrap: wrap; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CiclosComponent, { className: "CiclosComponent", filePath: "src/app/pages/ciclos/ciclos.ts", lineNumber: 31 }); })();
