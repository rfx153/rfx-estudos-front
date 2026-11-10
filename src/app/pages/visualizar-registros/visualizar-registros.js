import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { RegistroDetalhesModalComponent } from '../../shared/registro-detalhes-modal/registro-detalhes-modal';
import * as i0 from "@angular/core";
import * as i1 from "../../services/registro.service";
import * as i2 from "../../services/materia.service";
import * as i3 from "ng-zorro-antd/message";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "ng-zorro-antd/select";
import * as i8 from "ng-zorro-antd/grid";
import * as i9 from "ng-zorro-antd/card";
import * as i10 from "ng-zorro-antd/tag";
import * as i11 from "ng-zorro-antd/button";
import * as i12 from "ng-zorro-antd/core/transition-patch";
import * as i13 from "ng-zorro-antd/core/wave";
import * as i14 from "ng-zorro-antd/pagination";
function VisualizarRegistrosComponent_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 11);
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", m_r1.nome)("nzValue", m_r1.id);
} }
function VisualizarRegistrosComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1, "Carregando hist\u00F3rico...");
    i0.ɵɵelementEnd();
} }
function VisualizarRegistrosComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, " Nenhum registro encontrado. ");
    i0.ɵɵelementEnd();
} }
function VisualizarRegistrosComponent_section_10_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 18)(1, "div", 19)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 20)(9, "div", 21)(10, "div")(11, "h3");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 22)(16, "button", 23);
    i0.ɵɵlistener("click", function VisualizarRegistrosComponent_section_10_article_1_Template_button_click_16_listener() { const registro_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.abrirDetalhes(registro_r4)); });
    i0.ɵɵtext(17, "Ver");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 24);
    i0.ɵɵlistener("click", function VisualizarRegistrosComponent_section_10_article_1_Template_button_click_18_listener() { const registro_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.editarRegistro(registro_r4)); });
    i0.ɵɵtext(19, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 25);
    i0.ɵɵlistener("click", function VisualizarRegistrosComponent_section_10_article_1_Template_button_click_20_listener() { const registro_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.excluirRegistro(registro_r4)); });
    i0.ɵɵtext(21, "Apagar");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 26)(23, "nz-tag", 27);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "nz-tag", 28);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 29);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span", 29);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 30)(32, "div")(33, "small");
    i0.ɵɵtext(34, "Tempo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "small");
    i0.ɵɵtext(39, "Quest\u00F5es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "strong");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div")(43, "small");
    i0.ɵɵtext(44, "Aproveitamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "strong");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 31)(48, "small");
    i0.ɵɵtext(49, "Material");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "strong");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const registro_r4 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 13, registro_r4.dataEstudo, "dd"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 16, registro_r4.dataEstudo, "MMM/yyyy"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(registro_r4.materia?.nome || "Mat\u00E9ria n\u00E3o informada");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(registro_r4.assunto?.nome || "Assunto n\u00E3o informado");
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(registro_r4.tipoRegistro?.nome || "Registro");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(registro_r4.materialTipo?.nome || "Material");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Material-guia: ", registro_r4.materialGuia?.nome || "N\u00E3o informado");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Planejamento: ", registro_r4.planejamento?.nome || "N\u00E3o informado");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(registro_r4.tempoEstudado || "00:00");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", registro_r4.questoesAcertadas || 0, "/", registro_r4.questoesFeitas || 0);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r4.calcularAproveitamento(registro_r4.questoesFeitas, registro_r4.questoesAcertadas));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(registro_r4.materialNome || "N\u00E3o informado");
} }
function VisualizarRegistrosComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 14);
    i0.ɵɵtemplate(1, VisualizarRegistrosComponent_section_10_article_1_Template, 52, 19, "article", 15);
    i0.ɵɵelementStart(2, "div", 16)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nz-pagination", 17);
    i0.ɵɵlistener("nzPageIndexChange", function VisualizarRegistrosComponent_section_10_Template_nz_pagination_nzPageIndexChange_5_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.trocarPagina($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.registrosPaginados)("ngForTrackBy", ctx_r4.trackByRegistroId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3(" Mostrando ", ctx_r4.primeiroRegistroDaPagina, "-", ctx_r4.ultimoRegistroDaPagina, " de ", ctx_r4.totalRegistrosHistorico, " registro(s) ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzPageIndex", ctx_r4.paginaAtual)("nzPageSize", ctx_r4.itensPorPagina)("nzTotal", ctx_r4.totalRegistrosHistorico)("nzShowSizeChanger", false);
} }
export class VisualizarRegistrosComponent {
    registroService;
    materiaService;
    cdr;
    message;
    router;
    listaRegistros = [];
    registrosFiltrados = [];
    listaMaterias = [];
    materiaSelecionadaId = null;
    carregando = true;
    detalhesVisiveis = false;
    registrosSelecionados = [];
    detalhesTitulo = 'Detalhes do estudo';
    paginaAtual = 1;
    itensPorPagina = 10;
    totalRegistrosHistorico = 0;
    constructor(registroService, materiaService, cdr, message, router) {
        this.registroService = registroService;
        this.materiaService = materiaService;
        this.cdr = cdr;
        this.message = message;
        this.router = router;
    }
    ngOnInit() {
        this.carregarMaterias();
        this.carregarRegistrosRecentes();
    }
    carregarMaterias() {
        this.materiaService.listarTodas().subscribe(materias => {
            this.listaMaterias = materias;
            this.cdr.detectChanges();
        });
    }
    carregarRegistrosRecentes(materiaId = this.materiaSelecionadaId) {
        this.carregando = true;
        this.registroService.listarRecentesPaginado(this.paginaAtual - 1, this.itensPorPagina, materiaId).subscribe({
            next: pagina => {
                this.listaRegistros = pagina.content;
                this.registrosFiltrados = pagina.content;
                this.totalRegistrosHistorico = pagina.totalElements;
                this.carregando = false;
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao carregar histórico:', erro);
                this.carregando = false;
                this.cdr.detectChanges();
            }
        });
    }
    // 🔥 LÓGICA DO FILTRO POR MATÉRIA
    filtrarPorMateria(materiaId) {
        this.materiaSelecionadaId = materiaId;
        this.paginaAtual = 1;
        this.carregarRegistrosRecentes(materiaId);
    }
    get registrosPaginados() {
        return this.registrosFiltrados;
    }
    get primeiroRegistroDaPagina() {
        if (!this.totalRegistrosHistorico)
            return 0;
        return (this.paginaAtual - 1) * this.itensPorPagina + 1;
    }
    get ultimoRegistroDaPagina() {
        return Math.min(this.paginaAtual * this.itensPorPagina, this.totalRegistrosHistorico);
    }
    trocarPagina(pagina) {
        this.paginaAtual = pagina;
        this.carregarRegistrosRecentes();
    }
    abrirDetalhes(registro) {
        this.detalhesTitulo = `${registro.materia?.nome || 'Estudo'} - ${registro.assunto?.nome || 'Detalhes'}`;
        this.registrosSelecionados = [registro];
        this.detalhesVisiveis = true;
    }
    editarRegistro(registro) {
        this.detalhesVisiveis = false;
        this.router.navigate(['/novo-registro'], { state: { registroParaEditar: registro } });
    }
    calcularAproveitamento(feitas = 0, acertadas = 0) {
        if (!feitas)
            return '0%';
        return `${((acertadas / feitas) * 100).toFixed(0)}%`;
    }
    trackByRegistroId(index, registro) {
        return registro.id ?? index;
    }
    excluirRegistro(registro) {
        if (!registro.id || !window.confirm('Apagar este registro de estudo?'))
            return;
        this.registroService.excluir(registro.id).subscribe({
            next: () => {
                this.listaRegistros = this.listaRegistros.filter(item => item.id !== registro.id);
                this.registrosFiltrados = this.registrosFiltrados.filter(item => item.id !== registro.id);
                this.totalRegistrosHistorico = Math.max(0, this.totalRegistrosHistorico - 1);
                this.ajustarPaginaDepoisDeExcluir();
                if (this.registrosSelecionados.some(item => item.id === registro.id)) {
                    this.detalhesVisiveis = false;
                    this.registrosSelecionados = [];
                }
                this.message.success('Registro apagado com sucesso.');
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao apagar registro:', erro);
                this.message.error('Não foi possível apagar o registro.');
            }
        });
    }
    ajustarPaginaDepoisDeExcluir() {
        const totalPaginas = Math.max(1, Math.ceil(this.totalRegistrosHistorico / this.itensPorPagina));
        if (this.paginaAtual > totalPaginas) {
            this.paginaAtual = totalPaginas;
            this.carregarRegistrosRecentes();
            return;
        }
        if (!this.registrosFiltrados.length && this.totalRegistrosHistorico > 0) {
            this.carregarRegistrosRecentes();
        }
    }
    static ɵfac = function VisualizarRegistrosComponent_Factory(__ngFactoryType__) { /* @ts-ignore */
    return new (__ngFactoryType__ || VisualizarRegistrosComponent)(i0.ɵɵdirectiveInject(i1.RegistroService), i0.ɵɵdirectiveInject(i2.MateriaService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.NzMessageService), i0.ɵɵdirectiveInject(i4.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: VisualizarRegistrosComponent, selectors: [["app-visualizar-registros"]], decls: 12, vars: 11, consts: [["nzTitle", "Hist\u00F3rico de estudos", 1, "page-card", "history-card"], ["nz-row", "", 1, "filters-row", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], [1, "filter-label"], ["nzAllowClear", "", "nzPlaceHolder", "Todas as mat\u00E9rias", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzLabel", "Todas as mat\u00E9rias", 3, "nzValue"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "history-loading", 4, "ngIf"], ["class", "history-empty", 4, "ngIf"], ["class", "history-list", 4, "ngIf"], [3, "visivelChange", "editar", "visivel", "titulo", "registros"], [3, "nzLabel", "nzValue"], [1, "history-loading"], [1, "history-empty"], [1, "history-list"], ["class", "history-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "history-pagination"], [3, "nzPageIndexChange", "nzPageIndex", "nzPageSize", "nzTotal", "nzShowSizeChanger"], [1, "history-item"], [1, "date-block"], [1, "history-main"], [1, "history-title-row"], [1, "history-actions"], ["nz-button", "", "nzType", "default", "nzSize", "small", 3, "click"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "click"], ["nz-button", "", "nzDanger", "", "nzType", "link", "nzSize", "small", 3, "click"], [1, "history-meta"], ["nzColor", "purple"], ["nzColor", "blue"], [1, "meta-pill"], [1, "history-stats"], [1, "material-summary"]], template: function VisualizarRegistrosComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-card", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
            i0.ɵɵtext(4, "Filtrar por mat\u00E9ria");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "nz-select", 4);
            i0.ɵɵcontrolCreate();
            i0.ɵɵlistener("ngModelChange", function VisualizarRegistrosComponent_Template_nz_select_ngModelChange_5_listener($event) { return ctx.filtrarPorMateria($event); });
            i0.ɵɵelement(6, "nz-option", 5);
            i0.ɵɵtemplate(7, VisualizarRegistrosComponent_nz_option_7_Template, 1, 2, "nz-option", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(8, VisualizarRegistrosComponent_div_8_Template, 2, 0, "div", 7)(9, VisualizarRegistrosComponent_div_9_Template, 2, 0, "div", 8)(10, VisualizarRegistrosComponent_section_10_Template, 6, 9, "section", 9);
            i0.ɵɵelementStart(11, "app-registro-detalhes-modal", 10);
            i0.ɵɵtwoWayListener("visivelChange", function VisualizarRegistrosComponent_Template_app_registro_detalhes_modal_visivelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.detalhesVisiveis, $event) || (ctx.detalhesVisiveis = $event); return $event; });
            i0.ɵɵlistener("editar", function VisualizarRegistrosComponent_Template_app_registro_detalhes_modal_editar_11_listener($event) { return ctx.editarRegistro($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzGutter", 24);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzSpan", 8);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.materiaSelecionadaId);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzValue", null);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.listaMaterias);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.carregando);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && !ctx.registrosFiltrados.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.carregando && ctx.registrosFiltrados.length);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("visivel", ctx.detalhesVisiveis);
            i0.ɵɵproperty("titulo", ctx.detalhesTitulo)("registros", ctx.registrosSelecionados);
        } }, dependencies: [CommonModule, i5.NgForOf, i5.NgIf, FormsModule, i6.NgControlStatus, i6.NgModel, NzSelectModule, i7.NzOptionComponent, i7.NzSelectComponent, NzGridModule, i8.NzColDirective, i8.NzRowDirective, NzCardModule, i9.NzCardComponent, NzTagModule, i10.NzTagComponent, NzButtonModule, i11.NzButtonComponent, i12.ɵNzTransitionPatchDirective, i13.NzWaveDirective, NzPaginationModule, i14.NzPaginationComponent, RegistroDetalhesModalComponent, i5.DatePipe], styles: [".filters-row[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding: 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n.filter-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: var(--%NS%text, #334155);\n  font-weight: 800;\n}\n\n.history-loading[_ngcontent-%COMP%], \n.history-empty[_ngcontent-%COMP%] {\n  padding: 22px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--%NS%text-muted, #64748b);\n  background: var(--%NS%surface-muted, #fbfdff);\n  font-weight: 700;\n}\n\n.history-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 86px minmax(0, 1fr);\n  gap: 16px;\n  padding: 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n}\n\n.date-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 82px;\n  border-radius: 8px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  background: var(--%NS%surface-soft, #f1f5f9);\n  color: var(--%NS%text, #0f172a);\n}\n\n.date-block[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 1;\n  font-weight: 900;\n}\n\n.date-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.history-main[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.history-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.history-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 18px;\n  font-weight: 850;\n}\n\n.history-title-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--%NS%text-muted, #475569);\n  font-weight: 700;\n}\n\n.history-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: flex-start;\n  flex-shrink: 0;\n  gap: 6px;\n}\n\n.history-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 0;\n}\n\n.meta-pill[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 1px 8px;\n  border: 1px solid rgba(29, 78, 216, 0.2);\n  border-radius: 6px;\n  color: #1d4ed8;\n  background: rgba(37, 99, 235, 0.1);\n  font-size: 12px;\n  font-weight: 750;\n}\n\n.history-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 110px 110px 140px minmax(180px, 1fr);\n  gap: 10px;\n}\n\n.history-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 10px 12px;\n  border: 1px solid var(--%NS%border, #eef2f7);\n  border-radius: 8px;\n  background: var(--%NS%surface-muted, #fbfdff);\n}\n\n.history-stats[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 11px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.history-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  color: var(--%NS%text, #0f172a);\n  font-weight: 850;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.material-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 750;\n}\n\n.dark-theme[_nghost-%COMP%]   .history-item[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .history-item[_ngcontent-%COMP%] {\n  background: #111827;\n  border-color: rgba(148, 163, 184, 0.26);\n}\n\n.dark-theme[_nghost-%COMP%]   .date-block[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .date-block[_ngcontent-%COMP%], \n.dark-theme[_nghost-%COMP%]   .history-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .history-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border-color: rgba(148, 163, 184, 0.34);\n}\n\n.dark-theme[_nghost-%COMP%]   .date-block[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .date-block[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark-theme[_nghost-%COMP%]   .history-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .history-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark-theme[_nghost-%COMP%]   .history-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .history-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f8fafc;\n}\n\n.dark-theme[_nghost-%COMP%]   .date-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .date-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.dark-theme[_nghost-%COMP%]   .history-title-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .history-title-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dark-theme[_nghost-%COMP%]   .history-stats[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .history-stats[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.dark-theme[_nghost-%COMP%]   .history-pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .history-pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n\n.dark-theme[_nghost-%COMP%]   .meta-pill[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .meta-pill[_ngcontent-%COMP%] {\n  background: rgba(96, 165, 250, 0.18);\n  border-color: rgba(147, 197, 253, 0.42);\n  color: #dbeafe;\n}\n\n.history-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 8px 2px 0;\n}\n\n.history-pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 750;\n}\n\n@media (max-width: 760px) {\n  .filters-row[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding: 14px;\n  }\n\n  [nz-col][_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n\n  .history-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 14px;\n  }\n\n  .date-block[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    min-height: auto;\n    padding: 12px;\n  }\n\n  .history-title-row[_ngcontent-%COMP%], \n   .history-actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .history-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .history-pagination[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 520px) {\n  .history-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VisualizarRegistrosComponent, [{
        type: Component,
        args: [{ selector: 'app-visualizar-registros', standalone: true, imports: [CommonModule, FormsModule, NzSelectModule, NzGridModule, NzCardModule, NzTagModule, NzButtonModule, NzPaginationModule, RegistroDetalhesModalComponent], template: "<nz-card class=\"page-card history-card\" nzTitle=\"Hist\u00F3rico de estudos\">\n  \n  <div nz-row [nzGutter]=\"24\" class=\"filters-row\">\n    <div nz-col [nzSpan]=\"8\">\n      <label class=\"filter-label\">Filtrar por mat\u00E9ria</label>\n      <nz-select \n        [ngModel]=\"materiaSelecionadaId\" \n        (ngModelChange)=\"filtrarPorMateria($event)\" \n        nzAllowClear \n        nzPlaceHolder=\"Todas as mat\u00E9rias\" \n        style=\"width: 100%;\">\n        <nz-option nzLabel=\"Todas as mat\u00E9rias\" [nzValue]=\"null\"></nz-option>\n        <nz-option *ngFor=\"let m of listaMaterias\" [nzLabel]=\"m.nome\" [nzValue]=\"m.id\"></nz-option>\n      </nz-select>\n    </div>\n  </div>\n\n  <div class=\"history-loading\" *ngIf=\"carregando\">Carregando hist\u00F3rico...</div>\n\n  <div class=\"history-empty\" *ngIf=\"!carregando && !registrosFiltrados.length\">\n    Nenhum registro encontrado.\n  </div>\n\n  <section class=\"history-list\" *ngIf=\"!carregando && registrosFiltrados.length\">\n    <article class=\"history-item\" *ngFor=\"let registro of registrosPaginados; trackBy: trackByRegistroId\">\n      <div class=\"date-block\">\n        <strong>{{ registro.dataEstudo | date: 'dd' }}</strong>\n        <span>{{ registro.dataEstudo | date: 'MMM/yyyy' }}</span>\n      </div>\n\n      <div class=\"history-main\">\n        <div class=\"history-title-row\">\n          <div>\n            <h3>{{ registro.materia?.nome || 'Mat\u00E9ria n\u00E3o informada' }}</h3>\n            <p>{{ registro.assunto?.nome || 'Assunto n\u00E3o informado' }}</p>\n          </div>\n\n          <div class=\"history-actions\">\n            <button nz-button nzType=\"default\" nzSize=\"small\" (click)=\"abrirDetalhes(registro)\">Ver</button>\n            <button nz-button nzType=\"link\" nzSize=\"small\" (click)=\"editarRegistro(registro)\">Editar</button>\n            <button nz-button nzDanger nzType=\"link\" nzSize=\"small\" (click)=\"excluirRegistro(registro)\">Apagar</button>\n          </div>\n        </div>\n\n        <div class=\"history-meta\">\n          <nz-tag nzColor=\"purple\">{{ registro.tipoRegistro?.nome || 'Registro' }}</nz-tag>\n          <nz-tag nzColor=\"blue\">{{ registro.materialTipo?.nome || 'Material' }}</nz-tag>\n          <span class=\"meta-pill\">Material-guia: {{ registro.materialGuia?.nome || 'N\u00E3o informado' }}</span>\n          <span class=\"meta-pill\">Planejamento: {{ registro.planejamento?.nome || 'N\u00E3o informado' }}</span>\n        </div>\n\n        <div class=\"history-stats\">\n          <div>\n            <small>Tempo</small>\n            <strong>{{ registro.tempoEstudado || '00:00' }}</strong>\n          </div>\n          <div>\n            <small>Quest\u00F5es</small>\n            <strong>{{ registro.questoesAcertadas || 0 }}/{{ registro.questoesFeitas || 0 }}</strong>\n          </div>\n          <div>\n            <small>Aproveitamento</small>\n            <strong>{{ calcularAproveitamento(registro.questoesFeitas, registro.questoesAcertadas) }}</strong>\n          </div>\n          <div class=\"material-summary\">\n            <small>Material</small>\n            <strong>{{ registro.materialNome || 'N\u00E3o informado' }}</strong>\n          </div>\n        </div>\n      </div>\n    </article>\n\n    <div class=\"history-pagination\">\n      <span>\n        Mostrando {{ primeiroRegistroDaPagina }}-{{ ultimoRegistroDaPagina }} de {{ totalRegistrosHistorico }} registro(s)\n      </span>\n      <nz-pagination\n        [nzPageIndex]=\"paginaAtual\"\n        (nzPageIndexChange)=\"trocarPagina($event)\"\n        [nzPageSize]=\"itensPorPagina\"\n        [nzTotal]=\"totalRegistrosHistorico\"\n        [nzShowSizeChanger]=\"false\">\n      </nz-pagination>\n    </div>\n  </section>\n\n<app-registro-detalhes-modal\n  [(visivel)]=\"detalhesVisiveis\"\n  [titulo]=\"detalhesTitulo\"\n  [registros]=\"registrosSelecionados\"\n  (editar)=\"editarRegistro($event)\">\n</app-registro-detalhes-modal>\n</nz-card>\n", styles: [".filters-row {\n  margin-bottom: 24px;\n  padding: 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-soft, #f8fafc);\n}\n\n.filter-label {\n  display: block;\n  margin-bottom: 8px;\n  color: var(--text, #334155);\n  font-weight: 800;\n}\n\n.history-loading,\n.history-empty {\n  padding: 22px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--text-muted, #64748b);\n  background: var(--surface-muted, #fbfdff);\n  font-weight: 700;\n}\n\n.history-list {\n  display: grid;\n  gap: 12px;\n}\n\n.history-item {\n  display: grid;\n  grid-template-columns: 86px minmax(0, 1fr);\n  gap: 16px;\n  padding: 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n}\n\n.date-block {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 82px;\n  border-radius: 8px;\n  border: 1px solid var(--border, #e5e7eb);\n  background: var(--surface-soft, #f1f5f9);\n  color: var(--text, #0f172a);\n}\n\n.date-block strong {\n  font-size: 28px;\n  line-height: 1;\n  font-weight: 900;\n}\n\n.date-block span {\n  margin-top: 6px;\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n\n.history-main {\n  min-width: 0;\n}\n\n.history-title-row {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.history-title-row h3 {\n  margin: 0;\n  color: var(--text, #0f172a);\n  font-size: 18px;\n  font-weight: 850;\n}\n\n.history-title-row p {\n  margin: 4px 0 0;\n  color: var(--text-muted, #475569);\n  font-weight: 700;\n}\n\n.history-actions {\n  display: inline-flex;\n  align-items: flex-start;\n  flex-shrink: 0;\n  gap: 6px;\n}\n\n.history-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 0;\n}\n\n.meta-pill {\n  max-width: 100%;\n  padding: 1px 8px;\n  border: 1px solid rgba(29, 78, 216, 0.2);\n  border-radius: 6px;\n  color: #1d4ed8;\n  background: rgba(37, 99, 235, 0.1);\n  font-size: 12px;\n  font-weight: 750;\n}\n\n.history-stats {\n  display: grid;\n  grid-template-columns: 110px 110px 140px minmax(180px, 1fr);\n  gap: 10px;\n}\n\n.history-stats > div {\n  min-width: 0;\n  padding: 10px 12px;\n  border: 1px solid var(--border, #eef2f7);\n  border-radius: 8px;\n  background: var(--surface-muted, #fbfdff);\n}\n\n.history-stats small {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--text-muted, #64748b);\n  font-size: 11px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.history-stats strong {\n  display: block;\n  overflow: hidden;\n  color: var(--text, #0f172a);\n  font-weight: 850;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.material-summary strong {\n  font-weight: 750;\n}\n\n:host-context(.dark-theme) .history-item {\n  background: #111827;\n  border-color: rgba(148, 163, 184, 0.26);\n}\n\n:host-context(.dark-theme) .date-block,\n:host-context(.dark-theme) .history-stats > div {\n  background: #0f172a;\n  border-color: rgba(148, 163, 184, 0.34);\n}\n\n:host-context(.dark-theme) .date-block strong,\n:host-context(.dark-theme) .history-title-row h3,\n:host-context(.dark-theme) .history-stats strong {\n  color: #f8fafc;\n}\n\n:host-context(.dark-theme) .date-block span,\n:host-context(.dark-theme) .history-title-row p,\n:host-context(.dark-theme) .history-stats small,\n:host-context(.dark-theme) .history-pagination span {\n  color: #cbd5e1;\n}\n\n:host-context(.dark-theme) .meta-pill {\n  background: rgba(96, 165, 250, 0.18);\n  border-color: rgba(147, 197, 253, 0.42);\n  color: #dbeafe;\n}\n\n.history-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 8px 2px 0;\n}\n\n.history-pagination span {\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 750;\n}\n\n@media (max-width: 760px) {\n  .filters-row {\n    margin-bottom: 16px;\n    padding: 14px;\n  }\n\n  [nz-col] {\n    width: 100%;\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n\n  .history-item {\n    grid-template-columns: 1fr;\n    padding: 14px;\n  }\n\n  .date-block {\n    align-items: flex-start;\n    min-height: auto;\n    padding: 12px;\n  }\n\n  .history-title-row,\n  .history-actions {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .history-stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .history-pagination {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 520px) {\n  .history-stats {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [{ type: i1.RegistroService }, { type: i2.MateriaService }, { type: i0.ChangeDetectorRef }, { type: i3.NzMessageService }, { type: i4.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(VisualizarRegistrosComponent, { className: "VisualizarRegistrosComponent", filePath: "src/app/pages/visualizar-registros/visualizar-registros.ts", lineNumber: 23 }); })();
