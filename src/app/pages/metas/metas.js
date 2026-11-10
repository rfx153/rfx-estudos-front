import { CommonModule, formatDate } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { timeout } from 'rxjs';
import { MateriaService } from '../../services/materia.service';
import { MetaMateriaService, } from '../../services/meta-materia.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function MetasComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.erro);
} }
function MetasComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1, "Carregando metas...");
    i0.ɵɵelementEnd();
} }
function MetasComponent_section_27_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 19)(1, "div", 20)(2, "div")(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 21)(10, "a", 22);
    i0.ɵɵtext(11, "Iniciar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 8);
    i0.ɵɵlistener("click", function MetasComponent_section_27_article_1_Template_button_click_12_listener() { const meta_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.editar(meta_r3)); });
    i0.ɵɵtext(13, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 23);
    i0.ɵɵlistener("click", function MetasComponent_section_27_article_1_Template_button_click_14_listener() { const meta_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.excluir(meta_r3)); });
    i0.ɵɵtext(15, "Remover");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 24);
    i0.ɵɵelement(17, "span");
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "small");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const meta_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(meta_r3.materiaNome);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Falta: ", ctx_r0.formatarDuracao(ctx_r0.restante(meta_r3)));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u00B7 Meta definida: ", ctx_r0.formatarDuracao(meta_r3.metaPeriodoMinutos));
    i0.ɵɵadvance(8);
    i0.ɵɵattribute("aria-label", ctx_r0.porcentagem(meta_r3).toFixed(1) + "% conclu\u00EDdo");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", ctx_r0.porcentagem(meta_r3), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(20, 8, ctx_r0.porcentagem(meta_r3), "1.0-1"), "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.formatarDuracao(meta_r3.tempoRealizadoMinutos), " estudados no per\u00EDodo");
} }
function MetasComponent_section_27_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1, "Nenhuma meta cadastrada. Adicione uma meta semanal para come\u00E7ar.");
    i0.ɵɵelementEnd();
} }
function MetasComponent_section_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 16);
    i0.ɵɵtemplate(1, MetasComponent_section_27_article_1_Template, 23, 11, "article", 17)(2, MetasComponent_section_27_p_2_Template, 2, 0, "p", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.resumo);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.resumo.length);
} }
function MetasComponent_div_28_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const materia_r5 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", materia_r5.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(materia_r5.nome);
} }
function MetasComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵlistener("click", function MetasComponent_div_28_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelarEdicao()); });
    i0.ɵɵelementStart(1, "form", 27);
    i0.ɵɵlistener("ngSubmit", function MetasComponent_div_28_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.salvar()); })("click", function MetasComponent_div_28_Template_form_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "header")(3, "div")(4, "p", 2);
    i0.ɵɵtext(5, "Configura\u00E7\u00E3o");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 28);
    i0.ɵɵlistener("click", function MetasComponent_div_28_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelarEdicao()); });
    i0.ɵɵtext(9, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "label");
    i0.ɵɵtext(11, "Mat\u00E9ria ");
    i0.ɵɵelementStart(12, "select", 29);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MetasComponent_div_28_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.materiaId, $event) || (ctx_r0.formulario.materiaId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(13, "option", 30);
    i0.ɵɵtext(14, "Selecione a mat\u00E9ria");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, MetasComponent_div_28_option_15_Template, 2, 2, "option", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 32)(17, "label");
    i0.ɵɵtext(18, "Horas");
    i0.ɵɵelementStart(19, "input", 33);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MetasComponent_div_28_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.horas, $event) || (ctx_r0.formulario.horas = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label");
    i0.ɵɵtext(21, "Minutos");
    i0.ɵɵelementStart(22, "input", 34);
    i0.ɵɵcontrolCreate();
    i0.ɵɵtwoWayListener("ngModelChange", function MetasComponent_div_28_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.formulario.minutos, $event) || (ctx_r0.formulario.minutos = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "p", 35);
    i0.ɵɵtext(24, "A meta mensal ser\u00E1 calculada automaticamente a partir desta meta semanal.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "footer")(26, "button", 8);
    i0.ɵɵlistener("click", function MetasComponent_div_28_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelarEdicao()); });
    i0.ɵɵtext(27, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 36);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.metaEmEdicao ? "Editar meta semanal" : "Nova meta semanal");
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.materiaId);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.materiasSemMeta);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.horas);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.formulario.minutos);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r0.salvando);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.salvando ? "Salvando..." : "Salvar meta");
} }
export class MetasComponent {
    metaService = inject(MetaMateriaService);
    materiaService = inject(MateriaService);
    cdr = inject(ChangeDetectorRef);
    periodo = 'SEMANAL';
    referencia = new Date();
    inicio = '';
    fim = '';
    resumo = [];
    materias = [];
    carregando = false;
    salvando = false;
    erro = '';
    metaEmEdicao = null;
    modalAberto = false;
    formulario = { materiaId: null, horas: 1, minutos: 0 };
    ngOnInit() {
        this.materiaService.listarTodas().subscribe({
            next: materias => {
                this.materias = materias;
                this.cdr.detectChanges();
            },
            error: () => {
                this.erro = 'Não foi possível carregar as matérias.';
                this.cdr.detectChanges();
            },
        });
        this.atualizarPeriodo();
    }
    get tituloPeriodo() {
        const inicio = this.dataLocal(this.inicio);
        const fim = this.dataLocal(this.fim);
        if (this.periodo === 'MENSAL') {
            return inicio.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
        }
        return `${inicio.toLocaleDateString('pt-BR')} a ${fim.toLocaleDateString('pt-BR')}`;
    }
    get materiasSemMeta() {
        const idsComMeta = new Set(this.resumo.map(meta => meta.materiaId));
        const materiaAtual = this.metaEmEdicao?.materia.id;
        return this.materias.filter(materia => materia.id === materiaAtual || !idsComMeta.has(materia.id));
    }
    mudarPeriodo(periodo) {
        this.periodo = periodo;
        this.atualizarPeriodo();
    }
    navegar(direcao) {
        const novaReferencia = new Date(this.referencia);
        if (this.periodo === 'SEMANAL')
            novaReferencia.setDate(novaReferencia.getDate() + (direcao * 7));
        else
            novaReferencia.setMonth(novaReferencia.getMonth() + direcao);
        this.referencia = novaReferencia;
        this.atualizarPeriodo();
    }
    salvar() {
        if (!this.formulario.materiaId) {
            this.erro = 'Selecione uma matéria.';
            return;
        }
        const totalMinutos = (Number(this.formulario.horas) * 60) + Number(this.formulario.minutos);
        if (!Number.isInteger(totalMinutos) || totalMinutos <= 0) {
            this.erro = 'Informe uma meta semanal maior que zero.';
            return;
        }
        this.salvando = true;
        this.erro = '';
        const payload = { materiaId: this.formulario.materiaId, metaSemanalMinutos: totalMinutos };
        const requisicao = this.metaEmEdicao
            ? this.metaService.atualizar(this.metaEmEdicao.id, payload)
            : this.metaService.criar(payload);
        requisicao.subscribe({
            next: () => {
                this.salvando = false;
                this.cancelarEdicao();
                this.carregarResumo();
            },
            error: () => {
                this.salvando = false;
                this.erro = 'Não foi possível salvar a meta. Verifique se a matéria já possui uma meta.';
            },
        });
    }
    editar(meta) {
        this.metaEmEdicao = {
            id: meta.id,
            materia: { id: meta.materiaId, nome: meta.materiaNome },
            metaSemanalMinutos: meta.metaSemanalMinutos,
        };
        this.formulario = {
            materiaId: meta.materiaId,
            horas: Math.floor(meta.metaSemanalMinutos / 60),
            minutos: meta.metaSemanalMinutos % 60,
        };
        this.erro = '';
        this.modalAberto = true;
    }
    cancelarEdicao() {
        this.metaEmEdicao = null;
        this.formulario = { materiaId: null, horas: 1, minutos: 0 };
        this.modalAberto = false;
    }
    abrirCriacao() {
        this.metaEmEdicao = null;
        this.formulario = { materiaId: null, horas: 1, minutos: 0 };
        this.erro = '';
        this.modalAberto = true;
    }
    excluir(meta) {
        if (!confirm(`Remover a meta de ${meta.materiaNome}?`))
            return;
        this.metaService.excluir(meta.id).subscribe({
            next: () => this.carregarResumo(),
            error: () => this.erro = 'Não foi possível remover a meta.',
        });
    }
    porcentagem(meta) {
        if (!meta.metaPeriodoMinutos)
            return 0;
        return Math.min(100, (meta.tempoRealizadoMinutos / meta.metaPeriodoMinutos) * 100);
    }
    restante(meta) {
        return Math.max(0, meta.metaPeriodoMinutos - meta.tempoRealizadoMinutos);
    }
    formatarDuracao(minutos) {
        const horas = Math.floor(minutos / 60);
        const minutosRestantes = minutos % 60;
        if (!horas)
            return `${minutosRestantes}min`;
        if (!minutosRestantes)
            return `${horas}h`;
        return `${horas}h ${minutosRestantes}min`;
    }
    atualizarPeriodo() {
        const referencia = new Date(this.referencia);
        let inicio;
        let fim;
        if (this.periodo === 'SEMANAL') {
            inicio = new Date(referencia);
            inicio.setDate(referencia.getDate() - referencia.getDay());
            fim = new Date(inicio);
            fim.setDate(inicio.getDate() + 6);
        }
        else {
            inicio = new Date(referencia.getFullYear(), referencia.getMonth(), 1);
            fim = new Date(referencia.getFullYear(), referencia.getMonth() + 1, 0);
        }
        this.inicio = formatDate(inicio, 'yyyy-MM-dd', 'en-US');
        this.fim = formatDate(fim, 'yyyy-MM-dd', 'en-US');
        this.carregarResumo();
    }
    carregarResumo() {
        this.carregando = true;
        this.erro = '';
        this.metaService.resumir(this.inicio, this.fim, this.periodo).pipe(timeout(15000)).subscribe({
            next: resumo => {
                this.resumo = resumo;
                this.carregando = false;
                this.cdr.detectChanges();
            },
            error: () => {
                this.erro = 'Não foi possível carregar as metas para este período. Verifique se a migration foi executada e se a API está disponível.';
                this.carregando = false;
                this.cdr.detectChanges();
            },
        });
    }
    dataLocal(data) {
        const [ano, mes, dia] = data.split('-').map(Number);
        return new Date(ano, mes - 1, dia);
    }
    static ɵfac = function MetasComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MetasComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MetasComponent, selectors: [["app-metas"]], decls: 29, vars: 9, consts: [[1, "metas-page"], [1, "page-heading"], [1, "eyebrow"], ["type", "button", 1, "primary", "nova-meta", 3, "click"], ["aria-label", "Per\u00EDodo das metas", 1, "periodo-card"], [1, "periodo-controles"], ["type", "button", "aria-label", "Per\u00EDodo anterior", 3, "click"], [1, "periodo-seletor"], ["type", "button", 3, "click"], ["type", "button", "aria-label", "Pr\u00F3ximo per\u00EDodo", 3, "click"], ["class", "mensagem erro", 4, "ngIf"], ["class", "mensagem", 4, "ngIf"], ["class", "metas-lista", 4, "ngIf"], ["class", "modal-fundo", 3, "click", 4, "ngIf"], [1, "mensagem", "erro"], [1, "mensagem"], [1, "metas-lista"], ["class", "meta-item", 4, "ngFor", "ngForOf"], ["class", "vazio", 4, "ngIf"], [1, "meta-item"], [1, "meta-cabecalho"], [1, "acoes"], ["routerLink", "/novo-registro"], ["type", "button", 1, "remover", 3, "click"], [1, "barra"], [1, "vazio"], [1, "modal-fundo", 3, "click"], [1, "modal", 3, "ngSubmit", "click"], ["type", "button", "aria-label", "Fechar", 1, "fechar", 3, "click"], ["name", "materia", "required", "", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "duracao"], ["type", "number", "name", "horas", "min", "0", "step", "1", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "minutos", "min", "0", "max", "59", "step", "1", 3, "ngModelChange", "ngModel"], [1, "modal-ajuda"], ["type", "submit", 1, "primary", 3, "disabled"]], template: function MetasComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
            i0.ɵɵtext(4, "Acompanhamento");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Metas de estudo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "O progresso \u00E9 calculado automaticamente a partir dos registros salvos.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "button", 3);
            i0.ɵɵlistener("click", function MetasComponent_Template_button_click_9_listener() { return ctx.abrirCriacao(); });
            i0.ɵɵtext(10, "+ Nova meta semanal");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "section", 4)(12, "div", 5)(13, "button", 6);
            i0.ɵɵlistener("click", function MetasComponent_Template_button_click_13_listener() { return ctx.navegar(-1); });
            i0.ɵɵtext(14, "\u2039");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div")(16, "div", 7)(17, "button", 8);
            i0.ɵɵlistener("click", function MetasComponent_Template_button_click_17_listener() { return ctx.mudarPeriodo("SEMANAL"); });
            i0.ɵɵtext(18, "Semana");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 8);
            i0.ɵɵlistener("click", function MetasComponent_Template_button_click_19_listener() { return ctx.mudarPeriodo("MENSAL"); });
            i0.ɵɵtext(20, "M\u00EAs");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "h2");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "button", 9);
            i0.ɵɵlistener("click", function MetasComponent_Template_button_click_23_listener() { return ctx.navegar(1); });
            i0.ɵɵtext(24, "\u203A");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(25, MetasComponent_p_25_Template, 2, 1, "p", 10)(26, MetasComponent_p_26_Template, 2, 0, "p", 11)(27, MetasComponent_section_27_Template, 3, 2, "section", 12)(28, MetasComponent_div_28_Template, 30, 8, "div", 13);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(17);
            i0.ɵɵclassProp("ativo", ctx.periodo === "SEMANAL");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("ativo", ctx.periodo === "MENSAL");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.tituloPeriodo);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.erro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.modalAberto);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinValidator, i2.MaxValidator, i2.NgModel, i2.NgForm, RouterLink, i1.DecimalPipe], styles: [".metas-page[_ngcontent-%COMP%] { display: grid; gap: 20px; }\n.page-heading[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 16px; }.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .meta-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .periodo-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: var(--%NS%text, #0f172a); }\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.eyebrow) { margin: 8px 0 0; color: var(--%NS%text-muted, #64748b); }\n.eyebrow[_ngcontent-%COMP%] { margin: 0 0 5px; color: #1677ff; font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }\n.periodo-card[_ngcontent-%COMP%], .meta-form[_ngcontent-%COMP%], .meta-item[_ngcontent-%COMP%] { border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 12px; background: var(--%NS%surface, #fff); box-shadow: 0 5px 18px rgba(15, 23, 42, .04); }\n.periodo-card[_ngcontent-%COMP%] { padding: 18px; }\n.periodo-controles[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 18px; text-align: center; }\n.periodo-controles[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] { width: 42px; height: 42px; border: 1px solid var(--%NS%border, #e5e7eb); border-radius: 50%; background: var(--%NS%surface, #fff); color: var(--%NS%text, #0f172a); font-size: 30px; line-height: 1; cursor: pointer; }\n.periodo-seletor[_ngcontent-%COMP%] { display: inline-flex; margin-bottom: 8px; padding: 3px; border-radius: 8px; background: #f1f5f9; }\n.periodo-seletor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .meta-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .acoes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .acoes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { border: 0; border-radius: 7px; padding: 8px 11px; background: transparent; color: #475569; font: inherit; font-weight: 700; cursor: pointer; text-decoration: none; }\n.periodo-seletor[_ngcontent-%COMP%]   .ativo[_ngcontent-%COMP%] { background: #fff; color: #1677ff; box-shadow: 0 2px 7px rgba(15,23,42,.12); }\n.primary[_ngcontent-%COMP%] { border: 0; border-radius: 7px; padding: 9px 12px; background: #1677ff; color: #fff; font: inherit; font-weight: 750; cursor: pointer; }.primary[_ngcontent-%COMP%]:disabled { opacity: .6; cursor: wait; }\n.metas-lista[_ngcontent-%COMP%] { display: grid; gap: 12px; }.meta-item[_ngcontent-%COMP%] { padding: 18px; }.meta-cabecalho[_ngcontent-%COMP%] { display: flex; justify-content: space-between; gap: 16px; align-items: center; }.meta-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 17px; }.meta-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 6px 0 0; color: var(--%NS%text-muted, #64748b); }.meta-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: #e87800; }.acoes[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; }.acoes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { background: #1677ff; color: #fff; }.acoes[_ngcontent-%COMP%]   .remover[_ngcontent-%COMP%] { color: #dc2626; }\n.barra[_ngcontent-%COMP%] { position: relative; height: 28px; margin: 15px 0 7px; overflow: hidden; border-radius: 6px; background: #e9eef5; text-align: center; }.barra[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { position: absolute; inset: 0 auto 0 0; background: #65a30d; transition: width .2s ease; }.barra[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { position: relative; z-index: 1; display: grid; height: 100%; place-items: center; color: #1e3a5f; font-size: 13px; }.meta-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: var(--%NS%text-muted, #64748b); }.mensagem[_ngcontent-%COMP%], .vazio[_ngcontent-%COMP%] { margin: 0; color: var(--%NS%text-muted, #64748b); }.erro[_ngcontent-%COMP%] { color: #dc2626; }\n.modal-fundo[_ngcontent-%COMP%] { position: fixed; z-index: 30; inset: 0; display: grid; place-items: center; padding: 18px; background: rgba(15, 23, 42, .5); }.modal[_ngcontent-%COMP%] { width: min(100%, 480px); display: grid; gap: 18px; padding: 22px; border-radius: 12px; background: var(--%NS%surface, #fff); box-shadow: 0 24px 70px rgba(15,23,42,.3); }.modal[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 12px; }.modal[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: grid; gap: 6px; color: var(--%NS%text-muted, #64748b); font-size: 13px; font-weight: 700; }.modal[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; box-sizing: border-box; min-height: 40px; padding: 8px 10px; border: 1px solid var(--%NS%border, #cbd5e1); border-radius: 7px; background: var(--%NS%surface, #fff); color: var(--%NS%text, #0f172a); font: inherit; }.duracao[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }.fechar[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.primary) { border: 0; border-radius: 7px; padding: 8px 10px; background: transparent; color: var(--%NS%text-muted, #64748b); font: inherit; font-weight: 700; cursor: pointer; }.fechar[_ngcontent-%COMP%] { font-size: 24px; line-height: 1; }.modal-ajuda[_ngcontent-%COMP%] { margin: -5px 0 0; color: var(--%NS%text-muted, #64748b); font-size: 13px; }\n@media (max-width: 640px) { .page-heading[_ngcontent-%COMP%], .meta-cabecalho[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; }.acoes[_ngcontent-%COMP%] { width: 100%; flex-wrap: wrap; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MetasComponent, [{
        type: Component,
        args: [{ selector: 'app-metas', standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: "<section class=\"metas-page\">\n  <header class=\"page-heading\">\n    <div>\n      <p class=\"eyebrow\">Acompanhamento</p>\n      <h1>Metas de estudo</h1>\n      <p>O progresso \u00E9 calculado automaticamente a partir dos registros salvos.</p>\n    </div>\n    <button class=\"primary nova-meta\" type=\"button\" (click)=\"abrirCriacao()\">+ Nova meta semanal</button>\n  </header>\n\n  <section class=\"periodo-card\" aria-label=\"Per\u00EDodo das metas\">\n    <div class=\"periodo-controles\">\n      <button type=\"button\" (click)=\"navegar(-1)\" aria-label=\"Per\u00EDodo anterior\">\u2039</button>\n      <div>\n        <div class=\"periodo-seletor\">\n          <button type=\"button\" [class.ativo]=\"periodo === 'SEMANAL'\" (click)=\"mudarPeriodo('SEMANAL')\">Semana</button>\n          <button type=\"button\" [class.ativo]=\"periodo === 'MENSAL'\" (click)=\"mudarPeriodo('MENSAL')\">M\u00EAs</button>\n        </div>\n        <h2>{{ tituloPeriodo }}</h2>\n      </div>\n      <button type=\"button\" (click)=\"navegar(1)\" aria-label=\"Pr\u00F3ximo per\u00EDodo\">\u203A</button>\n    </div>\n  </section>\n\n  <p *ngIf=\"erro\" class=\"mensagem erro\">{{ erro }}</p>\n  <p *ngIf=\"carregando\" class=\"mensagem\">Carregando metas...</p>\n\n  <section *ngIf=\"!carregando\" class=\"metas-lista\">\n    <article *ngFor=\"let meta of resumo\" class=\"meta-item\">\n      <div class=\"meta-cabecalho\">\n        <div>\n          <h2>{{ meta.materiaNome }}</h2>\n          <p><strong>Falta: {{ formatarDuracao(restante(meta)) }}</strong> \u00B7 Meta definida: {{ formatarDuracao(meta.metaPeriodoMinutos) }}</p>\n        </div>\n        <div class=\"acoes\">\n          <a routerLink=\"/novo-registro\">Iniciar</a>\n          <button type=\"button\" (click)=\"editar(meta)\">Editar</button>\n          <button type=\"button\" class=\"remover\" (click)=\"excluir(meta)\">Remover</button>\n        </div>\n      </div>\n      <div class=\"barra\" [attr.aria-label]=\"porcentagem(meta).toFixed(1) + '% conclu\u00EDdo'\">\n        <span [style.width.%]=\"porcentagem(meta)\"></span>\n        <strong>{{ porcentagem(meta) | number:'1.0-1' }}%</strong>\n      </div>\n      <small>{{ formatarDuracao(meta.tempoRealizadoMinutos) }} estudados no per\u00EDodo</small>\n    </article>\n    <p *ngIf=\"!resumo.length\" class=\"vazio\">Nenhuma meta cadastrada. Adicione uma meta semanal para come\u00E7ar.</p>\n  </section>\n\n  <div *ngIf=\"modalAberto\" class=\"modal-fundo\" (click)=\"cancelarEdicao()\">\n    <form class=\"modal\" (ngSubmit)=\"salvar()\" (click)=\"$event.stopPropagation()\">\n      <header>\n        <div>\n          <p class=\"eyebrow\">Configura\u00E7\u00E3o</p>\n          <h2>{{ metaEmEdicao ? 'Editar meta semanal' : 'Nova meta semanal' }}</h2>\n        </div>\n        <button type=\"button\" class=\"fechar\" (click)=\"cancelarEdicao()\" aria-label=\"Fechar\">\u00D7</button>\n      </header>\n      <label>Mat\u00E9ria\n        <select name=\"materia\" [(ngModel)]=\"formulario.materiaId\" required>\n          <option [ngValue]=\"null\">Selecione a mat\u00E9ria</option>\n          <option *ngFor=\"let materia of materiasSemMeta\" [ngValue]=\"materia.id\">{{ materia.nome }}</option>\n        </select>\n      </label>\n      <div class=\"duracao\">\n        <label>Horas<input type=\"number\" name=\"horas\" min=\"0\" step=\"1\" [(ngModel)]=\"formulario.horas\" /></label>\n        <label>Minutos<input type=\"number\" name=\"minutos\" min=\"0\" max=\"59\" step=\"1\" [(ngModel)]=\"formulario.minutos\" /></label>\n      </div>\n      <p class=\"modal-ajuda\">A meta mensal ser\u00E1 calculada automaticamente a partir desta meta semanal.</p>\n      <footer>\n        <button type=\"button\" (click)=\"cancelarEdicao()\">Cancelar</button>\n        <button class=\"primary\" type=\"submit\" [disabled]=\"salvando\">{{ salvando ? 'Salvando...' : 'Salvar meta' }}</button>\n      </footer>\n    </form>\n  </div>\n</section>\n", styles: [".metas-page { display: grid; gap: 20px; }\n.page-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; }.page-heading h1, .meta-item h2, .periodo-card h2, .modal h2 { margin: 0; color: var(--text, #0f172a); }\n.page-heading p:not(.eyebrow) { margin: 8px 0 0; color: var(--text-muted, #64748b); }\n.eyebrow { margin: 0 0 5px; color: #1677ff; font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }\n.periodo-card, .meta-form, .meta-item { border: 1px solid var(--border, #e5e7eb); border-radius: 12px; background: var(--surface, #fff); box-shadow: 0 5px 18px rgba(15, 23, 42, .04); }\n.periodo-card { padding: 18px; }\n.periodo-controles { display: flex; align-items: center; justify-content: space-between; gap: 18px; text-align: center; }\n.periodo-controles > button { width: 42px; height: 42px; border: 1px solid var(--border, #e5e7eb); border-radius: 50%; background: var(--surface, #fff); color: var(--text, #0f172a); font-size: 30px; line-height: 1; cursor: pointer; }\n.periodo-seletor { display: inline-flex; margin-bottom: 8px; padding: 3px; border-radius: 8px; background: #f1f5f9; }\n.periodo-seletor button, .meta-form button, .acoes button, .acoes a { border: 0; border-radius: 7px; padding: 8px 11px; background: transparent; color: #475569; font: inherit; font-weight: 700; cursor: pointer; text-decoration: none; }\n.periodo-seletor .ativo { background: #fff; color: #1677ff; box-shadow: 0 2px 7px rgba(15,23,42,.12); }\n.primary { border: 0; border-radius: 7px; padding: 9px 12px; background: #1677ff; color: #fff; font: inherit; font-weight: 750; cursor: pointer; }.primary:disabled { opacity: .6; cursor: wait; }\n.metas-lista { display: grid; gap: 12px; }.meta-item { padding: 18px; }.meta-cabecalho { display: flex; justify-content: space-between; gap: 16px; align-items: center; }.meta-item h2 { font-size: 17px; }.meta-item p { margin: 6px 0 0; color: var(--text-muted, #64748b); }.meta-item p strong { color: #e87800; }.acoes { display: flex; align-items: center; gap: 4px; }.acoes a { background: #1677ff; color: #fff; }.acoes .remover { color: #dc2626; }\n.barra { position: relative; height: 28px; margin: 15px 0 7px; overflow: hidden; border-radius: 6px; background: #e9eef5; text-align: center; }.barra span { position: absolute; inset: 0 auto 0 0; background: #65a30d; transition: width .2s ease; }.barra strong { position: relative; z-index: 1; display: grid; height: 100%; place-items: center; color: #1e3a5f; font-size: 13px; }.meta-item small { color: var(--text-muted, #64748b); }.mensagem, .vazio { margin: 0; color: var(--text-muted, #64748b); }.erro { color: #dc2626; }\n.modal-fundo { position: fixed; z-index: 30; inset: 0; display: grid; place-items: center; padding: 18px; background: rgba(15, 23, 42, .5); }.modal { width: min(100%, 480px); display: grid; gap: 18px; padding: 22px; border-radius: 12px; background: var(--surface, #fff); box-shadow: 0 24px 70px rgba(15,23,42,.3); }.modal header, .modal footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; }.modal label { display: grid; gap: 6px; color: var(--text-muted, #64748b); font-size: 13px; font-weight: 700; }.modal select, .modal input { width: 100%; box-sizing: border-box; min-height: 40px; padding: 8px 10px; border: 1px solid var(--border, #cbd5e1); border-radius: 7px; background: var(--surface, #fff); color: var(--text, #0f172a); font: inherit; }.duracao { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }.fechar, .modal footer button:not(.primary) { border: 0; border-radius: 7px; padding: 8px 10px; background: transparent; color: var(--text-muted, #64748b); font: inherit; font-weight: 700; cursor: pointer; }.fechar { font-size: 24px; line-height: 1; }.modal-ajuda { margin: -5px 0 0; color: var(--text-muted, #64748b); font-size: 13px; }\n@media (max-width: 640px) { .page-heading, .meta-cabecalho { align-items: flex-start; flex-direction: column; }.acoes { width: 100%; flex-wrap: wrap; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MetasComponent, { className: "MetasComponent", filePath: "src/app/pages/metas/metas.ts", lineNumber: 21 }); })();
