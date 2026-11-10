import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/button";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/core/wave";
import * as i5 from "ng-zorro-antd/tag";
function PlanejamentosComponent_article_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 13)(1, "div", 14)(2, "div")(3, "span", 15);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h4");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "nz-tag", 16);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 17)(12, "div", 18)(13, "span");
    i0.ɵɵtext(14, "Progresso do ciclo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 19);
    i0.ɵɵelement(18, "span");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "dl", 20)(20, "div")(21, "dt");
    i0.ɵɵtext(22, "Carga");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "dd");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div")(26, "dt");
    i0.ɵɵtext(27, "Disciplinas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "dd");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div")(31, "dt");
    i0.ɵɵtext(32, "Revisoes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "dd");
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "div", 21)(36, "button", 22);
    i0.ɵɵtext(37, "Ver detalhes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "button", 23);
    i0.ɵɵtext(39, "Editar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const planejamento_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("#", planejamento_r1.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(planejamento_r1.nome);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzColor", ctx_r1.corStatus(planejamento_r1.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(planejamento_r1.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(planejamento_r1.descricao);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", planejamento_r1.progresso, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", planejamento_r1.progresso, "%");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", planejamento_r1.cargaSemanal, "h");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(planejamento_r1.disciplinas);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(planejamento_r1.revisoes);
} }
function PlanejamentosComponent_article_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 24)(1, "div", 25)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 26)(7, "h4");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 27)(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "nz-tag", 16);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const sessao_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(sessao_r3.dia);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sessao_r3.horario);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(sessao_r3.disciplina);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sessao_r3.atividade);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(sessao_r3.duracao);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzColor", ctx_r1.corPrioridade(sessao_r3.prioridade));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sessao_r3.prioridade);
} }
export class PlanejamentosComponent {
    planejamentos = [
        {
            id: 1,
            nome: 'Ciclo base SEFAZ',
            descricao: 'Distribuição inicial para consolidar teoria, questões e revisões curtas.',
            status: 'Ativo',
            cargaSemanal: 18,
            progresso: 42,
            disciplinas: 8,
            revisoes: 5
        },
        {
            id: 2,
            nome: 'Reta final discursivas',
            descricao: 'Blocos focados em escrita, jurisprudência e simulados comentados.',
            status: 'Rascunho',
            cargaSemanal: 10,
            progresso: 16,
            disciplinas: 4,
            revisoes: 2
        },
        {
            id: 3,
            nome: 'Manutenção de revisões',
            descricao: 'Rotina leve para manter assuntos sensíveis ativos na memória.',
            status: 'Pausado',
            cargaSemanal: 6,
            progresso: 68,
            disciplinas: 6,
            revisoes: 12
        }
    ];
    sessoesSemana = [
        {
            dia: 'Segunda',
            horario: '07:00',
            disciplina: 'Direito Constitucional',
            atividade: 'Teoria + mapa mental',
            duracao: '1h30',
            prioridade: 'Alta'
        },
        {
            dia: 'Terça',
            horario: '19:30',
            disciplina: 'Contabilidade',
            atividade: 'Questões comentadas',
            duracao: '2h',
            prioridade: 'Alta'
        },
        {
            dia: 'Quarta',
            horario: '07:00',
            disciplina: 'Direito Tributario',
            atividade: 'Revisão 7 dias',
            duracao: '1h',
            prioridade: 'Media'
        },
        {
            dia: 'Quinta',
            horario: '20:00',
            disciplina: 'Tecnologia da Informação',
            atividade: 'Resumo dirigido',
            duracao: '1h30',
            prioridade: 'Media'
        },
        {
            dia: 'Sabado',
            horario: '08:30',
            disciplina: 'Simulado misto',
            atividade: 'Bloco de 60 questoes',
            duracao: '3h',
            prioridade: 'Baixa'
        }
    ];
    get totalHorasSemana() {
        return this.planejamentos.reduce((total, planejamento) => total + planejamento.cargaSemanal, 0);
    }
    get totalDisciplinas() {
        return this.planejamentos.reduce((total, planejamento) => total + planejamento.disciplinas, 0);
    }
    get totalRevisoes() {
        return this.planejamentos.reduce((total, planejamento) => total + planejamento.revisoes, 0);
    }
    corStatus(status) {
        const cores = {
            Ativo: 'green',
            Rascunho: 'blue',
            Pausado: 'default'
        };
        return cores[status];
    }
    corPrioridade(prioridade) {
        const cores = {
            Alta: 'red',
            Media: 'blue',
            Baixa: 'default'
        };
        return cores[prioridade];
    }
    trackByPlanejamentoId(_, planejamento) {
        return planejamento.id;
    }
    trackBySessao(_, sessao) {
        return `${sessao.dia}-${sessao.horario}-${sessao.disciplina}`;
    }
    static ɵfac = function PlanejamentosComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PlanejamentosComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PlanejamentosComponent, selectors: [["app-planejamentos"]], decls: 52, vars: 9, consts: [[1, "planejamentos-page", "page-card"], [1, "page-heading"], ["nz-button", "", "nzType", "primary", "type", "button"], ["aria-label", "Resumo dos planejamentos", 1, "summary-grid"], [1, "summary-item"], [1, "planning-section"], [1, "section-heading"], ["nzColor", "blue"], [1, "planning-grid"], ["class", "planning-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzColor", "purple"], [1, "schedule-list"], ["class", "schedule-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "planning-card"], [1, "planning-card-header"], [1, "planning-id"], [3, "nzColor"], [1, "progress-block"], [1, "progress-label"], ["aria-hidden", "true", 1, "progress-track"], [1, "planning-metrics"], [1, "planning-actions"], ["nz-button", "", "nzType", "default", "type", "button"], ["nz-button", "", "nzType", "link", "type", "button"], [1, "schedule-item"], [1, "schedule-time"], [1, "schedule-main"], [1, "schedule-meta"]], template: function PlanejamentosComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h2");
            i0.ɵɵtext(4, "Planejamentos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Monte ciclos, acompanhe cargas semanais e organize revis\u00F5es antes de conectar os dados reais.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 2);
            i0.ɵɵtext(8, "Novo planejamento");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "section", 3)(10, "article", 4)(11, "span");
            i0.ɵɵtext(12, "Ciclos mockados");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "strong");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "article", 4)(16, "span");
            i0.ɵɵtext(17, "Horas por semana");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "strong");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "article", 4)(21, "span");
            i0.ɵɵtext(22, "Disciplinas cobertas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "strong");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "article", 4)(26, "span");
            i0.ɵɵtext(27, "Revis\u00F5es previstas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "strong");
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "section", 5)(31, "div", 6)(32, "div")(33, "h3");
            i0.ɵɵtext(34, "Ciclos em prepara\u00E7\u00E3o");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "p");
            i0.ɵɵtext(36, "Dados tempor\u00E1rios para validar a experi\u00EAncia da p\u00E1gina.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "nz-tag", 7);
            i0.ɵɵtext(38, "Sem backend ainda");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 8);
            i0.ɵɵtemplate(40, PlanejamentosComponent_article_40_Template, 40, 11, "article", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "section", 5)(42, "div", 6)(43, "div")(44, "h3");
            i0.ɵɵtext(45, "Agenda da semana");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "p");
            i0.ɵɵtext(47, "Sess\u00F5es simuladas para desenhar a futura rotina de estudo.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "nz-tag", 10);
            i0.ɵɵtext(49);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "div", 11);
            i0.ɵɵtemplate(51, PlanejamentosComponent_article_51_Template, 16, 7, "article", 12);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate(ctx.planejamentos.length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.totalHorasSemana, "h");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.totalDisciplinas);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.totalRevisoes);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.planejamentos)("ngForTrackBy", ctx.trackByPlanejamentoId);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("", ctx.sessoesSemana.length, " sess\u00F5es");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.sessoesSemana)("ngForTrackBy", ctx.trackBySessao);
        } }, dependencies: [CommonModule, i1.NgForOf, NzButtonModule, i2.NzButtonComponent, i3.ɵNzTransitionPatchDirective, i4.NzWaveDirective, NzTagModule, i5.NzTagComponent], styles: [".planejamentos-page[_ngcontent-%COMP%] {\n  padding: clamp(18px, 3vw, 28px);\n  background: var(--%NS%surface, #fff);\n}\n\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n\n.page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 24px;\n  font-weight: 850;\n}\n\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 6px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 22px;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  min-height: 104px;\n  padding: 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n.summary-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n  color: var(--%NS%text, #0f172a);\n  font-size: 30px;\n  line-height: 1;\n}\n\n.planning-section[_ngcontent-%COMP%] {\n  margin: 20px 0 24px;\n  padding: 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n\n.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n}\n\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.planning-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.planning-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n}\n\n.planning-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.planning-id[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 850;\n}\n\n.planning-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.schedule-main[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 17px;\n  font-weight: 850;\n}\n\n.planning-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.schedule-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text-muted, #64748b);\n  line-height: 1.45;\n}\n\n.progress-block[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n\n.progress-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.progress-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%text, #0f172a);\n}\n\n.progress-track[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 8px;\n  border-radius: 999px;\n  background: #e2e8f0;\n}\n\n.progress-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: #1677ff;\n}\n\n.dark-theme[_ngcontent-%COMP%]   .progress-track[_ngcontent-%COMP%] {\n  background: #1e293b;\n}\n\n.planning-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n  margin: 0;\n}\n\n.planning-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-muted, #fbfdff);\n}\n\n.planning-metrics[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.planning-metrics[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 18px;\n  font-weight: 850;\n}\n\n.planning-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: auto;\n}\n\n.schedule-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.schedule-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  align-items: center;\n  gap: 16px;\n  min-height: 72px;\n  padding: 12px 14px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n}\n\n.schedule-time[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.schedule-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.schedule-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.schedule-time[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%text, #0f172a);\n  font-weight: 850;\n}\n\n.schedule-time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.schedule-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.schedule-meta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n@media (max-width: 980px) {\n  .summary-grid[_ngcontent-%COMP%], \n   .planning-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 760px) {\n  .planejamentos-page[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .page-heading[_ngcontent-%COMP%], \n   .section-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .page-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n\n  .summary-grid[_ngcontent-%COMP%], \n   .planning-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .planning-section[_ngcontent-%COMP%] {\n    margin: 14px 0;\n    padding: 14px;\n  }\n\n  .schedule-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    align-items: flex-start;\n    gap: 10px;\n  }\n\n  .schedule-meta[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    width: 100%;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanejamentosComponent, [{
        type: Component,
        args: [{ selector: 'app-planejamentos', standalone: true, imports: [CommonModule, NzButtonModule, NzTagModule], template: "<div class=\"planejamentos-page page-card\">\n  <header class=\"page-heading\">\n    <div>\n      <h2>Planejamentos</h2>\n      <p>Monte ciclos, acompanhe cargas semanais e organize revis\u00F5es antes de conectar os dados reais.</p>\n    </div>\n\n    <button nz-button nzType=\"primary\" type=\"button\">Novo planejamento</button>\n  </header>\n\n  <section class=\"summary-grid\" aria-label=\"Resumo dos planejamentos\">\n    <article class=\"summary-item\">\n      <span>Ciclos mockados</span>\n      <strong>{{ planejamentos.length }}</strong>\n    </article>\n    <article class=\"summary-item\">\n      <span>Horas por semana</span>\n      <strong>{{ totalHorasSemana }}h</strong>\n    </article>\n    <article class=\"summary-item\">\n      <span>Disciplinas cobertas</span>\n      <strong>{{ totalDisciplinas }}</strong>\n    </article>\n    <article class=\"summary-item\">\n      <span>Revis\u00F5es previstas</span>\n      <strong>{{ totalRevisoes }}</strong>\n    </article>\n  </section>\n\n  <section class=\"planning-section\">\n    <div class=\"section-heading\">\n      <div>\n        <h3>Ciclos em prepara\u00E7\u00E3o</h3>\n        <p>Dados tempor\u00E1rios para validar a experi\u00EAncia da p\u00E1gina.</p>\n      </div>\n      <nz-tag nzColor=\"blue\">Sem backend ainda</nz-tag>\n    </div>\n\n    <div class=\"planning-grid\">\n      <article\n        class=\"planning-card\"\n        *ngFor=\"let planejamento of planejamentos; trackBy: trackByPlanejamentoId\">\n        <div class=\"planning-card-header\">\n          <div>\n            <span class=\"planning-id\">#{{ planejamento.id }}</span>\n            <h4>{{ planejamento.nome }}</h4>\n          </div>\n          <nz-tag [nzColor]=\"corStatus(planejamento.status)\">{{ planejamento.status }}</nz-tag>\n        </div>\n\n        <p>{{ planejamento.descricao }}</p>\n\n        <div class=\"progress-block\">\n          <div class=\"progress-label\">\n            <span>Progresso do ciclo</span>\n            <strong>{{ planejamento.progresso }}%</strong>\n          </div>\n          <div class=\"progress-track\" aria-hidden=\"true\">\n            <span [style.width.%]=\"planejamento.progresso\"></span>\n          </div>\n        </div>\n\n        <dl class=\"planning-metrics\">\n          <div>\n            <dt>Carga</dt>\n            <dd>{{ planejamento.cargaSemanal }}h</dd>\n          </div>\n          <div>\n            <dt>Disciplinas</dt>\n            <dd>{{ planejamento.disciplinas }}</dd>\n          </div>\n          <div>\n            <dt>Revisoes</dt>\n            <dd>{{ planejamento.revisoes }}</dd>\n          </div>\n        </dl>\n\n        <div class=\"planning-actions\">\n          <button nz-button nzType=\"default\" type=\"button\">Ver detalhes</button>\n          <button nz-button nzType=\"link\" type=\"button\">Editar</button>\n        </div>\n      </article>\n    </div>\n  </section>\n\n  <section class=\"planning-section\">\n    <div class=\"section-heading\">\n      <div>\n        <h3>Agenda da semana</h3>\n        <p>Sess\u00F5es simuladas para desenhar a futura rotina de estudo.</p>\n      </div>\n      <nz-tag nzColor=\"purple\">{{ sessoesSemana.length }} sess\u00F5es</nz-tag>\n    </div>\n\n    <div class=\"schedule-list\">\n      <article class=\"schedule-item\" *ngFor=\"let sessao of sessoesSemana; trackBy: trackBySessao\">\n        <div class=\"schedule-time\">\n          <strong>{{ sessao.dia }}</strong>\n          <span>{{ sessao.horario }}</span>\n        </div>\n\n        <div class=\"schedule-main\">\n          <h4>{{ sessao.disciplina }}</h4>\n          <p>{{ sessao.atividade }}</p>\n        </div>\n\n        <div class=\"schedule-meta\">\n          <span>{{ sessao.duracao }}</span>\n          <nz-tag [nzColor]=\"corPrioridade(sessao.prioridade)\">{{ sessao.prioridade }}</nz-tag>\n        </div>\n      </article>\n    </div>\n  </section>\n</div>\n", styles: [".planejamentos-page {\n  padding: clamp(18px, 3vw, 28px);\n  background: var(--surface, #fff);\n}\n\n.page-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n\n.page-heading h2 {\n  margin: 0;\n  color: var(--text, #0f172a);\n  font-size: 24px;\n  font-weight: 850;\n}\n\n.page-heading p {\n  max-width: 680px;\n  margin: 6px 0 0;\n  color: var(--text-muted, #64748b);\n}\n\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 22px;\n}\n\n.summary-item {\n  min-height: 104px;\n  padding: 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-soft, #f8fafc);\n}\n\n.summary-item span {\n  display: block;\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.summary-item strong {\n  display: block;\n  margin-top: 10px;\n  color: var(--text, #0f172a);\n  font-size: 30px;\n  line-height: 1;\n}\n\n.planning-section {\n  margin: 20px 0 24px;\n  padding: 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-soft, #f8fafc);\n}\n\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n\n.section-heading h3 {\n  margin: 0;\n  color: var(--text, #0f172a);\n}\n\n.section-heading p {\n  margin: 4px 0 0;\n  color: var(--text-muted, #64748b);\n}\n\n.planning-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.planning-card {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 14px;\n  padding: 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n}\n\n.planning-card-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n\n.planning-id {\n  display: block;\n  margin-bottom: 6px;\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 850;\n}\n\n.planning-card h4,\n.schedule-main h4 {\n  margin: 0;\n  color: var(--text, #0f172a);\n  font-size: 17px;\n  font-weight: 850;\n}\n\n.planning-card p,\n.schedule-main p {\n  margin: 0;\n  color: var(--text-muted, #64748b);\n  line-height: 1.45;\n}\n\n.progress-block {\n  display: grid;\n  gap: 8px;\n}\n\n.progress-label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.progress-label strong {\n  color: var(--text, #0f172a);\n}\n\n.progress-track {\n  overflow: hidden;\n  height: 8px;\n  border-radius: 999px;\n  background: #e2e8f0;\n}\n\n.progress-track span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: #1677ff;\n}\n\n.dark-theme .progress-track {\n  background: #1e293b;\n}\n\n.planning-metrics {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n  margin: 0;\n}\n\n.planning-metrics div {\n  padding: 10px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-muted, #fbfdff);\n}\n\n.planning-metrics dt {\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.planning-metrics dd {\n  margin: 4px 0 0;\n  color: var(--text, #0f172a);\n  font-size: 18px;\n  font-weight: 850;\n}\n\n.planning-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: auto;\n}\n\n.schedule-list {\n  display: grid;\n  gap: 10px;\n}\n\n.schedule-item {\n  display: grid;\n  grid-template-columns: 120px 1fr auto;\n  align-items: center;\n  gap: 16px;\n  min-height: 72px;\n  padding: 12px 14px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n}\n\n.schedule-time strong,\n.schedule-time span,\n.schedule-meta span {\n  display: block;\n}\n\n.schedule-time strong {\n  color: var(--text, #0f172a);\n  font-weight: 850;\n}\n\n.schedule-time span,\n.schedule-meta span {\n  margin-top: 4px;\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.schedule-meta {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n@media (max-width: 980px) {\n  .summary-grid,\n  .planning-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 760px) {\n  .planejamentos-page {\n    padding: 14px;\n  }\n\n  .page-heading,\n  .section-heading {\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .page-heading h2 {\n    font-size: 21px;\n  }\n\n  .summary-grid,\n  .planning-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .planning-section {\n    margin: 14px 0;\n    padding: 14px;\n  }\n\n  .schedule-item {\n    grid-template-columns: 1fr;\n    align-items: flex-start;\n    gap: 10px;\n  }\n\n  .schedule-meta {\n    justify-content: space-between;\n    width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PlanejamentosComponent, { className: "PlanejamentosComponent", filePath: "src/app/pages/planejamentos/planejamentos.ts", lineNumber: 34 }); })();
