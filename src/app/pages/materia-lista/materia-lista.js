import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MateriaService } from '../../services/materia.service';
import { CategoriaService } from '../../services/categoria.service';
import { RegistroService } from '../../services/registro.service';
import { MaterialGuiaService } from '../../services/material-guia.service';
import { TipoRegistroService } from '../../services/tipo-registro.service';
// Módulos do NG-ZORRO
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMessageService } from 'ng-zorro-antd/message';
// Importações de Ícone do Zorro
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon'; // 🔥 Injetamos o NzIconService aqui
import { BookOutline, TagsOutline } from '@ant-design/icons-angular/icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/tag";
import * as i4 from "ng-zorro-antd/button";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/core/wave";
import * as i7 from "ng-zorro-antd/grid";
import * as i8 from "ng-zorro-antd/form";
import * as i9 from "ng-zorro-antd/input";
import * as i10 from "ng-zorro-antd/select";
import * as i11 from "ng-zorro-antd/pagination";
const _c0 = () => ({ standalone: true });
function MateriaListaComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function MateriaListaComponent_button_27_Template_button_click_0_listener() { const categoria_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selecionarCategoria(categoria_r2.id)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const categoria_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r2.categoriaSelecionadaId === categoria_r2.id ? "primary" : "default");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", categoria_r2.nome, " ");
} }
function MateriaListaComponent_article_29_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 43)(4, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_article_29_ng_container_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r4); const categoria_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.iniciarEdicaoCategoria(categoria_r5)); });
    i0.ɵɵtext(5, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 45);
    i0.ɵɵlistener("click", function MateriaListaComponent_article_29_ng_container_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const categoria_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.excluirCategoria(categoria_r5)); });
    i0.ɵɵtext(7, "Apagar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const categoria_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(categoria_r5.nome);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.excluindo);
} }
function MateriaListaComponent_article_29_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 46);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MateriaListaComponent_article_29_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.nomeCategoriaEdicao, $event) || (ctx_r2.nomeCategoriaEdicao = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "div", 43)(2, "button", 47);
    i0.ɵɵlistener("click", function MateriaListaComponent_article_29_ng_template_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r6); const categoria_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.salvarEdicaoCategoria(categoria_r5)); });
    i0.ɵɵtext(3, "Salvar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_article_29_ng_template_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cancelarEdicaoGerenciador()); });
    i0.ɵɵtext(5, "Cancelar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.nomeCategoriaEdicao);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
    i0.ɵɵcontrol();
} }
function MateriaListaComponent_article_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 41);
    i0.ɵɵtemplate(1, MateriaListaComponent_article_29_ng_container_1_Template, 8, 2, "ng-container", 42)(2, MateriaListaComponent_article_29_ng_template_2_Template, 6, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const categoria_r5 = ctx.$implicit;
    const editarCategoria_r7 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.categoriaEditandoId !== categoria_r5.id)("ngIfElse", editarCategoria_r7);
} }
function MateriaListaComponent_div_47_article_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 43)(4, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_47_article_1_ng_container_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8); const materialGuia_r9 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.iniciarEdicaoMaterialGuia(materialGuia_r9)); });
    i0.ɵɵtext(5, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 45);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_47_article_1_ng_container_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r8); const materialGuia_r9 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.excluirMaterialGuia(materialGuia_r9)); });
    i0.ɵɵtext(7, "Apagar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const materialGuia_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(materialGuia_r9.nome);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.excluindo);
} }
function MateriaListaComponent_div_47_article_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 46);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MateriaListaComponent_div_47_article_1_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.nomeMaterialGuiaEdicao, $event) || (ctx_r2.nomeMaterialGuiaEdicao = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "div", 43)(2, "button", 47);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_47_article_1_ng_template_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r10); const materialGuia_r9 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.salvarEdicaoMaterialGuia(materialGuia_r9)); });
    i0.ɵɵtext(3, "Salvar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_47_article_1_ng_template_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.cancelarEdicaoGerenciador()); });
    i0.ɵɵtext(5, "Cancelar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.nomeMaterialGuiaEdicao);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
    i0.ɵɵcontrol();
} }
function MateriaListaComponent_div_47_article_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 41);
    i0.ɵɵtemplate(1, MateriaListaComponent_div_47_article_1_ng_container_1_Template, 8, 2, "ng-container", 42)(2, MateriaListaComponent_div_47_article_1_ng_template_2_Template, 6, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const materialGuia_r9 = ctx.$implicit;
    const editarMaterialGuia_r11 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.materialGuiaEditandoId !== materialGuia_r9.id)("ngIfElse", editarMaterialGuia_r11);
} }
function MateriaListaComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, MateriaListaComponent_div_47_article_1_Template, 4, 2, "article", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.listaMateriaisGuia);
} }
function MateriaListaComponent_ng_template_48_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1, "Nenhum material-guia cadastrado.");
    i0.ɵɵelementEnd();
} }
function MateriaListaComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, MateriaListaComponent_ng_template_48_div_0_Template, 2, 0, "div", 48);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r2.materiaisGuiaCarregando);
} }
function MateriaListaComponent_article_68_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 43)(4, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_article_68_ng_container_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r12); const tipo_r13 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.iniciarEdicaoTipoRegistro(tipo_r13)); });
    i0.ɵɵtext(5, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 45);
    i0.ɵɵlistener("click", function MateriaListaComponent_article_68_ng_container_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r12); const tipo_r13 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.excluirTipoRegistro(tipo_r13)); });
    i0.ɵɵtext(7, "Apagar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tipo_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tipo_r13.nome);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.excluindo);
} }
function MateriaListaComponent_article_68_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 46);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MateriaListaComponent_article_68_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.nomeTipoRegistroEdicao, $event) || (ctx_r2.nomeTipoRegistroEdicao = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "div", 43)(2, "button", 47);
    i0.ɵɵlistener("click", function MateriaListaComponent_article_68_ng_template_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r14); const tipo_r13 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.salvarEdicaoTipoRegistro(tipo_r13)); });
    i0.ɵɵtext(3, "Salvar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_article_68_ng_template_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cancelarEdicaoGerenciador()); });
    i0.ɵɵtext(5, "Cancelar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.nomeTipoRegistroEdicao);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
    i0.ɵɵcontrol();
} }
function MateriaListaComponent_article_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 41);
    i0.ɵɵtemplate(1, MateriaListaComponent_article_68_ng_container_1_Template, 8, 2, "ng-container", 42)(2, MateriaListaComponent_article_68_ng_template_2_Template, 6, 3, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tipo_r13 = ctx.$implicit;
    const editarTipoRegistro_r15 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.tipoRegistroEditandoId !== tipo_r13.id)("ngIfElse", editarTipoRegistro_r15);
} }
function MateriaListaComponent_nz_option_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 50);
} if (rf & 2) {
    const categoria_r16 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", categoria_r16.id)("nzLabel", categoria_r16.nome);
} }
function MateriaListaComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵtext(1, "Carregando disciplinas...");
    i0.ɵɵelementEnd();
} }
function MateriaListaComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵtext(1, "Nenhuma disciplina encontrada.");
    i0.ɵɵelementEnd();
} }
function MateriaListaComponent_div_93_article_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r18.nome);
} }
function MateriaListaComponent_div_93_article_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 64);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MateriaListaComponent_div_93_article_1_ng_template_6_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.formularioEdicao.nome, $event) || (ctx_r2.formularioEdicao.nome = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formularioEdicao.nome);
    i0.ɵɵcontrol();
} }
function MateriaListaComponent_div_93_article_1_div_8_nz_tag_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-tag", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r20 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(tag_r20);
} }
function MateriaListaComponent_div_93_article_1_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 68);
    i0.ɵɵtext(1, "Sem categorias");
    i0.ɵɵelementEnd();
} }
function MateriaListaComponent_div_93_article_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵtemplate(1, MateriaListaComponent_div_93_article_1_div_8_nz_tag_1_Template, 2, 1, "nz-tag", 66)(2, MateriaListaComponent_div_93_article_1_div_8_span_2_Template, 2, 0, "span", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r18 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.converterCategorias(data_r18.categorias));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !data_r18.categorias?.length);
} }
function MateriaListaComponent_div_93_article_1_ng_template_9_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 50);
} if (rf & 2) {
    const categoria_r22 = ctx.$implicit;
    i0.ɵɵproperty("nzValue", categoria_r22.id)("nzLabel", categoria_r22.nome);
} }
function MateriaListaComponent_div_93_article_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-select", 69);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MateriaListaComponent_div_93_article_1_ng_template_9_Template_nz_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.formularioEdicao.categorias, $event) || (ctx_r2.formularioEdicao.categorias = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(1, MateriaListaComponent_div_93_article_1_ng_template_9_nz_option_1_Template, 1, 2, "nz-option", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.formularioEdicao.categorias);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.listaCategorias);
} }
function MateriaListaComponent_div_93_article_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 70);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_93_article_1_ng_container_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r23); const data_r18 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selecionarMateria(data_r18)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_93_article_1_ng_container_12_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r23); const data_r18 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.iniciarEdicao(data_r18)); });
    i0.ɵɵtext(4, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 45);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_93_article_1_ng_container_12_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r23); const data_r18 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.excluirMateria(data_r18)); });
    i0.ɵɵtext(6, "Apagar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r18 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.materiaSelecionadaId === data_r18.id ? "Ocultar assuntos" : "Ver assuntos", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r2.excluindo);
} }
function MateriaListaComponent_div_93_article_1_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_93_article_1_ng_template_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const data_r18 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.salvarEdicao(data_r18)); });
    i0.ɵɵtext(1, "Salvar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_93_article_1_ng_template_13_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r24); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.cancelarEdicao()); });
    i0.ɵɵtext(3, "Cancelar");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzLoading", ctx_r2.salvando);
} }
function MateriaListaComponent_div_93_article_1_section_15_nz_tag_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-tag", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r2.assuntosDaMateria.length, " assunto(s)");
} }
function MateriaListaComponent_div_93_article_1_section_15_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵtext(1, "Carregando assuntos...");
    i0.ɵɵelementEnd();
} }
function MateriaListaComponent_div_93_article_1_section_15_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵtext(1, "Nenhum assunto cadastrado para esta disciplina.");
    i0.ɵɵelementEnd();
} }
function MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 86);
    i0.ɵɵelement(2, "span", 87);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 88)(6, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_ng_container_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r26); const assunto_r27 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.iniciarEdicaoAssunto(assunto_r27)); });
    i0.ɵɵtext(7, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 45);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_ng_container_1_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r26); const assunto_r27 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.excluirAssunto(assunto_r27)); });
    i0.ɵɵtext(9, "Apagar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const assunto_r27 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(assunto_r27.nome);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.excluindo);
} }
function MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 46);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(6); i0.ɵɵtwoWayBindingSet(ctx_r2.nomeAssuntoEdicao, $event) || (ctx_r2.nomeAssuntoEdicao = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "div", 88)(2, "button", 47);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_ng_template_2_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r28); const assunto_r27 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.salvarEdicaoAssunto(assunto_r27)); });
    i0.ɵɵtext(3, "Salvar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 44);
    i0.ɵɵlistener("click", function MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_ng_template_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r28); const ctx_r2 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r2.cancelarEdicaoAssunto()); });
    i0.ɵɵtext(5, "Cancelar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.nomeAssuntoEdicao);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
    i0.ɵɵcontrol();
} }
function MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 85);
    i0.ɵɵtemplate(1, MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_ng_container_1_Template, 10, 2, "ng-container", 42)(2, MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_ng_template_2_Template, 6, 3, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assunto_r27 = ctx.$implicit;
    const editarAssunto_r29 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.assuntoEditandoId !== assunto_r27.id)("ngIfElse", editarAssunto_r29);
} }
function MateriaListaComponent_div_93_article_1_section_15_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵtemplate(1, MateriaListaComponent_div_93_article_1_section_15_div_18_article_1_Template, 4, 2, "article", 84);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.assuntosDaMateria)("ngForTrackBy", ctx_r2.trackByAssuntoId);
} }
function MateriaListaComponent_div_93_article_1_section_15_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 72)(1, "header", 73)(2, "div")(3, "span", 74);
    i0.ɵɵtext(4, "Assuntos cadastrados");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h4");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, MateriaListaComponent_div_93_article_1_section_15_nz_tag_7_Template, 2, 1, "nz-tag", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "form", 76);
    i0.ɵɵlistener("ngSubmit", function MateriaListaComponent_div_93_article_1_section_15_Template_form_ngSubmit_8_listener() { i0.ɵɵrestoreView(_r25); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.adicionarAssunto()); });
    i0.ɵɵelementStart(9, "nz-form-item", 14)(10, "nz-form-control")(11, "input", 77);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MateriaListaComponent_div_93_article_1_section_15_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r2 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r2.nomeAssuntoNovo, $event) || (ctx_r2.nomeAssuntoNovo = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "nz-form-item")(13, "nz-form-control")(14, "button", 17);
    i0.ɵɵtext(15, " Adicionar assunto ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(16, MateriaListaComponent_div_93_article_1_section_15_div_16_Template, 2, 0, "div", 78)(17, MateriaListaComponent_div_93_article_1_section_15_div_17_Template, 2, 0, "div", 79)(18, MateriaListaComponent_div_93_article_1_section_15_div_18_Template, 2, 2, "div", 80);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r18 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(data_r18.nome);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.assuntosCarregando);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzLayout", "inline");
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.nomeAssuntoNovo);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzLoading", ctx_r2.salvandoAssunto);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.assuntosCarregando);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.assuntosCarregando && !ctx_r2.assuntosDaMateria.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.assuntosCarregando && ctx_r2.assuntosDaMateria.length);
} }
function MateriaListaComponent_div_93_article_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 57)(1, "div", 58)(2, "div", 59)(3, "span", 60);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, MateriaListaComponent_div_93_article_1_ng_container_5_Template, 3, 1, "ng-container", 42)(6, MateriaListaComponent_div_93_article_1_ng_template_6_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(8, MateriaListaComponent_div_93_article_1_div_8_Template, 3, 2, "div", 61)(9, MateriaListaComponent_div_93_article_1_ng_template_9_Template, 2, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 62);
    i0.ɵɵtemplate(12, MateriaListaComponent_div_93_article_1_ng_container_12_Template, 7, 2, "ng-container", 42)(13, MateriaListaComponent_div_93_article_1_ng_template_13_Template, 4, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, MateriaListaComponent_div_93_article_1_section_15_Template, 19, 8, "section", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    const editarNome_r30 = i0.ɵɵreference(7);
    const editarCategorias_r31 = i0.ɵɵreference(10);
    const botoesEdicao_r32 = i0.ɵɵreference(14);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("disciplina-item-active", ctx_r2.materiaSelecionadaId === data_r18.id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("#", data_r18.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.editandoId !== data_r18.id)("ngIfElse", editarNome_r30);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.editandoId !== data_r18.id)("ngIfElse", editarCategorias_r31);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.editandoId !== data_r18.id)("ngIfElse", botoesEdicao_r32);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.materiaSelecionadaId === data_r18.id);
} }
function MateriaListaComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵtemplate(1, MateriaListaComponent_div_93_article_1_Template, 16, 10, "article", 54);
    i0.ɵɵelementStart(2, "div", 55)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nz-pagination", 56);
    i0.ɵɵlistener("nzPageIndexChange", function MateriaListaComponent_div_93_Template_nz_pagination_nzPageIndexChange_5_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.trocarPaginaMaterias($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.materiasPaginadas())("ngForTrackBy", ctx_r2.trackByMateriaId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3(" Mostrando ", ctx_r2.primeiroItemMateria(), "-", ctx_r2.ultimoItemMateria(), " de ", ctx_r2.materiasExibidas().length, " disciplina(s) ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzPageIndex", ctx_r2.paginaMateriasAtual)("nzPageSize", ctx_r2.materiasPorPagina)("nzTotal", ctx_r2.materiasExibidas().length)("nzShowSizeChanger", false);
} }
export class MateriaListaComponent {
    materiaService = inject(MateriaService);
    categoriaService = inject(CategoriaService);
    registroService = inject(RegistroService);
    materialGuiaService = inject(MaterialGuiaService);
    tipoRegistroService = inject(TipoRegistroService);
    fb = inject(FormBuilder);
    iconService = inject(NzIconService); // 🔥 Injetamos o serviço de ícones aqui
    message = inject(NzMessageService);
    cdr = inject(ChangeDetectorRef); // 🔥 Injetamos o detector de mudanças aqui
    listaMaterias = [];
    listaCategorias = [];
    listaMateriaisGuia = [];
    listaTiposRegistro = [];
    categoriaSelecionadaId = null;
    materiaSelecionadaId = null;
    assuntosDaMateria = [];
    assuntosCarregando = false;
    assuntosCache = new Map();
    assuntoEditandoId = null;
    nomeAssuntoEdicao = '';
    nomeAssuntoNovo = '';
    carregando = true;
    materiaisGuiaCarregando = true;
    salvando = false;
    salvandoMaterialGuia = false;
    salvandoCategoria = false;
    salvandoTipoRegistro = false;
    salvandoAssunto = false;
    editandoId = null;
    categoriaEditandoId = null;
    materialGuiaEditandoId = null;
    tipoRegistroEditandoId = null;
    nomeCategoriaEdicao = '';
    nomeMaterialGuiaEdicao = '';
    nomeTipoRegistroEdicao = '';
    excluindo = false;
    formularioEdicao = { nome: '', categorias: [] };
    validateForm;
    materialGuiaForm;
    categoriaForm;
    tipoRegistroForm;
    paginaMateriasAtual = 1;
    materiasPorPagina = 10;
    constructor() {
        // 🔥 FORÇA O REGISTRO DOS ÍCONES DIRETO NO MOTOR DO NG-ZORRO
        this.iconService.addIcon(...[BookOutline, TagsOutline]);
    }
    ngOnInit() {
        this.obterMaterias();
        this.validateForm = this.fb.group({
            nome: [null, [Validators.required]],
            categorias: [[], [Validators.required]]
        });
        this.materialGuiaForm = this.fb.group({
            nome: [null, [Validators.required]]
        });
        this.categoriaForm = this.fb.group({
            nome: [null, [Validators.required]]
        });
        this.tipoRegistroForm = this.fb.group({
            nome: [null, [Validators.required]]
        });
        this.obterCategorias();
        this.obterMateriaisGuia();
        this.obterTiposRegistro();
    }
    obterCategorias() {
        this.categoriaService.listarTodas().subscribe({
            next: (categorias) => {
                this.listaCategorias = categorias;
                this.cdr.detectChanges();
            },
            error: (erro) => console.error('Erro ao buscar categorias:', erro)
        });
    }
    submitCategoria() {
        if (this.categoriaForm.invalid) {
            this.categoriaForm.markAllAsTouched();
            this.message.warning('Informe o nome da categoria antes de salvar.');
            return;
        }
        this.salvandoCategoria = true;
        const nome = this.categoriaForm.value.nome.trim();
        this.categoriaService.criar({ nome }).subscribe({
            next: categoria => {
                this.listaCategorias = [...this.listaCategorias, categoria].sort((a, b) => a.nome.localeCompare(b.nome));
                this.categoriaForm.reset();
                this.salvandoCategoria = false;
                this.message.success('Categoria salva com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao salvar categoria:', erro);
                this.salvandoCategoria = false;
                this.message.error('Não foi possível salvar a categoria.');
                this.cdr.detectChanges();
            }
        });
    }
    selecionarCategoria(id) {
        this.categoriaSelecionadaId = id;
        this.paginaMateriasAtual = 1;
        this.fecharAssuntosSelecionados();
    }
    obterMateriaisGuia() {
        this.materiaisGuiaCarregando = true;
        this.materialGuiaService.listarTodos().subscribe({
            next: materiaisGuia => {
                this.listaMateriaisGuia = materiaisGuia;
                this.materiaisGuiaCarregando = false;
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao buscar materiais-guia:', erro);
                this.materiaisGuiaCarregando = false;
                this.cdr.detectChanges();
            }
        });
    }
    obterTiposRegistro() {
        this.tipoRegistroService.listarTodos().subscribe({
            next: tipos => {
                this.listaTiposRegistro = tipos;
                this.cdr.detectChanges();
            },
            error: erro => console.error('Erro ao buscar tipos de registro:', erro)
        });
    }
    submitMaterialGuia() {
        if (this.materialGuiaForm.invalid) {
            this.materialGuiaForm.markAllAsTouched();
            this.message.warning('Informe o nome do material-guia antes de salvar.');
            return;
        }
        this.salvandoMaterialGuia = true;
        const nome = this.materialGuiaForm.value.nome.trim();
        this.materialGuiaService.criar({ nome }).subscribe({
            next: materialGuia => {
                this.listaMateriaisGuia = [...this.listaMateriaisGuia, materialGuia].sort((a, b) => a.nome.localeCompare(b.nome));
                this.materialGuiaForm.reset();
                this.salvandoMaterialGuia = false;
                this.message.success('Material-guia salvo com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao salvar material-guia:', erro);
                this.salvandoMaterialGuia = false;
                this.message.error('Não foi possível salvar o material-guia.');
                this.cdr.detectChanges();
            }
        });
    }
    submitTipoRegistro() {
        if (this.tipoRegistroForm.invalid) {
            this.tipoRegistroForm.markAllAsTouched();
            this.message.warning('Informe o nome do tipo de registro antes de salvar.');
            return;
        }
        this.salvandoTipoRegistro = true;
        const nome = this.tipoRegistroForm.value.nome.trim();
        this.tipoRegistroService.criar({ nome }).subscribe({
            next: tipo => {
                this.listaTiposRegistro = [...this.listaTiposRegistro, tipo].sort((a, b) => a.nome.localeCompare(b.nome));
                this.tipoRegistroForm.reset();
                this.salvandoTipoRegistro = false;
                this.message.success('Tipo de registro salvo com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao salvar tipo de registro:', erro);
                this.salvandoTipoRegistro = false;
                this.message.error('Não foi possível salvar o tipo de registro.');
                this.cdr.detectChanges();
            }
        });
    }
    iniciarEdicaoCategoria(categoria) {
        this.categoriaEditandoId = categoria.id;
        this.nomeCategoriaEdicao = categoria.nome;
    }
    salvarEdicaoCategoria(categoria) {
        const nome = this.nomeCategoriaEdicao.trim();
        if (!nome)
            return;
        this.categoriaService.atualizar(categoria.id, { nome }).subscribe({
            next: atualizada => {
                this.listaCategorias = this.listaCategorias.map(item => item.id === atualizada.id ? atualizada : item);
                this.categoriaEditandoId = null;
                this.message.success('Categoria editada com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao editar categoria:', erro);
                this.message.error('Não foi possível editar a categoria.');
            }
        });
    }
    excluirCategoria(categoria) {
        if (!window.confirm(`Apagar a categoria "${categoria.nome}"?`))
            return;
        this.excluindo = true;
        this.categoriaService.excluir(categoria.id).subscribe({
            next: () => {
                this.listaCategorias = this.listaCategorias.filter(item => item.id !== categoria.id);
                if (this.categoriaSelecionadaId === categoria.id) {
                    this.categoriaSelecionadaId = null;
                }
                this.excluindo = false;
                this.message.success('Categoria apagada com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao apagar categoria:', erro);
                this.excluindo = false;
                this.message.error('Não foi possível apagar a categoria. Ela pode estar em uso.');
                this.cdr.detectChanges();
            }
        });
    }
    iniciarEdicaoMaterialGuia(materialGuia) {
        if (!materialGuia.id)
            return;
        this.materialGuiaEditandoId = materialGuia.id;
        this.nomeMaterialGuiaEdicao = materialGuia.nome;
    }
    salvarEdicaoMaterialGuia(materialGuia) {
        if (!materialGuia.id)
            return;
        const nome = this.nomeMaterialGuiaEdicao.trim();
        if (!nome)
            return;
        this.materialGuiaService.atualizar(materialGuia.id, { nome }).subscribe({
            next: atualizado => {
                this.listaMateriaisGuia = this.listaMateriaisGuia.map(item => item.id === atualizado.id ? atualizado : item);
                this.materialGuiaEditandoId = null;
                this.message.success('Material-guia editado com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao editar material-guia:', erro);
                this.message.error('Não foi possível editar o material-guia.');
            }
        });
    }
    excluirMaterialGuia(materialGuia) {
        if (!materialGuia.id || !window.confirm(`Apagar o material-guia "${materialGuia.nome}"?`))
            return;
        this.excluindo = true;
        this.materialGuiaService.excluir(materialGuia.id).subscribe({
            next: () => {
                this.listaMateriaisGuia = this.listaMateriaisGuia.filter(item => item.id !== materialGuia.id);
                this.excluindo = false;
                this.message.success('Material-guia apagado com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao apagar material-guia:', erro);
                this.excluindo = false;
                this.message.error('Não foi possível apagar o material-guia. Ele pode estar em uso.');
                this.cdr.detectChanges();
            }
        });
    }
    iniciarEdicaoTipoRegistro(tipo) {
        this.tipoRegistroEditandoId = tipo.id;
        this.nomeTipoRegistroEdicao = tipo.nome;
    }
    salvarEdicaoTipoRegistro(tipo) {
        const nome = this.nomeTipoRegistroEdicao.trim();
        if (!nome)
            return;
        this.tipoRegistroService.atualizar(tipo.id, { nome }).subscribe({
            next: atualizado => {
                this.listaTiposRegistro = this.listaTiposRegistro.map(item => item.id === atualizado.id ? atualizado : item);
                this.tipoRegistroEditandoId = null;
                this.message.success('Tipo de registro editado com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao editar tipo de registro:', erro);
                this.message.error('Não foi possível editar o tipo de registro.');
            }
        });
    }
    excluirTipoRegistro(tipo) {
        if (!window.confirm(`Apagar o tipo de registro "${tipo.nome}"?`))
            return;
        this.excluindo = true;
        this.tipoRegistroService.excluir(tipo.id).subscribe({
            next: () => {
                this.listaTiposRegistro = this.listaTiposRegistro.filter(item => item.id !== tipo.id);
                this.excluindo = false;
                this.message.success('Tipo de registro apagado com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao apagar tipo de registro:', erro);
                this.excluindo = false;
                this.message.error('Não foi possível apagar o tipo de registro. Ele pode estar em uso.');
                this.cdr.detectChanges();
            }
        });
    }
    cancelarEdicaoGerenciador() {
        this.categoriaEditandoId = null;
        this.materialGuiaEditandoId = null;
        this.tipoRegistroEditandoId = null;
    }
    selecionarMateria(materia) {
        if (!materia.id)
            return;
        const materiaId = materia.id;
        if (this.materiaSelecionadaId === materia.id) {
            this.materiaSelecionadaId = null;
            this.assuntosDaMateria = [];
            return;
        }
        this.materiaSelecionadaId = materiaId;
        const assuntosEmCache = this.assuntosCache.get(materiaId);
        if (assuntosEmCache) {
            this.assuntosDaMateria = assuntosEmCache;
            this.assuntosCarregando = false;
            this.cdr.detectChanges();
            return;
        }
        this.assuntosDaMateria = [];
        this.assuntosCarregando = true;
        this.registroService.listarAssuntosPorMateria(materiaId).subscribe({
            next: assuntos => {
                // Ignora a resposta se o usuário já selecionou outra matéria.
                this.assuntosCache.set(materiaId, assuntos);
                if (this.materiaSelecionadaId === materiaId) {
                    this.assuntosDaMateria = assuntos;
                    this.assuntosCarregando = false;
                    this.cdr.detectChanges();
                }
            },
            error: erro => {
                console.error('Erro ao buscar assuntos:', erro);
                if (this.materiaSelecionadaId === materiaId) {
                    this.assuntosCarregando = false;
                    this.cdr.detectChanges();
                }
            }
        });
    }
    iniciarEdicaoAssunto(assunto) {
        this.assuntoEditandoId = assunto.id;
        this.nomeAssuntoEdicao = assunto.nome;
    }
    cancelarEdicaoAssunto() {
        this.assuntoEditandoId = null;
        this.nomeAssuntoEdicao = '';
    }
    adicionarAssunto() {
        const nome = this.nomeAssuntoNovo.trim();
        const materiaId = this.materiaSelecionadaId;
        if (!nome) {
            this.message.warning('Informe o nome do assunto antes de adicionar.');
            return;
        }
        if (materiaId === null) {
            this.message.warning('Selecione uma disciplina antes de adicionar um assunto.');
            return;
        }
        this.salvandoAssunto = true;
        this.registroService.criarAssunto({ nome, materiaId }).subscribe({
            next: assunto => {
                this.assuntosDaMateria = [...this.assuntosDaMateria, assunto].sort((a, b) => a.nome.localeCompare(b.nome));
                this.assuntosCache.set(materiaId, this.assuntosDaMateria);
                this.nomeAssuntoNovo = '';
                this.salvandoAssunto = false;
                this.message.success('Assunto adicionado com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao adicionar assunto:', erro);
                this.salvandoAssunto = false;
                this.message.error('Não foi possível adicionar o assunto.');
                this.cdr.detectChanges();
            }
        });
    }
    salvarEdicaoAssunto(assunto) {
        const nome = this.nomeAssuntoEdicao.trim();
        if (!nome) {
            this.message.warning('Informe o nome do assunto antes de salvar.');
            return;
        }
        this.registroService.atualizarAssunto(assunto.id, nome).subscribe({
            next: atualizado => {
                this.assuntosDaMateria = this.assuntosDaMateria.map(item => item.id === atualizado.id ? atualizado : item);
                if (this.materiaSelecionadaId !== null) {
                    this.assuntosCache.set(this.materiaSelecionadaId, this.assuntosDaMateria);
                }
                this.message.success('Assunto editado com sucesso.');
                this.cancelarEdicaoAssunto();
            },
            error: erro => {
                console.error('Erro ao atualizar assunto:', erro);
                this.message.error('Não foi possível editar o assunto.');
            }
        });
    }
    excluirAssunto(assunto) {
        if (!window.confirm(`Apagar o assunto "${assunto.nome}"?`))
            return;
        this.excluindo = true;
        this.registroService.excluirAssunto(assunto.id).subscribe({
            next: () => {
                this.assuntosDaMateria = this.assuntosDaMateria.filter(item => item.id !== assunto.id);
                if (this.materiaSelecionadaId !== null) {
                    this.assuntosCache.set(this.materiaSelecionadaId, this.assuntosDaMateria);
                }
                this.cancelarEdicaoAssunto();
                this.excluindo = false;
                this.message.success('Assunto apagado com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao apagar assunto:', erro);
                this.excluindo = false;
                this.message.error('Não foi possível apagar o assunto. Ele pode estar em uso.');
                this.cdr.detectChanges();
            }
        });
    }
    trackByAssuntoId(_, assunto) {
        return assunto.id;
    }
    trackByMateriaId(index, materia) {
        return materia.id ?? index;
    }
    materiasExibidas() {
        if (this.categoriaSelecionadaId === null)
            return this.listaMaterias;
        return this.listaMaterias.filter(materia => materia.categorias?.some(categoria => categoria.id === this.categoriaSelecionadaId));
    }
    obterMaterias() {
        this.carregando = true;
        this.materiaService.listarTodas().subscribe({
            next: (dados) => {
                console.log('Dados que chegaram do Java:', dados);
                this.listaMaterias = [...dados];
                this.ajustarPaginaMaterias();
                this.carregando = false;
                // 🔥 FORÇA O ANGULAR A REDESENHAR A TABELA IMEDIATAMENTE
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao buscar matérias no front:', erro);
                this.carregando = false;
                this.cdr.detectChanges(); // Força atualização mesmo no erro para sumir o loading
            }
        });
    }
    submitForm() {
        if (this.validateForm.valid) {
            this.salvando = true;
            const valores = this.validateForm.value;
            const novaMateria = {
                nome: valores.nome,
                categorias: this.categoriasPorIds(valores.categorias ?? [])
            };
            this.materiaService.criar(novaMateria).subscribe({
                next: () => {
                    this.salvando = false;
                    this.validateForm.reset();
                    this.paginaMateriasAtual = 1;
                    this.message.success('Matéria salva com sucesso.');
                    this.obterMaterias();
                },
                error: (erro) => {
                    console.error('Erro ao salvar matéria:', erro);
                    this.salvando = false;
                    this.message.error('Não foi possível salvar a matéria.');
                }
            });
        }
        else {
            Object.values(this.validateForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
            this.message.warning('Preencha os campos obrigatórios antes de salvar.');
        }
    }
    iniciarEdicao(materia) {
        if (!materia.id)
            return;
        this.editandoId = materia.id;
        this.formularioEdicao = {
            nome: materia.nome,
            categorias: materia.categorias?.map(categoria => categoria.id) ?? []
        };
    }
    cancelarEdicao() {
        this.editandoId = null;
    }
    salvarEdicao(materia) {
        if (!materia.id || !this.formularioEdicao.nome.trim()) {
            this.message.warning('Informe o nome da matéria antes de salvar.');
            return;
        }
        this.salvando = true;
        this.materiaService.atualizar(materia.id, {
            ...materia,
            nome: this.formularioEdicao.nome.trim(),
            categorias: this.categoriasPorIds(this.formularioEdicao.categorias)
        }).subscribe({
            next: (atualizada) => {
                const indice = this.listaMaterias.findIndex(item => item.id === materia.id);
                if (indice >= 0) {
                    this.listaMaterias = this.listaMaterias.map((item, i) => i === indice ? atualizada : item);
                }
                this.editandoId = null;
                this.salvando = false;
                this.message.success('Matéria editada com sucesso.');
                this.cdr.detectChanges();
            },
            error: (erro) => {
                console.error('Erro ao atualizar matéria:', erro);
                this.salvando = false;
                this.message.error('Não foi possível editar a matéria.');
                this.cdr.detectChanges();
            }
        });
    }
    excluirMateria(materia) {
        if (!materia.id || !window.confirm(`Apagar a matéria "${materia.nome}"?`))
            return;
        const materiaId = materia.id;
        this.excluindo = true;
        this.materiaService.excluir(materiaId).subscribe({
            next: () => {
                this.listaMaterias = this.listaMaterias.filter(item => item.id !== materiaId);
                if (this.materiaSelecionadaId === materiaId) {
                    this.materiaSelecionadaId = null;
                    this.assuntosDaMateria = [];
                }
                this.assuntosCache.delete(materiaId);
                this.editandoId = null;
                this.ajustarPaginaMaterias();
                this.excluindo = false;
                this.message.success('Matéria apagada com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao apagar matéria:', erro);
                this.excluindo = false;
                this.message.error('Não foi possível apagar a matéria. Ela pode ter assuntos ou registros vinculados.');
                this.cdr.detectChanges();
            }
        });
    }
    converterCategorias(categorias = []) {
        return categorias.map(categoria => categoria.nome);
    }
    materiasPaginadas() {
        const inicio = (this.paginaMateriasAtual - 1) * this.materiasPorPagina;
        return this.materiasExibidas().slice(inicio, inicio + this.materiasPorPagina);
    }
    primeiroItemMateria() {
        if (!this.materiasExibidas().length)
            return 0;
        return (this.paginaMateriasAtual - 1) * this.materiasPorPagina + 1;
    }
    ultimoItemMateria() {
        return Math.min(this.paginaMateriasAtual * this.materiasPorPagina, this.materiasExibidas().length);
    }
    trocarPaginaMaterias(pagina) {
        this.paginaMateriasAtual = pagina;
        this.fecharAssuntosSelecionados();
    }
    ajustarPaginaMaterias() {
        const totalPaginas = Math.max(1, Math.ceil(this.materiasExibidas().length / this.materiasPorPagina));
        if (this.paginaMateriasAtual > totalPaginas) {
            this.paginaMateriasAtual = totalPaginas;
        }
    }
    fecharAssuntosSelecionados() {
        this.materiaSelecionadaId = null;
        this.assuntosDaMateria = [];
        this.assuntoEditandoId = null;
    }
    categoriasPorIds(ids) {
        return ids
            .map(id => this.listaCategorias.find(categoria => categoria.id === id))
            .filter((categoria) => !!categoria);
    }
    static ɵfac = function MateriaListaComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MateriaListaComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MateriaListaComponent, selectors: [["app-materia-lista"]], decls: 94, vars: 26, consts: [["semMateriaisGuia", ""], ["editarCategoria", ""], ["editarMaterialGuia", ""], ["editarTipoRegistro", ""], ["editarNome", ""], ["editarCategorias", ""], ["botoesEdicao", ""], ["editarAssunto", ""], [1, "materias-page", "page-card"], [1, "page-heading"], [1, "categorias-topo"], [1, "section-heading"], ["nzColor", "blue"], ["nz-form", "", 1, "data-manager-form", 3, "ngSubmit", "nzLayout", "formGroup"], [1, "form-field"], ["nzErrorTip", "Por favor, digite o nome da categoria!"], ["type", "text", "nz-input", "", "formControlName", "nome", "placeholder", "Ex: Tribunais, Fiscal, Tecnologia"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], [1, "categorias-abas"], ["nz-button", "", 3, "click", "nzType"], ["nz-button", "", 3, "nzType", "click", 4, "ngFor", "ngForOf"], [1, "manager-list"], ["class", "manager-item", 4, "ngFor", "ngForOf"], [1, "planejamentos-section"], ["nzErrorTip", "Por favor, digite o nome do material-guia!"], ["type", "text", "nz-input", "", "formControlName", "nome", "placeholder", "Ex: SEFAZ SC Estrat\u00E9gia, Guruja P\u00F3s-edital"], ["class", "manager-list", 4, "ngIf", "ngIfElse"], ["nzColor", "purple"], ["nzErrorTip", "Por favor, digite o nome do tipo de registro!"], ["type", "text", "nz-input", "", "formControlName", "nome", "placeholder", "Ex: Assunto, Quest\u00F5es, Simulado"], [1, "disciplinas-section"], ["nz-form", "", 1, "materia-form", 3, "ngSubmit", "nzLayout", "formGroup"], ["nzErrorTip", "Por favor, digite o nome da mat\u00E9ria!"], ["nzPrefixIcon", "book"], ["type", "text", "nz-input", "", "formControlName", "nome", "placeholder", "Ex: Direito Constitucional, Java, Franc\u00EAs"], ["nzErrorTip", "Selecione ao menos uma categoria!"], ["formControlName", "categorias", "nzMode", "multiple", "nzPlaceHolder", "Selecione as categorias"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["class", "disciplinas-loading", 4, "ngIf"], ["class", "disciplinas-empty", 4, "ngIf"], ["class", "disciplinas-list", 4, "ngIf"], [1, "manager-item"], [4, "ngIf", "ngIfElse"], [1, "manager-actions"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "click"], ["nz-button", "", "nzDanger", "", "nzType", "link", "nzSize", "small", 3, "click", "disabled"], ["nz-input", "", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["class", "planejamentos-empty", 4, "ngIf"], [1, "planejamentos-empty"], [3, "nzValue", "nzLabel"], [1, "disciplinas-loading"], [1, "disciplinas-empty"], [1, "disciplinas-list"], ["class", "disciplina-item", 3, "disciplina-item-active", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "disciplinas-pagination"], [3, "nzPageIndexChange", "nzPageIndex", "nzPageSize", "nzTotal", "nzShowSizeChanger"], [1, "disciplina-item"], [1, "disciplina-main"], [1, "disciplina-info"], [1, "disciplina-id"], ["class", "disciplina-tags", 4, "ngIf", "ngIfElse"], [1, "disciplina-actions"], ["class", "assuntos-panel", 4, "ngIf"], ["nz-input", "", "placeholder", "Nome da disciplina", 3, "ngModelChange", "ngModel"], [1, "disciplina-tags"], ["nzColor", "blue", 4, "ngFor", "ngForOf"], ["class", "empty-value", 4, "ngIf"], [1, "empty-value"], ["nzMode", "multiple", "nzPlaceHolder", "Selecione as categorias", 1, "categoria-edit-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["nz-button", "", "nzType", "default", "nzSize", "small", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click", "nzLoading"], [1, "assuntos-panel"], [1, "assuntos-header"], [1, "eyebrow"], ["nzColor", "blue", 4, "ngIf"], ["nz-form", "", 1, "assunto-form", 3, "ngSubmit", "nzLayout"], ["nz-input", "", "name", "novoAssunto", "placeholder", "Nome do novo assunto", 3, "ngModelChange", "ngModel"], ["class", "assuntos-loading", 4, "ngIf"], ["class", "assuntos-empty", 4, "ngIf"], ["class", "assuntos-list", 4, "ngIf"], [1, "assuntos-loading"], [1, "assuntos-empty"], [1, "assuntos-list"], ["class", "assunto-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "assunto-item"], [1, "assunto-info"], [1, "assunto-dot"], [1, "assunto-actions"]], template: function MateriaListaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 8)(1, "header", 9)(2, "div")(3, "h2");
            i0.ɵɵtext(4, "Gerenciador de dados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Cadastre e edite materiais-guia, categorias, disciplinas, assuntos e tipos de registro.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "section", 10)(8, "div", 11)(9, "div")(10, "h3");
            i0.ɵɵtext(11, "Categorias");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵtext(13, "Organize disciplinas por grupos de estudo.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "nz-tag", 12);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "form", 13);
            i0.ɵɵlistener("ngSubmit", function MateriaListaComponent_Template_form_ngSubmit_16_listener() { return ctx.submitCategoria(); });
            i0.ɵɵelementStart(17, "nz-form-item", 14)(18, "nz-form-control", 15)(19, "input", 16);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(20, "nz-form-item")(21, "nz-form-control")(22, "button", 17);
            i0.ɵɵtext(23, " Adicionar Categoria ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(24, "div", 18)(25, "button", 19);
            i0.ɵɵlistener("click", function MateriaListaComponent_Template_button_click_25_listener() { return ctx.selecionarCategoria(null); });
            i0.ɵɵtext(26, " Todas ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(27, MateriaListaComponent_button_27_Template, 2, 2, "button", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 21);
            i0.ɵɵtemplate(29, MateriaListaComponent_article_29_Template, 4, 2, "article", 22);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "section", 23)(31, "div", 11)(32, "div")(33, "h3");
            i0.ɵɵtext(34, "Materiais-guia");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "p");
            i0.ɵɵtext(36, "Cadastre os materiais ou pacotes usados nos registros, como SEFAZ SC Estrat\u00E9gia ou Guruja P\u00F3s-edital.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "nz-tag", 12);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "form", 13);
            i0.ɵɵlistener("ngSubmit", function MateriaListaComponent_Template_form_ngSubmit_39_listener() { return ctx.submitMaterialGuia(); });
            i0.ɵɵelementStart(40, "nz-form-item", 14)(41, "nz-form-control", 24)(42, "input", 25);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "nz-form-item")(44, "nz-form-control")(45, "button", 17);
            i0.ɵɵtext(46, " Adicionar Material-guia ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(47, MateriaListaComponent_div_47_Template, 2, 1, "div", 26)(48, MateriaListaComponent_ng_template_48_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "section", 23)(51, "div", 11)(52, "div")(53, "h3");
            i0.ɵɵtext(54, "Tipos de registro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "p");
            i0.ɵɵtext(56, "Defina os tipos usados ao registrar estudo: assunto, quest\u00F5es, resumo, simulado ou prova.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "nz-tag", 27);
            i0.ɵɵtext(58);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "form", 13);
            i0.ɵɵlistener("ngSubmit", function MateriaListaComponent_Template_form_ngSubmit_59_listener() { return ctx.submitTipoRegistro(); });
            i0.ɵɵelementStart(60, "nz-form-item", 14)(61, "nz-form-control", 28)(62, "input", 29);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(63, "nz-form-item")(64, "nz-form-control")(65, "button", 17);
            i0.ɵɵtext(66, " Adicionar Tipo ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(67, "div", 21);
            i0.ɵɵtemplate(68, MateriaListaComponent_article_68_Template, 4, 2, "article", 22);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "section", 30)(70, "div", 11)(71, "div")(72, "h3");
            i0.ɵɵtext(73, "Disciplinas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "p");
            i0.ɵɵtext(75, "Gerencie mat\u00E9rias e abra seus assuntos sem depender de tabela.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "nz-tag", 12);
            i0.ɵɵtext(77);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(78, "form", 31);
            i0.ɵɵlistener("ngSubmit", function MateriaListaComponent_Template_form_ngSubmit_78_listener() { return ctx.submitForm(); });
            i0.ɵɵelementStart(79, "nz-form-item", 14)(80, "nz-form-control", 32)(81, "nz-input-group", 33)(82, "input", 34);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(83, "nz-form-item", 14)(84, "nz-form-control", 35)(85, "nz-select", 36);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtemplate(86, MateriaListaComponent_nz_option_86_Template, 1, 2, "nz-option", 37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(87, "nz-form-item")(88, "nz-form-control")(89, "button", 17);
            i0.ɵɵtext(90, " Adicionar Disciplina ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(91, MateriaListaComponent_div_91_Template, 2, 0, "div", 38)(92, MateriaListaComponent_div_92_Template, 2, 0, "div", 39)(93, MateriaListaComponent_div_93_Template, 6, 9, "div", 40);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const semMateriaisGuia_r33 = i0.ɵɵreference(49);
            i0.ɵɵadvance(15);
            i0.ɵɵtextInterpolate1("", ctx.listaCategorias.length, " categoria(s)");
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzLayout", "inline")("formGroup", ctx.categoriaForm);
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzLoading", ctx.salvandoCategoria);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzType", ctx.categoriaSelecionadaId === null ? "primary" : "default");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.listaCategorias);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.listaCategorias);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("", ctx.listaMateriaisGuia.length, " material(is)");
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzLayout", "inline")("formGroup", ctx.materialGuiaForm);
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzLoading", ctx.salvandoMaterialGuia);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.listaMateriaisGuia.length)("ngIfElse", semMateriaisGuia_r33);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("", ctx.listaTiposRegistro.length, " tipo(s)");
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzLayout", "inline")("formGroup", ctx.tipoRegistroForm);
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzLoading", ctx.salvandoTipoRegistro);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.listaTiposRegistro);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("", ctx.materiasExibidas().length, " disciplina(s)");
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzLayout", "inline")("formGroup", ctx.validateForm);
            i0.ɵɵadvance(4);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(3);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.listaCategorias);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzLoading", ctx.salvando);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.materiasExibidas().length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.materiasExibidas().length);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, i2.NgForm, ReactiveFormsModule, i2.FormGroupDirective, i2.FormControlName, NzTagModule, i3.NzTagComponent, NzButtonModule, i4.NzButtonComponent, i5.ɵNzTransitionPatchDirective, i6.NzWaveDirective, NzFormModule, i7.NzColDirective, i7.NzRowDirective, i8.NzFormDirective, i8.NzFormItemComponent, i8.NzFormControlComponent, NzInputModule, i9.NzInputDirective, i9.NzInputGroupComponent, NzSelectModule, i10.NzOptionComponent, i10.NzSelectComponent, NzPaginationModule, i11.NzPaginationComponent, NzIconModule // Mantemos o módulo aqui
        ], styles: [".materias-page[_ngcontent-%COMP%] {\n  padding: clamp(18px, 3vw, 28px);\n  background: var(--%NS%surface, #fff);\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 24px;\n  font-weight: 850;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.categorias-topo[_ngcontent-%COMP%], \n.planejamentos-section[_ngcontent-%COMP%], \n.disciplinas-section[_ngcontent-%COMP%] {\n  margin: 20px 0 24px;\n  padding: 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n.categorias-abas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n\n.materias-page[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  border: 0;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.data-manager-form[_ngcontent-%COMP%] {\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.data-manager-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n}\n\n.manager-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 10px;\n}\n\n.manager-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  min-height: 44px;\n  padding: 10px 12px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n  color: var(--%NS%text, #0f172a);\n  font-weight: 750;\n}\n\n.manager-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.manager-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-shrink: 0;\n  gap: 8px;\n}\n\n.planejamentos-empty[_ngcontent-%COMP%] {\n  padding: 14px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--%NS%text-muted, #64748b);\n  background: var(--%NS%surface, #fff);\n}\n\n.materia-form[_ngcontent-%COMP%] {\n  gap: 16px;\n  margin-bottom: 16px;\n  padding: 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-muted, #fbfdff);\n}\n\n.materia-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n\n.materia-form[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n\n.categoria-edit-select[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n\n.disciplinas-loading[_ngcontent-%COMP%], \n.disciplinas-empty[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--%NS%text-muted, #64748b);\n  background: var(--%NS%surface, #fff);\n  font-weight: 700;\n}\n\n.disciplinas-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.disciplina-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n}\n\n.disciplina-item-active[_ngcontent-%COMP%] {\n  border-color: #bfdbfe;\n}\n\n.disciplina-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  padding: 16px;\n}\n\n.disciplina-info[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.disciplina-id[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 6px;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 850;\n}\n\n.disciplina-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 18px;\n  font-weight: 850;\n}\n\n.disciplina-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 10px;\n}\n\n.disciplina-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-shrink: 0;\n  gap: 6px;\n}\n\n.disciplinas-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 4px 2px 0;\n}\n\n.disciplinas-pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 750;\n}\n\n.assuntos-panel[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 18px;\n  border-top: 1px solid #dbeafe;\n  background: var(--%NS%surface-muted, #fbfdff);\n}\n\n.assuntos-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.assuntos-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 17px;\n  font-weight: 850;\n}\n\n.assunto-form[_ngcontent-%COMP%] {\n  gap: 12px;\n  margin-bottom: 16px;\n  padding: 12px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n}\n\n.assunto-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  color: #1677ff;\n  font-size: 12px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.assuntos-loading[_ngcontent-%COMP%], \n.assuntos-empty[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--%NS%text-muted, #64748b);\n  background: var(--%NS%surface, #fff);\n}\n\n.assuntos-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n}\n\n.assunto-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  min-height: 50px;\n  padding: 12px 16px;\n  background: var(--%NS%surface, #fff);\n}\n\n.assunto-item[_ngcontent-%COMP%]    + .assunto-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--%NS%border, #eef2f7);\n}\n\n.assunto-info[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--%NS%text, #334155);\n  font-weight: 700;\n}\n\n.assunto-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: #1677ff;\n  box-shadow: 0 0 0 4px #eff6ff;\n}\n\n.assunto-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.empty-value[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-style: italic;\n}\n\n@media (max-width: 760px) {\n  .materias-page[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .page-heading[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n\n  .page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .categorias-topo[_ngcontent-%COMP%], \n   .planejamentos-section[_ngcontent-%COMP%], \n   .disciplinas-section[_ngcontent-%COMP%], \n   .materia-form[_ngcontent-%COMP%] {\n    margin: 14px 0;\n    padding: 14px;\n  }\n\n  .section-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .categorias-abas[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    padding-bottom: 4px;\n  }\n\n  .categorias-abas[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n\n  .materia-form[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .data-manager-form[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .materia-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%], \n   .data-manager-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%], \n   .materia-form[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%], \n   .categoria-edit-select[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .manager-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .manager-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .manager-actions[_ngcontent-%COMP%], \n   .disciplina-actions[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n\n  .disciplina-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n    padding: 14px;\n  }\n\n  .disciplina-actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n    width: 100%;\n  }\n\n  .disciplinas-pagination[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .assuntos-panel[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .assuntos-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .assunto-item[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .assunto-actions[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MateriaListaComponent, [{
        type: Component,
        args: [{ selector: 'app-materia-lista', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    NzTagModule,
                    NzButtonModule,
                    NzFormModule,
                    NzInputModule,
                    NzSelectModule,
                    NzPaginationModule,
                    NzIconModule // Mantemos o módulo aqui
                ], template: "<div class=\"materias-page page-card\">\n  \n  <header class=\"page-heading\">\n    <div>\n      <h2>Gerenciador de dados</h2>\n      <p>Cadastre e edite materiais-guia, categorias, disciplinas, assuntos e tipos de registro.</p>\n    </div>\n  </header>\n\n  <section class=\"categorias-topo\">\n    <div class=\"section-heading\">\n      <div>\n        <h3>Categorias</h3>\n        <p>Organize disciplinas por grupos de estudo.</p>\n      </div>\n      <nz-tag nzColor=\"blue\">{{ listaCategorias.length }} categoria(s)</nz-tag>\n    </div>\n\n    <form class=\"data-manager-form\" nz-form [nzLayout]=\"'inline'\" [formGroup]=\"categoriaForm\" (ngSubmit)=\"submitCategoria()\">\n      <nz-form-item class=\"form-field\">\n        <nz-form-control nzErrorTip=\"Por favor, digite o nome da categoria!\">\n          <input type=\"text\" nz-input formControlName=\"nome\" placeholder=\"Ex: Tribunais, Fiscal, Tecnologia\" />\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-control>\n          <button nz-button nzType=\"primary\" [nzLoading]=\"salvandoCategoria\">\n            Adicionar Categoria\n          </button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n\n    <div class=\"categorias-abas\">\n      <button\n        nz-button\n        [nzType]=\"categoriaSelecionadaId === null ? 'primary' : 'default'\"\n        (click)=\"selecionarCategoria(null)\">\n        Todas\n      </button>\n      <button\n        *ngFor=\"let categoria of listaCategorias\"\n        nz-button\n        [nzType]=\"categoriaSelecionadaId === categoria.id ? 'primary' : 'default'\"\n        (click)=\"selecionarCategoria(categoria.id)\">\n        {{ categoria.nome }}\n      </button>\n    </div>\n\n    <div class=\"manager-list\">\n      <article class=\"manager-item\" *ngFor=\"let categoria of listaCategorias\">\n        <ng-container *ngIf=\"categoriaEditandoId !== categoria.id; else editarCategoria\">\n          <span>{{ categoria.nome }}</span>\n          <div class=\"manager-actions\">\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"iniciarEdicaoCategoria(categoria)\">Editar</button>\n            <button nz-button nzDanger nzType=\"link\" nzSize=\"small\" [disabled]=\"excluindo\" (click)=\"excluirCategoria(categoria)\">Apagar</button>\n          </div>\n        </ng-container>\n        <ng-template #editarCategoria>\n          <input nz-input [(ngModel)]=\"nomeCategoriaEdicao\" [ngModelOptions]=\"{standalone: true}\" />\n          <div class=\"manager-actions\">\n            <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"salvarEdicaoCategoria(categoria)\">Salvar</button>\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"cancelarEdicaoGerenciador()\">Cancelar</button>\n          </div>\n        </ng-template>\n      </article>\n    </div>\n  </section>\n\n  <section class=\"planejamentos-section\">\n    <div class=\"section-heading\">\n      <div>\n        <h3>Materiais-guia</h3>\n        <p>Cadastre os materiais ou pacotes usados nos registros, como SEFAZ SC Estrat\u00E9gia ou Guruja P\u00F3s-edital.</p>\n      </div>\n      <nz-tag nzColor=\"blue\">{{ listaMateriaisGuia.length }} material(is)</nz-tag>\n    </div>\n\n    <form class=\"data-manager-form\" nz-form [nzLayout]=\"'inline'\" [formGroup]=\"materialGuiaForm\" (ngSubmit)=\"submitMaterialGuia()\">\n      <nz-form-item class=\"form-field\">\n        <nz-form-control nzErrorTip=\"Por favor, digite o nome do material-guia!\">\n          <input type=\"text\" nz-input formControlName=\"nome\" placeholder=\"Ex: SEFAZ SC Estrat\u00E9gia, Guruja P\u00F3s-edital\" />\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-control>\n          <button nz-button nzType=\"primary\" [nzLoading]=\"salvandoMaterialGuia\">\n            Adicionar Material-guia\n          </button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n\n    <div class=\"manager-list\" *ngIf=\"listaMateriaisGuia.length; else semMateriaisGuia\">\n      <article class=\"manager-item\" *ngFor=\"let materialGuia of listaMateriaisGuia\">\n        <ng-container *ngIf=\"materialGuiaEditandoId !== materialGuia.id; else editarMaterialGuia\">\n          <span>{{ materialGuia.nome }}</span>\n          <div class=\"manager-actions\">\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"iniciarEdicaoMaterialGuia(materialGuia)\">Editar</button>\n            <button nz-button nzDanger nzType=\"link\" nzSize=\"small\" [disabled]=\"excluindo\" (click)=\"excluirMaterialGuia(materialGuia)\">Apagar</button>\n          </div>\n        </ng-container>\n        <ng-template #editarMaterialGuia>\n          <input nz-input [(ngModel)]=\"nomeMaterialGuiaEdicao\" [ngModelOptions]=\"{standalone: true}\" />\n          <div class=\"manager-actions\">\n            <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"salvarEdicaoMaterialGuia(materialGuia)\">Salvar</button>\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"cancelarEdicaoGerenciador()\">Cancelar</button>\n          </div>\n        </ng-template>\n      </article>\n    </div>\n\n    <ng-template #semMateriaisGuia>\n      <div class=\"planejamentos-empty\" *ngIf=\"!materiaisGuiaCarregando\">Nenhum material-guia cadastrado.</div>\n    </ng-template>\n  </section>\n\n  <section class=\"planejamentos-section\">\n    <div class=\"section-heading\">\n      <div>\n        <h3>Tipos de registro</h3>\n        <p>Defina os tipos usados ao registrar estudo: assunto, quest\u00F5es, resumo, simulado ou prova.</p>\n      </div>\n      <nz-tag nzColor=\"purple\">{{ listaTiposRegistro.length }} tipo(s)</nz-tag>\n    </div>\n\n    <form class=\"data-manager-form\" nz-form [nzLayout]=\"'inline'\" [formGroup]=\"tipoRegistroForm\" (ngSubmit)=\"submitTipoRegistro()\">\n      <nz-form-item class=\"form-field\">\n        <nz-form-control nzErrorTip=\"Por favor, digite o nome do tipo de registro!\">\n          <input type=\"text\" nz-input formControlName=\"nome\" placeholder=\"Ex: Assunto, Quest\u00F5es, Simulado\" />\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-control>\n          <button nz-button nzType=\"primary\" [nzLoading]=\"salvandoTipoRegistro\">\n            Adicionar Tipo\n          </button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n\n    <div class=\"manager-list\">\n      <article class=\"manager-item\" *ngFor=\"let tipo of listaTiposRegistro\">\n        <ng-container *ngIf=\"tipoRegistroEditandoId !== tipo.id; else editarTipoRegistro\">\n          <span>{{ tipo.nome }}</span>\n          <div class=\"manager-actions\">\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"iniciarEdicaoTipoRegistro(tipo)\">Editar</button>\n            <button nz-button nzDanger nzType=\"link\" nzSize=\"small\" [disabled]=\"excluindo\" (click)=\"excluirTipoRegistro(tipo)\">Apagar</button>\n          </div>\n        </ng-container>\n        <ng-template #editarTipoRegistro>\n          <input nz-input [(ngModel)]=\"nomeTipoRegistroEdicao\" [ngModelOptions]=\"{standalone: true}\" />\n          <div class=\"manager-actions\">\n            <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"salvarEdicaoTipoRegistro(tipo)\">Salvar</button>\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"cancelarEdicaoGerenciador()\">Cancelar</button>\n          </div>\n        </ng-template>\n      </article>\n    </div>\n  </section>\n\n  <section class=\"disciplinas-section\">\n    <div class=\"section-heading\">\n      <div>\n        <h3>Disciplinas</h3>\n        <p>Gerencie mat\u00E9rias e abra seus assuntos sem depender de tabela.</p>\n      </div>\n      <nz-tag nzColor=\"blue\">{{ materiasExibidas().length }} disciplina(s)</nz-tag>\n    </div>\n\n    <form class=\"materia-form\" nz-form [nzLayout]=\"'inline'\" [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n      <nz-form-item class=\"form-field\">\n        <nz-form-control nzErrorTip=\"Por favor, digite o nome da mat\u00E9ria!\">\n          <nz-input-group nzPrefixIcon=\"book\">\n            <input type=\"text\" nz-input formControlName=\"nome\" placeholder=\"Ex: Direito Constitucional, Java, Franc\u00EAs\" />\n          </nz-input-group>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item class=\"form-field\">\n        <nz-form-control nzErrorTip=\"Selecione ao menos uma categoria!\">\n          <nz-select formControlName=\"categorias\" nzMode=\"multiple\" nzPlaceHolder=\"Selecione as categorias\">\n            <nz-option *ngFor=\"let categoria of listaCategorias\" [nzValue]=\"categoria.id\" [nzLabel]=\"categoria.nome\"></nz-option>\n          </nz-select>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-control>\n          <button nz-button nzType=\"primary\" [nzLoading]=\"salvando\">\n            Adicionar Disciplina\n          </button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n\n    <div class=\"disciplinas-loading\" *ngIf=\"carregando\">Carregando disciplinas...</div>\n    <div class=\"disciplinas-empty\" *ngIf=\"!carregando && !materiasExibidas().length\">Nenhuma disciplina encontrada.</div>\n\n    <div class=\"disciplinas-list\" *ngIf=\"!carregando && materiasExibidas().length\">\n      <article\n        class=\"disciplina-item\"\n        *ngFor=\"let data of materiasPaginadas(); trackBy: trackByMateriaId\"\n        [class.disciplina-item-active]=\"materiaSelecionadaId === data.id\">\n        <div class=\"disciplina-main\">\n          <div class=\"disciplina-info\">\n            <span class=\"disciplina-id\">#{{ data.id }}</span>\n\n            <ng-container *ngIf=\"editandoId !== data.id; else editarNome\">\n              <h4>{{ data.nome }}</h4>\n            </ng-container>\n            <ng-template #editarNome>\n              <input nz-input [(ngModel)]=\"formularioEdicao.nome\" placeholder=\"Nome da disciplina\" />\n            </ng-template>\n\n            <div class=\"disciplina-tags\" *ngIf=\"editandoId !== data.id; else editarCategorias\">\n              <nz-tag *ngFor=\"let tag of converterCategorias(data.categorias)\" nzColor=\"blue\">{{ tag }}</nz-tag>\n              <span *ngIf=\"!data.categorias?.length\" class=\"empty-value\">Sem categorias</span>\n            </div>\n            <ng-template #editarCategorias>\n              <nz-select class=\"categoria-edit-select\" [(ngModel)]=\"formularioEdicao.categorias\" [ngModelOptions]=\"{standalone: true}\" nzMode=\"multiple\" nzPlaceHolder=\"Selecione as categorias\">\n                <nz-option *ngFor=\"let categoria of listaCategorias\" [nzValue]=\"categoria.id\" [nzLabel]=\"categoria.nome\"></nz-option>\n              </nz-select>\n            </ng-template>\n          </div>\n\n          <div class=\"disciplina-actions\">\n            <ng-container *ngIf=\"editandoId !== data.id; else botoesEdicao\">\n              <button nz-button nzType=\"default\" nzSize=\"small\" (click)=\"selecionarMateria(data)\">\n                {{ materiaSelecionadaId === data.id ? 'Ocultar assuntos' : 'Ver assuntos' }}\n              </button>\n              <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"iniciarEdicao(data)\">Editar</button>\n              <button nz-button nzDanger nzType=\"link\" nzSize=\"small\" [disabled]=\"excluindo\" (click)=\"excluirMateria(data)\">Apagar</button>\n            </ng-container>\n            <ng-template #botoesEdicao>\n              <button nz-button nzType=\"primary\" nzSize=\"small\" [nzLoading]=\"salvando\" (click)=\"salvarEdicao(data)\">Salvar</button>\n              <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"cancelarEdicao()\">Cancelar</button>\n            </ng-template>\n          </div>\n        </div>\n\n        <section class=\"assuntos-panel\" *ngIf=\"materiaSelecionadaId === data.id\">\n          <header class=\"assuntos-header\">\n            <div>\n              <span class=\"eyebrow\">Assuntos cadastrados</span>\n              <h4>{{ data.nome }}</h4>\n            </div>\n            <nz-tag nzColor=\"blue\" *ngIf=\"!assuntosCarregando\">{{ assuntosDaMateria.length }} assunto(s)</nz-tag>\n          </header>\n\n          <form class=\"assunto-form\" nz-form [nzLayout]=\"'inline'\" (ngSubmit)=\"adicionarAssunto()\">\n            <nz-form-item class=\"form-field\">\n              <nz-form-control>\n                <input\n                  nz-input\n                  name=\"novoAssunto\"\n                  [(ngModel)]=\"nomeAssuntoNovo\"\n                  placeholder=\"Nome do novo assunto\" />\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-control>\n                <button nz-button nzType=\"primary\" [nzLoading]=\"salvandoAssunto\">\n                  Adicionar assunto\n                </button>\n              </nz-form-control>\n            </nz-form-item>\n          </form>\n\n          <div class=\"assuntos-loading\" *ngIf=\"assuntosCarregando\">Carregando assuntos...</div>\n          <div class=\"assuntos-empty\" *ngIf=\"!assuntosCarregando && !assuntosDaMateria.length\">Nenhum assunto cadastrado para esta disciplina.</div>\n\n          <div class=\"assuntos-list\" *ngIf=\"!assuntosCarregando && assuntosDaMateria.length\">\n            <article class=\"assunto-item\" *ngFor=\"let assunto of assuntosDaMateria; trackBy: trackByAssuntoId\">\n              <ng-container *ngIf=\"assuntoEditandoId !== assunto.id; else editarAssunto\">\n                <div class=\"assunto-info\">\n                  <span class=\"assunto-dot\"></span>\n                  <span>{{ assunto.nome }}</span>\n                </div>\n                <div class=\"assunto-actions\">\n                  <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"iniciarEdicaoAssunto(assunto)\">Editar</button>\n                  <button nz-button nzDanger nzType=\"link\" nzSize=\"small\" [disabled]=\"excluindo\" (click)=\"excluirAssunto(assunto)\">Apagar</button>\n                </div>\n              </ng-container>\n\n              <ng-template #editarAssunto>\n                <input nz-input [(ngModel)]=\"nomeAssuntoEdicao\" [ngModelOptions]=\"{standalone: true}\" />\n                <div class=\"assunto-actions\">\n                  <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"salvarEdicaoAssunto(assunto)\">Salvar</button>\n                  <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"cancelarEdicaoAssunto()\">Cancelar</button>\n                </div>\n              </ng-template>\n            </article>\n          </div>\n        </section>\n      </article>\n\n      <div class=\"disciplinas-pagination\">\n        <span>\n          Mostrando {{ primeiroItemMateria() }}-{{ ultimoItemMateria() }} de {{ materiasExibidas().length }} disciplina(s)\n        </span>\n        <nz-pagination\n          [nzPageIndex]=\"paginaMateriasAtual\"\n          (nzPageIndexChange)=\"trocarPaginaMaterias($event)\"\n          [nzPageSize]=\"materiasPorPagina\"\n          [nzTotal]=\"materiasExibidas().length\"\n          [nzShowSizeChanger]=\"false\">\n        </nz-pagination>\n      </div>\n    </div>\n  </section>\n</div>\n", styles: [".materias-page {\n  padding: clamp(18px, 3vw, 28px);\n  background: var(--surface, #fff);\n}\n\n.page-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n\n.page-heading h2 {\n  margin: 0;\n  color: var(--text, #0f172a);\n  font-size: 24px;\n  font-weight: 850;\n}\n\n.page-heading p {\n  margin: 6px 0 0;\n  color: var(--text-muted, #64748b);\n}\n\n.categorias-topo,\n.planejamentos-section,\n.disciplinas-section {\n  margin: 20px 0 24px;\n  padding: 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-soft, #f8fafc);\n}\n\n.categorias-abas {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n\n.materias-page hr {\n  margin: 20px 0;\n  border: 0;\n  border-top: 1px solid var(--border, #e5e7eb);\n}\n\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n\n.section-heading h3 {\n  margin: 0;\n}\n\n.section-heading p {\n  margin: 4px 0 0;\n  color: var(--text-muted, #64748b);\n}\n\n.data-manager-form {\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.data-manager-form .form-field {\n  flex: 1;\n  min-width: 280px;\n}\n\n.manager-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 10px;\n}\n\n.manager-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  min-height: 44px;\n  padding: 10px 12px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n  color: var(--text, #0f172a);\n  font-weight: 750;\n}\n\n.manager-item input {\n  min-width: 0;\n}\n\n.manager-actions {\n  display: inline-flex;\n  align-items: center;\n  flex-shrink: 0;\n  gap: 8px;\n}\n\n.planejamentos-empty {\n  padding: 14px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--text-muted, #64748b);\n  background: var(--surface, #fff);\n}\n\n.materia-form {\n  gap: 16px;\n  margin-bottom: 16px;\n  padding: 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-muted, #fbfdff);\n}\n\n.materia-form .form-field {\n  flex: 1;\n  min-width: 250px;\n}\n\n.materia-form nz-select {\n  min-width: 250px;\n}\n\n.categoria-edit-select {\n  min-width: 250px;\n}\n\n.disciplinas-loading,\n.disciplinas-empty {\n  padding: 16px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--text-muted, #64748b);\n  background: var(--surface, #fff);\n  font-weight: 700;\n}\n\n.disciplinas-list {\n  display: grid;\n  gap: 12px;\n}\n\n.disciplina-item {\n  overflow: hidden;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n}\n\n.disciplina-item-active {\n  border-color: #bfdbfe;\n}\n\n.disciplina-main {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  padding: 16px;\n}\n\n.disciplina-info {\n  min-width: 0;\n  flex: 1;\n}\n\n.disciplina-id {\n  display: inline-block;\n  margin-bottom: 6px;\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 850;\n}\n\n.disciplina-info h4 {\n  margin: 0;\n  color: var(--text, #0f172a);\n  font-size: 18px;\n  font-weight: 850;\n}\n\n.disciplina-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 10px;\n}\n\n.disciplina-actions {\n  display: inline-flex;\n  align-items: center;\n  flex-shrink: 0;\n  gap: 6px;\n}\n\n.disciplinas-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 4px 2px 0;\n}\n\n.disciplinas-pagination span {\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 750;\n}\n\n.assuntos-panel {\n  margin: 0;\n  padding: 18px;\n  border-top: 1px solid #dbeafe;\n  background: var(--surface-muted, #fbfdff);\n}\n\n.assuntos-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.assuntos-header h4 {\n  margin: 2px 0 0;\n  color: var(--text, #0f172a);\n  font-size: 17px;\n  font-weight: 850;\n}\n\n.assunto-form {\n  gap: 12px;\n  margin-bottom: 16px;\n  padding: 12px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n}\n\n.assunto-form .form-field {\n  flex: 1;\n  min-width: 240px;\n}\n\n.eyebrow {\n  color: #1677ff;\n  font-size: 12px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.assuntos-loading,\n.assuntos-empty {\n  padding: 16px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--text-muted, #64748b);\n  background: var(--surface, #fff);\n}\n\n.assuntos-list {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n}\n\n.assunto-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  min-height: 50px;\n  padding: 12px 16px;\n  background: var(--surface, #fff);\n}\n\n.assunto-item + .assunto-item {\n  border-top: 1px solid var(--border, #eef2f7);\n}\n\n.assunto-info {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--text, #334155);\n  font-weight: 700;\n}\n\n.assunto-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: #1677ff;\n  box-shadow: 0 0 0 4px #eff6ff;\n}\n\n.assunto-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.empty-value {\n  color: #94a3b8;\n  font-style: italic;\n}\n\n@media (max-width: 760px) {\n  .materias-page {\n    padding: 14px;\n  }\n\n  .page-heading {\n    margin-bottom: 16px;\n  }\n\n  .page-heading h2 {\n    font-size: 21px;\n  }\n\n  .categorias-topo,\n  .planejamentos-section,\n  .disciplinas-section,\n  .materia-form {\n    margin: 14px 0;\n    padding: 14px;\n  }\n\n  .section-heading {\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .categorias-abas {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    padding-bottom: 4px;\n  }\n\n  .categorias-abas button {\n    flex: 0 0 auto;\n  }\n\n  .materia-form {\n    display: block;\n  }\n\n  .data-manager-form {\n    display: block;\n  }\n\n  .materia-form .form-field,\n  .data-manager-form .form-field,\n  .materia-form nz-select,\n  .categoria-edit-select {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .manager-list {\n    grid-template-columns: 1fr;\n  }\n\n  .manager-item {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .manager-actions,\n  .disciplina-actions {\n    justify-content: flex-end;\n  }\n\n  .disciplina-main {\n    flex-direction: column;\n    gap: 12px;\n    padding: 14px;\n  }\n\n  .disciplina-actions {\n    align-items: flex-start;\n    flex-wrap: wrap;\n    width: 100%;\n  }\n\n  .disciplinas-pagination {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .assuntos-panel {\n    padding: 14px;\n  }\n\n  .assuntos-header {\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .assunto-item {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .assunto-actions {\n    justify-content: flex-end;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MateriaListaComponent, { className: "MateriaListaComponent", filePath: "src/app/pages/materia-lista/materia-lista.ts", lineNumber: 41 }); })();
