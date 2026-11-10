import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { finalize, forkJoin, switchMap } from 'rxjs';
import { MateriaService } from '../../services/materia.service';
import { RegistroService } from '../../services/registro.service';
import { PlanejamentoService, } from '../../services/planejamento.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/button";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/core/wave";
import * as i6 from "ng-zorro-antd/grid";
import * as i7 from "ng-zorro-antd/form";
import * as i8 from "ng-zorro-antd/input";
import * as i9 from "ng-zorro-antd/select";
const _c0 = a0 => ({ $implicit: a0 });
function PlanejamentoDetalheComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, "Carregando planejamento...");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 14);
    i0.ɵɵlistener("ngSubmit", function PlanejamentoDetalheComponent_form_9_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.salvar()); });
    i0.ɵɵelementStart(1, "nz-form-item")(2, "nz-form-label", 15);
    i0.ɵɵtext(3, "Nome");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nz-form-control", 16)(5, "input", 17);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "nz-form-item")(7, "nz-form-label");
    i0.ɵɵtext(8, "Descri\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nz-form-control")(10, "textarea", 18);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "nz-form-item")(12, "nz-form-label");
    i0.ɵɵtext(13, "Data fim prevista");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "nz-form-control")(15, "input", 19);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 20)(17, "button", 21);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_form_9_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.voltar()); });
    i0.ɵɵtext(18, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 22);
    i0.ɵɵtext(20, "Criar planejamento");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzLoading", ctx_r1.salvando);
} }
function PlanejamentoDetalheComponent_section_10_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, "Carregando mat\u00E9rias...");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_section_10_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1, " Nenhuma mat\u00E9ria adicionada. Comece pelo bot\u00E3o acima. ");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u00B7 ", item_r5.planejamentoGrupoMateria.nome);
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtext(1, "Carregando...");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtext(1, " Nenhum bloco adicionado. ");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r1.abrirItem()); });
    i0.ɵɵtext(1, " + Adicionar assunto ");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtext(1, "Carregando...");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtext(1, " Nenhum assunto adicionado. ");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_7_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 60)(1, "button", 61);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_7_article_1_Template_button_click_1_listener() { const assunto_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(8); return i0.ɵɵresetView(ctx_r1.abrirEtapas(assunto_r11)); });
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 51)(7, "button", 37);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_7_article_1_Template_button_click_7_listener() { const assunto_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(8); return i0.ɵɵresetView(ctx_r1.editarItem(assunto_r11)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 38);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_7_article_1_Template_button_click_9_listener() { const assunto_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(8); return i0.ɵɵresetView(ctx_r1.excluirItem(assunto_r11)); });
    i0.ɵɵtext(10, " Remover ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const assunto_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(assunto_r11.assunto.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Peso ", assunto_r11.peso ?? "n\u00E3o informado", " \u00B7 Dificuldade ", ctx_r1.rotuloDificuldade(assunto_r11.dificuldade));
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58);
    i0.ɵɵtemplate(1, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_7_article_1_Template, 11, 3, "article", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.itens);
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53)(1, "div", 54)(2, "h5");
    i0.ɵɵtext(3, "Assuntos");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_button_4_Template, 2, 0, "button", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_5_Template, 2, 0, "div", 28)(6, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_6_Template, 2, 0, "div", 42)(7, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_div_7_Template, 2, 1, "div", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.podeAdicionarItem());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.carregandoItens);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.carregandoItens && !ctx_r1.itens.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.carregandoItens && ctx_r1.itens.length);
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 48)(1, "div", 49)(2, "button", 50);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_Template_button_click_2_listener() { const grupo_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.selecionarGrupo(grupo_r8)); });
    i0.ɵɵelementStart(3, "span", 34);
    i0.ɵɵtext(4, "\u203A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 51)(11, "button", 37);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_Template_button_click_11_listener() { const grupo_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.editarGrupo(grupo_r8)); });
    i0.ɵɵtext(12, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 38);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_Template_button_click_13_listener() { const grupo_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.excluirGrupo(grupo_r8)); });
    i0.ɵɵtext(14, " Remover ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(15, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_div_15_Template, 8, 4, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const grupo_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("open", ctx_r1.grupoSelecionado?.id === grupo_r8.id);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-expanded", ctx_r1.grupoSelecionado?.id === grupo_r8.id);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.nomeDoGrupo(grupo_r8));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(grupo_r8.tipo === "BLOCO" ? "Bloco" : "Assunto");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.grupoSelecionado?.id === grupo_r8.id);
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵtemplate(1, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_article_1_Template, 16, 6, "article", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.grupos);
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41)(2, "div")(3, "h4");
    i0.ɵɵtext(4, "Blocos e assuntos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Agrupe assuntos relacionados ou use um bloco individual.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 21);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.abrirGrupo()); });
    i0.ɵɵtext(8, " + Adicionar bloco ou assunto ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_9_Template, 2, 0, "div", 28)(10, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_10_Template, 2, 0, "div", 42)(11, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_div_11_Template, 2, 1, "div", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r1.carregandoGrupos);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.carregandoGrupos && !ctx_r1.grupos.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.carregandoGrupos && ctx_r1.grupos.length);
} }
function PlanejamentoDetalheComponent_section_10_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 31)(1, "div", 32)(2, "button", 33);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_Template_button_click_2_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selecionarMateria(item_r5)); });
    i0.ɵɵelementStart(3, "span", 34);
    i0.ɵɵtext(4, "\u203A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵtemplate(10, PlanejamentoDetalheComponent_section_10_ng_template_12_ng_container_10_Template, 2, 1, "ng-container", 35);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 36)(12, "button", 37);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_Template_button_click_12_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.editarMateria(item_r5)); });
    i0.ɵɵtext(13, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 38);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_ng_template_12_Template_button_click_14_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.excluirMateria(item_r5)); });
    i0.ɵɵtext(15, "Remover");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(16, PlanejamentoDetalheComponent_section_10_ng_template_12_div_16_Template, 12, 3, "div", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("open", ctx_r1.materiaSelecionada?.id === item_r5.id);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-expanded", ctx_r1.materiaSelecionada?.id === item_r5.id);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r5.materia.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("Ordem ", item_r5.ordem ?? "n\u00E3o definida", " \u00B7 Peso na prova ", item_r5.peso ?? "n\u00E3o informado", " \u00B7 Dificuldade ", ctx_r1.rotuloDificuldade(item_r5.dificuldade));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r5.planejamentoGrupoMateria);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.materiaSelecionada?.id === item_r5.id);
} }
function PlanejamentoDetalheComponent_section_10_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtext(1, "Carregando blocos...");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_section_10_div_15_article_1_div_17_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtext(1, " Nenhuma mat\u00E9ria adicionada a este bloco. ");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_section_10_div_15_article_1_div_17_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 65);
} if (rf & 2) {
    const materia_r15 = ctx.$implicit;
    i0.ɵɵnextContext(5);
    const materiaCard_r16 = i0.ɵɵreference(13);
    i0.ɵɵproperty("ngTemplateOutlet", materiaCard_r16)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, materia_r15));
} }
function PlanejamentoDetalheComponent_section_10_div_15_article_1_div_17_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, PlanejamentoDetalheComponent_section_10_div_15_article_1_div_17_div_10_ng_container_1_Template, 1, 4, "ng-container", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const grupo_r13 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.materiasDoGrupo(grupo_r13));
} }
function PlanejamentoDetalheComponent_section_10_div_15_article_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 54)(2, "div")(3, "h4");
    i0.ɵɵtext(4, "Mat\u00E9rias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Abra uma mat\u00E9ria para organizar seus assuntos.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 57);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_div_15_article_1_div_17_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r14); const grupo_r13 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.abrirMateriaNoGrupo(grupo_r13)); });
    i0.ɵɵtext(8, " + Adicionar mat\u00E9ria ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, PlanejamentoDetalheComponent_section_10_div_15_article_1_div_17_div_9_Template, 2, 0, "div", 42)(10, PlanejamentoDetalheComponent_section_10_div_15_article_1_div_17_div_10_Template, 2, 1, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const grupo_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", !ctx_r1.materiasDoGrupo(grupo_r13).length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.materiasDoGrupo(grupo_r13).length);
} }
function PlanejamentoDetalheComponent_section_10_div_15_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 31)(1, "div", 32)(2, "button", 33);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_div_15_article_1_Template_button_click_2_listener() { const grupo_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selecionarGrupoMateria(grupo_r13)); });
    i0.ɵɵelementStart(3, "span", 34);
    i0.ɵɵtext(4, "\u203A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 36)(11, "button", 37);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_div_15_article_1_Template_button_click_11_listener() { const grupo_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.abrirMateriaNoGrupo(grupo_r13)); });
    i0.ɵɵtext(12, "+ Mat\u00E9ria");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 37);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_div_15_article_1_Template_button_click_13_listener() { const grupo_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editarGrupoMateria(grupo_r13)); });
    i0.ɵɵtext(14, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 38);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_div_15_article_1_Template_button_click_15_listener() { const grupo_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.excluirGrupoMateria(grupo_r13)); });
    i0.ɵɵtext(16, " Remover ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(17, PlanejamentoDetalheComponent_section_10_div_15_article_1_div_17_Template, 11, 2, "div", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const grupo_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("open", ctx_r1.grupoMateriaSelecionado?.id === grupo_r13.id);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-expanded", ctx_r1.grupoMateriaSelecionado?.id === grupo_r13.id);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(grupo_r13.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.materiasDoGrupo(grupo_r13).length, " mat\u00E9ria(s)");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r1.grupoMateriaSelecionado?.id === grupo_r13.id);
} }
function PlanejamentoDetalheComponent_section_10_div_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 65);
} if (rf & 2) {
    const materia_r17 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    const materiaCard_r16 = i0.ɵɵreference(13);
    i0.ɵɵproperty("ngTemplateOutlet", materiaCard_r16)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, materia_r17));
} }
function PlanejamentoDetalheComponent_section_10_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, PlanejamentoDetalheComponent_section_10_div_15_article_1_Template, 18, 6, "article", 63)(2, PlanejamentoDetalheComponent_section_10_div_15_ng_container_2_Template, 1, 4, "ng-container", 64);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.gruposMaterias);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.materiasSemGrupo());
} }
function PlanejamentoDetalheComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 23)(1, "div", 24)(2, "div")(3, "h3");
    i0.ɵɵtext(4, "Mat\u00E9rias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Organize-as em blocos e abra uma mat\u00E9ria para gerenciar seu conte\u00FAdo.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 25)(8, "button", 26);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_section_10_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.abrirMateria()); });
    i0.ɵɵtext(9, " + Adicionar item ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(10, PlanejamentoDetalheComponent_section_10_div_10_Template, 2, 0, "div", 9)(11, PlanejamentoDetalheComponent_section_10_div_11_Template, 2, 0, "div", 27)(12, PlanejamentoDetalheComponent_section_10_ng_template_12_Template, 17, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(14, PlanejamentoDetalheComponent_section_10_div_14_Template, 2, 0, "div", 28)(15, PlanejamentoDetalheComponent_section_10_div_15_Template, 3, 2, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r1.carregandoMaterias);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.carregandoMaterias && !ctx_r1.materiasPlanejadas.length);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.carregandoGruposMaterias);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.carregandoGruposMaterias && (ctx_r1.gruposMaterias.length || ctx_r1.materiasSemGrupo().length));
} }
function PlanejamentoDetalheComponent_div_11_nz_form_item_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-form-item")(1, "nz-form-label", 15);
    i0.ɵɵtext(2, "Tipo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nz-form-control")(4, "nz-select", 79);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelement(5, "nz-option", 80)(6, "nz-option", 81);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
} }
function PlanejamentoDetalheComponent_div_11_nz_form_item_12_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 85);
} if (rf & 2) {
    const materia_r19 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", materia_r19.id)("nzLabel", materia_r19.nome);
} }
function PlanejamentoDetalheComponent_div_11_nz_form_item_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-form-item")(1, "nz-form-label", 15);
    i0.ɵɵtext(2, "Mat\u00E9rias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nz-form-control", 82)(4, "nz-select", 83);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtemplate(5, PlanejamentoDetalheComponent_div_11_nz_form_item_12_nz_option_5_Template, 1, 2, "nz-option", 84);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const criarMateriaTemplate_r20 = i0.ɵɵreference(14);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzDropdownRender", criarMateriaTemplate_r20);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.materiasDisponiveis());
} }
function PlanejamentoDetalheComponent_div_11_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_11_ng_template_13_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(1, "input", 87, 2);
    i0.ɵɵlistener("keydown.enter", function PlanejamentoDetalheComponent_div_11_ng_template_13_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r21); const novaMateria_r22 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.cadastrarMateriaRapida(novaMateria_r22); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 88);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_11_ng_template_13_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r21); const novaMateria_r22 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cadastrarMateriaRapida(novaMateria_r22)); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.criandoMateria);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.criandoMateria ? "Criando..." : "Criar", " ");
} }
function PlanejamentoDetalheComponent_div_11_nz_form_item_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-form-item")(1, "nz-form-label", 15);
    i0.ɵɵtext(2, "Nome do bloco");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nz-form-control", 16)(4, "input", 89);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
} }
function PlanejamentoDetalheComponent_div_11_nz_form_item_16_nz_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 85);
} if (rf & 2) {
    const grupo_r23 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", grupo_r23.id)("nzLabel", grupo_r23.nome);
} }
function PlanejamentoDetalheComponent_div_11_nz_form_item_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-form-item")(1, "nz-form-label");
    i0.ɵɵtext(2, "Bloco de mat\u00E9rias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nz-form-control")(4, "nz-select", 90);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtemplate(5, PlanejamentoDetalheComponent_div_11_nz_form_item_16_nz_option_5_Template, 1, 2, "nz-option", 84);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.gruposMaterias);
} }
function PlanejamentoDetalheComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_11_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharMateria()); });
    i0.ɵɵelementStart(1, "section", 67);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_11_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header")(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Selecione uma ou v\u00E1rias mat\u00E9rias, ou crie um bloco de mat\u00E9rias.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 68);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_11_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharMateria()); });
    i0.ɵɵtext(9, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "form", 69);
    i0.ɵɵlistener("ngSubmit", function PlanejamentoDetalheComponent_div_11_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.salvarMateria()); });
    i0.ɵɵtemplate(11, PlanejamentoDetalheComponent_div_11_nz_form_item_11_Template, 7, 0, "nz-form-item", 35)(12, PlanejamentoDetalheComponent_div_11_nz_form_item_12_Template, 6, 2, "nz-form-item", 35)(13, PlanejamentoDetalheComponent_div_11_ng_template_13_Template, 5, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(15, PlanejamentoDetalheComponent_div_11_nz_form_item_15_Template, 5, 0, "nz-form-item", 35)(16, PlanejamentoDetalheComponent_div_11_nz_form_item_16_Template, 6, 1, "nz-form-item", 35);
    i0.ɵɵelementStart(17, "div", 70)(18, "nz-form-item")(19, "nz-form-label");
    i0.ɵɵtext(20, "Peso na prova");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "nz-form-control")(22, "input", 71);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "nz-form-item")(24, "nz-form-label");
    i0.ɵɵtext(25, "Dificuldade da mat\u00E9ria");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "nz-form-control")(27, "nz-select", 72);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelement(28, "nz-option", 73)(29, "nz-option", 74)(30, "nz-option", 75)(31, "nz-option", 76)(32, "nz-option", 77);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "nz-form-item")(34, "nz-form-label");
    i0.ɵɵtext(35, "Ordem");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "nz-form-control")(37, "input", 78);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(38, "div", 20)(39, "button", 21);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_11_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharMateria()); });
    i0.ɵɵtext(40, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "button", 22);
    i0.ɵɵtext(42, "Salvar");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.materiaEditandoId ? "Editar mat\u00E9ria" : "Adicionar item");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.materiaForm);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.materiaEditandoId && !ctx_r1.materiaForm.controls.planejamentoGrupoMateriaId.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.materiaForm.controls.tipo.value === "MATERIA");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.materiaForm.controls.tipo.value === "BLOCO");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.materiaForm.controls.tipo.value === "MATERIA");
    i0.ɵɵadvance(6);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 5);
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzLoading", ctx_r1.salvandoMateria);
} }
function PlanejamentoDetalheComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_12_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharGrupoMateria()); });
    i0.ɵɵelementStart(1, "section", 67);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_12_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header")(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Use um bloco para reunir mat\u00E9rias relacionadas no planejamento.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 68);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_12_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharGrupoMateria()); });
    i0.ɵɵtext(9, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "form", 69);
    i0.ɵɵlistener("ngSubmit", function PlanejamentoDetalheComponent_div_12_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.salvarGrupoMateria()); });
    i0.ɵɵelementStart(11, "nz-form-item")(12, "nz-form-label", 15);
    i0.ɵɵtext(13, "Nome do bloco");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "nz-form-control", 16)(15, "input", 17);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "details")(17, "summary");
    i0.ɵɵtext(18, "Op\u00E7\u00F5es avan\u00E7adas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 70)(20, "nz-form-item")(21, "nz-form-label");
    i0.ɵɵtext(22, "Peso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "nz-form-control")(24, "input", 91);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "nz-form-item")(26, "nz-form-label");
    i0.ɵɵtext(27, "Ordem");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "nz-form-control")(29, "input", 78);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(30, "div", 20)(31, "button", 21);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_12_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharGrupoMateria()); });
    i0.ɵɵtext(32, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "button", 22);
    i0.ɵɵtext(34, "Salvar");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.grupoMateriaEditandoId ? "Editar bloco de mat\u00E9rias" : "Adicionar bloco de mat\u00E9rias", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.grupoMateriaForm);
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(9);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzLoading", ctx_r1.salvandoGrupoMateria);
} }
function PlanejamentoDetalheComponent_div_13_nz_form_item_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-form-item")(1, "nz-form-label", 15);
    i0.ɵɵtext(2, "Nome do bloco");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nz-form-control")(4, "input", 17);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(4);
    i0.ɵɵcontrol();
} }
function PlanejamentoDetalheComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_13_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharGrupo()); });
    i0.ɵɵelementStart(1, "section", 67);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_13_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header")(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Defina como os assuntos ser\u00E3o agrupados.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 68);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_13_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharGrupo()); });
    i0.ɵɵtext(9, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "form", 69);
    i0.ɵɵlistener("ngSubmit", function PlanejamentoDetalheComponent_div_13_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.salvarGrupo()); });
    i0.ɵɵelementStart(11, "nz-form-item")(12, "nz-form-label", 15);
    i0.ɵɵtext(13, "Tipo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "nz-form-control")(15, "nz-select", 79);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelement(16, "nz-option", 92)(17, "nz-option", 93);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(18, PlanejamentoDetalheComponent_div_13_nz_form_item_18_Template, 5, 0, "nz-form-item", 35);
    i0.ɵɵelementStart(19, "details")(20, "summary");
    i0.ɵɵtext(21, "Op\u00E7\u00F5es avan\u00E7adas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 70)(23, "nz-form-item")(24, "nz-form-label");
    i0.ɵɵtext(25, "Peso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "nz-form-control")(27, "input", 91);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "nz-form-item")(29, "nz-form-label");
    i0.ɵɵtext(30, "Ordem");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "nz-form-control")(32, "input", 78);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(33, "div", 20)(34, "button", 21);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_13_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharGrupo()); });
    i0.ɵɵtext(35, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 22);
    i0.ɵɵtext(37, "Salvar");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.grupoEditandoId ? "Editar bloco" : "Adicionar bloco");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.grupoForm);
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzDisabled", !!ctx_r1.grupoEditandoId && ctx_r1.quantidadeItensGrupoEditando > 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.grupoForm.controls.tipo.value === "BLOCO");
    i0.ɵɵadvance(9);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzLoading", ctx_r1.salvandoGrupo);
} }
function PlanejamentoDetalheComponent_div_14_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Selecione um ou mais assuntos de ", ctx_r1.materiaSelecionada?.materia?.nome, ". ");
} }
function PlanejamentoDetalheComponent_div_14_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Cada assunto selecionado ser\u00E1 adicionado como um assunto individual. ");
} }
function PlanejamentoDetalheComponent_div_14_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 85);
} if (rf & 2) {
    const assunto_r27 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", assunto_r27.id)("nzLabel", assunto_r27.nome);
} }
function PlanejamentoDetalheComponent_div_14_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 86);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_14_ng_template_19_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(1, "input", 97, 5);
    i0.ɵɵlistener("keydown.enter", function PlanejamentoDetalheComponent_div_14_ng_template_19_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r28); const novoAssunto_r29 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.cadastrarAssuntoRapido(novoAssunto_r29); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 88);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_14_ng_template_19_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r28); const novoAssunto_r29 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cadastrarAssuntoRapido(novoAssunto_r29)); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.criandoAssunto);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.criandoAssunto ? "Criando..." : "Criar", " ");
} }
function PlanejamentoDetalheComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_14_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharItem()); });
    i0.ɵɵelementStart(1, "section", 67);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_14_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header")(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtemplate(7, PlanejamentoDetalheComponent_div_14_ng_container_7_Template, 2, 1, "ng-container", 94)(8, PlanejamentoDetalheComponent_div_14_ng_template_8_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 68);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_14_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharItem()); });
    i0.ɵɵtext(11, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "form", 69);
    i0.ɵɵlistener("ngSubmit", function PlanejamentoDetalheComponent_div_14_Template_form_ngSubmit_12_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.salvarItem()); });
    i0.ɵɵelementStart(13, "nz-form-item")(14, "nz-form-label", 15);
    i0.ɵɵtext(15, "Assuntos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "nz-form-control", 95)(17, "nz-select", 96);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtemplate(18, PlanejamentoDetalheComponent_div_14_nz_option_18_Template, 1, 2, "nz-option", 84);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(19, PlanejamentoDetalheComponent_div_14_ng_template_19_Template, 5, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(21, "details")(22, "summary");
    i0.ɵɵtext(23, "Op\u00E7\u00F5es avan\u00E7adas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 70)(25, "nz-form-item")(26, "nz-form-label");
    i0.ɵɵtext(27, "Peso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "nz-form-control")(29, "input", 91);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "nz-form-item")(31, "nz-form-label");
    i0.ɵɵtext(32, "Dificuldade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "nz-form-control")(34, "nz-select", 72);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelement(35, "nz-option", 73)(36, "nz-option", 74)(37, "nz-option", 75)(38, "nz-option", 76)(39, "nz-option", 77);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "nz-form-item")(41, "nz-form-label");
    i0.ɵɵtext(42, "Ordem");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "nz-form-control")(44, "input", 78);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(45, "div", 20)(46, "button", 21);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_14_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharItem()); });
    i0.ɵɵtext(47, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "button", 22);
    i0.ɵɵtext(49, "Salvar");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const assuntoIndividual_r30 = i0.ɵɵreference(9);
    const criarAssuntoTemplate_r31 = i0.ɵɵreference(20);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.itemEditandoId ? "Editar assunto" : "Adicionar assunto");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.grupoSelecionado?.tipo === "BLOCO")("ngIfElse", assuntoIndividual_r30);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.itemForm);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nzDropdownRender", criarAssuntoTemplate_r31);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.assuntosDisponiveis());
    i0.ɵɵadvance(11);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzValue", 5);
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzLoading", ctx_r1.salvandoItem);
} }
function PlanejamentoDetalheComponent_div_15_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtext(1, "Carregando...");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_div_15_div_16_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 105)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 51)(9, "button", 37);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_15_div_16_article_1_Template_button_click_9_listener() { const etapa_r34 = i0.ɵɵrestoreView(_r33).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editarEtapa(etapa_r34)); });
    i0.ɵɵtext(10, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 38);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_15_div_16_article_1_Template_button_click_11_listener() { const etapa_r34 = i0.ɵɵrestoreView(_r33).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.excluirEtapa(etapa_r34)); });
    i0.ɵɵtext(12, "Remover");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const etapa_r34 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(etapa_r34.tipoRegistro.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Ordem ", etapa_r34.ordem ?? "n\u00E3o definida", " \u00B7 ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("done", etapa_r34.concluida);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(etapa_r34.concluida ? "Conclu\u00EDda" : "Pendente");
} }
function PlanejamentoDetalheComponent_div_15_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 103);
    i0.ɵɵtemplate(1, PlanejamentoDetalheComponent_div_15_div_16_article_1_Template, 13, 5, "article", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.etapas);
} }
function PlanejamentoDetalheComponent_div_15_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtext(1, " Nenhuma etapa adicionada. ");
    i0.ɵɵelementEnd();
} }
function PlanejamentoDetalheComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_15_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharEtapas()); });
    i0.ɵɵelementStart(1, "section", 98);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_15_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header")(3, "div")(4, "h3", 99);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Organize as atividades deste assunto sem sair do contexto atual.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 100);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_15_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharEtapas()); });
    i0.ɵɵtext(9, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 54)(11, "h5");
    i0.ɵɵtext(12, "Etapas cadastradas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 101);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_15_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.abrirEtapa()); });
    i0.ɵɵtext(14, " + Adicionar etapa ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, PlanejamentoDetalheComponent_div_15_div_15_Template, 2, 0, "div", 28)(16, PlanejamentoDetalheComponent_div_15_div_16_Template, 2, 1, "div", 102)(17, PlanejamentoDetalheComponent_div_15_div_17_Template, 2, 0, "div", 42);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Etapas de ", ctx_r1.itemSelecionado?.assunto?.nome);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngIf", ctx_r1.carregandoEtapas);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.carregandoEtapas && ctx_r1.etapas.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.carregandoEtapas && !ctx_r1.etapas.length);
} }
function PlanejamentoDetalheComponent_div_16_nz_option_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 85);
} if (rf & 2) {
    const tipo_r36 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", tipo_r36.id)("nzLabel", tipo_r36.nome);
} }
function PlanejamentoDetalheComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_16_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharEtapa()); });
    i0.ɵɵelementStart(1, "section", 67);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_16_Template_section_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header")(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Escolha o tipo de atividade deste assunto.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 68);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_16_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharEtapa()); });
    i0.ɵɵtext(9, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "form", 69);
    i0.ɵɵlistener("ngSubmit", function PlanejamentoDetalheComponent_div_16_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.salvarEtapa()); });
    i0.ɵɵelementStart(11, "nz-form-item")(12, "nz-form-label", 15);
    i0.ɵɵtext(13, "Tipo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "nz-form-control")(15, "nz-select", 106);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtemplate(16, PlanejamentoDetalheComponent_div_16_nz_option_16_Template, 1, 2, "nz-option", 84);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "nz-form-item")(18, "nz-form-label");
    i0.ɵɵtext(19, "Ordem");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "nz-form-control")(21, "input", 78);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "label", 107)(23, "input", 108);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Conclu\u00EDda");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 20)(26, "button", 21);
    i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_div_16_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fecharEtapa()); });
    i0.ɵɵtext(27, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 22);
    i0.ɵɵtext(29, "Salvar");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.etapaEditandoId ? "Editar etapa" : "Adicionar etapa");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.etapaForm);
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.tiposRegistro);
    i0.ɵɵadvance(5);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(2);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nzLoading", ctx_r1.salvandoEtapa);
} }
export class PlanejamentoDetalheComponent {
    fb = inject(FormBuilder);
    route = inject(ActivatedRoute);
    router = inject(Router);
    service = inject(PlanejamentoService);
    materiaService = inject(MateriaService);
    registroService = inject(RegistroService);
    message = inject(NzMessageService);
    cdr = inject(ChangeDetectorRef);
    form = this.fb.group({
        nome: ['', [Validators.required, Validators.maxLength(150)]],
        descricao: [''],
        dataFimPrevista: [null],
    });
    materiaForm = this.fb.group({
        tipo: ['MATERIA', Validators.required],
        materiaIds: [[]],
        nomeBloco: ['', Validators.maxLength(150)],
        planejamentoGrupoMateriaId: [null],
        peso: [null, [Validators.min(1), Validators.max(5)]],
        dificuldade: [null, [Validators.min(1), Validators.max(5)]],
        ordem: [null, Validators.min(1)],
    });
    grupoMateriaForm = this.fb.group({
        nome: ['', [Validators.required, Validators.maxLength(150)]],
        peso: [null, [Validators.min(1), Validators.max(5)]],
        ordem: [null, Validators.min(1)],
    });
    grupoForm = this.fb.group({
        tipo: ['BLOCO', Validators.required],
        nome: [''],
        peso: [null, [Validators.min(1), Validators.max(5)]],
        ordem: [null, Validators.min(1)],
    });
    itemForm = this.fb.group({
        assuntoIds: [[], Validators.required],
        peso: [null, [Validators.min(1), Validators.max(5)]],
        dificuldade: [null, [Validators.min(1), Validators.max(5)]],
        ordem: [null, Validators.min(1)],
    });
    etapaForm = this.fb.group({
        tipoRegistroId: [null, Validators.required],
        ordem: [null, Validators.min(1)],
        concluida: [false],
    });
    id;
    carregando = false;
    salvando = false;
    carregandoMaterias = false;
    salvandoMateria = false;
    criandoMateria = false;
    materiaEditandoId;
    materias = [];
    materiasPlanejadas = [];
    gruposMaterias = [];
    carregandoGruposMaterias = false;
    salvandoGrupoMateria = false;
    grupoMateriaEditandoId;
    grupoMateriaSelecionado;
    materiaSelecionada;
    grupos = [];
    grupoEditandoId;
    quantidadeItensGrupoEditando = 0;
    carregandoGrupos = false;
    salvandoGrupo = false;
    grupoSelecionado;
    itens = [];
    assuntos = [];
    assuntoIdsCadastrados = new Set();
    itemEditandoId;
    carregandoItens = false;
    salvandoItem = false;
    criandoAssunto = false;
    itemSelecionado;
    etapas = [];
    tiposRegistro = [];
    etapaEditandoId;
    carregandoEtapas = false;
    salvandoEtapa = false;
    modalMateriaAberto = false;
    modalGrupoMateriaAberto = false;
    modalGrupoAberto = false;
    modalItemAberto = false;
    modalEtapasAberto = false;
    modalEtapaAberto = false;
    nomesAssuntosPorGrupo = new Map();
    ngOnInit() {
        const parametroId = this.route.snapshot.paramMap.get('id');
        if (!parametroId)
            return;
        this.id = Number(parametroId);
        if (!Number.isInteger(this.id) || this.id <= 0) {
            this.message.error('Planejamento inválido.');
            this.voltar();
            return;
        }
        this.carregar();
        this.carregarGruposMaterias();
        this.carregarMaterias();
        this.materiaService.listarTodas().subscribe({
            next: (materias) => {
                this.materias = materias;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar matérias:', erro);
                this.cdr.detectChanges();
            },
        });
    }
    salvar() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const planejamento = {
            nome: this.form.controls.nome.value.trim(),
            descricao: this.form.controls.descricao.value?.trim() || null,
            dataFimPrevista: this.form.controls.dataFimPrevista.value || null,
        };
        this.salvando = true;
        const requisicao$ = this.id
            ? this.service.atualizar(this.id, planejamento)
            : this.service.criar(planejamento);
        requisicao$.subscribe({
            next: (salvo) => {
                this.message.success(`Planejamento ${this.id ? 'atualizado' : 'criado'} com sucesso.`);
                this.router.navigate(['/planejamentos', salvo.id]);
            },
            error: (erro) => {
                console.error('Erro ao salvar planejamento:', erro);
                this.salvando = false;
                this.message.error('Não foi possível salvar o planejamento.');
            },
        });
    }
    voltar() {
        this.router.navigate(['/planejamentos']);
    }
    rotuloDificuldade(valor) {
        return ['Não informada', 'Muito fácil', 'Fácil', 'Média', 'Difícil', 'Muito difícil'][valor ?? 0] ?? 'Não informada';
    }
    salvarMateria() {
        if (!this.id)
            return;
        const tipo = this.materiaForm.controls.tipo.value;
        const materiaIds = this.materiaForm.controls.materiaIds.value ?? [];
        const nomeBloco = this.materiaForm.controls.nomeBloco.value?.trim();
        if (this.materiaForm.invalid ||
            (tipo === 'MATERIA' && !materiaIds.length) ||
            (tipo === 'BLOCO' && (!nomeBloco || nomeBloco.length > 150))) {
            this.materiaForm.markAllAsTouched();
            return;
        }
        if (tipo === 'BLOCO') {
            const dados = {
                nome: nomeBloco,
                peso: this.materiaForm.controls.peso.value,
                ordem: this.materiaForm.controls.ordem.value,
            };
            this.salvandoMateria = true;
            this.service.adicionarGrupoMateria(this.id, dados).subscribe({
                next: () => {
                    this.salvandoMateria = false;
                    this.modalMateriaAberto = false;
                    this.cancelarEdicaoMateria();
                    this.carregarGruposMaterias();
                    this.message.success('Bloco de matérias adicionado com sucesso.');
                },
                error: (erro) => {
                    console.error('Erro ao salvar bloco de matérias:', erro);
                    this.salvandoMateria = false;
                    this.message.error('Não foi possível salvar o bloco de matérias.');
                },
            });
            return;
        }
        if (this.materiaEditandoId && materiaIds.length !== 1) {
            this.message.warning('Na edição, selecione apenas uma matéria.');
            return;
        }
        const criarDados = (materiaId) => ({
            materiaId,
            planejamentoGrupoMateriaId: this.materiaForm.controls.planejamentoGrupoMateriaId.value,
            peso: this.materiaForm.controls.peso.value,
            dificuldade: this.materiaForm.controls.dificuldade.value,
            ordem: this.materiaForm.controls.ordem.value,
        });
        const editando = !!this.materiaEditandoId;
        this.salvandoMateria = true;
        const requisicao$ = this.materiaEditandoId
            ? this.service.atualizarMateria(this.id, this.materiaEditandoId, criarDados(materiaIds[0]))
            : forkJoin(materiaIds.map((materiaId) => this.service.adicionarMateria(this.id, criarDados(materiaId))));
        requisicao$.subscribe({
            next: () => {
                this.salvandoMateria = false;
                this.modalMateriaAberto = false;
                this.cancelarEdicaoMateria();
                this.carregarMaterias();
                this.message.success(editando
                    ? 'Matéria atualizada com sucesso.'
                    : `${materiaIds.length} matéria(s) adicionada(s) com sucesso.`);
            },
            error: (erro) => {
                console.error('Erro ao salvar matéria do planejamento:', erro);
                this.salvandoMateria = false;
                this.message.error('Não foi possível salvar a matéria no planejamento.');
            },
        });
    }
    editarMateria(item) {
        if (!item.id || !item.materia.id)
            return;
        this.materiaEditandoId = item.id;
        this.materiaForm.setValue({
            tipo: 'MATERIA',
            materiaIds: [item.materia.id],
            nomeBloco: '',
            planejamentoGrupoMateriaId: item.planejamentoGrupoMateria?.id ?? null,
            peso: item.peso ?? null,
            dificuldade: item.dificuldade ?? null,
            ordem: item.ordem ?? null,
        });
        this.modalMateriaAberto = true;
    }
    abrirMateria() {
        this.cancelarEdicaoMateria();
        this.modalMateriaAberto = true;
    }
    abrirMateriaNoGrupo(grupo) {
        if (!grupo.id)
            return;
        this.cancelarEdicaoMateria();
        this.materiaForm.patchValue({ tipo: 'MATERIA', planejamentoGrupoMateriaId: grupo.id });
        this.modalMateriaAberto = true;
    }
    fecharMateria() {
        if (this.salvandoMateria)
            return;
        this.modalMateriaAberto = false;
        this.cancelarEdicaoMateria();
    }
    cancelarEdicaoMateria() {
        this.materiaEditandoId = undefined;
        this.materiaForm.reset({
            tipo: 'MATERIA',
            materiaIds: [],
            nomeBloco: '',
            planejamentoGrupoMateriaId: null,
            peso: null,
            dificuldade: null,
            ordem: null,
        });
    }
    salvarGrupoMateria() {
        if (!this.id || this.grupoMateriaForm.invalid) {
            this.grupoMateriaForm.markAllAsTouched();
            return;
        }
        const dados = {
            nome: this.grupoMateriaForm.controls.nome.value.trim(),
            peso: this.grupoMateriaForm.controls.peso.value,
            ordem: this.grupoMateriaForm.controls.ordem.value,
        };
        const editando = !!this.grupoMateriaEditandoId;
        this.salvandoGrupoMateria = true;
        const requisicao$ = this.grupoMateriaEditandoId
            ? this.service.atualizarGrupoMateria(this.id, this.grupoMateriaEditandoId, dados)
            : this.service.adicionarGrupoMateria(this.id, dados);
        requisicao$.subscribe({
            next: () => {
                this.salvandoGrupoMateria = false;
                this.modalGrupoMateriaAberto = false;
                this.cancelarEdicaoGrupoMateria();
                this.carregarGruposMaterias();
                this.message.success(`Bloco de matérias ${editando ? 'atualizado' : 'adicionado'} com sucesso.`);
            },
            error: (erro) => {
                console.error('Erro ao salvar bloco de matérias:', erro);
                this.salvandoGrupoMateria = false;
                this.message.error('Não foi possível salvar o bloco de matérias.');
            },
        });
    }
    abrirGrupoMateria() {
        this.cancelarEdicaoGrupoMateria();
        this.modalGrupoMateriaAberto = true;
    }
    editarGrupoMateria(grupo) {
        if (!grupo.id)
            return;
        this.grupoMateriaEditandoId = grupo.id;
        this.grupoMateriaForm.setValue({
            nome: grupo.nome,
            peso: grupo.peso ?? null,
            ordem: grupo.ordem ?? null,
        });
        this.modalGrupoMateriaAberto = true;
    }
    fecharGrupoMateria() {
        if (this.salvandoGrupoMateria)
            return;
        this.modalGrupoMateriaAberto = false;
        this.cancelarEdicaoGrupoMateria();
    }
    cancelarEdicaoGrupoMateria() {
        this.grupoMateriaEditandoId = undefined;
        this.grupoMateriaForm.reset({ nome: '', peso: null, ordem: null });
    }
    excluirGrupoMateria(grupo) {
        if (!this.id || !grupo.id || !window.confirm(`Remover o bloco "${grupo.nome}"?`))
            return;
        this.service.excluirGrupoMateria(this.id, grupo.id).subscribe({
            next: () => {
                this.message.success('Bloco de matérias removido.');
                this.carregarGruposMaterias();
            },
            error: (erro) => {
                console.error('Erro ao remover bloco de matérias:', erro);
                this.message.error('Remova ou mova as matérias deste bloco antes de excluí-lo.');
            },
        });
    }
    materiasDoGrupo(grupo) {
        return this.materiasPlanejadas.filter((materia) => materia.planejamentoGrupoMateria?.id === grupo.id);
    }
    materiasSemGrupo() {
        return this.materiasPlanejadas.filter((materia) => !materia.planejamentoGrupoMateria?.id);
    }
    selecionarGrupoMateria(grupo) {
        this.grupoMateriaSelecionado =
            this.grupoMateriaSelecionado?.id === grupo.id ? undefined : grupo;
    }
    excluirMateria(item) {
        if (!this.id ||
            !item.id ||
            !window.confirm(`Remover a matéria "${item.materia.nome}" do planejamento?`))
            return;
        this.service.excluirMateria(this.id, item.id).subscribe({
            next: () => {
                this.message.success('Matéria removida do planejamento.');
                this.carregarMaterias();
            },
            error: (erro) => {
                console.error('Erro ao remover matéria do planejamento:', erro);
                this.message.error('Não foi possível remover a matéria do planejamento.');
            },
        });
    }
    materiasDisponiveis() {
        const idsAdicionados = new Set(this.materiasPlanejadas
            .filter((item) => item.id !== this.materiaEditandoId)
            .map((item) => item.materia.id));
        return this.materias.filter((materia) => !idsAdicionados.has(materia.id));
    }
    cadastrarMateriaRapida(inputElement) {
        const nome = inputElement.value.trim();
        if (!nome || this.criandoMateria)
            return;
        this.criandoMateria = true;
        this.materiaService.criar({ nome }).subscribe({
            next: (materia) => {
                this.materias = [...this.materias, materia].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
                this.materiaForm.controls.materiaIds.setValue(materia.id ? [...(this.materiaForm.controls.materiaIds.value ?? []), materia.id] : []);
                inputElement.value = '';
                this.criandoMateria = false;
                this.message.success('Matéria criada com sucesso.');
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao criar matéria:', erro);
                this.criandoMateria = false;
                this.message.error('Não foi possível criar a matéria.');
                this.cdr.detectChanges();
            },
        });
    }
    selecionarMateria(item) {
        if (!item.id)
            return;
        if (this.materiaSelecionada?.id === item.id) {
            this.materiaSelecionada = undefined;
            this.grupoSelecionado = undefined;
            this.itemSelecionado = undefined;
            return;
        }
        this.materiaSelecionada = item;
        this.grupoSelecionado = undefined;
        this.itemSelecionado = undefined;
        this.cancelarEdicaoGrupo();
        this.carregarGrupos();
    }
    salvarGrupo() {
        if (!this.id || !this.materiaSelecionada?.id || this.grupoForm.invalid) {
            this.grupoForm.markAllAsTouched();
            return;
        }
        const tipo = this.grupoForm.controls.tipo.value;
        const nome = this.grupoForm.controls.nome.value?.trim() || null;
        if (tipo === 'ASSUNTO' && this.quantidadeItensGrupoEditando > 1) {
            this.message.warning('Um grupo com mais de um item não pode ser convertido para ASSUNTO.');
            return;
        }
        if (tipo === 'BLOCO' && (!nome || nome.length > 150)) {
            this.message.warning('Informe um nome de até 150 caracteres para o bloco.');
            return;
        }
        const dados = {
            tipo,
            nome: tipo === 'BLOCO' ? nome : null,
            peso: this.grupoForm.controls.peso.value,
            ordem: this.grupoForm.controls.ordem.value,
        };
        const editando = !!this.grupoEditandoId;
        this.salvandoGrupo = true;
        const request$ = this.grupoEditandoId
            ? this.service.atualizarGrupo(this.id, this.materiaSelecionada.id, this.grupoEditandoId, dados)
            : this.service.adicionarGrupo(this.id, this.materiaSelecionada.id, dados);
        request$.subscribe({
            next: (grupo) => {
                this.salvandoGrupo = false;
                this.modalGrupoAberto = false;
                this.cancelarEdicaoGrupo();
                this.carregarGrupos();
                if (!editando && tipo === 'ASSUNTO') {
                    this.grupos = [...this.grupos, grupo];
                    this.grupoSelecionado = grupo;
                    this.itemSelecionado = undefined;
                    this.itens = [];
                    this.carregarItens();
                    this.carregarAssuntosDaMateria(() => this.abrirItem());
                }
                this.message.success(`Grupo ${editando ? 'atualizado' : 'adicionado'} com sucesso.`);
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao salvar grupo:', erro);
                this.salvandoGrupo = false;
                this.message.error('Não foi possível salvar o grupo.');
            },
        });
    }
    editarGrupo(grupo) {
        if (!grupo.id)
            return;
        this.grupoEditandoId = grupo.id;
        this.quantidadeItensGrupoEditando = 0;
        this.grupoForm.setValue({
            tipo: grupo.tipo,
            nome: grupo.nome || '',
            peso: grupo.peso ?? null,
            ordem: grupo.ordem ?? null,
        });
        this.modalGrupoAberto = true;
        if (this.id && this.materiaSelecionada?.id) {
            this.service.listarItens(this.id, this.materiaSelecionada.id, grupo.id).subscribe({
                next: (itens) => (this.quantidadeItensGrupoEditando = itens.length),
                error: (erro) => console.error('Erro ao verificar itens do grupo:', erro),
            });
        }
    }
    abrirGrupo() {
        this.cancelarEdicaoGrupo();
        this.modalGrupoAberto = true;
    }
    fecharGrupo() {
        if (this.salvandoGrupo)
            return;
        this.modalGrupoAberto = false;
        this.cancelarEdicaoGrupo();
    }
    nomeDoGrupo(grupo) {
        if (grupo.tipo === 'BLOCO')
            return grupo.nome || 'Bloco sem nome';
        return grupo.id ? this.nomesAssuntosPorGrupo.get(grupo.id) || 'Assunto' : 'Assunto';
    }
    cancelarEdicaoGrupo() {
        this.grupoEditandoId = undefined;
        this.quantidadeItensGrupoEditando = 0;
        this.grupoForm.reset({ tipo: 'BLOCO', nome: '', peso: null, ordem: null });
    }
    excluirGrupo(grupo) {
        if (!this.id ||
            !this.materiaSelecionada?.id ||
            !grupo.id ||
            !window.confirm('Remover este grupo?'))
            return;
        this.service.excluirGrupo(this.id, this.materiaSelecionada.id, grupo.id).subscribe({
            next: () => {
                this.message.success('Grupo removido.');
                this.carregarGrupos();
            },
            error: (erro) => {
                console.error('Erro ao remover grupo:', erro);
                this.message.error('Não foi possível remover o grupo.');
            },
        });
    }
    selecionarGrupo(grupo) {
        if (!grupo.id || !this.materiaSelecionada?.materia.id)
            return;
        if (this.grupoSelecionado?.id === grupo.id) {
            this.grupoSelecionado = undefined;
            this.itemSelecionado = undefined;
            return;
        }
        this.grupoSelecionado = grupo;
        this.itemSelecionado = undefined;
        this.cancelarEdicaoItem();
        this.carregarItens();
        this.carregarAssuntosDaMateria();
    }
    salvarItem() {
        if (!this.id ||
            !this.materiaSelecionada?.id ||
            !this.grupoSelecionado?.id ||
            this.itemForm.invalid) {
            this.itemForm.markAllAsTouched();
            return;
        }
        if (!this.podeAdicionarItem()) {
            this.message.warning('Um grupo do tipo ASSUNTO pode possuir somente um item.');
            return;
        }
        const assuntoIds = this.itemForm.controls.assuntoIds.value ?? [];
        if (!assuntoIds.length) {
            this.itemForm.markAllAsTouched();
            return;
        }
        if (this.itemEditandoId && assuntoIds.length !== 1) {
            this.message.warning('Na edição, selecione apenas um assunto.');
            return;
        }
        const criarDados = (assuntoId) => ({
            assuntoId,
            peso: this.itemForm.controls.peso.value,
            dificuldade: this.itemForm.controls.dificuldade.value,
            ordem: this.itemForm.controls.ordem.value,
        });
        const adicionarNoGrupo = (grupoId, assuntoId) => this.service.adicionarItem(this.id, this.materiaSelecionada.id, grupoId, criarDados(assuntoId));
        const editando = !!this.itemEditandoId;
        this.salvandoItem = true;
        const request$ = this.itemEditandoId
            ? this.service.atualizarItem(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemEditandoId, criarDados(assuntoIds[0]))
            : this.grupoSelecionado.tipo === 'ASSUNTO'
                ? forkJoin([
                    adicionarNoGrupo(this.grupoSelecionado.id, assuntoIds[0]),
                    ...assuntoIds.slice(1).map((assuntoId) => this.service
                        .adicionarGrupo(this.id, this.materiaSelecionada.id, { tipo: 'ASSUNTO' })
                        .pipe(switchMap((grupo) => adicionarNoGrupo(grupo.id, assuntoId)))),
                ])
                : forkJoin(assuntoIds.map((assuntoId) => adicionarNoGrupo(this.grupoSelecionado.id, assuntoId)));
        request$.subscribe({
            next: () => {
                this.salvandoItem = false;
                this.modalItemAberto = false;
                this.cancelarEdicaoItem();
                this.carregarItens();
                this.carregarGrupos();
                this.message.success(editando
                    ? 'Assunto atualizado com sucesso.'
                    : `${assuntoIds.length} assunto(s) adicionado(s) com sucesso.`);
            },
            error: (erro) => {
                console.error('Erro ao salvar item:', erro);
                this.salvandoItem = false;
                this.message.error('Não foi possível salvar o item.');
            },
        });
    }
    cadastrarAssuntoRapido(inputElement) {
        const nome = inputElement.value.trim();
        const materiaId = this.materiaSelecionada?.materia.id;
        if (!nome || !materiaId || this.criandoAssunto)
            return;
        this.criandoAssunto = true;
        this.registroService.criarAssunto({ nome, materiaId }).subscribe({
            next: (assunto) => {
                this.assuntos = [...this.assuntos, assunto].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
                if (assunto.id) {
                    this.itemForm.controls.assuntoIds.setValue([
                        ...(this.itemForm.controls.assuntoIds.value ?? []),
                        assunto.id,
                    ]);
                }
                inputElement.value = '';
                this.criandoAssunto = false;
                this.message.success('Assunto criado com sucesso.');
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao criar assunto:', erro);
                this.criandoAssunto = false;
                this.message.error('Não foi possível criar o assunto.');
                this.cdr.detectChanges();
            },
        });
    }
    editarItem(item) {
        if (!item.id)
            return;
        this.itemEditandoId = item.id;
        this.itemForm.setValue({
            assuntoIds: [item.assunto.id],
            peso: item.peso ?? null,
            dificuldade: item.dificuldade ?? null,
            ordem: item.ordem ?? null,
        });
        this.modalItemAberto = true;
    }
    abrirItem() {
        this.cancelarEdicaoItem();
        this.modalItemAberto = true;
    }
    fecharItem() {
        if (this.salvandoItem)
            return;
        this.modalItemAberto = false;
        this.cancelarEdicaoItem();
    }
    cancelarEdicaoItem() {
        this.itemEditandoId = undefined;
        this.itemForm.reset({ assuntoIds: [], peso: null, dificuldade: null, ordem: null });
    }
    excluirItem(item) {
        if (!this.id ||
            !this.materiaSelecionada?.id ||
            !this.grupoSelecionado?.id ||
            !item.id ||
            !window.confirm(`Remover o assunto "${item.assunto.nome}"?`))
            return;
        this.service
            .excluirItem(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, item.id)
            .subscribe({
            next: () => {
                this.message.success('Item removido.');
                this.carregarItens();
            },
            error: (erro) => {
                console.error('Erro ao remover item:', erro);
                this.message.error('Não foi possível remover o item.');
            },
        });
    }
    podeAdicionarItem() {
        return (this.grupoSelecionado?.tipo !== 'ASSUNTO' || !!this.itemEditandoId || this.itens.length === 0);
    }
    assuntosDisponiveis() {
        return this.assuntos.filter((assunto) => assunto.id === this.itemSelecionado?.assunto.id ||
            assunto.id === this.itemForm.controls.assuntoIds.value?.[0] ||
            !assunto.id ||
            !this.assuntoIdsCadastrados.has(assunto.id));
    }
    abrirEtapas(item) {
        if (!item.id)
            return;
        this.itemSelecionado = item;
        this.cancelarEdicaoEtapa();
        this.modalEtapasAberto = true;
        this.carregarEtapas();
        this.carregarTiposRegistro();
    }
    fecharEtapas() {
        if (this.salvandoEtapa || this.modalEtapaAberto)
            return;
        this.modalEtapasAberto = false;
        this.itemSelecionado = undefined;
        this.etapas = [];
        this.cancelarEdicaoEtapa();
    }
    salvarEtapa() {
        if (!this.id ||
            !this.materiaSelecionada?.id ||
            !this.grupoSelecionado?.id ||
            !this.itemSelecionado?.id ||
            this.etapaForm.invalid) {
            this.etapaForm.markAllAsTouched();
            return;
        }
        const concluida = this.etapaForm.controls.concluida.value;
        const dados = {
            tipoRegistroId: this.etapaForm.controls.tipoRegistroId.value,
            ordem: this.etapaForm.controls.ordem.value,
            concluida,
            concluidaManualmente: concluida,
        };
        const editando = !!this.etapaEditandoId;
        this.salvandoEtapa = true;
        const request$ = this.etapaEditandoId
            ? this.service.atualizarEtapa(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemSelecionado.id, this.etapaEditandoId, dados)
            : this.service.adicionarEtapa(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemSelecionado.id, dados);
        request$.subscribe({
            next: () => {
                this.salvandoEtapa = false;
                this.modalEtapaAberto = false;
                this.cancelarEdicaoEtapa();
                this.carregarEtapas();
                this.message.success(`Etapa ${editando ? 'atualizada' : 'adicionada'} com sucesso.`);
            },
            error: (erro) => {
                console.error('Erro ao salvar etapa:', erro);
                this.salvandoEtapa = false;
                this.message.error('Não foi possível salvar a etapa.');
            },
        });
    }
    editarEtapa(etapa) {
        if (!etapa.id)
            return;
        this.etapaEditandoId = etapa.id;
        this.etapaForm.setValue({
            tipoRegistroId: etapa.tipoRegistro.id,
            ordem: etapa.ordem ?? null,
            concluida: !!etapa.concluida,
        });
        this.modalEtapaAberto = true;
    }
    abrirEtapa() {
        this.cancelarEdicaoEtapa();
        this.carregarTiposRegistro();
        this.modalEtapaAberto = true;
    }
    fecharEtapa() {
        if (this.salvandoEtapa)
            return;
        this.modalEtapaAberto = false;
        this.cancelarEdicaoEtapa();
    }
    cancelarEdicaoEtapa() {
        this.etapaEditandoId = undefined;
        this.etapaForm.reset({
            tipoRegistroId: null,
            ordem: null,
            concluida: false,
        });
    }
    excluirEtapa(etapa) {
        if (!this.id ||
            !this.materiaSelecionada?.id ||
            !this.grupoSelecionado?.id ||
            !this.itemSelecionado?.id ||
            !etapa.id ||
            !window.confirm('Remover esta etapa?'))
            return;
        this.service
            .excluirEtapa(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemSelecionado.id, etapa.id)
            .subscribe({
            next: () => {
                this.message.success('Etapa removida.');
                this.carregarEtapas();
            },
            error: (erro) => {
                console.error('Erro ao remover etapa:', erro);
                this.message.error('Não foi possível remover a etapa.');
            },
        });
    }
    carregar() {
        if (!this.id)
            return;
        this.carregando = true;
        this.service
            .listarTodos()
            .pipe(finalize(() => {
            this.carregando = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (planejamentos) => {
                const planejamento = planejamentos.find((item) => item.id === this.id);
                if (!planejamento) {
                    this.message.error('Planejamento não encontrado.');
                    this.voltar();
                    return;
                }
                this.form.patchValue({
                    nome: planejamento.nome,
                    descricao: planejamento.descricao || '',
                    dataFimPrevista: planejamento.dataFimPrevista || null,
                });
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar planejamento:', erro);
                this.message.error('Não foi possível carregar o planejamento.');
            },
        });
    }
    carregarMaterias() {
        if (!this.id)
            return;
        this.carregandoMaterias = true;
        this.service
            .listarMaterias(this.id)
            .pipe(finalize(() => {
            this.carregandoMaterias = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (materias) => {
                this.materiasPlanejadas = materias;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar matérias do planejamento:', erro);
                this.message.error('Não foi possível carregar as matérias do planejamento.');
            },
        });
    }
    carregarGruposMaterias() {
        if (!this.id)
            return;
        this.carregandoGruposMaterias = true;
        this.service
            .listarGruposMaterias(this.id)
            .pipe(finalize(() => {
            this.carregandoGruposMaterias = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (grupos) => {
                this.gruposMaterias = grupos;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar blocos de matérias:', erro);
                this.message.error('Não foi possível carregar os blocos de matérias.');
            },
        });
    }
    carregarGrupos() {
        if (!this.id || !this.materiaSelecionada?.id)
            return;
        this.carregandoGrupos = true;
        this.service
            .listarGrupos(this.id, this.materiaSelecionada.id)
            .pipe(finalize(() => {
            this.carregandoGrupos = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (grupos) => {
                this.grupos = grupos;
                this.carregarNomesDosAssuntos(grupos);
                this.carregarAssuntosCadastrados(grupos);
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar grupos:', erro);
                this.message.error('Não foi possível carregar os grupos.');
            },
        });
    }
    carregarItens() {
        if (!this.id || !this.materiaSelecionada?.id || !this.grupoSelecionado?.id)
            return;
        this.carregandoItens = true;
        this.service
            .listarItens(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id)
            .pipe(finalize(() => {
            this.carregandoItens = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (itens) => {
                this.itens = itens;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar itens:', erro);
                this.message.error('Não foi possível carregar os itens.');
            },
        });
    }
    carregarAssuntosDaMateria(aoCarregar) {
        const materiaId = this.materiaSelecionada?.materia.id;
        if (!materiaId)
            return;
        this.registroService.listarAssuntosPorMateria(materiaId).subscribe({
            next: (assuntos) => {
                this.assuntos = assuntos;
                aoCarregar?.();
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar assuntos:', erro);
                this.message.error('Não foi possível carregar os assuntos da matéria.');
                this.cdr.detectChanges();
            },
        });
    }
    carregarNomesDosAssuntos(grupos) {
        this.nomesAssuntosPorGrupo.clear();
        if (!this.id || !this.materiaSelecionada?.id)
            return;
        grupos
            .filter((grupo) => grupo.tipo === 'ASSUNTO' && grupo.id)
            .forEach((grupo) => {
            this.service.listarItens(this.id, this.materiaSelecionada.id, grupo.id).subscribe({
                next: (itens) => {
                    const nome = itens[0]?.assunto?.nome;
                    if (nome)
                        this.nomesAssuntosPorGrupo.set(grupo.id, nome);
                    this.cdr.detectChanges();
                },
                error: (erro) => console.error('Erro ao carregar nome do assunto:', erro),
            });
        });
    }
    carregarAssuntosCadastrados(grupos) {
        if (!this.id || !this.materiaSelecionada?.id)
            return;
        const consultas = grupos
            .filter((grupo) => grupo.id)
            .map((grupo) => this.service.listarItens(this.id, this.materiaSelecionada.id, grupo.id));
        if (!consultas.length) {
            this.assuntoIdsCadastrados = new Set();
            return;
        }
        forkJoin(consultas).subscribe({
            next: (itensPorGrupo) => {
                this.assuntoIdsCadastrados = new Set(itensPorGrupo.flatMap((itens) => itens.map((item) => item.assunto.id).filter((id) => !!id)));
                this.cdr.detectChanges();
            },
            error: (erro) => console.error('Erro ao carregar assuntos já cadastrados:', erro),
        });
    }
    carregarEtapas() {
        if (!this.id ||
            !this.materiaSelecionada?.id ||
            !this.grupoSelecionado?.id ||
            !this.itemSelecionado?.id)
            return;
        this.carregandoEtapas = true;
        this.service
            .listarEtapas(this.id, this.materiaSelecionada.id, this.grupoSelecionado.id, this.itemSelecionado.id)
            .pipe(finalize(() => {
            this.carregandoEtapas = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (etapas) => {
                this.etapas = etapas;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar etapas:', erro);
                this.message.error('Não foi possível carregar as etapas.');
            },
        });
    }
    carregarTiposRegistro() {
        if (this.tiposRegistro.length)
            return;
        this.registroService.listarTiposRegistro().subscribe({
            next: (tipos) => {
                this.tiposRegistro = tipos;
                this.cdr.detectChanges();
            },
            error: (erro) => console.error('Erro ao carregar tipos de registro:', erro),
        });
    }
    static ɵfac = function PlanejamentoDetalheComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PlanejamentoDetalheComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PlanejamentoDetalheComponent, selectors: [["app-planejamento-detalhe"]], decls: 17, vars: 11, consts: [["materiaCard", ""], ["criarMateriaTemplate", ""], ["novaMateria", ""], ["assuntoIndividual", ""], ["criarAssuntoTemplate", ""], ["novoAssunto", ""], [1, "planejamentos-page", "page-card"], [1, "page-heading"], ["type", "button", 1, "back-button", 3, "click"], ["class", "planning-loading", 4, "ngIf"], ["class", "new-planning-form", "nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "workspace", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "planning-loading"], ["nz-form", "", 1, "new-planning-form", 3, "ngSubmit", "formGroup"], ["nzRequired", ""], ["nzErrorTip", "Informe um nome de at\u00E9 150 caracteres."], ["nz-input", "", "formControlName", "nome", "maxlength", "150"], ["nz-input", "", "formControlName", "descricao", "rows", "4"], ["nz-input", "", "type", "date", "formControlName", "dataFimPrevista"], [1, "form-actions"], ["nz-button", "", "type", "button", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], [1, "workspace"], [1, "workspace-heading"], [1, "workspace-actions"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], ["class", "empty-state", 4, "ngIf"], ["class", "inline-loading", 4, "ngIf"], ["class", "accordion-list", 4, "ngIf"], [1, "empty-state"], [1, "matter-card"], [1, "accordion-header"], ["type", "button", 1, "accordion-trigger", 3, "click"], ["aria-hidden", "true", 1, "chevron"], [4, "ngIf"], [1, "row-actions"], ["type", "button", 3, "click"], ["type", "button", 1, "danger", 3, "click"], ["class", "accordion-body", 4, "ngIf"], [1, "accordion-body"], [1, "content-heading"], ["class", "subtle-empty", 4, "ngIf"], ["class", "groups-list", 4, "ngIf"], [1, "inline-loading"], [1, "subtle-empty"], [1, "groups-list"], ["class", "group-card", 3, "open", 4, "ngFor", "ngForOf"], [1, "group-card"], [1, "group-header"], ["type", "button", 1, "group-trigger", 3, "click"], [1, "row-actions", "compact"], ["class", "group-body", 4, "ngIf"], [1, "group-body"], [1, "content-heading", "small"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click", 4, "ngIf"], ["class", "topics-list", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click"], [1, "topics-list"], ["class", "topic-row", 4, "ngFor", "ngForOf"], [1, "topic-row"], ["type", "button", 1, "topic-main", 3, "click"], [1, "accordion-list"], ["class", "matter-card", 3, "open", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "form-modal", 3, "click"], ["type", "button", 1, "modal-close", 3, "click"], ["nz-form", "", 3, "ngSubmit", "formGroup"], [1, "form-grid"], ["nz-input", "", "type", "number", "min", "1", "max", "5", "placeholder", "De 1 a 5", "formControlName", "peso"], ["formControlName", "dificuldade", "nzAllowClear", "", "nzPlaceHolder", "Selecione"], ["nzLabel", "1 \u2014 Muito f\u00E1cil", 3, "nzValue"], ["nzLabel", "2 \u2014 F\u00E1cil", 3, "nzValue"], ["nzLabel", "3 \u2014 M\u00E9dia", 3, "nzValue"], ["nzLabel", "4 \u2014 Dif\u00EDcil", 3, "nzValue"], ["nzLabel", "5 \u2014 Muito dif\u00EDcil", 3, "nzValue"], ["nz-input", "", "type", "number", "min", "1", "formControlName", "ordem"], ["formControlName", "tipo"], ["nzValue", "MATERIA", "nzLabel", "Mat\u00E9ria"], ["nzValue", "BLOCO", "nzLabel", "Bloco de mat\u00E9rias"], ["nzErrorTip", "Selecione ao menos uma mat\u00E9ria."], ["formControlName", "materiaIds", "nzMode", "multiple", "nzPlaceHolder", "Selecione uma ou mais mat\u00E9rias", "nzShowSearch", "", 3, "nzDropdownRender"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "quick-create", 3, "click"], ["nz-input", "", "placeholder", "Nome da nova mat\u00E9ria", 3, "keydown.enter"], ["nz-button", "", "nzType", "link", "type", "button", 3, "click", "disabled"], ["nz-input", "", "formControlName", "nomeBloco", "maxlength", "150"], ["formControlName", "planejamentoGrupoMateriaId", "nzAllowClear", "", "nzPlaceHolder", "Sem bloco"], ["nz-input", "", "type", "number", "min", "1", "max", "5", "formControlName", "peso"], ["nzValue", "ASSUNTO", "nzLabel", "Assunto individual", 3, "nzDisabled"], ["nzValue", "BLOCO", "nzLabel", "Bloco de assuntos"], [4, "ngIf", "ngIfElse"], ["nzErrorTip", "Selecione ao menos um assunto."], ["formControlName", "assuntoIds", "nzMode", "multiple", "nzPlaceHolder", "Selecione um ou mais assuntos", "nzShowSearch", "", 3, "nzDropdownRender"], ["nz-input", "", "placeholder", "Nome do novo assunto", 3, "keydown.enter"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "etapas-title", 1, "form-modal", "stages-modal", 3, "click"], ["id", "etapas-title"], ["type", "button", "aria-label", "Fechar etapas", 1, "modal-close", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click"], ["class", "stages-modal-list", 4, "ngIf"], [1, "stages-modal-list"], ["class", "stage-row", 4, "ngFor", "ngForOf"], [1, "stage-row"], ["formControlName", "tipoRegistroId", "nzPlaceHolder", "Selecione"], [1, "checkbox-field"], ["type", "checkbox", "formControlName", "concluida"]], template: function PlanejamentoDetalheComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6)(1, "header", 7)(2, "button", 8);
            i0.ɵɵlistener("click", function PlanejamentoDetalheComponent_Template_button_click_2_listener() { return ctx.voltar(); });
            i0.ɵɵtext(3, "\u2190 Planejamentos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h2");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(8, PlanejamentoDetalheComponent_div_8_Template, 2, 0, "div", 9)(9, PlanejamentoDetalheComponent_form_9_Template, 21, 2, "form", 10)(10, PlanejamentoDetalheComponent_section_10_Template, 16, 4, "section", 11)(11, PlanejamentoDetalheComponent_div_11_Template, 43, 12, "div", 12)(12, PlanejamentoDetalheComponent_div_12_Template, 35, 3, "div", 12)(13, PlanejamentoDetalheComponent_div_13_Template, 38, 5, "div", 12)(14, PlanejamentoDetalheComponent_div_14_Template, 50, 12, "div", 12)(15, PlanejamentoDetalheComponent_div_15_Template, 18, 4, "div", 12)(16, PlanejamentoDetalheComponent_div_16_Template, 30, 4, "div", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.id ? ctx.form.controls.nome.value || "Editar planejamento" : "Novo planejamento");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.id ? "Organize as mat\u00E9rias, os assuntos e as etapas." : "Informe os dados principais para come\u00E7ar.", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.id && !ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.id && !ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalMateriaAberto);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalGrupoMateriaAberto);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalGrupoAberto);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalItemAberto);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalEtapasAberto);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalEtapaAberto);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MaxLengthValidator, i2.MinValidator, i2.MaxValidator, i2.FormGroupDirective, i2.FormControlName, NzButtonModule, i3.NzButtonComponent, i4.ɵNzTransitionPatchDirective, i5.NzWaveDirective, NzFormModule, i6.NzColDirective, i6.NzRowDirective, i7.NzFormDirective, i7.NzFormItemComponent, i7.NzFormLabelComponent, i7.NzFormControlComponent, NzInputModule, i8.NzInputDirective, NzSelectModule, i9.NzOptionComponent, i9.NzSelectComponent], styles: [".planejamentos-page[_ngcontent-%COMP%] {\n  padding: clamp(18px, 3vw, 28px);\n  background: var(--%NS%surface, #fff);\n}\n.page-heading[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 26px;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.workspace-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.content-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n.back-button[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%text-muted, #64748b);\n  cursor: pointer;\n  font: inherit;\n  font-size: 13px;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  color: #1677ff;\n}\n.workspace[_ngcontent-%COMP%], \n.new-planning-form[_ngcontent-%COMP%] {\n  padding: 18px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 10px;\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n.workspace-heading[_ngcontent-%COMP%], \n.content-heading[_ngcontent-%COMP%], \n.accordion-header[_ngcontent-%COMP%], \n.group-header[_ngcontent-%COMP%], \n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n}\n.workspace-heading[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.workspace-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.workspace-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.content-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.content-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n}\n.accordion-list[_ngcontent-%COMP%], \n.groups-list[_ngcontent-%COMP%], \n.topics-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n}\n.matter-card[_ngcontent-%COMP%], \n.group-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 9px;\n  background: var(--%NS%surface, #fff);\n}\n.matter-card.open[_ngcontent-%COMP%] {\n  border-color: #93c5fd;\n  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.07);\n}\n.accordion-header[_ngcontent-%COMP%], \n.group-header[_ngcontent-%COMP%] {\n  padding: 0 14px 0 0;\n}\n.accordion-trigger[_ngcontent-%COMP%], \n.group-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  align-items: center;\n  gap: 10px;\n  padding: 15px 14px;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%text, #0f172a);\n  cursor: pointer;\n  text-align: left;\n}\n.accordion-trigger[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child, \n.group-trigger[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  gap: 3px;\n}\n.accordion-trigger[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.group-trigger[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.topic-main[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 400;\n}\n.chevron[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 24px;\n  line-height: 1;\n  transition: transform 0.15s ease;\n}\n.open[_ngcontent-%COMP%]    > .accordion-header[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%], \n.open[_ngcontent-%COMP%]    > .group-header[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  gap: 3px;\n}\n.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.stage-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 5px 7px;\n  border: 0;\n  background: transparent;\n  color: #2563eb;\n  cursor: pointer;\n  font: inherit;\n  font-size: 12px;\n}\n.row-actions[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%], \n.stage-chip[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.accordion-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n.content-heading[_ngcontent-%COMP%] {\n  margin-bottom: 13px;\n}\n.content-heading.small[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n.group-card[_ngcontent-%COMP%] {\n  background: var(--%NS%surface, #fff);\n}\n.group-body[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n}\n.topic-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 7px;\n  background: var(--%NS%surface, #fff);\n}\n.topic-row.selected[_ngcontent-%COMP%] {\n  border-color: #bfdbfe;\n}\n.topic-main[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n  padding: 12px;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%text, #0f172a);\n  cursor: pointer;\n  text-align: left;\n}\n.stages-panel[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  padding: 12px;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n.stage-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.stage-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  padding: 5px 7px 5px 10px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 999px;\n  background: var(--%NS%surface, #fff);\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n}\n.stage-chip[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.planning-loading[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%], \n.subtle-empty[_ngcontent-%COMP%], \n.inline-loading[_ngcontent-%COMP%] {\n  padding: 15px;\n  color: var(--%NS%text-muted, #64748b);\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%], \n.subtle-empty[_ngcontent-%COMP%] {\n  border: 1px dashed var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n}\n.inline-loading[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.new-planning-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 4px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  background: rgba(15, 23, 42, 0.45);\n}\n.form-modal[_ngcontent-%COMP%] {\n  width: min(500px, 100%);\n  max-height: calc(100vh - 40px);\n  overflow: auto;\n  padding: 20px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 12px;\n  background: var(--%NS%surface, #fff);\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22);\n}\n\n.stages-modal[_ngcontent-%COMP%] {\n  width: min(620px, 100%);\n}\n.form-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.form-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n}\n.form-modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n}\n.modal-close[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--%NS%text-muted, #64748b);\n  cursor: pointer;\n  font-size: 24px;\n  line-height: 1;\n}\n.form-modal[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%] {\n  margin-bottom: 13px;\n}\n.quick-create[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 8px;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n}\n.quick-create[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.quick-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-modal[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  margin: 4px 0 12px;\n}\n.form-modal[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  cursor: pointer;\n  font-size: 13px;\n}\n.form-modal[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.checkbox-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin: 9px 0;\n  color: var(--%NS%text, #0f172a);\n}\n\n.stages-modal-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n\n.stage-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 12px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n.stage-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: 3px;\n}\n\n.stage-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%text, #0f172a);\n}\n\n.stage-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n}\n\n.done[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n@media (max-width: 700px) {\n  .workspace[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .workspace-heading[_ngcontent-%COMP%], \n   .content-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .workspace-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .accordion-header[_ngcontent-%COMP%], \n   .group-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .row-actions[_ngcontent-%COMP%] {\n    padding-top: 9px;\n    flex-direction: column;\n  }\n  .topic-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .topic-row[_ngcontent-%COMP%]    > .row-actions[_ngcontent-%COMP%] {\n    padding: 0 8px 8px;\n    flex-direction: row;\n  }\n\n  .stage-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .stage-row[_ngcontent-%COMP%]   .row-actions[_ngcontent-%COMP%] {\n    padding-top: 0;\n    flex-direction: row;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanejamentoDetalheComponent, [{
        type: Component,
        args: [{ selector: 'app-planejamento-detalhe', standalone: true, imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    NzButtonModule,
                    NzFormModule,
                    NzInputModule,
                    NzSelectModule,
                ], template: "<div class=\"planejamentos-page page-card\">\n  <header class=\"page-heading\">\n    <button type=\"button\" class=\"back-button\" (click)=\"voltar()\">\u2190 Planejamentos</button>\n    <h2>{{ id ? form.controls.nome.value || 'Editar planejamento' : 'Novo planejamento' }}</h2>\n    <p>\n      {{\n        id\n          ? 'Organize as mat\u00E9rias, os assuntos e as etapas.'\n          : 'Informe os dados principais para come\u00E7ar.'\n      }}\n    </p>\n  </header>\n\n  <div class=\"planning-loading\" *ngIf=\"carregando\">Carregando planejamento...</div>\n\n  <form\n    class=\"new-planning-form\"\n    nz-form\n    [formGroup]=\"form\"\n    (ngSubmit)=\"salvar()\"\n    *ngIf=\"!id && !carregando\"\n  >\n    <nz-form-item\n      ><nz-form-label nzRequired>Nome</nz-form-label\n      ><nz-form-control nzErrorTip=\"Informe um nome de at\u00E9 150 caracteres.\"\n        ><input nz-input formControlName=\"nome\" maxlength=\"150\" /></nz-form-control\n    ></nz-form-item>\n    <nz-form-item\n      ><nz-form-label>Descri\u00E7\u00E3o</nz-form-label\n      ><nz-form-control>\n        <textarea nz-input formControlName=\"descricao\" rows=\"4\"></textarea></nz-form-control\n    ></nz-form-item>\n    <nz-form-item\n      ><nz-form-label>Data fim prevista</nz-form-label\n      ><nz-form-control><input nz-input type=\"date\" formControlName=\"dataFimPrevista\" /></nz-form-control\n    ></nz-form-item>\n    <div class=\"form-actions\">\n      <button nz-button type=\"button\" (click)=\"voltar()\">Cancelar</button\n      ><button nz-button nzType=\"primary\" [nzLoading]=\"salvando\">Criar planejamento</button>\n    </div>\n  </form>\n\n  <section class=\"workspace\" *ngIf=\"id && !carregando\">\n    <div class=\"workspace-heading\">\n      <div>\n        <h3>Mat\u00E9rias</h3>\n        <p>Organize-as em blocos e abra uma mat\u00E9ria para gerenciar seu conte\u00FAdo.</p>\n      </div>\n      <div class=\"workspace-actions\">\n        <button nz-button nzType=\"primary\" type=\"button\" (click)=\"abrirMateria()\">\n          + Adicionar item\n        </button>\n      </div>\n    </div>\n    <div class=\"planning-loading\" *ngIf=\"carregandoMaterias\">Carregando mat\u00E9rias...</div>\n    <div class=\"empty-state\" *ngIf=\"!carregandoMaterias && !materiasPlanejadas.length\">\n      Nenhuma mat\u00E9ria adicionada. Comece pelo bot\u00E3o acima.\n    </div>\n\n    <ng-template #materiaCard let-item>\n      <article class=\"matter-card\" [class.open]=\"materiaSelecionada?.id === item.id\">\n        <div class=\"accordion-header\">\n          <button\n            type=\"button\"\n            class=\"accordion-trigger\"\n            (click)=\"selecionarMateria(item)\"\n            [attr.aria-expanded]=\"materiaSelecionada?.id === item.id\"\n          >\n            <span class=\"chevron\" aria-hidden=\"true\">\u203A</span>\n            <span\n              ><strong>{{ item.materia.nome }}</strong\n              ><small\n                >Ordem {{ item.ordem ?? 'n\u00E3o definida'\n                }} \u00B7 Peso na prova {{ item.peso ?? 'n\u00E3o informado' }}\n                \u00B7 Dificuldade {{ rotuloDificuldade(item.dificuldade) }}<ng-container\n                  *ngIf=\"item.planejamentoGrupoMateria\"\n                >\n                  \u00B7 {{ item.planejamentoGrupoMateria.nome }}</ng-container\n                ></small\n              ></span\n            >\n          </button>\n          <div class=\"row-actions\">\n            <button type=\"button\" (click)=\"editarMateria(item)\">Editar</button\n            ><button type=\"button\" class=\"danger\" (click)=\"excluirMateria(item)\">Remover</button>\n          </div>\n        </div>\n\n        <div class=\"accordion-body\" *ngIf=\"materiaSelecionada?.id === item.id\">\n          <div class=\"content-heading\">\n            <div>\n              <h4>Blocos e assuntos</h4>\n              <p>Agrupe assuntos relacionados ou use um bloco individual.</p>\n            </div>\n            <button nz-button type=\"button\" (click)=\"abrirGrupo()\">\n              + Adicionar bloco ou assunto\n            </button>\n          </div>\n          <div class=\"inline-loading\" *ngIf=\"carregandoGrupos\">Carregando...</div>\n          <div class=\"subtle-empty\" *ngIf=\"!carregandoGrupos && !grupos.length\">\n            Nenhum bloco adicionado.\n          </div>\n\n          <div class=\"groups-list\" *ngIf=\"!carregandoGrupos && grupos.length\">\n            <article\n              class=\"group-card\"\n              *ngFor=\"let grupo of grupos\"\n              [class.open]=\"grupoSelecionado?.id === grupo.id\"\n            >\n              <div class=\"group-header\">\n                <button\n                  type=\"button\"\n                  class=\"group-trigger\"\n                  (click)=\"selecionarGrupo(grupo)\"\n                  [attr.aria-expanded]=\"grupoSelecionado?.id === grupo.id\"\n                >\n                  <span class=\"chevron\" aria-hidden=\"true\">\u203A</span\n                  ><span\n                    ><strong>{{ nomeDoGrupo(grupo) }}</strong\n                    ><small>{{ grupo.tipo === 'BLOCO' ? 'Bloco' : 'Assunto' }}</small></span\n                  >\n                </button>\n                <div class=\"row-actions compact\">\n                  <button type=\"button\" (click)=\"editarGrupo(grupo)\">Editar</button\n                  ><button type=\"button\" class=\"danger\" (click)=\"excluirGrupo(grupo)\">\n                    Remover\n                  </button>\n                </div>\n              </div>\n\n              <div class=\"group-body\" *ngIf=\"grupoSelecionado?.id === grupo.id\">\n                <div class=\"content-heading small\">\n                  <h5>Assuntos</h5>\n                  <button\n                    nz-button\n                    nzSize=\"small\"\n                    type=\"button\"\n                    (click)=\"abrirItem()\"\n                    *ngIf=\"podeAdicionarItem()\"\n                  >\n                    + Adicionar assunto\n                  </button>\n                </div>\n                <div class=\"inline-loading\" *ngIf=\"carregandoItens\">Carregando...</div>\n                <div class=\"subtle-empty\" *ngIf=\"!carregandoItens && !itens.length\">\n                  Nenhum assunto adicionado.\n                </div>\n                <div class=\"topics-list\" *ngIf=\"!carregandoItens && itens.length\">\n                  <article class=\"topic-row\" *ngFor=\"let assunto of itens\">\n                    <button type=\"button\" class=\"topic-main\" (click)=\"abrirEtapas(assunto)\">\n                      <strong>{{ assunto.assunto.nome }}</strong\n                      ><small\n                        >Peso {{ assunto.peso ?? 'n\u00E3o informado' }} \u00B7 Dificuldade\n                        {{ rotuloDificuldade(assunto.dificuldade) }}</small\n                      >\n                    </button>\n                    <div class=\"row-actions compact\">\n                      <button type=\"button\" (click)=\"editarItem(assunto)\">Editar</button\n                      ><button type=\"button\" class=\"danger\" (click)=\"excluirItem(assunto)\">\n                        Remover\n                      </button>\n                    </div>\n                  </article>\n                </div>\n              </div>\n            </article>\n          </div>\n        </div>\n      </article>\n    </ng-template>\n\n    <div class=\"inline-loading\" *ngIf=\"carregandoGruposMaterias\">Carregando blocos...</div>\n    <div\n      class=\"accordion-list\"\n      *ngIf=\"!carregandoGruposMaterias && (gruposMaterias.length || materiasSemGrupo().length)\"\n    >\n      <article\n        class=\"matter-card\"\n        *ngFor=\"let grupo of gruposMaterias\"\n        [class.open]=\"grupoMateriaSelecionado?.id === grupo.id\"\n      >\n        <div class=\"accordion-header\">\n          <button\n            type=\"button\"\n            class=\"accordion-trigger\"\n            (click)=\"selecionarGrupoMateria(grupo)\"\n            [attr.aria-expanded]=\"grupoMateriaSelecionado?.id === grupo.id\"\n          >\n            <span class=\"chevron\" aria-hidden=\"true\">\u203A</span>\n            <span\n              ><strong>{{ grupo.nome }}</strong\n              ><small>{{ materiasDoGrupo(grupo).length }} mat\u00E9ria(s)</small></span\n            >\n          </button>\n          <div class=\"row-actions\">\n            <button type=\"button\" (click)=\"abrirMateriaNoGrupo(grupo)\">+ Mat\u00E9ria</button>\n            <button type=\"button\" (click)=\"editarGrupoMateria(grupo)\">Editar</button>\n            <button type=\"button\" class=\"danger\" (click)=\"excluirGrupoMateria(grupo)\">\n              Remover\n            </button>\n          </div>\n        </div>\n        <div class=\"accordion-body\" *ngIf=\"grupoMateriaSelecionado?.id === grupo.id\">\n          <div class=\"content-heading small\">\n            <div>\n              <h4>Mat\u00E9rias</h4>\n              <p>Abra uma mat\u00E9ria para organizar seus assuntos.</p>\n            </div>\n            <button nz-button nzSize=\"small\" type=\"button\" (click)=\"abrirMateriaNoGrupo(grupo)\">\n              + Adicionar mat\u00E9ria\n            </button>\n          </div>\n          <div class=\"subtle-empty\" *ngIf=\"!materiasDoGrupo(grupo).length\">\n            Nenhuma mat\u00E9ria adicionada a este bloco.\n          </div>\n          <div class=\"accordion-list\" *ngIf=\"materiasDoGrupo(grupo).length\">\n            <ng-container\n              *ngFor=\"let materia of materiasDoGrupo(grupo)\"\n              [ngTemplateOutlet]=\"materiaCard\"\n              [ngTemplateOutletContext]=\"{ $implicit: materia }\"\n            ></ng-container>\n          </div>\n        </div>\n      </article>\n      <ng-container\n        *ngFor=\"let materia of materiasSemGrupo()\"\n        [ngTemplateOutlet]=\"materiaCard\"\n        [ngTemplateOutletContext]=\"{ $implicit: materia }\"\n      ></ng-container>\n    </div>\n  </section>\n\n  <div class=\"modal-backdrop\" *ngIf=\"modalMateriaAberto\" (click)=\"fecharMateria()\">\n    <section class=\"form-modal\" role=\"dialog\" aria-modal=\"true\" (click)=\"$event.stopPropagation()\">\n      <header>\n        <div>\n          <h3>{{ materiaEditandoId ? 'Editar mat\u00E9ria' : 'Adicionar item' }}</h3>\n          <p>Selecione uma ou v\u00E1rias mat\u00E9rias, ou crie um bloco de mat\u00E9rias.</p>\n        </div>\n        <button type=\"button\" class=\"modal-close\" (click)=\"fecharMateria()\">\u00D7</button>\n      </header>\n      <form nz-form [formGroup]=\"materiaForm\" (ngSubmit)=\"salvarMateria()\">\n        <nz-form-item\n          *ngIf=\"!materiaEditandoId && !materiaForm.controls.planejamentoGrupoMateriaId.value\"\n        >\n          <nz-form-label nzRequired>Tipo</nz-form-label>\n          <nz-form-control>\n            <nz-select formControlName=\"tipo\">\n              <nz-option nzValue=\"MATERIA\" nzLabel=\"Mat\u00E9ria\"></nz-option>\n              <nz-option nzValue=\"BLOCO\" nzLabel=\"Bloco de mat\u00E9rias\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item *ngIf=\"materiaForm.controls.tipo.value === 'MATERIA'\"\n          ><nz-form-label nzRequired>Mat\u00E9rias</nz-form-label\n          ><nz-form-control nzErrorTip=\"Selecione ao menos uma mat\u00E9ria.\"\n            ><nz-select\n              formControlName=\"materiaIds\"\n              nzMode=\"multiple\"\n              nzPlaceHolder=\"Selecione uma ou mais mat\u00E9rias\"\n              nzShowSearch\n              [nzDropdownRender]=\"criarMateriaTemplate\"\n              ><nz-option\n                *ngFor=\"let materia of materiasDisponiveis()\"\n                [nzValue]=\"materia.id\"\n                [nzLabel]=\"materia.nome\"\n              ></nz-option></nz-select></nz-form-control\n        ></nz-form-item>\n        <ng-template #criarMateriaTemplate>\n          <div class=\"quick-create\" (click)=\"$event.stopPropagation()\">\n            <input nz-input #novaMateria placeholder=\"Nome da nova mat\u00E9ria\" (keydown.enter)=\"cadastrarMateriaRapida(novaMateria); $event.preventDefault()\" />\n            <button nz-button nzType=\"link\" type=\"button\" [disabled]=\"criandoMateria\" (click)=\"cadastrarMateriaRapida(novaMateria)\">\n              {{ criandoMateria ? 'Criando...' : 'Criar' }}\n            </button>\n          </div>\n        </ng-template>\n        <nz-form-item *ngIf=\"materiaForm.controls.tipo.value === 'BLOCO'\"\n          ><nz-form-label nzRequired>Nome do bloco</nz-form-label\n          ><nz-form-control nzErrorTip=\"Informe um nome de at\u00E9 150 caracteres.\"\n            ><input nz-input formControlName=\"nomeBloco\" maxlength=\"150\" /></nz-form-control\n        ></nz-form-item>\n        <nz-form-item *ngIf=\"materiaForm.controls.tipo.value === 'MATERIA'\"\n          ><nz-form-label>Bloco de mat\u00E9rias</nz-form-label\n          ><nz-form-control\n            ><nz-select\n              formControlName=\"planejamentoGrupoMateriaId\"\n              nzAllowClear\n              nzPlaceHolder=\"Sem bloco\"\n              ><nz-option\n                *ngFor=\"let grupo of gruposMaterias\"\n                [nzValue]=\"grupo.id\"\n                [nzLabel]=\"grupo.nome\"\n              ></nz-option></nz-select></nz-form-control\n        ></nz-form-item>\n        <div class=\"form-grid\">\n          <nz-form-item\n            ><nz-form-label>Peso na prova</nz-form-label\n            ><nz-form-control\n              ><input\n                nz-input\n                type=\"number\"\n                min=\"1\"\n                max=\"5\"\n                placeholder=\"De 1 a 5\"\n                formControlName=\"peso\" /></nz-form-control></nz-form-item\n          ><nz-form-item\n            ><nz-form-label>Dificuldade da mat\u00E9ria</nz-form-label\n            ><nz-form-control\n              ><nz-select formControlName=\"dificuldade\" nzAllowClear nzPlaceHolder=\"Selecione\"\n                ><nz-option [nzValue]=\"1\" nzLabel=\"1 \u2014 Muito f\u00E1cil\"></nz-option\n                ><nz-option [nzValue]=\"2\" nzLabel=\"2 \u2014 F\u00E1cil\"></nz-option\n                ><nz-option [nzValue]=\"3\" nzLabel=\"3 \u2014 M\u00E9dia\"></nz-option\n                ><nz-option [nzValue]=\"4\" nzLabel=\"4 \u2014 Dif\u00EDcil\"></nz-option\n                ><nz-option [nzValue]=\"5\" nzLabel=\"5 \u2014 Muito dif\u00EDcil\"></nz-option></nz-select></nz-form-control\n          ></nz-form-item\n          ><nz-form-item\n            ><nz-form-label>Ordem</nz-form-label\n            ><nz-form-control\n              ><input nz-input type=\"number\" min=\"1\" formControlName=\"ordem\" /></nz-form-control\n          ></nz-form-item>\n        </div>\n        <div class=\"form-actions\">\n          <button nz-button type=\"button\" (click)=\"fecharMateria()\">Cancelar</button\n          ><button nz-button nzType=\"primary\" [nzLoading]=\"salvandoMateria\">Salvar</button>\n        </div>\n      </form>\n    </section>\n  </div>\n\n  <div class=\"modal-backdrop\" *ngIf=\"modalGrupoMateriaAberto\" (click)=\"fecharGrupoMateria()\">\n    <section class=\"form-modal\" role=\"dialog\" aria-modal=\"true\" (click)=\"$event.stopPropagation()\">\n      <header>\n        <div>\n          <h3>\n            {{\n              grupoMateriaEditandoId ? 'Editar bloco de mat\u00E9rias' : 'Adicionar bloco de mat\u00E9rias'\n            }}\n          </h3>\n          <p>Use um bloco para reunir mat\u00E9rias relacionadas no planejamento.</p>\n        </div>\n        <button type=\"button\" class=\"modal-close\" (click)=\"fecharGrupoMateria()\">\u00D7</button>\n      </header>\n      <form nz-form [formGroup]=\"grupoMateriaForm\" (ngSubmit)=\"salvarGrupoMateria()\">\n        <nz-form-item\n          ><nz-form-label nzRequired>Nome do bloco</nz-form-label\n          ><nz-form-control nzErrorTip=\"Informe um nome de at\u00E9 150 caracteres.\"\n            ><input nz-input formControlName=\"nome\" maxlength=\"150\" /></nz-form-control\n        ></nz-form-item>\n        <details>\n          <summary>Op\u00E7\u00F5es avan\u00E7adas</summary>\n          <div class=\"form-grid\">\n            <nz-form-item\n              ><nz-form-label>Peso</nz-form-label\n              ><nz-form-control\n                ><input\n                  nz-input\n                  type=\"number\"\n                  min=\"1\"\n                  max=\"5\"\n                  formControlName=\"peso\" /></nz-form-control\n            ></nz-form-item>\n            <nz-form-item\n              ><nz-form-label>Ordem</nz-form-label\n              ><nz-form-control\n                ><input nz-input type=\"number\" min=\"1\" formControlName=\"ordem\" /></nz-form-control\n            ></nz-form-item>\n          </div>\n        </details>\n        <div class=\"form-actions\">\n          <button nz-button type=\"button\" (click)=\"fecharGrupoMateria()\">Cancelar</button>\n          <button nz-button nzType=\"primary\" [nzLoading]=\"salvandoGrupoMateria\">Salvar</button>\n        </div>\n      </form>\n    </section>\n  </div>\n\n  <div class=\"modal-backdrop\" *ngIf=\"modalGrupoAberto\" (click)=\"fecharGrupo()\">\n    <section class=\"form-modal\" role=\"dialog\" aria-modal=\"true\" (click)=\"$event.stopPropagation()\">\n      <header>\n        <div>\n          <h3>{{ grupoEditandoId ? 'Editar bloco' : 'Adicionar bloco' }}</h3>\n          <p>Defina como os assuntos ser\u00E3o agrupados.</p>\n        </div>\n        <button type=\"button\" class=\"modal-close\" (click)=\"fecharGrupo()\">\u00D7</button>\n      </header>\n      <form nz-form [formGroup]=\"grupoForm\" (ngSubmit)=\"salvarGrupo()\">\n        <nz-form-item\n          ><nz-form-label nzRequired>Tipo</nz-form-label\n          ><nz-form-control\n            ><nz-select formControlName=\"tipo\"\n              ><nz-option\n                nzValue=\"ASSUNTO\"\n                nzLabel=\"Assunto individual\"\n                [nzDisabled]=\"!!grupoEditandoId && quantidadeItensGrupoEditando > 1\"\n              ></nz-option\n              ><nz-option\n                nzValue=\"BLOCO\"\n                nzLabel=\"Bloco de assuntos\"\n              ></nz-option></nz-select></nz-form-control></nz-form-item\n        ><nz-form-item *ngIf=\"grupoForm.controls.tipo.value === 'BLOCO'\"\n          ><nz-form-label nzRequired>Nome do bloco</nz-form-label\n          ><nz-form-control\n            ><input nz-input formControlName=\"nome\" maxlength=\"150\" /></nz-form-control\n        ></nz-form-item>\n        <details>\n          <summary>Op\u00E7\u00F5es avan\u00E7adas</summary>\n          <div class=\"form-grid\">\n            <nz-form-item\n              ><nz-form-label>Peso</nz-form-label\n              ><nz-form-control\n                ><input\n                  nz-input\n                  type=\"number\"\n                  min=\"1\"\n                  max=\"5\"\n                  formControlName=\"peso\" /></nz-form-control></nz-form-item\n            ><nz-form-item\n              ><nz-form-label>Ordem</nz-form-label\n              ><nz-form-control\n                ><input nz-input type=\"number\" min=\"1\" formControlName=\"ordem\" /></nz-form-control\n            ></nz-form-item>\n          </div>\n        </details>\n        <div class=\"form-actions\">\n          <button nz-button type=\"button\" (click)=\"fecharGrupo()\">Cancelar</button\n          ><button nz-button nzType=\"primary\" [nzLoading]=\"salvandoGrupo\">Salvar</button>\n        </div>\n      </form>\n    </section>\n  </div>\n\n  <div class=\"modal-backdrop\" *ngIf=\"modalItemAberto\" (click)=\"fecharItem()\">\n    <section class=\"form-modal\" role=\"dialog\" aria-modal=\"true\" (click)=\"$event.stopPropagation()\">\n      <header>\n        <div>\n          <h3>{{ itemEditandoId ? 'Editar assunto' : 'Adicionar assunto' }}</h3>\n          <p>\n            <ng-container *ngIf=\"grupoSelecionado?.tipo === 'BLOCO'; else assuntoIndividual\">\n              Selecione um ou mais assuntos de {{ materiaSelecionada?.materia?.nome }}.\n            </ng-container>\n            <ng-template #assuntoIndividual>\n              Cada assunto selecionado ser\u00E1 adicionado como um assunto individual.\n            </ng-template>\n          </p>\n        </div>\n        <button type=\"button\" class=\"modal-close\" (click)=\"fecharItem()\">\u00D7</button>\n      </header>\n      <form nz-form [formGroup]=\"itemForm\" (ngSubmit)=\"salvarItem()\">\n        <nz-form-item\n          ><nz-form-label nzRequired>Assuntos</nz-form-label\n          ><nz-form-control nzErrorTip=\"Selecione ao menos um assunto.\"\n            ><nz-select\n              formControlName=\"assuntoIds\"\n              nzMode=\"multiple\"\n              nzPlaceHolder=\"Selecione um ou mais assuntos\"\n              nzShowSearch\n              [nzDropdownRender]=\"criarAssuntoTemplate\"\n              ><nz-option\n                *ngFor=\"let assunto of assuntosDisponiveis()\"\n                [nzValue]=\"assunto.id\"\n                [nzLabel]=\"assunto.nome\"\n              ></nz-option></nz-select></nz-form-control\n        ></nz-form-item>\n        <ng-template #criarAssuntoTemplate>\n          <div class=\"quick-create\" (click)=\"$event.stopPropagation()\">\n            <input nz-input #novoAssunto placeholder=\"Nome do novo assunto\" (keydown.enter)=\"cadastrarAssuntoRapido(novoAssunto); $event.preventDefault()\" />\n            <button nz-button nzType=\"link\" type=\"button\" [disabled]=\"criandoAssunto\" (click)=\"cadastrarAssuntoRapido(novoAssunto)\">\n              {{ criandoAssunto ? 'Criando...' : 'Criar' }}\n            </button>\n          </div>\n        </ng-template>\n        <details>\n          <summary>Op\u00E7\u00F5es avan\u00E7adas</summary>\n          <div class=\"form-grid\">\n            <nz-form-item\n              ><nz-form-label>Peso</nz-form-label\n              ><nz-form-control\n                ><input\n                  nz-input\n                  type=\"number\"\n                  min=\"1\"\n                  max=\"5\"\n                  formControlName=\"peso\" /></nz-form-control></nz-form-item\n            ><nz-form-item\n              ><nz-form-label>Dificuldade</nz-form-label\n              ><nz-form-control\n                ><nz-select formControlName=\"dificuldade\" nzAllowClear nzPlaceHolder=\"Selecione\"\n                  ><nz-option [nzValue]=\"1\" nzLabel=\"1 \u2014 Muito f\u00E1cil\"></nz-option\n                  ><nz-option [nzValue]=\"2\" nzLabel=\"2 \u2014 F\u00E1cil\"></nz-option\n                  ><nz-option [nzValue]=\"3\" nzLabel=\"3 \u2014 M\u00E9dia\"></nz-option\n                  ><nz-option [nzValue]=\"4\" nzLabel=\"4 \u2014 Dif\u00EDcil\"></nz-option\n                  ><nz-option [nzValue]=\"5\" nzLabel=\"5 \u2014 Muito dif\u00EDcil\"></nz-option></nz-select></nz-form-control\n            ></nz-form-item\n            ><nz-form-item\n              ><nz-form-label>Ordem</nz-form-label\n              ><nz-form-control\n                ><input nz-input type=\"number\" min=\"1\" formControlName=\"ordem\" /></nz-form-control\n            ></nz-form-item>\n          </div>\n        </details>\n        <div class=\"form-actions\">\n          <button nz-button type=\"button\" (click)=\"fecharItem()\">Cancelar</button\n          ><button nz-button nzType=\"primary\" [nzLoading]=\"salvandoItem\">Salvar</button>\n        </div>\n      </form>\n    </section>\n  </div>\n\n  <div class=\"modal-backdrop\" *ngIf=\"modalEtapasAberto\" (click)=\"fecharEtapas()\">\n    <section\n      class=\"form-modal stages-modal\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"etapas-title\"\n      (click)=\"$event.stopPropagation()\"\n    >\n      <header>\n        <div>\n          <h3 id=\"etapas-title\">Etapas de {{ itemSelecionado?.assunto?.nome }}</h3>\n          <p>Organize as atividades deste assunto sem sair do contexto atual.</p>\n        </div>\n        <button\n          type=\"button\"\n          class=\"modal-close\"\n          aria-label=\"Fechar etapas\"\n          (click)=\"fecharEtapas()\"\n        >\n          \u00D7\n        </button>\n      </header>\n      <div class=\"content-heading small\">\n        <h5>Etapas cadastradas</h5>\n        <button nz-button nzType=\"primary\" nzSize=\"small\" type=\"button\" (click)=\"abrirEtapa()\">\n          + Adicionar etapa\n        </button>\n      </div>\n      <div class=\"inline-loading\" *ngIf=\"carregandoEtapas\">Carregando...</div>\n      <div class=\"stages-modal-list\" *ngIf=\"!carregandoEtapas && etapas.length\">\n        <article class=\"stage-row\" *ngFor=\"let etapa of etapas\">\n          <div>\n            <strong>{{ etapa.tipoRegistro.nome }}</strong\n            ><small\n              >Ordem {{ etapa.ordem ?? 'n\u00E3o definida' }} \u00B7\n              <span [class.done]=\"etapa.concluida\">{{\n                etapa.concluida ? 'Conclu\u00EDda' : 'Pendente'\n              }}</span></small\n            >\n          </div>\n          <div class=\"row-actions compact\">\n            <button type=\"button\" (click)=\"editarEtapa(etapa)\">Editar</button\n            ><button type=\"button\" class=\"danger\" (click)=\"excluirEtapa(etapa)\">Remover</button>\n          </div>\n        </article>\n      </div>\n      <div class=\"subtle-empty\" *ngIf=\"!carregandoEtapas && !etapas.length\">\n        Nenhuma etapa adicionada.\n      </div>\n    </section>\n  </div>\n\n  <div class=\"modal-backdrop\" *ngIf=\"modalEtapaAberto\" (click)=\"fecharEtapa()\">\n    <section class=\"form-modal\" role=\"dialog\" aria-modal=\"true\" (click)=\"$event.stopPropagation()\">\n      <header>\n        <div>\n          <h3>{{ etapaEditandoId ? 'Editar etapa' : 'Adicionar etapa' }}</h3>\n          <p>Escolha o tipo de atividade deste assunto.</p>\n        </div>\n        <button type=\"button\" class=\"modal-close\" (click)=\"fecharEtapa()\">\u00D7</button>\n      </header>\n      <form nz-form [formGroup]=\"etapaForm\" (ngSubmit)=\"salvarEtapa()\">\n        <nz-form-item\n          ><nz-form-label nzRequired>Tipo</nz-form-label\n          ><nz-form-control\n            ><nz-select formControlName=\"tipoRegistroId\" nzPlaceHolder=\"Selecione\"\n              ><nz-option\n                *ngFor=\"let tipo of tiposRegistro\"\n                [nzValue]=\"tipo.id\"\n                [nzLabel]=\"tipo.nome\"\n              ></nz-option></nz-select></nz-form-control></nz-form-item\n        ><nz-form-item\n          ><nz-form-label>Ordem</nz-form-label\n          ><nz-form-control\n            ><input\n              nz-input\n              type=\"number\"\n              min=\"1\"\n              formControlName=\"ordem\" /></nz-form-control></nz-form-item\n        ><label class=\"checkbox-field\"\n          ><input type=\"checkbox\" formControlName=\"concluida\" /> Conclu\u00EDda</label\n        >\n        <div class=\"form-actions\">\n          <button nz-button type=\"button\" (click)=\"fecharEtapa()\">Cancelar</button\n          ><button nz-button nzType=\"primary\" [nzLoading]=\"salvandoEtapa\">Salvar</button>\n        </div>\n      </form>\n    </section>\n  </div>\n</div>\n", styles: [".planejamentos-page {\n  padding: clamp(18px, 3vw, 28px);\n  background: var(--surface, #fff);\n}\n.page-heading {\n  margin-bottom: 22px;\n}\n.page-heading h2 {\n  margin: 8px 0 0;\n  color: var(--text, #0f172a);\n  font-size: 26px;\n}\n.page-heading p,\n.workspace-heading p,\n.content-heading p {\n  margin: 5px 0 0;\n  color: var(--text-muted, #64748b);\n}\n.back-button {\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--text-muted, #64748b);\n  cursor: pointer;\n  font: inherit;\n  font-size: 13px;\n}\n.back-button:hover {\n  color: #1677ff;\n}\n.workspace,\n.new-planning-form {\n  padding: 18px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 10px;\n  background: var(--surface-soft, #f8fafc);\n}\n.workspace-heading,\n.content-heading,\n.accordion-header,\n.group-header,\n.form-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n}\n.workspace-heading {\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.workspace-actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.workspace-heading h3,\n.content-heading h4,\n.content-heading h5 {\n  margin: 0;\n  color: var(--text, #0f172a);\n}\n.accordion-list,\n.groups-list,\n.topics-list {\n  display: grid;\n  gap: 9px;\n}\n.matter-card,\n.group-card {\n  overflow: hidden;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 9px;\n  background: var(--surface, #fff);\n}\n.matter-card.open {\n  border-color: #93c5fd;\n  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.07);\n}\n.accordion-header,\n.group-header {\n  padding: 0 14px 0 0;\n}\n.accordion-trigger,\n.group-trigger {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  align-items: center;\n  gap: 10px;\n  padding: 15px 14px;\n  border: 0;\n  background: transparent;\n  color: var(--text, #0f172a);\n  cursor: pointer;\n  text-align: left;\n}\n.accordion-trigger > span:last-child,\n.group-trigger > span:last-child {\n  display: grid;\n  gap: 3px;\n}\n.accordion-trigger small,\n.group-trigger small,\n.topic-main small {\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 400;\n}\n.chevron {\n  color: var(--text-muted, #64748b);\n  font-size: 24px;\n  line-height: 1;\n  transition: transform 0.15s ease;\n}\n.open > .accordion-header .chevron,\n.open > .group-header .chevron {\n  transform: rotate(90deg);\n}\n.row-actions {\n  display: flex;\n  flex-shrink: 0;\n  gap: 3px;\n}\n.row-actions button,\n.stage-chip button {\n  padding: 5px 7px;\n  border: 0;\n  background: transparent;\n  color: #2563eb;\n  cursor: pointer;\n  font: inherit;\n  font-size: 12px;\n}\n.row-actions .danger,\n.stage-chip .danger {\n  color: #dc2626;\n}\n.accordion-body {\n  padding: 16px;\n  border-top: 1px solid var(--border, #e5e7eb);\n  background: var(--surface-soft, #f8fafc);\n}\n.content-heading {\n  margin-bottom: 13px;\n}\n.content-heading.small {\n  margin: 0 0 10px;\n}\n.group-card {\n  background: var(--surface, #fff);\n}\n.group-body {\n  padding: 14px;\n  border-top: 1px solid var(--border, #e5e7eb);\n}\n.topic-row {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 7px;\n  background: var(--surface, #fff);\n}\n.topic-row.selected {\n  border-color: #bfdbfe;\n}\n.topic-main {\n  display: grid;\n  gap: 3px;\n  padding: 12px;\n  border: 0;\n  background: transparent;\n  color: var(--text, #0f172a);\n  cursor: pointer;\n  text-align: left;\n}\n.stages-panel {\n  grid-column: 1/-1;\n  padding: 12px;\n  border-top: 1px solid var(--border, #e5e7eb);\n  background: var(--surface-soft, #f8fafc);\n}\n.stage-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n.stage-chip {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  padding: 5px 7px 5px 10px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 999px;\n  background: var(--surface, #fff);\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n}\n.stage-chip .done {\n  color: #15803d;\n}\n.planning-loading,\n.empty-state,\n.subtle-empty,\n.inline-loading {\n  padding: 15px;\n  color: var(--text-muted, #64748b);\n  text-align: center;\n}\n.empty-state,\n.subtle-empty {\n  border: 1px dashed var(--border, #e5e7eb);\n  border-radius: 8px;\n}\n.inline-loading {\n  padding: 8px;\n}\n.new-planning-form {\n  display: grid;\n  gap: 4px;\n}\n.form-actions {\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: grid;\n  place-items: center;\n  padding: 20px;\n  background: rgba(15, 23, 42, 0.45);\n}\n.form-modal {\n  width: min(500px, 100%);\n  max-height: calc(100vh - 40px);\n  overflow: auto;\n  padding: 20px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 12px;\n  background: var(--surface, #fff);\n  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22);\n}\n\n.stages-modal {\n  width: min(620px, 100%);\n}\n.form-modal header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.form-modal header h3 {\n  margin: 0;\n  color: var(--text, #0f172a);\n}\n.form-modal header p {\n  margin: 4px 0 0;\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n}\n.modal-close {\n  border: 0;\n  background: transparent;\n  color: var(--text-muted, #64748b);\n  cursor: pointer;\n  font-size: 24px;\n  line-height: 1;\n}\n.form-modal nz-form-item {\n  margin-bottom: 13px;\n}\n.quick-create {\n  display: flex;\n  gap: 8px;\n  padding: 8px;\n  border-top: 1px solid var(--border, #e5e7eb);\n}\n.quick-create input {\n  min-width: 0;\n  flex: 1;\n}\n.quick-create button {\n  flex: 0 0 auto;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-modal details {\n  margin: 4px 0 12px;\n}\n.form-modal summary {\n  color: var(--text-muted, #64748b);\n  cursor: pointer;\n  font-size: 13px;\n}\n.form-modal details .form-grid {\n  margin-top: 12px;\n}\n.checkbox-field {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin: 9px 0;\n  color: var(--text, #0f172a);\n}\n\n.stages-modal-list {\n  display: grid;\n  gap: 8px;\n}\n\n.stage-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 12px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-soft, #f8fafc);\n}\n\n.stage-row > div:first-child {\n  display: grid;\n  gap: 3px;\n}\n\n.stage-row strong {\n  color: var(--text, #0f172a);\n}\n\n.stage-row small {\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n}\n\n.done {\n  color: #15803d;\n}\n@media (max-width: 700px) {\n  .workspace {\n    padding: 14px;\n  }\n  .workspace-heading,\n  .content-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .workspace-actions {\n    justify-content: flex-start;\n  }\n  .accordion-header,\n  .group-header {\n    align-items: flex-start;\n  }\n  .row-actions {\n    padding-top: 9px;\n    flex-direction: column;\n  }\n  .topic-row {\n    grid-template-columns: 1fr;\n  }\n  .topic-row > .row-actions {\n    padding: 0 8px 8px;\n    flex-direction: row;\n  }\n\n  .stage-row {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .stage-row .row-actions {\n    padding-top: 0;\n    flex-direction: row;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PlanejamentoDetalheComponent, { className: "PlanejamentoDetalheComponent", filePath: "src/app/pages/planejamento-detalhe/planejamento-detalhe.ts", lineNumber: 43 }); })();
