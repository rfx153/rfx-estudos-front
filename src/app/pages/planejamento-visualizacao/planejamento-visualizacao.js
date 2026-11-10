import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { forkJoin, of } from 'rxjs';
import { catchError, finalize, map, switchMap, timeout } from 'rxjs/operators';
import { RegistroService } from '../../services/registro.service';
import { PlanejamentoService, } from '../../services/planejamento.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = a0 => ["/planejamento", a0];
const _c1 = a0 => ({ $implicit: a0 });
function PlanejamentoVisualizacaoComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.planejamento.nome);
} }
function PlanejamentoVisualizacaoComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " Escolha um planejamento para consultar seus assuntos. ");
    i0.ɵɵelementEnd();
} }
function PlanejamentoVisualizacaoComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 11);
    i0.ɵɵtext(1, "Carregando planejamento...");
    i0.ɵɵelementEnd();
} }
function PlanejamentoVisualizacaoComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, "N\u00E3o foi poss\u00EDvel carregar o planejamento.");
    i0.ɵɵelementEnd();
} }
function PlanejamentoVisualizacaoComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, " Nenhum planejamento cadastrado. ");
    i0.ɵɵelementEnd();
} }
function PlanejamentoVisualizacaoComponent_section_12_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 15)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 16);
    i0.ɵɵtext(4, "\u203A");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, item_r2.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.nome);
} }
function PlanejamentoVisualizacaoComponent_section_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 13);
    i0.ɵɵtemplate(1, PlanejamentoVisualizacaoComponent_section_12_a_1_Template, 5, 4, "a", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.planejamentos);
} }
function PlanejamentoVisualizacaoComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1, " Este planejamento ainda n\u00E3o possui mat\u00E9rias. ");
    i0.ɵɵelementEnd();
} }
function PlanejamentoVisualizacaoComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 17);
    i0.ɵɵtext(1, "\u2190 Todos os planejamentos");
    i0.ɵɵelementEnd();
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const grupo_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", grupo_r5.nome, " ");
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_small_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assunto_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r0.dataConclusaoDaEtapa(assunto_r7, "assunto"), "dd/MM/yy"));
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_small_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assunto_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r0.dataConclusaoDaEtapa(assunto_r7, "resum"), "dd/MM/yy"));
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_small_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assunto_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r0.dataConclusaoDaEtapa(assunto_r7, "quest"), "dd/MM/yy"));
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const assunto_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" \u00B7 ", assunto_r7.questoesAcertadas, "/", assunto_r7.questoesFeitas);
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_small_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assunto_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, ctx_r0.dataConclusaoDaEtapa(assunto_r7, "revis"), "dd/MM/yy"));
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 35)(5, "select", 36);
    i0.ɵɵlistener("change", function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_Template_select_change_5_listener($event) { const assunto_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.alterarStatusEtapa(assunto_r7, "assunto", $event.target.value)); });
    i0.ɵɵelementStart(6, "option", 37);
    i0.ɵɵtext(7, "N\u00E3o iniciado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 38);
    i0.ɵɵtext(9, "Em andamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 39);
    i0.ɵɵtext(11, "Conclu\u00EDdo");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_small_12_Template, 3, 4, "small", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 35)(14, "select", 40);
    i0.ɵɵlistener("change", function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_Template_select_change_14_listener($event) { const assunto_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.alterarStatusEtapa(assunto_r7, "resum", $event.target.value)); });
    i0.ɵɵelementStart(15, "option", 37);
    i0.ɵɵtext(16, "N\u00E3o iniciado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 38);
    i0.ɵɵtext(18, "Em andamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 39);
    i0.ɵɵtext(20, "Conclu\u00EDdo");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(21, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_small_21_Template, 3, 4, "small", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 35)(23, "select", 41);
    i0.ɵɵlistener("change", function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_Template_select_change_23_listener($event) { const assunto_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.alterarStatusEtapa(assunto_r7, "quest", $event.target.value)); });
    i0.ɵɵelementStart(24, "option", 37);
    i0.ɵɵtext(25, "N\u00E3o iniciado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 38);
    i0.ɵɵtext(27, "Em andamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 39);
    i0.ɵɵtext(29, "Conclu\u00EDdo");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(30, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_small_30_Template, 3, 4, "small", 4);
    i0.ɵɵelementStart(31, "small", 42);
    i0.ɵɵtext(32);
    i0.ɵɵtemplate(33, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_ng_container_33_Template, 2, 2, "ng-container", 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 35)(35, "select", 43);
    i0.ɵɵlistener("change", function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_Template_select_change_35_listener($event) { const assunto_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.alterarStatusEtapa(assunto_r7, "revis", $event.target.value)); });
    i0.ɵɵelementStart(36, "option", 37);
    i0.ɵɵtext(37, "N\u00E3o iniciado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "option", 38);
    i0.ɵɵtext(39, "Em andamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "option", 39);
    i0.ɵɵtext(41, "Conclu\u00EDdo");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(42, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_small_42_Template, 3, 4, "small", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "span", 44);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "span", 45);
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const assunto_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(assunto_r7.nome);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("ativa", ctx_r0.etapaConcluida(assunto_r7, "assunto"))("andamento", ctx_r0.etapaEmAndamento(assunto_r7, "assunto"))("salvando", ctx_r0.etapaSendoSalva(assunto_r7, "assunto"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.statusEtapa(assunto_r7, "assunto"))("disabled", ctx_r0.etapaSendoSalva(assunto_r7, "assunto"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r0.dataConclusaoDaEtapa(assunto_r7, "assunto"));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("ativa", ctx_r0.etapaConcluida(assunto_r7, "resum"))("andamento", ctx_r0.etapaEmAndamento(assunto_r7, "resum"))("salvando", ctx_r0.etapaSendoSalva(assunto_r7, "resum"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.statusEtapa(assunto_r7, "resum"))("disabled", ctx_r0.etapaSendoSalva(assunto_r7, "resum"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r0.dataConclusaoDaEtapa(assunto_r7, "resum"));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("ativa", ctx_r0.etapaConcluida(assunto_r7, "quest"))("andamento", ctx_r0.etapaEmAndamento(assunto_r7, "quest"))("salvando", ctx_r0.etapaSendoSalva(assunto_r7, "quest"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.statusEtapa(assunto_r7, "quest"))("disabled", ctx_r0.etapaSendoSalva(assunto_r7, "quest"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r0.dataConclusaoDaEtapa(assunto_r7, "quest"));
    i0.ɵɵadvance();
    i0.ɵɵattribute("title", ctx_r0.detalhesAproveitamento(assunto_r7));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Desempenho: ", ctx_r0.aproveitamento(assunto_r7));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", assunto_r7.questoesFeitas);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("ativa", ctx_r0.etapaConcluida(assunto_r7, "revis"))("andamento", ctx_r0.etapaEmAndamento(assunto_r7, "revis"))("salvando", ctx_r0.etapaSendoSalva(assunto_r7, "revis"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.statusEtapa(assunto_r7, "revis"))("disabled", ctx_r0.etapaSendoSalva(assunto_r7, "revis"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r0.dataConclusaoDaEtapa(assunto_r7, "revis"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(assunto_r7.peso ?? "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.rotuloDificuldade(assunto_r7.dificuldade));
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵtext(1, "Nenhum assunto adicionado.");
    i0.ɵɵelementEnd();
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_1_Template, 2, 1, "div", 30)(2, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_2_Template, 47, 42, "div", 31)(3, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_div_3_Template, 2, 0, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const grupo_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", grupo_r5.nome !== "Assuntos");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", grupo_r5.assuntos);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !grupo_r5.assuntos.length);
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27)(2, "div", 28)(3, "span");
    i0.ɵɵtext(4, "Nome do assunto");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Assunto");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Resumo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Quest\u00F5es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Revis\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, "Peso na prova");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16, "Dificuldade");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(17, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_ng_container_17_Template, 4, 3, "ng-container", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const materia_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngForOf", materia_r4.grupos);
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Nenhum assunto adicionado.");
    i0.ɵɵelementEnd();
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_container_1_Template, 18, 1, "ng-container", 26)(2, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_ng_template_2_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const semAssuntos_r8 = i0.ɵɵreference(3);
    const materia_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", materia_r4.grupos.length)("ngIfElse", semAssuntos_r8);
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 21)(1, "button", 22);
    i0.ɵɵlistener("click", function PlanejamentoVisualizacaoComponent_section_15_ng_template_1_Template_button_click_1_listener() { const materia_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.alternarMateria(materia_r4)); });
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 23);
    i0.ɵɵtext(8, "\u2304");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_div_9_Template, 4, 2, "div", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const materia_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-expanded", materia_r4.aberta);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(materia_r4.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Peso na prova: ", materia_r4.peso ?? "n\u00E3o informado", " \u00B7 Dificuldade: ", ctx_r0.rotuloDificuldade(materia_r4.dificuldade));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("aberta", materia_r4.aberta);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", materia_r4.aberta);
} }
function PlanejamentoVisualizacaoComponent_section_15_article_3_div_7_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Nenhuma mat\u00E9ria adicionada.");
    i0.ɵɵelementEnd();
} }
function PlanejamentoVisualizacaoComponent_section_15_article_3_div_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 49);
} if (rf & 2) {
    const materia_r11 = ctx.$implicit;
    i0.ɵɵnextContext(3);
    const materiaCard_r12 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", materiaCard_r12)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, materia_r11));
} }
function PlanejamentoVisualizacaoComponent_section_15_article_3_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtemplate(1, PlanejamentoVisualizacaoComponent_section_15_article_3_div_7_p_1_Template, 2, 0, "p", 4)(2, PlanejamentoVisualizacaoComponent_section_15_article_3_div_7_ng_container_2_Template, 1, 4, "ng-container", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bloco_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !bloco_r10.materias.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", bloco_r10.materias);
} }
function PlanejamentoVisualizacaoComponent_section_15_article_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 21)(1, "button", 22);
    i0.ɵɵlistener("click", function PlanejamentoVisualizacaoComponent_section_15_article_3_Template_button_click_1_listener() { const bloco_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.alternarBlocoMateria(bloco_r10)); });
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "span", 23);
    i0.ɵɵtext(6, "\u2304");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, PlanejamentoVisualizacaoComponent_section_15_article_3_div_7_Template, 3, 2, "div", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bloco_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-expanded", bloco_r10.aberto);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(bloco_r10.nome);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("aberta", bloco_r10.aberto);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", bloco_r10.aberto);
} }
function PlanejamentoVisualizacaoComponent_section_15_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 49);
} if (rf & 2) {
    const materia_r13 = ctx.$implicit;
    i0.ɵɵnextContext();
    const materiaCard_r12 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", materiaCard_r12)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, materia_r13));
} }
function PlanejamentoVisualizacaoComponent_section_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 18);
    i0.ɵɵtemplate(1, PlanejamentoVisualizacaoComponent_section_15_ng_template_1_Template, 10, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, PlanejamentoVisualizacaoComponent_section_15_article_3_Template, 8, 5, "article", 19)(4, PlanejamentoVisualizacaoComponent_section_15_ng_container_4_Template, 1, 4, "ng-container", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.blocosMaterias);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.materias);
} }
export class PlanejamentoVisualizacaoComponent {
    service = inject(PlanejamentoService);
    registroService = inject(RegistroService);
    message = inject(NzMessageService);
    route = inject(ActivatedRoute);
    cdr = inject(ChangeDetectorRef);
    planejamento;
    planejamentos = [];
    materias = [];
    blocosMaterias = [];
    carregando = true;
    erro = false;
    tiposRegistro = [];
    etapasSendoSalvas = new Set();
    ngOnInit() {
        this.registroService.listarTiposRegistro().subscribe({
            next: (tipos) => (this.tiposRegistro = tipos),
            error: (erro) => console.error('Erro ao carregar tipos de registro:', erro),
        });
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (Number.isInteger(id) && id > 0) {
            this.carregarPlanejamento(id);
            return;
        }
        this.service
            .listarTodos()
            .pipe(timeout(8000), finalize(() => {
            this.carregando = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (planejamentos) => {
                this.planejamentos = planejamentos;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar planejamento:', erro);
                this.erro = true;
                this.cdr.detectChanges();
            },
        });
    }
    carregarPlanejamento(id) {
        this.service
            .buscarPorId(id)
            .pipe(timeout(8000), switchMap((planejamento) => {
            this.planejamento = planejamento;
            return forkJoin({
                gruposMaterias: this.service.listarGruposMaterias(id).pipe(timeout(8000)),
                materias: this.service.listarMaterias(id).pipe(timeout(8000)),
                aproveitamentos: this.service.listarAproveitamentos(id).pipe(timeout(8000)),
            });
        }), switchMap(({ gruposMaterias, materias, aproveitamentos }) => {
            const aproveitamentosPorAssunto = new Map(aproveitamentos.map((aproveitamento) => [aproveitamento.assuntoId, aproveitamento]));
            const materiasBasicas = this.criarMateriasBasicas(materias);
            this.materias = materiasBasicas.filter((materia) => !materia.grupoMateriaId);
            this.blocosMaterias = this.agruparMaterias(gruposMaterias, materiasBasicas);
            this.carregando = false;
            this.cdr.detectChanges();
            return this.carregarMaterias(materias, aproveitamentosPorAssunto).pipe(map((materiasVisualizacao) => ({
                materias: materiasVisualizacao,
                blocosMaterias: this.agruparMaterias(gruposMaterias, materiasVisualizacao),
            })));
        }), finalize(() => {
            this.carregando = false;
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: ({ materias, blocosMaterias }) => {
                this.materias = materias.filter((materia) => !materia.grupoMateriaId);
                this.blocosMaterias = blocosMaterias;
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao carregar planejamento:', erro);
                this.erro = true;
                this.cdr.detectChanges();
            },
        });
    }
    alternarMateria(materia) {
        materia.aberta = !materia.aberta;
    }
    alternarBlocoMateria(bloco) {
        bloco.aberto = !bloco.aberto;
    }
    temEtapa(assunto, tipo) {
        return !!this.etapaPorTipo(assunto, tipo);
    }
    etapaEmAndamento(assunto, tipo) {
        const etapa = this.etapaPorTipo(assunto, tipo);
        return !!etapa?.iniciada && !etapa.concluida;
    }
    etapaConcluida(assunto, tipo) {
        return !!this.etapaPorTipo(assunto, tipo)?.concluida;
    }
    dataConclusaoDaEtapa(assunto, tipo) {
        return this.etapaPorTipo(assunto, tipo)?.dataConcluida ?? null;
    }
    alterarStatusEtapa(assunto, tipo, novoStatus) {
        if (!this.planejamento?.id || this.etapaSendoSalva(assunto, tipo))
            return;
        if (!['NAO_INICIADO', 'EM_ANDAMENTO', 'CONCLUIDO'].includes(novoStatus))
            return;
        const etapaAtual = this.etapaPorTipo(assunto, tipo);
        if (!etapaAtual && novoStatus === 'NAO_INICIADO')
            return;
        const tipoRegistro = etapaAtual
            ? undefined
            : this.tiposRegistro.find((item) => item.nome.toLocaleLowerCase('pt-BR').includes(tipo.toLocaleLowerCase('pt-BR')));
        if (!etapaAtual && !tipoRegistro) {
            this.message.warning('O tipo desta etapa ainda não está cadastrado.');
            return;
        }
        const chave = this.chaveEtapa(assunto, tipo);
        const concluida = novoStatus === 'CONCLUIDO';
        const iniciada = novoStatus !== 'NAO_INICIADO';
        this.etapasSendoSalvas.add(chave);
        const requisicao$ = etapaAtual?.id
            ? this.service.atualizarEtapa(this.planejamento.id, assunto.materiaPlanejamentoId, assunto.grupoId, assunto.itemId, etapaAtual.id, {
                tipoRegistroId: etapaAtual.tipoRegistroId,
                ordem: etapaAtual.ordem,
                iniciada,
                concluida,
                concluidaManualmente: concluida,
            })
            : this.service.adicionarEtapa(this.planejamento.id, assunto.materiaPlanejamentoId, assunto.grupoId, assunto.itemId, {
                tipoRegistroId: tipoRegistro.id,
                ordem: assunto.etapas.length + 1,
                iniciada,
                concluida,
                concluidaManualmente: concluida,
            });
        requisicao$
            .pipe(finalize(() => {
            this.etapasSendoSalvas.delete(chave);
            this.cdr.detectChanges();
        }))
            .subscribe({
            next: (etapaSalva) => {
                const etapaVisualizacao = this.mapearEtapa(etapaSalva);
                const indice = assunto.etapas.findIndex((etapa) => etapa.id === etapaSalva.id);
                if (indice >= 0)
                    assunto.etapas[indice] = etapaVisualizacao;
                else
                    assunto.etapas.push(etapaVisualizacao);
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao atualizar etapa:', erro);
                this.message.error('Não foi possível atualizar esta etapa.');
            },
        });
    }
    etapaSendoSalva(assunto, tipo) {
        return this.etapasSendoSalvas.has(this.chaveEtapa(assunto, tipo));
    }
    statusEtapa(assunto, tipo) {
        const etapa = this.etapaPorTipo(assunto, tipo);
        if (etapa?.concluida)
            return 'CONCLUIDO';
        if (etapa?.iniciada)
            return 'EM_ANDAMENTO';
        return 'NAO_INICIADO';
    }
    aproveitamento(assunto) {
        if (!assunto.questoesFeitas)
            return '—';
        return `${Math.round((assunto.questoesAcertadas / assunto.questoesFeitas) * 100)}%`;
    }
    detalhesAproveitamento(assunto) {
        if (!assunto.questoesFeitas)
            return null;
        return `${assunto.questoesAcertadas} acertos de ${assunto.questoesFeitas} questões`;
    }
    rotuloDificuldade(valor) {
        return ['Não informada', 'Muito fácil', 'Fácil', 'Média', 'Difícil', 'Muito difícil'][valor ?? 0] ?? 'Não informada';
    }
    carregarMaterias(materias, aproveitamentosPorAssunto) {
        if (!this.planejamento?.id || !materias.length)
            return of([]);
        return forkJoin(materias.map((materia) => this.carregarGruposDaMateria(materia, aproveitamentosPorAssunto))).pipe(map((materiasVisualizacao) => materiasVisualizacao.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))));
    }
    carregarGruposDaMateria(materia, aproveitamentosPorAssunto) {
        if (!this.planejamento?.id || !materia.id) {
            return of({
                id: materia.id ?? 0,
                nome: materia.materia.nome,
                peso: materia.peso,
                dificuldade: materia.dificuldade,
                grupoMateriaId: materia.planejamentoGrupoMateria?.id,
                grupos: [],
                aberta: false,
            });
        }
        return this.service.listarGrupos(this.planejamento.id, materia.id).pipe(timeout(8000), switchMap((grupos) => this.carregarGrupos(materia, grupos, aproveitamentosPorAssunto)), catchError(() => of({
            id: materia.id,
            nome: materia.materia.nome,
            peso: materia.peso,
            dificuldade: materia.dificuldade,
            grupoMateriaId: materia.planejamentoGrupoMateria?.id,
            grupos: [],
            aberta: false,
        })));
    }
    carregarGrupos(materia, grupos, aproveitamentosPorAssunto) {
        if (!this.planejamento?.id || !materia.id || !grupos.length) {
            return of({
                id: materia.id,
                nome: materia.materia.nome,
                peso: materia.peso,
                dificuldade: materia.dificuldade,
                grupoMateriaId: materia.planejamentoGrupoMateria?.id,
                grupos: [],
                aberta: false,
            });
        }
        return forkJoin(grupos.map((grupo) => this.carregarItensDoGrupo(materia.id, grupo, aproveitamentosPorAssunto))).pipe(map((gruposVisualizacao) => ({
            id: materia.id,
            nome: materia.materia.nome,
            peso: materia.peso,
            dificuldade: materia.dificuldade,
            grupoMateriaId: materia.planejamentoGrupoMateria?.id,
            grupos: gruposVisualizacao,
            aberta: false,
        })));
    }
    carregarItensDoGrupo(materiaId, grupo, aproveitamentosPorAssunto) {
        if (!this.planejamento?.id || !grupo.id) {
            return of({ nome: this.nomeGrupo(grupo), assuntos: [] });
        }
        return this.service.listarItens(this.planejamento.id, materiaId, grupo.id).pipe(timeout(8000), switchMap((itens) => {
            const itensOrdenados = itens.sort((a, b) => (a.ordem ?? 9999) - (b.ordem ?? 9999));
            if (!itensOrdenados.length)
                return of([]);
            return forkJoin(itensOrdenados.map((item) => this.carregarEtapasDoAssunto(materiaId, grupo.id, item, aproveitamentosPorAssunto)));
        }), map((assuntos) => ({ nome: this.nomeGrupo(grupo), assuntos })), catchError(() => of({ nome: this.nomeGrupo(grupo), assuntos: [] })));
    }
    carregarEtapasDoAssunto(materiaId, grupoId, item, aproveitamentosPorAssunto) {
        if (!this.planejamento?.id || !item.id) {
            return of({
                id: item.assunto.id,
                nome: item.assunto.nome,
                peso: item.peso,
                dificuldade: item.dificuldade,
                materiaPlanejamentoId: materiaId,
                grupoId,
                itemId: item.id ?? 0,
                etapas: [],
                questoesFeitas: 0,
                questoesAcertadas: 0,
            });
        }
        return this.service.listarEtapas(this.planejamento.id, materiaId, grupoId, item.id).pipe(timeout(8000), map((etapas) => ({
            id: item.assunto.id,
            nome: item.assunto.nome,
            peso: item.peso,
            dificuldade: item.dificuldade,
            materiaPlanejamentoId: materiaId,
            grupoId,
            itemId: item.id,
            questoesFeitas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesFeitas ?? 0,
            questoesAcertadas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesAcertadas ?? 0,
            etapas: etapas
                .sort((a, b) => (a.ordem ?? 9999) - (b.ordem ?? 9999))
                .map((etapa) => this.mapearEtapa(etapa)),
        })), catchError(() => of({
            id: item.assunto.id,
            nome: item.assunto.nome,
            peso: item.peso,
            dificuldade: item.dificuldade,
            materiaPlanejamentoId: materiaId,
            grupoId,
            itemId: item.id,
            etapas: [],
            questoesFeitas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesFeitas ?? 0,
            questoesAcertadas: aproveitamentosPorAssunto.get(item.assunto.id)?.questoesAcertadas ?? 0,
        })));
    }
    nomeGrupo(grupo) {
        return grupo.tipo === 'BLOCO' ? grupo.nome || 'Bloco sem nome' : 'Assuntos';
    }
    etapaPorTipo(assunto, tipo) {
        return assunto.etapas.find((etapa) => etapa.nome.toLocaleLowerCase('pt-BR').includes(tipo));
    }
    mapearEtapa(etapa) {
        return {
            id: etapa.id,
            tipoRegistroId: etapa.tipoRegistro.id,
            nome: etapa.tipoRegistro.nome,
            ordem: etapa.ordem,
            iniciada: !!etapa.iniciada,
            concluida: !!etapa.concluida,
            dataConcluida: etapa.dataConcluida,
        };
    }
    chaveEtapa(assunto, tipo) {
        return `${assunto.itemId}:${tipo}`;
    }
    agruparMaterias(gruposMaterias, materias) {
        return gruposMaterias
            .map((grupo) => ({
            id: grupo.id,
            nome: grupo.nome,
            materias: materias.filter((materia) => materia.grupoMateriaId === grupo.id),
            aberto: false,
        }))
            .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    }
    criarMateriasBasicas(materias) {
        return materias
            .map((materia) => ({
            id: materia.id ?? 0,
            nome: materia.materia.nome,
            peso: materia.peso,
            dificuldade: materia.dificuldade,
            grupoMateriaId: materia.planejamentoGrupoMateria?.id,
            grupos: [],
            aberta: false,
        }))
            .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    }
    static ɵfac = function PlanejamentoVisualizacaoComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PlanejamentoVisualizacaoComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PlanejamentoVisualizacaoComponent, selectors: [["app-planejamento-visualizacao"]], decls: 16, vars: 9, consts: [["materiaCard", ""], ["semAssuntos", ""], [1, "planejamento-visualizacao", "page-card"], [1, "page-heading"], [4, "ngIf"], ["routerLink", "/planejamentos", 1, "edit-link"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "planejamentos-lista", "aria-label", "Planejamentos dispon\u00EDveis", 4, "ngIf"], ["class", "back-link", "routerLink", "/planejamento", 4, "ngIf"], ["class", "materias-lista", "aria-label", "Mat\u00E9rias do planejamento", 4, "ngIf"], [1, "loading-state"], [1, "empty-state"], ["aria-label", "Planejamentos dispon\u00EDveis", 1, "planejamentos-lista"], ["class", "planejamento-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "planejamento-item", 3, "routerLink"], ["aria-hidden", "true", 1, "item-arrow"], ["routerLink", "/planejamento", 1, "back-link"], ["aria-label", "Mat\u00E9rias do planejamento", 1, "materias-lista"], ["class", "materia", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf"], [1, "materia"], ["type", "button", 1, "materia-trigger", 3, "click"], ["aria-hidden", "true", 1, "chevron"], ["class", "assuntos", 4, "ngIf"], [1, "assuntos"], [4, "ngIf", "ngIfElse"], [1, "assuntos-tabela"], ["aria-hidden", "true", 1, "assunto-cabecalho"], [4, "ngFor", "ngForOf"], ["class", "grupo-linha", 4, "ngIf"], ["class", "assunto-linha", 4, "ngFor", "ngForOf"], ["class", "grupo-vazio", 4, "ngIf"], [1, "grupo-linha"], [1, "assunto-linha"], [1, "etapa-status"], ["aria-label", "Status de Assunto", 3, "change", "value", "disabled"], ["value", "NAO_INICIADO"], ["value", "EM_ANDAMENTO"], ["value", "CONCLUIDO"], ["aria-label", "Status de Resumo", 3, "change", "value", "disabled"], ["aria-label", "Status de Quest\u00F5es", 3, "change", "value", "disabled"], [1, "desempenho"], ["aria-label", "Status de Revis\u00E3o", 3, "change", "value", "disabled"], [1, "peso-prova"], [1, "dificuldade"], [1, "grupo-vazio"], ["class", "bloco-materias", 4, "ngIf"], [1, "bloco-materias"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function PlanejamentoVisualizacaoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "header", 3)(2, "div")(3, "h2");
            i0.ɵɵtext(4, "Planejamento");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, PlanejamentoVisualizacaoComponent_p_5_Template, 2, 1, "p", 4)(6, PlanejamentoVisualizacaoComponent_p_6_Template, 2, 0, "p", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "a", 5);
            i0.ɵɵtext(8, "Editar planejamento");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, PlanejamentoVisualizacaoComponent_p_9_Template, 2, 0, "p", 6)(10, PlanejamentoVisualizacaoComponent_p_10_Template, 2, 0, "p", 7)(11, PlanejamentoVisualizacaoComponent_p_11_Template, 2, 0, "p", 7)(12, PlanejamentoVisualizacaoComponent_section_12_Template, 2, 1, "section", 8)(13, PlanejamentoVisualizacaoComponent_p_13_Template, 2, 0, "p", 7)(14, PlanejamentoVisualizacaoComponent_a_14_Template, 2, 0, "a", 9)(15, PlanejamentoVisualizacaoComponent_section_15_Template, 5, 2, "section", 10);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.planejamento);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.planejamento && !ctx.carregando);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.erro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.erro && !ctx.planejamento && !ctx.planejamentos.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.erro && !ctx.planejamento && ctx.planejamentos.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.erro && ctx.planejamento && !ctx.materias.length && !ctx.blocosMaterias.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.planejamento);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && (ctx.materias.length || ctx.blocosMaterias.length));
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, RouterLink, i1.DatePipe], styles: [".planejamento-visualizacao[_ngcontent-%COMP%] {\n  padding: clamp(18px, 3vw, 28px);\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 24px;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.edit-link[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 6px;\n  color: var(--%NS%text, #0f172a);\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.edit-link[_ngcontent-%COMP%]:hover {\n  border-color: #1677ff;\n  color: #1677ff;\n}\n\n.materias-lista[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.planejamentos-lista[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.planejamento-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n  color: var(--%NS%text, #0f172a);\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.planejamento-item[_ngcontent-%COMP%]:hover {\n  border-color: #1677ff;\n  color: #1677ff;\n}\n\n.item-arrow[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1;\n}\n\n.back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 14px;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #1677ff;\n}\n\n.materia[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n}\n\n.materia-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%text, #0f172a);\n  cursor: pointer;\n  font: inherit;\n  font-weight: 700;\n  text-align: left;\n}\n\n.materia-trigger[_ngcontent-%COMP%]:hover {\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n.chevron[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 22px;\n  line-height: 1;\n  transition: transform 0.15s ease;\n}\n\n.chevron.aberta[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.assuntos[_ngcontent-%COMP%] {\n  padding: 2px 18px 18px;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n}\n\n.bloco-materias[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  padding: 12px 18px 18px;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n.bloco-materias[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.assuntos-tabela[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.assunto-cabecalho[_ngcontent-%COMP%], \n.assunto-linha[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(220px, 2fr) repeat(5, minmax(120px, 1fr)) minmax(120px, 1.15fr);\n  min-width: 1080px;\n}\n\n.assunto-cabecalho[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 700;\n}\n.grupo-linha[_ngcontent-%COMP%], \n.grupo-vazio[_ngcontent-%COMP%] {\n  min-width: 1080px;\n  padding: 10px 12px;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n}\n.grupo-linha[_ngcontent-%COMP%] {\n  background: var(--%NS%surface-soft, #f8fafc);\n  color: var(--%NS%text, #0f172a);\n  font-size: 13px;\n  font-weight: 700;\n}\n.grupo-vazio[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n}\n\n.assunto-linha[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 12px;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n  color: var(--%NS%text, #0f172a);\n  font-size: 14px;\n}\n\n.assunto-linha[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n.assunto-linha[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n}\n.assunto-linha[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n}\n.etapa-status[_ngcontent-%COMP%], \n.peso-prova[_ngcontent-%COMP%], \n.dificuldade[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--%NS%text-muted, #94a3b8);\n}\n.etapa-status[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 4px;\n  justify-items: center;\n}\n.etapa-status[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: calc(100% - 10px);\n  min-height: 34px;\n  margin: 0 5px;\n  padding: 4px 6px;\n  border: 1px solid var(--%NS%border, #d9d9d9);\n  border-radius: 6px;\n  background: var(--%NS%surface, #fff);\n  color: var(--%NS%text-muted, #64748b);\n  cursor: pointer;\n  font: inherit;\n  font-size: 12px;\n}\n.etapa-status[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #91caff;\n}\n.etapa-status[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #1677ff;\n  outline-offset: 1px;\n}\n.etapa-status[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n}\n.etapa-status.salvando[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.etapa-status[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 10px;\n  font-weight: 400;\n}\n.etapa-status.ativa[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 800;\n}\n.etapa-status.ativa[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: #86efac;\n  background: #f0fdf4;\n  color: #15803d;\n}\n.etapa-status.andamento[_ngcontent-%COMP%] {\n  color: #d97706;\n  font-weight: 800;\n}\n.etapa-status.andamento[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: #fcd34d;\n  background: #fffbeb;\n  color: #b45309;\n}\n.etapa-status[_ngcontent-%COMP%]   .desempenho[_ngcontent-%COMP%] {\n  font-weight: 700;\n  white-space: nowrap;\n}\n.peso-prova[_ngcontent-%COMP%], \n.dificuldade[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.materia-trigger[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: var(--%NS%text-muted, #64748b);\n  font-weight: 400;\n}\n.empty-state[_ngcontent-%COMP%], \n.loading-state[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n.empty-state[_ngcontent-%COMP%], \n.loading-state[_ngcontent-%COMP%] {\n  padding: 18px;\n  border: 1px dashed var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  text-align: center;\n}\n\n@media (max-width: 600px) {\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .edit-link[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanejamentoVisualizacaoComponent, [{
        type: Component,
        args: [{ selector: 'app-planejamento-visualizacao', standalone: true, imports: [CommonModule, RouterLink], template: "<div class=\"planejamento-visualizacao page-card\">\n  <header class=\"page-heading\">\n    <div>\n      <h2>Planejamento</h2>\n      <p *ngIf=\"planejamento\">{{ planejamento.nome }}</p>\n      <p *ngIf=\"!planejamento && !carregando\">\n        Escolha um planejamento para consultar seus assuntos.\n      </p>\n    </div>\n    <a class=\"edit-link\" routerLink=\"/planejamentos\">Editar planejamento</a>\n  </header>\n\n  <p class=\"loading-state\" *ngIf=\"carregando\">Carregando planejamento...</p>\n  <p class=\"empty-state\" *ngIf=\"erro\">N\u00E3o foi poss\u00EDvel carregar o planejamento.</p>\n  <p class=\"empty-state\" *ngIf=\"!carregando && !erro && !planejamento && !planejamentos.length\">\n    Nenhum planejamento cadastrado.\n  </p>\n  <section\n    class=\"planejamentos-lista\"\n    *ngIf=\"!carregando && !erro && !planejamento && planejamentos.length\"\n    aria-label=\"Planejamentos dispon\u00EDveis\"\n  >\n    <a\n      class=\"planejamento-item\"\n      *ngFor=\"let item of planejamentos\"\n      [routerLink]=\"['/planejamento', item.id]\"\n    >\n      <span>{{ item.nome }}</span>\n      <span class=\"item-arrow\" aria-hidden=\"true\">\u203A</span>\n    </a>\n  </section>\n  <p\n    class=\"empty-state\"\n    *ngIf=\"!carregando && !erro && planejamento && !materias.length && !blocosMaterias.length\"\n  >\n    Este planejamento ainda n\u00E3o possui mat\u00E9rias.\n  </p>\n\n  <a class=\"back-link\" routerLink=\"/planejamento\" *ngIf=\"!carregando && planejamento\"\n    >\u2190 Todos os planejamentos</a\n  >\n  <section\n    class=\"materias-lista\"\n    *ngIf=\"!carregando && (materias.length || blocosMaterias.length)\"\n    aria-label=\"Mat\u00E9rias do planejamento\"\n  >\n    <ng-template #materiaCard let-materia>\n      <article class=\"materia\">\n        <button\n          type=\"button\"\n          class=\"materia-trigger\"\n          (click)=\"alternarMateria(materia)\"\n          [attr.aria-expanded]=\"materia.aberta\"\n        >\n          <span>\n            <strong>{{ materia.nome }}</strong>\n            <small\n              >Peso na prova: {{ materia.peso ?? 'n\u00E3o informado' }} \u00B7 Dificuldade:\n              {{ rotuloDificuldade(materia.dificuldade) }}</small\n            >\n          </span>\n          <span class=\"chevron\" [class.aberta]=\"materia.aberta\" aria-hidden=\"true\">\u2304</span>\n        </button>\n\n        <div class=\"assuntos\" *ngIf=\"materia.aberta\">\n          <ng-container *ngIf=\"materia.grupos.length; else semAssuntos\">\n            <div class=\"assuntos-tabela\">\n              <div class=\"assunto-cabecalho\" aria-hidden=\"true\">\n                <span>Nome do assunto</span>\n                <span>Assunto</span>\n                <span>Resumo</span>\n                <span>Quest\u00F5es</span>\n                <span>Revis\u00E3o</span>\n                <span>Peso na prova</span>\n                <span>Dificuldade</span>\n              </div>\n              <ng-container *ngFor=\"let grupo of materia.grupos\">\n                <div class=\"grupo-linha\" *ngIf=\"grupo.nome !== 'Assuntos'\">\n                  {{ grupo.nome }}\n                </div>\n                <div class=\"assunto-linha\" *ngFor=\"let assunto of grupo.assuntos\">\n                  <div><strong>{{ assunto.nome }}</strong></div>\n                  <div class=\"etapa-status\" [class.ativa]=\"etapaConcluida(assunto, 'assunto')\" [class.andamento]=\"etapaEmAndamento(assunto, 'assunto')\" [class.salvando]=\"etapaSendoSalva(assunto, 'assunto')\">\n                    <select aria-label=\"Status de Assunto\" [value]=\"statusEtapa(assunto, 'assunto')\" [disabled]=\"etapaSendoSalva(assunto, 'assunto')\" (change)=\"alterarStatusEtapa(assunto, 'assunto', $any($event.target).value)\">\n                      <option value=\"NAO_INICIADO\">N\u00E3o iniciado</option><option value=\"EM_ANDAMENTO\">Em andamento</option><option value=\"CONCLUIDO\">Conclu\u00EDdo</option>\n                    </select>\n                    <small *ngIf=\"dataConclusaoDaEtapa(assunto, 'assunto')\">{{ dataConclusaoDaEtapa(assunto, 'assunto') | date: 'dd/MM/yy' }}</small>\n                  </div>\n                  <div class=\"etapa-status\" [class.ativa]=\"etapaConcluida(assunto, 'resum')\" [class.andamento]=\"etapaEmAndamento(assunto, 'resum')\" [class.salvando]=\"etapaSendoSalva(assunto, 'resum')\">\n                    <select aria-label=\"Status de Resumo\" [value]=\"statusEtapa(assunto, 'resum')\" [disabled]=\"etapaSendoSalva(assunto, 'resum')\" (change)=\"alterarStatusEtapa(assunto, 'resum', $any($event.target).value)\">\n                      <option value=\"NAO_INICIADO\">N\u00E3o iniciado</option><option value=\"EM_ANDAMENTO\">Em andamento</option><option value=\"CONCLUIDO\">Conclu\u00EDdo</option>\n                    </select>\n                    <small *ngIf=\"dataConclusaoDaEtapa(assunto, 'resum')\">{{ dataConclusaoDaEtapa(assunto, 'resum') | date: 'dd/MM/yy' }}</small>\n                  </div>\n                  <div class=\"etapa-status\" [class.ativa]=\"etapaConcluida(assunto, 'quest')\" [class.andamento]=\"etapaEmAndamento(assunto, 'quest')\" [class.salvando]=\"etapaSendoSalva(assunto, 'quest')\">\n                    <select aria-label=\"Status de Quest\u00F5es\" [value]=\"statusEtapa(assunto, 'quest')\" [disabled]=\"etapaSendoSalva(assunto, 'quest')\" (change)=\"alterarStatusEtapa(assunto, 'quest', $any($event.target).value)\">\n                      <option value=\"NAO_INICIADO\">N\u00E3o iniciado</option><option value=\"EM_ANDAMENTO\">Em andamento</option><option value=\"CONCLUIDO\">Conclu\u00EDdo</option>\n                    </select>\n                    <small *ngIf=\"dataConclusaoDaEtapa(assunto, 'quest')\">{{ dataConclusaoDaEtapa(assunto, 'quest') | date: 'dd/MM/yy' }}</small>\n                    <small class=\"desempenho\" [attr.title]=\"detalhesAproveitamento(assunto)\"\n                      >Desempenho: {{ aproveitamento(assunto) }}<ng-container *ngIf=\"assunto.questoesFeitas\">\n                        \u00B7 {{ assunto.questoesAcertadas }}/{{ assunto.questoesFeitas }}</ng-container\n                      ></small\n                    >\n                  </div>\n                  <div class=\"etapa-status\" [class.ativa]=\"etapaConcluida(assunto, 'revis')\" [class.andamento]=\"etapaEmAndamento(assunto, 'revis')\" [class.salvando]=\"etapaSendoSalva(assunto, 'revis')\">\n                    <select aria-label=\"Status de Revis\u00E3o\" [value]=\"statusEtapa(assunto, 'revis')\" [disabled]=\"etapaSendoSalva(assunto, 'revis')\" (change)=\"alterarStatusEtapa(assunto, 'revis', $any($event.target).value)\">\n                      <option value=\"NAO_INICIADO\">N\u00E3o iniciado</option><option value=\"EM_ANDAMENTO\">Em andamento</option><option value=\"CONCLUIDO\">Conclu\u00EDdo</option>\n                    </select>\n                    <small *ngIf=\"dataConclusaoDaEtapa(assunto, 'revis')\">{{ dataConclusaoDaEtapa(assunto, 'revis') | date: 'dd/MM/yy' }}</small>\n                  </div>\n                  <span class=\"peso-prova\">{{ assunto.peso ?? '\u2014' }}</span>\n                  <span class=\"dificuldade\">{{ rotuloDificuldade(assunto.dificuldade) }}</span>\n                </div>\n                <div class=\"grupo-vazio\" *ngIf=\"!grupo.assuntos.length\">Nenhum assunto adicionado.</div>\n              </ng-container>\n            </div>\n          </ng-container>\n          <ng-template #semAssuntos><p>Nenhum assunto adicionado.</p></ng-template>\n        </div>\n      </article>\n    </ng-template>\n\n    <article class=\"materia\" *ngFor=\"let bloco of blocosMaterias\">\n      <button\n        type=\"button\"\n        class=\"materia-trigger\"\n        (click)=\"alternarBlocoMateria(bloco)\"\n        [attr.aria-expanded]=\"bloco.aberto\"\n      >\n        <span><strong>{{ bloco.nome }}</strong></span>\n        <span class=\"chevron\" [class.aberta]=\"bloco.aberto\" aria-hidden=\"true\">\u2304</span>\n      </button>\n      <div class=\"bloco-materias\" *ngIf=\"bloco.aberto\">\n        <p *ngIf=\"!bloco.materias.length\">Nenhuma mat\u00E9ria adicionada.</p>\n        <ng-container\n          *ngFor=\"let materia of bloco.materias\"\n          [ngTemplateOutlet]=\"materiaCard\"\n          [ngTemplateOutletContext]=\"{ $implicit: materia }\"\n        ></ng-container>\n      </div>\n    </article>\n\n    <ng-container\n      *ngFor=\"let materia of materias\"\n      [ngTemplateOutlet]=\"materiaCard\"\n      [ngTemplateOutletContext]=\"{ $implicit: materia }\"\n    ></ng-container>\n  </section>\n</div>\n", styles: [".planejamento-visualizacao {\n  padding: clamp(18px, 3vw, 28px);\n}\n\n.page-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n\n.page-heading h2 {\n  margin: 0;\n  color: var(--text, #0f172a);\n  font-size: 24px;\n}\n\n.page-heading p {\n  margin: 6px 0 0;\n  color: var(--text-muted, #64748b);\n}\n\n.edit-link {\n  padding: 8px 12px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 6px;\n  color: var(--text, #0f172a);\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.edit-link:hover {\n  border-color: #1677ff;\n  color: #1677ff;\n}\n\n.materias-lista {\n  display: grid;\n  gap: 10px;\n}\n\n.planejamentos-lista {\n  display: grid;\n  gap: 10px;\n}\n\n.planejamento-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n  color: var(--text, #0f172a);\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.planejamento-item:hover {\n  border-color: #1677ff;\n  color: #1677ff;\n}\n\n.item-arrow {\n  font-size: 24px;\n  line-height: 1;\n}\n\n.back-link {\n  display: inline-block;\n  margin: 0 0 14px;\n  color: var(--text-muted, #64748b);\n  font-size: 14px;\n  text-decoration: none;\n}\n\n.back-link:hover {\n  color: #1677ff;\n}\n\n.materia {\n  overflow: hidden;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n}\n\n.materia-trigger {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 18px;\n  border: 0;\n  background: transparent;\n  color: var(--text, #0f172a);\n  cursor: pointer;\n  font: inherit;\n  font-weight: 700;\n  text-align: left;\n}\n\n.materia-trigger:hover {\n  background: var(--surface-soft, #f8fafc);\n}\n\n.chevron {\n  color: var(--text-muted, #64748b);\n  font-size: 22px;\n  line-height: 1;\n  transition: transform 0.15s ease;\n}\n\n.chevron.aberta {\n  transform: rotate(180deg);\n}\n\n.assuntos {\n  padding: 2px 18px 18px;\n  border-top: 1px solid var(--border, #e5e7eb);\n}\n\n.bloco-materias {\n  display: grid;\n  gap: 10px;\n  padding: 12px 18px 18px;\n  border-top: 1px solid var(--border, #e5e7eb);\n  background: var(--surface-soft, #f8fafc);\n}\n\n.bloco-materias > p {\n  margin: 0;\n  color: var(--text-muted, #64748b);\n}\n\n.assuntos-tabela {\n  overflow-x: auto;\n}\n\n.assunto-cabecalho,\n.assunto-linha {\n  display: grid;\n  grid-template-columns: minmax(220px, 2fr) repeat(5, minmax(120px, 1fr)) minmax(120px, 1.15fr);\n  min-width: 1080px;\n}\n\n.assunto-cabecalho {\n  padding: 10px 12px;\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 700;\n}\n.grupo-linha,\n.grupo-vazio {\n  min-width: 1080px;\n  padding: 10px 12px;\n  border-top: 1px solid var(--border, #e5e7eb);\n}\n.grupo-linha {\n  background: var(--surface-soft, #f8fafc);\n  color: var(--text, #0f172a);\n  font-size: 13px;\n  font-weight: 700;\n}\n.grupo-vazio {\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n}\n\n.assunto-linha {\n  align-items: center;\n  padding: 12px;\n  border-top: 1px solid var(--border, #e5e7eb);\n  color: var(--text, #0f172a);\n  font-size: 14px;\n}\n\n.assunto-linha strong {\n  padding-right: 16px;\n}\n.assunto-linha > div {\n  display: grid;\n  gap: 3px;\n}\n.assunto-linha small {\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n}\n.etapa-status,\n.peso-prova,\n.dificuldade {\n  text-align: center;\n  color: var(--text-muted, #94a3b8);\n}\n.etapa-status {\n  display: grid;\n  gap: 4px;\n  justify-items: center;\n}\n.etapa-status select {\n  width: calc(100% - 10px);\n  min-height: 34px;\n  margin: 0 5px;\n  padding: 4px 6px;\n  border: 1px solid var(--border, #d9d9d9);\n  border-radius: 6px;\n  background: var(--surface, #fff);\n  color: var(--text-muted, #64748b);\n  cursor: pointer;\n  font: inherit;\n  font-size: 12px;\n}\n.etapa-status select:hover:not(:disabled) {\n  border-color: #91caff;\n}\n.etapa-status select:focus-visible {\n  outline: 2px solid #1677ff;\n  outline-offset: 1px;\n}\n.etapa-status select:disabled {\n  cursor: wait;\n}\n.etapa-status.salvando {\n  opacity: 0.55;\n}\n.etapa-status small {\n  color: inherit;\n  font-size: 10px;\n  font-weight: 400;\n}\n.etapa-status.ativa {\n  color: #16a34a;\n  font-weight: 800;\n}\n.etapa-status.ativa select {\n  border-color: #86efac;\n  background: #f0fdf4;\n  color: #15803d;\n}\n.etapa-status.andamento {\n  color: #d97706;\n  font-weight: 800;\n}\n.etapa-status.andamento select {\n  border-color: #fcd34d;\n  background: #fffbeb;\n  color: #b45309;\n}\n.etapa-status .desempenho {\n  font-weight: 700;\n  white-space: nowrap;\n}\n.peso-prova,\n.dificuldade {\n  font-weight: 600;\n}\n.materia-trigger small {\n  display: block;\n  margin-top: 3px;\n  color: var(--text-muted, #64748b);\n  font-weight: 400;\n}\n.empty-state,\n.loading-state {\n  margin: 14px 0 0;\n  color: var(--text-muted, #64748b);\n}\n.empty-state,\n.loading-state {\n  padding: 18px;\n  border: 1px dashed var(--border, #e5e7eb);\n  border-radius: 8px;\n  text-align: center;\n}\n\n@media (max-width: 600px) {\n  .page-heading {\n    flex-direction: column;\n  }\n  .edit-link {\n    width: 100%;\n    text-align: center;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PlanejamentoVisualizacaoComponent, { className: "PlanejamentoVisualizacaoComponent", filePath: "src/app/pages/planejamento-visualizacao/planejamento-visualizacao.ts", lineNumber: 73 }); })();
