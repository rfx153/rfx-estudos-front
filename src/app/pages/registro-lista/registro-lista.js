import { Component, inject, ChangeDetectorRef, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService, } from '../../services/registro.service';
import { MateriaService } from '../../services/materia.service';
import { PlanejamentoService } from '../../services/planejamento.service';
import { MaterialGuiaService } from '../../services/material-guia.service';
// Módulos do NG-ZORRO necessários para o formulário denso de registros
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { PlusOutline, DeleteOutline, } from '@ant-design/icons-angular/icons';
import { NzCardModule } from 'ng-zorro-antd/card'; // <-- INSTALE ESTE IMPORT
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/grid";
import * as i4 from "ng-zorro-antd/form";
import * as i5 from "ng-zorro-antd/input";
import * as i6 from "ng-zorro-antd/select";
import * as i7 from "ng-zorro-antd/date-picker";
import * as i8 from "ng-zorro-antd/time-picker";
import * as i9 from "ng-zorro-antd/input-number";
import * as i10 from "ng-zorro-antd/button";
import * as i11 from "ng-zorro-antd/core/transition-patch";
import * as i12 from "ng-zorro-antd/core/wave";
import * as i13 from "ng-zorro-antd/icon";
import * as i14 from "ng-zorro-antd/card";
import * as i15 from "ng-zorro-antd/modal";
function RegistroListaComponent_nz_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 36);
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", m_r2.nome)("nzValue", m_r2.id);
} }
function RegistroListaComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelement(1, "input", 38, 4);
    i0.ɵɵelementStart(3, "a", 39);
    i0.ɵɵlistener("click", function RegistroListaComponent_ng_template_11_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r3); const inputMateria_r4 = i0.ɵɵreference(2); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.cadastrarMateriaRapida(inputMateria_r4)); });
    i0.ɵɵelement(4, "i", 29);
    i0.ɵɵtext(5, " Criar ");
    i0.ɵɵelementEnd()();
} }
function RegistroListaComponent_nz_option_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 36);
} if (rf & 2) {
    const a_r6 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", a_r6.nome)("nzValue", a_r6.id);
} }
function RegistroListaComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelement(1, "input", 41, 5);
    i0.ɵɵelementStart(3, "a", 42);
    i0.ɵɵlistener("click", function RegistroListaComponent_ng_template_20_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r7); const inputElement_r8 = i0.ɵɵreference(2); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.cadastrarAssuntoRapido(inputElement_r8)); });
    i0.ɵɵelement(4, "i", 29);
    i0.ɵɵtext(5, " Criar ");
    i0.ɵɵelementEnd()();
} }
function RegistroListaComponent_nz_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 36);
} if (rf & 2) {
    const materialGuia_r9 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", materialGuia_r9.nome)("nzValue", materialGuia_r9.id);
} }
function RegistroListaComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelement(1, "input", 43, 6);
    i0.ɵɵelementStart(3, "a", 42);
    i0.ɵɵlistener("click", function RegistroListaComponent_ng_template_29_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r10); const inputMaterialGuia_r11 = i0.ɵɵreference(2); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.cadastrarMaterialGuiaRapido(inputMaterialGuia_r11)); });
    i0.ɵɵelement(4, "i", 29);
    i0.ɵɵtext(5, " Criar ");
    i0.ɵɵelementEnd()();
} }
function RegistroListaComponent_nz_option_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 36);
} if (rf & 2) {
    const planejamento_r12 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", planejamento_r12.nome)("nzValue", planejamento_r12.id);
} }
function RegistroListaComponent_nz_option_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-option", 36);
} if (rf & 2) {
    const t_r13 = ctx.$implicit;
    i0.ɵɵproperty("nzLabel", t_r13.nome)("nzValue", t_r13.id);
} }
function RegistroListaComponent_span_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("(", ctx_r4.registrosQuestoes.length, ")");
} }
function RegistroListaComponent_ng_container_103_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "span");
    i0.ɵɵtext(2, "Total: ");
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ctx_r4.totalQuestoes("acertadas"), "/", ctx_r4.totalQuestoes("feitas"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r4.calcularAproveitamento(ctx_r4.totalQuestoes("feitas"), ctx_r4.totalQuestoes("acertadas")), " de aproveitamento");
} }
function RegistroListaComponent_ng_container_103_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 56);
    i0.ɵɵlistener("click", function RegistroListaComponent_ng_container_103_div_10_div_1_Template_button_click_5_listener() { const i_r16 = i0.ɵɵrestoreView(_r15).index; const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.removerRegistroQuestoes(i_r16)); });
    i0.ɵɵelement(6, "i", 57);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const registro_r17 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(registro_r17.descricao || "Registro sem descri\u00E7\u00E3o");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", registro_r17.acertadas, "/", registro_r17.feitas);
} }
function RegistroListaComponent_ng_container_103_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵtemplate(1, RegistroListaComponent_ng_container_103_div_10_div_1_Template, 7, 3, "div", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.registrosQuestoes);
} }
function RegistroListaComponent_ng_container_103_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 44)(2, "div", 45)(3, "input", 46);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nz-input-number", 47);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nz-input-number", 48);
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 49);
    i0.ɵɵlistener("click", function RegistroListaComponent_ng_container_103_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r14); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.adicionarRegistroQuestoes()); });
    i0.ɵɵelement(7, "i", 29);
    i0.ɵɵtext(8, " Adicionar ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, RegistroListaComponent_ng_container_103_div_9_Template, 7, 3, "div", 50)(10, RegistroListaComponent_ng_container_103_div_10_Template, 2, 1, "div", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r4.registroQuestoesForm);
    i0.ɵɵadvance();
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzMin", 0)("nzStep", 1);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzMin", 0)("nzStep", 1);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r4.registrosQuestoes.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.registrosQuestoes.length);
} }
function RegistroListaComponent_ng_template_104_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.modoEdicao ? "Editando registro #" + ctx_r4.registroEditandoId : ctx_r4.totalRegistros + " registros");
} }
export class RegistroListaComponent {
    registroService = inject(RegistroService);
    materiaService = inject(MateriaService);
    planejamentoService = inject(PlanejamentoService);
    materialGuiaService = inject(MaterialGuiaService);
    fb = inject(FormBuilder);
    cdr = inject(ChangeDetectorRef);
    iconService = inject(NzIconService);
    message = inject(NzMessageService);
    modal = inject(NzModalService);
    router = inject(Router);
    platformId = inject(PLATFORM_ID);
    totalRegistros = 0;
    listaMaterias = [];
    listaPlanejamentos = [];
    listaMateriaisGuia = [];
    // Listas fictícias iniciais (ajuste conforme criar os services delas depois)
    listaAssuntos = [];
    listaTiposRegistro = [];
    carregando = true;
    salvando = false;
    questoesAbaAberta = false;
    modoEdicao = false;
    registroEditandoId = null;
    validateForm;
    registroQuestoesForm;
    registrosQuestoes = [];
    constructor() {
        this.iconService.addIcon(...[PlusOutline, DeleteOutline]);
    }
    ngOnInit() {
        this.inicializarFormulario();
        this.carregarDadosIniciais();
        this.escutarMudancaDeMateria();
        this.prepararEdicaoSeNecessario();
    }
    inicializarFormulario() {
        this.validateForm = this.fb.group({
            materia: [null, [Validators.required]],
            assunto: [null, [Validators.required]],
            planejamento: [null],
            materialGuia: [null],
            tipoRegistro: [null, [Validators.required]],
            concluido: [false],
            questoesFeitas: [0],
            questoesAcertadas: [0],
            dataEstudo: [new Date(), [Validators.required]],
            tempoEstudado: [null, [Validators.required]],
            observacoes: [null],
        });
        this.registroQuestoesForm = this.criarFormularioRegistroQuestoes();
    }
    criarFormularioRegistroQuestoes() {
        return this.fb.group({
            descricao: [null],
            feitas: [0],
            acertadas: [0],
        });
    }
    carregarDadosIniciais() {
        this.carregando = true;
        // Busca os registros e as matérias em paralelo
        this.materiaService.listarTodas().subscribe((materias) => {
            this.listaMaterias = materias;
            this.cdr.detectChanges();
        });
        this.planejamentoService.listarTodos().subscribe({
            next: (planejamentos) => {
                this.listaPlanejamentos = planejamentos;
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Erro ao carregar planejamentos:', err);
            },
        });
        this.materialGuiaService.listarTodos().subscribe({
            next: (materiaisGuia) => {
                this.listaMateriaisGuia = materiaisGuia;
                this.cdr.detectChanges();
            },
            error: (err) => console.error('Erro ao carregar materiais-guia:', err),
        });
        this.registroService.listarTiposRegistro().subscribe({
            next: (tipos) => {
                this.listaTiposRegistro = tipos;
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Erro ao carregar tipos de registro:', err);
            },
        });
        this.registroService.contarTodos().subscribe({
            next: (total) => {
                this.totalRegistros = total;
                this.carregando = false;
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Erro ao contar registros:', err);
                this.carregando = false;
                this.cdr.detectChanges();
            },
        });
    }
    get tituloFormulario() {
        return this.modoEdicao ? 'Editar registro de estudo' : 'Novo registro de estudo';
    }
    get textoBotaoSalvar() {
        return this.modoEdicao ? 'Salvar alterações' : 'Salvar Sessão de Estudo';
    }
    submitForm() {
        if (this.validateForm.valid) {
            this.salvando = true;
            const formValue = this.validateForm.value;
            // Converte os IDs numéricos em objetos com a chave { id: X } para o Jackson/Spring aceitar
            const payload = {
                ...formValue,
                materia: formValue.materia ? { id: formValue.materia } : null,
                assunto: formValue.assunto ? { id: formValue.assunto } : null,
                planejamento: formValue.planejamento ? { id: formValue.planejamento } : null,
                materialGuia: formValue.materialGuia ? { id: formValue.materialGuia } : null,
                tipoRegistro: formValue.tipoRegistro ? { id: formValue.tipoRegistro } : null,
                // Formatação de datas e horas
                // `toISOString()` converte para UTC e pode mudar o dia no fuso de Brasília.
                // Como o backend espera um LocalDate, envie a data usando os campos locais.
                dataEstudo: formValue.dataEstudo ? this.formatarDataLocal(formValue.dataEstudo) : null,
                tempoEstudado: formValue.tempoEstudado
                    ? formValue.tempoEstudado.toTimeString().split(' ')[0]
                    : null,
            };
            if (formValue.planejamento) {
                this.planejamentoService
                    .buscarEtapaPorAssunto(formValue.planejamento, formValue.assunto, formValue.tipoRegistro)
                    .subscribe({
                    next: (etapa) => {
                        if (etapa) {
                            this.salvarRegistro(payload);
                            return;
                        }
                        this.salvando = false;
                        this.modal.confirm({
                            nzTitle: 'Etapa não configurada',
                            nzContent: 'Não existe uma etapa para este assunto e tipo de registro no planejamento. Deseja criá-la agora?',
                            nzOkText: 'Criar etapa',
                            nzCancelText: 'Salvar sem etapa',
                            nzOnOk: () => {
                                this.salvando = true;
                                this.planejamentoService
                                    .adicionarEtapaPorAssunto(formValue.planejamento, formValue.assunto, formValue.tipoRegistro)
                                    .subscribe({
                                    next: () => this.salvarRegistro(payload),
                                    error: () => {
                                        this.salvando = false;
                                        this.message.error('Não foi possível criar a etapa. Verifique se o assunto foi adicionado ao planejamento.');
                                    },
                                });
                            },
                            nzOnCancel: () => this.salvarRegistro(payload),
                        });
                    },
                    error: () => {
                        this.salvando = false;
                        this.message.error('Não foi possível verificar a etapa do planejamento.');
                    },
                });
                return;
            }
            this.salvarRegistro(payload);
        }
        else {
            Object.values(this.validateForm.controls).forEach((control) => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
            this.message.warning('Preencha os campos obrigatórios antes de salvar.');
        }
    }
    salvarRegistro(payload) {
        const request$ = this.modoEdicao && this.registroEditandoId
            ? this.registroService.atualizar(this.registroEditandoId, payload)
            : this.registroService.criar(payload);
        request$.subscribe({
            next: (registroSalvo) => {
                this.salvando = false;
                this.message.success(this.modoEdicao ? 'Registro atualizado com sucesso.' : 'Registro salvo com sucesso.');
                if (this.modoEdicao) {
                    this.router.navigate(['/visualizar-registros']);
                    return;
                }
                this.validateForm.reset({
                    dataEstudo: new Date(),
                    questoesFeitas: 0,
                    questoesAcertadas: 0,
                    concluido: false,
                });
                this.registrosQuestoes = [];
                this.registroQuestoesForm.reset({ feitas: 0, acertadas: 0 });
                this.questoesAbaAberta = false;
                this.carregarDadosIniciais();
            },
            error: (err) => {
                console.error('Erro ao salvar registro:', err);
                this.salvando = false;
                this.message.error(this.modoEdicao
                    ? 'Não foi possível atualizar o registro.'
                    : 'Não foi possível salvar o registro.');
                this.cdr.detectChanges();
            },
        });
    }
    adicionarRegistroQuestoes() {
        const form = this.registroQuestoesForm;
        const lista = this.registrosQuestoes;
        const descricao = (form.value.descricao || '').trim();
        const feitas = Number(form.value.feitas || 0);
        const acertadas = Number(form.value.acertadas || 0);
        if (feitas <= 0 && acertadas <= 0 && !descricao) {
            this.message.warning('Informe ao menos uma anotação ou quantidade de questões.');
            return;
        }
        if (acertadas > feitas) {
            this.message.warning('Os acertos não podem ser maiores que as questões feitas.');
            return;
        }
        lista.push({ descricao, feitas, acertadas });
        form.reset({ feitas: 0, acertadas: 0 });
        this.atualizarTotaisQuestoes();
        this.cdr.detectChanges();
    }
    removerRegistroQuestoes(index) {
        this.registrosQuestoes.splice(index, 1);
        this.atualizarTotaisQuestoes();
        this.cdr.detectChanges();
    }
    totalQuestoes(campo) {
        return this.registrosQuestoes.reduce((total, registro) => total + (registro[campo] || 0), 0);
    }
    atualizarTotaisQuestoes() {
        this.validateForm.patchValue({
            questoesFeitas: this.totalQuestoes('feitas'),
            questoesAcertadas: this.totalQuestoes('acertadas'),
        });
    }
    calcularAproveitamento(feitas, acertadas) {
        if (!feitas || feitas === 0)
            return '0%';
        const percentual = (acertadas / feitas) * 100;
        return `${percentual.toFixed(0)}%`;
    }
    escutarMudancaDeMateria() {
        this.validateForm.get('materia')?.valueChanges.subscribe((materiaId) => {
            const campoAssunto = this.validateForm.get('assunto');
            // Reseta os assuntos quando troca a matéria
            campoAssunto?.reset();
            if (materiaId) {
                // 🔥 LIBERA OS CAMPOS IMEDIATAMENTE
                campoAssunto?.enable();
                this.listaAssuntos = [];
                this.cdr.detectChanges();
                this.carregarAssuntosDaMateria(materiaId);
            }
            else {
                // Se não houver matéria selecionada, bloqueia
                this.listaAssuntos = [];
                campoAssunto?.disable();
                this.cdr.detectChanges();
            }
        });
    }
    prepararEdicaoSeNecessario() {
        const navigationState = this.router.getCurrentNavigation()?.extras.state;
        const browserState = isPlatformBrowser(this.platformId) ? history.state : {};
        const registro = (navigationState?.['registroParaEditar'] ??
            browserState?.registroParaEditar);
        if (!registro?.id)
            return;
        this.modoEdicao = true;
        this.registroEditandoId = registro.id;
        this.validateForm.patchValue({
            materia: registro.materia?.id ?? null,
            planejamento: registro.planejamento?.id ?? null,
            materialGuia: registro.materialGuia?.id ?? null,
            tipoRegistro: registro.tipoRegistro?.id ?? null,
            concluido: registro.concluido ?? false,
            questoesFeitas: registro.questoesFeitas ?? 0,
            questoesAcertadas: registro.questoesAcertadas ?? 0,
            dataEstudo: this.dataParaFormulario(registro.dataEstudo),
            tempoEstudado: this.horaParaFormulario(registro.tempoEstudado),
            observacoes: registro.observacoes ?? null,
        }, { emitEvent: false });
        if (registro.materia?.id) {
            this.validateForm.get('assunto')?.enable();
            this.carregarAssuntosDaMateria(registro.materia.id, () => {
                this.validateForm.patchValue({
                    assunto: registro.assunto?.id ?? null,
                }, { emitEvent: false });
                this.cdr.detectChanges();
            });
        }
    }
    carregarAssuntosDaMateria(materiaId, aoCarregar) {
        this.registroService.listarAssuntosPorMateria(materiaId).subscribe({
            next: (assuntos) => {
                this.listaAssuntos = assuntos;
                aoCarregar?.();
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Erro ao buscar assuntos:', err);
                this.listaAssuntos = [];
                this.cdr.detectChanges();
            },
        });
    }
    dataParaFormulario(data) {
        if (!data)
            return null;
        const [ano, mes, dia] = data.substring(0, 10).split('-').map(Number);
        return new Date(ano, mes - 1, dia);
    }
    formatarDataLocal(data) {
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const dia = String(data.getDate()).padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }
    horaParaFormulario(hora) {
        if (!hora)
            return null;
        const [horas = 0, minutos = 0, segundos = 0] = hora.split(':').map(Number);
        const data = new Date();
        data.setHours(horas, minutos, segundos, 0);
        return data;
    }
    // Adicione este método dentro da classe RegistroListaComponent
    cadastrarAssuntoRapido(inputElement) {
        const nomeAssunto = inputElement.value.trim();
        const materiaFormValue = this.validateForm.get('materia')?.value;
        if (!nomeAssunto) {
            return; // Se estiver em branco, ignora
        }
        // Garante que pegamos o ID correto da matéria
        const materiaId = materiaFormValue && typeof materiaFormValue === 'object'
            ? materiaFormValue.id
            : materiaFormValue;
        if (!materiaId) {
            console.warn('Selecione uma matéria antes de cadastrar um assunto.');
            this.message.warning('Selecione uma matéria antes de criar o assunto.');
            return;
        }
        // DTO esperado pelo Spring Boot (nome + materiaId)
        const novoAssuntoPayload = {
            nome: nomeAssunto,
            materiaId: materiaId,
        };
        this.registroService.criarAssunto(novoAssuntoPayload).subscribe({
            next: (assuntoSalvo) => {
                // 1. Adiciona o novo assunto retornado do Java na lista da tela
                this.listaAssuntos = [...this.listaAssuntos, assuntoSalvo];
                // 2. 🔥 CORREÇÃO: Passamos apenas o ID 'assuntoSalvo.id' para bater com o [nzValue]="a.id" do HTML
                this.validateForm.get('assunto')?.setValue(assuntoSalvo.id);
                // 3. Limpa o input de texto do dropdown
                inputElement.value = '';
                // 4. Força o Angular a renderizar a alteração e selecionar o item
                this.message.success('Assunto criado com sucesso.');
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Erro ao cadastrar assunto rápido:', err);
                this.message.error('Não foi possível criar o assunto.');
            },
        });
    }
    cadastrarMateriaRapida(inputElement) {
        const nomeMateria = inputElement.value.trim();
        if (!nomeMateria) {
            return; // Se estiver em branco, não faz nada
        }
        this.materiaService.criar({ nome: nomeMateria }).subscribe({
            next: (materiaSalva) => {
                // 1. Adiciona a nova matéria retornada do Java na lista da tela
                this.listaMaterias = [...this.listaMaterias, materiaSalva];
                // 2. Já seleciona ela automaticamente no formulário usando o ID
                this.validateForm.get('materia')?.setValue(materiaSalva.id);
                // 3. Limpa o campo de texto do dropdown
                inputElement.value = '';
                // 4. Força o Angular a renderizar a alteração na tela
                this.message.success('Matéria criada com sucesso.');
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Erro ao cadastrar matéria rápida:', err);
                this.message.error('Não foi possível criar a matéria.');
            },
        });
    }
    cadastrarMaterialGuiaRapido(inputElement) {
        const nomeMaterialGuia = inputElement.value.trim();
        if (!nomeMaterialGuia) {
            return;
        }
        this.materialGuiaService.criar({ nome: nomeMaterialGuia }).subscribe({
            next: (materialGuiaSalvo) => {
                this.listaMateriaisGuia = [...this.listaMateriaisGuia, materialGuiaSalvo];
                this.validateForm.get('materialGuia')?.setValue(materialGuiaSalvo.id);
                inputElement.value = '';
                this.message.success('Material-guia criado com sucesso.');
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Erro ao cadastrar material-guia rápido:', err);
                this.message.error('Não foi possível criar o material-guia.');
            },
        });
    }
    static ɵfac = function RegistroListaComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegistroListaComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegistroListaComponent, selectors: [["app-registro-lista"]], decls: 106, vars: 36, consts: [["renderMateriaTemplate", ""], ["renderTemplate", ""], ["renderMaterialGuiaTemplate", ""], ["extraTemplate", ""], ["inputMateria", ""], ["inputElement", ""], ["inputMaterialGuia", ""], [1, "registro-container"], [1, "page-card", "registro-card", 3, "nzTitle", "nzExtra"], ["nz-form", "", "nzLayout", "vertical", 3, "ngSubmit", "formGroup"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzRequired", ""], ["nzErrorTip", "Selecione ou cadastre a mat\u00E9ria"], ["formControlName", "materia", "nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Selecione", 3, "nzDropdownRender"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzErrorTip", "Selecione ou cadastre o assunto"], ["formControlName", "assunto", "nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Assunto", 3, "nzDropdownRender"], ["formControlName", "materialGuia", "nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Material-guia", 3, "nzDropdownRender"], ["formControlName", "dataEstudo", 2, "width", "100%"], ["formControlName", "planejamento", "nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Selecione o planejamento"], ["nzErrorTip", "Selecione o tipo do registro"], ["formControlName", "tipoRegistro", "nzPlaceHolder", "Ex: Assunto, Quest\u00F5es..."], ["type", "checkbox", "formControlName", "concluido"], ["nzErrorTip", "Informe o tempo"], ["formControlName", "tempoEstudado", "nzFormat", "HH:mm", 2, "width", "100%"], ["formControlName", "questoesFeitas", 2, "width", "100%", 3, "nzMin"], ["formControlName", "questoesAcertadas", 2, "width", "100%", 3, "nzMin"], ["nz-button", "", "nzSize", "small", "type", "button", 1, "question-log-button", 3, "click"], ["nz-icon", "", "nzType", "plus"], [4, "ngIf"], ["nz-input", "", "formControlName", "observacoes", "rows", "2"], [1, "form-footer"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["nzTitle", "Registros das quest\u00F5es feitas", 3, "nzVisibleChange", "nzOnCancel", "nzVisible", "nzFooter", "nzWidth"], [4, "nzModalContent"], [3, "nzLabel", "nzValue"], [1, "dropdown-wrapper", 2, "display", "flex", "flex-wrap", "nowrap", "padding", "8px"], ["type", "text", "nz-input", "", "placeholder", "Nova mat\u00E9ria...", 2, "flex", "auto"], [1, "add-item-btn", 2, "flex", "none", "padding", "8px", "display", "block", "cursor", "pointer", 3, "click"], [1, "dropdown-wrapper"], ["type", "text", "nz-input", "", "placeholder", "Novo assunto..."], [1, "add-item-btn", 3, "click"], ["type", "text", "nz-input", "", "placeholder", "Novo material-guia..."], [1, "question-log-modal"], [1, "question-log-entry", 3, "formGroup"], ["nz-input", "", "formControlName", "descricao", "placeholder", "Ex: Caderno de erros, bloco 01, quest\u00F5es 1 a 15"], ["formControlName", "feitas", "nzPlaceHolder", "Feitas", 3, "nzMin", "nzStep"], ["formControlName", "acertadas", "nzPlaceHolder", "Acertos", 3, "nzMin", "nzStep"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], ["class", "question-log-summary", 4, "ngIf"], ["class", "question-log-list", 4, "ngIf"], [1, "question-log-summary"], [1, "question-log-list"], ["class", "question-log-item", 4, "ngFor", "ngForOf"], [1, "question-log-item"], ["nz-button", "", "nzType", "text", "nzDanger", "", "type", "button", "aria-label", "Remover registro de quest\u00F5es", 3, "click"], ["nz-icon", "", "nzType", "delete"], [1, "record-count"]], template: function RegistroListaComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 7)(1, "nz-card", 8)(2, "form", 9);
            i0.ɵɵlistener("ngSubmit", function RegistroListaComponent_Template_form_ngSubmit_2_listener() { return ctx.submitForm(); });
            i0.ɵɵelementStart(3, "div", 10)(4, "div", 11)(5, "nz-form-item")(6, "nz-form-label", 12);
            i0.ɵɵtext(7, "Mat\u00E9ria");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "nz-form-control", 13)(9, "nz-select", 14);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtemplate(10, RegistroListaComponent_nz_option_10_Template, 1, 2, "nz-option", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(11, RegistroListaComponent_ng_template_11_Template, 6, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "div", 11)(14, "nz-form-item")(15, "nz-form-label", 12);
            i0.ɵɵtext(16, "Assunto Estudado");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "nz-form-control", 16)(18, "nz-select", 17);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtemplate(19, RegistroListaComponent_nz_option_19_Template, 1, 2, "nz-option", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(20, RegistroListaComponent_ng_template_20_Template, 6, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(22, "div", 11)(23, "nz-form-item")(24, "nz-form-label");
            i0.ɵɵtext(25, "Material-guia");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "nz-form-control")(27, "nz-select", 18);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtemplate(28, RegistroListaComponent_nz_option_28_Template, 1, 2, "nz-option", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(29, RegistroListaComponent_ng_template_29_Template, 6, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "div", 11)(32, "nz-form-item")(33, "nz-form-label", 12);
            i0.ɵɵtext(34, "Data do Estudo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "nz-form-control")(36, "nz-date-picker", 19);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(37, "div", 10)(38, "div", 11)(39, "nz-form-item")(40, "nz-form-label");
            i0.ɵɵtext(41, "Planejamento");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "nz-form-control")(43, "nz-select", 20);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtemplate(44, RegistroListaComponent_nz_option_44_Template, 1, 2, "nz-option", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "small");
            i0.ɵɵtext(46, "A etapa ser\u00E1 identificada pelo assunto e pelo tipo do registro.");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(47, "div", 10)(48, "div", 11)(49, "nz-form-item")(50, "nz-form-label", 12);
            i0.ɵɵtext(51, "Tipo do Registro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "nz-form-control", 21)(53, "nz-select", 22);
            i0.ɵɵcontrolCreate();
            i0.ɵɵtemplate(54, RegistroListaComponent_nz_option_54_Template, 1, 2, "nz-option", 15);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(55, "div", 11)(56, "nz-form-item")(57, "nz-form-label");
            i0.ɵɵtext(58, "Conclus\u00E3o");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "nz-form-control")(60, "label")(61, "input", 23);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd();
            i0.ɵɵtext(62, " Sess\u00E3o conclu\u00EDda");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(63, "div", 11)(64, "nz-form-item")(65, "nz-form-label", 12);
            i0.ɵɵtext(66, "Tempo Estudado");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "nz-form-control", 24)(68, "nz-time-picker", 25);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(69, "div", 10)(70, "div", 11)(71, "nz-form-item")(72, "nz-form-label");
            i0.ɵɵtext(73, "Quest\u00F5es Feitas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "nz-form-control")(75, "nz-input-number", 26);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(76, "div", 11)(77, "nz-form-item")(78, "nz-form-label");
            i0.ɵɵtext(79, "Acertos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "nz-form-control")(81, "nz-input-number", 27);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(82, "div", 11)(83, "nz-form-item")(84, "nz-form-label");
            i0.ɵɵtext(85, "Detalhes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "nz-form-control")(87, "button", 28);
            i0.ɵɵlistener("click", function RegistroListaComponent_Template_button_click_87_listener() { return ctx.questoesAbaAberta = true; });
            i0.ɵɵelement(88, "i", 29);
            i0.ɵɵtext(89, " Registros ");
            i0.ɵɵtemplate(90, RegistroListaComponent_span_90_Template, 2, 1, "span", 30);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(91, "div", 10)(92, "div", 11)(93, "nz-form-item")(94, "nz-form-label");
            i0.ɵɵtext(95, "Observa\u00E7\u00F5es Gerais");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "nz-form-control")(97, "textarea", 31);
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(98, "div", 32)(99, "button", 33);
            i0.ɵɵelement(100, "i", 29);
            i0.ɵɵtext(101);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(102, "nz-modal", 34);
            i0.ɵɵtwoWayListener("nzVisibleChange", function RegistroListaComponent_Template_nz_modal_nzVisibleChange_102_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.questoesAbaAberta, $event) || (ctx.questoesAbaAberta = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("nzOnCancel", function RegistroListaComponent_Template_nz_modal_nzOnCancel_102_listener() { return ctx.questoesAbaAberta = false; });
            i0.ɵɵtemplate(103, RegistroListaComponent_ng_container_103_Template, 11, 7, "ng-container", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(104, RegistroListaComponent_ng_template_104_Template, 2, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const renderMateriaTemplate_r18 = i0.ɵɵreference(12);
            const renderTemplate_r19 = i0.ɵɵreference(21);
            const renderMaterialGuiaTemplate_r20 = i0.ɵɵreference(30);
            const extraTemplate_r21 = i0.ɵɵreference(105);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzTitle", ctx.tituloFormulario)("nzExtra", extraTemplate_r21);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.validateForm);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzGutter", 24);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzSpan", 6);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("nzDropdownRender", renderMateriaTemplate_r18);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.listaMaterias);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSpan", 6);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("nzDropdownRender", renderTemplate_r19);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.listaAssuntos);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSpan", 6);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("nzDropdownRender", renderMaterialGuiaTemplate_r20);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.listaMateriaisGuia);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzSpan", 6);
            i0.ɵɵadvance(5);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzGutter", 24);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzSpan", 16);
            i0.ɵɵadvance(5);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.listaPlanejamentos);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzGutter", 24);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzSpan", 8);
            i0.ɵɵadvance(5);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.listaTiposRegistro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzSpan", 8);
            i0.ɵɵadvance(6);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSpan", 8);
            i0.ɵɵadvance(5);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzGutter", 24);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzSpan", 8);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("nzMin", 0);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzSpan", 8);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("nzMin", 0);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzSpan", 8);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.registrosQuestoes.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzGutter", 24);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzSpan", 24);
            i0.ɵɵadvance(5);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzLoading", ctx.salvando);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.textoBotaoSalvar, " ");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("nzVisible", ctx.questoesAbaAberta);
            i0.ɵɵproperty("nzFooter", null)("nzWidth", 620);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, NzFormModule, i3.NzColDirective, i3.NzRowDirective, i4.NzFormDirective, i4.NzFormItemComponent, i4.NzFormLabelComponent, i4.NzFormControlComponent, NzInputModule, i5.NzInputDirective, NzSelectModule, i6.NzOptionComponent, i6.NzSelectComponent, NzDatePickerModule, i7.NzDatePickerComponent, NzTimePickerModule, i8.NzTimePickerComponent, NzInputNumberModule, i9.NzInputNumberComponent, NzButtonModule, i10.NzButtonComponent, i11.ɵNzTransitionPatchDirective, i12.NzWaveDirective, NzIconModule, i13.NzIconDirective, NzCardModule, i14.NzCardComponent, NzModalModule, i15.NzModalComponent, i15.NzModalContentDirective], styles: [".registro-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.form-footer[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 10px;\n  padding-top: 20px;\n  border-top: 1px solid var(--%NS%border, #e5e7eb);\n}\n\nnz-form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.registro-card[_ngcontent-%COMP%]   .ant-card-body[_ngcontent-%COMP%] {\n  padding: clamp(18px, 3vw, 28px);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 28px 0 22px;\n  color: var(--%NS%text, #0f172a);\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.section-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background: var(--%NS%border, #e5e7eb);\n}\n\n.record-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 30px;\n  padding: 0 12px;\n  border-radius: 999px;\n  background: #eff6ff;\n  color: #1677ff;\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.question-log-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  width: 100%;\n  min-height: 32px;\n  padding: 0 10px;\n  font-weight: 750;\n}\n\n.question-log-modal[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n\n.question-log-entry[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(180px, 1fr) 100px 100px auto;\n  gap: 10px;\n  align-items: center;\n}\n\n.question-log-entry[_ngcontent-%COMP%]   nz-input-number[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.question-log-entry[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.question-log-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.question-log-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  background: #f1f5f9;\n}\n\n.question-log-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  max-height: 260px;\n  overflow: auto;\n}\n\n.question-log-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto 34px;\n  gap: 10px;\n  align-items: center;\n  min-height: 38px;\n  padding: 6px 8px 6px 12px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 6px;\n  background: var(--%NS%surface, #fff);\n}\n\n.question-log-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-wrap: anywhere;\n  color: var(--%NS%text, #0f172a);\n  font-weight: 650;\n}\n\n.question-log-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1677ff;\n  white-space: nowrap;\n}\n\n.dropdown-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  padding: 8px;\n  border-top: 1px solid #f0f0f0;\n}\n\n.dropdown-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 8px;\n  height: 32px;\n}\n\n.add-item-btn[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  color: #1890ff;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.add-item-btn[_ngcontent-%COMP%]:hover {\n  color: #40a9ff;\n}\n\n@media (max-width: 900px) {\n  [nz-col][_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n\n  .form-footer[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n\n@media (max-width: 760px) {\n  .registro-card[_ngcontent-%COMP%]   .ant-card-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\n  .section-title[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 8px;\n    margin: 22px 0 16px;\n  }\n\n  .section-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n    flex: 0 0 auto;\n  }\n\n  .question-log-entry[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .question-log-entry[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .dropdown-wrapper[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .dropdown-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .add-item-btn[_ngcontent-%COMP%] {\n    justify-content: center;\n    min-height: 34px;\n  }\n\n  .form-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegistroListaComponent, [{
        type: Component,
        args: [{ selector: 'app-registro-lista', standalone: true, imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    NzFormModule,
                    NzInputModule,
                    NzSelectModule,
                    NzDatePickerModule,
                    NzTimePickerModule,
                    NzInputNumberModule,
                    NzButtonModule,
                    NzIconModule,
                    NzCardModule,
                    NzModalModule,
                ], template: "<div class=\"registro-container\">\n  <nz-card class=\"page-card registro-card\" [nzTitle]=\"tituloFormulario\" [nzExtra]=\"extraTemplate\">\n    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\" nzLayout=\"vertical\">\n      \n      <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"6\">\n  <nz-form-item>\n    <nz-form-label nzRequired>Mat\u00E9ria</nz-form-label>\n    <nz-form-control nzErrorTip=\"Selecione ou cadastre a mat\u00E9ria\">\n      <nz-select \n        formControlName=\"materia\" \n        nzShowSearch \n        nzAllowClear \n        nzPlaceHolder=\"Selecione\"\n        [nzDropdownRender]=\"renderMateriaTemplate\"\n      >\n        <nz-option *ngFor=\"let m of listaMaterias\" [nzLabel]=\"m.nome\" [nzValue]=\"m.id\"></nz-option>\n      </nz-select>\n\n      <ng-template #renderMateriaTemplate>\n        <div class=\"dropdown-wrapper\" style=\"display: flex; flex-wrap: nowrap; padding: 8px;\">\n          <input type=\"text\" nz-input #inputMateria placeholder=\"Nova mat\u00E9ria...\" style=\"flex: auto;\" />\n          <a class=\"add-item-btn\" (click)=\"cadastrarMateriaRapida(inputMateria)\" style=\"flex: none; padding: 8px; display: block; cursor: pointer;\">\n            <i nz-icon nzType=\"plus\"></i> Criar\n          </a>\n        </div>\n      </ng-template>\n    </nz-form-control>\n  </nz-form-item>\n</div>\n        <div nz-col [nzSpan]=\"6\">\n        <nz-form-item>\n          <nz-form-label nzRequired>Assunto Estudado</nz-form-label>\n          <nz-form-control nzErrorTip=\"Selecione ou cadastre o assunto\">\n            <nz-select \n              formControlName=\"assunto\" \n              nzShowSearch \n              nzAllowClear \n              nzPlaceHolder=\"Assunto\"\n              [nzDropdownRender]=\"renderTemplate\"\n            >\n              <!-- Mudamos [nzValue]=\"a\" para [nzValue]=\"a.id\" -->\n              <nz-option *ngFor=\"let a of listaAssuntos\" [nzLabel]=\"a.nome\" [nzValue]=\"a.id\"></nz-option>\n            </nz-select>\n\n            <ng-template #renderTemplate>\n              <div class=\"dropdown-wrapper\">\n                <input type=\"text\" nz-input #inputElement placeholder=\"Novo assunto...\" />\n                <a class=\"add-item-btn\" (click)=\"cadastrarAssuntoRapido(inputElement)\">\n                  <i nz-icon nzType=\"plus\"></i> Criar\n                </a>\n              </div>\n            </ng-template>\n\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n        <div nz-col [nzSpan]=\"6\">\n          <nz-form-item>\n            <nz-form-label>Material-guia</nz-form-label>\n            <nz-form-control>\n              <nz-select\n                formControlName=\"materialGuia\"\n                nzShowSearch\n                nzAllowClear\n                nzPlaceHolder=\"Material-guia\"\n                [nzDropdownRender]=\"renderMaterialGuiaTemplate\">\n                <nz-option *ngFor=\"let materialGuia of listaMateriaisGuia\" [nzLabel]=\"materialGuia.nome\" [nzValue]=\"materialGuia.id\"></nz-option>\n              </nz-select>\n\n              <ng-template #renderMaterialGuiaTemplate>\n                <div class=\"dropdown-wrapper\">\n                  <input type=\"text\" nz-input #inputMaterialGuia placeholder=\"Novo material-guia...\" />\n                  <a class=\"add-item-btn\" (click)=\"cadastrarMaterialGuiaRapido(inputMaterialGuia)\">\n                    <i nz-icon nzType=\"plus\"></i> Criar\n                  </a>\n                </div>\n              </ng-template>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"6\">\n          <nz-form-item>\n            <nz-form-label nzRequired>Data do Estudo</nz-form-label>\n            <nz-form-control>\n              <nz-date-picker formControlName=\"dataEstudo\" style=\"width: 100%\"></nz-date-picker>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n\n      <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"16\">\n          <nz-form-item>\n            <nz-form-label>Planejamento</nz-form-label>\n            <nz-form-control>\n              <nz-select formControlName=\"planejamento\" nzShowSearch nzAllowClear nzPlaceHolder=\"Selecione o planejamento\">\n                <nz-option *ngFor=\"let planejamento of listaPlanejamentos\" [nzLabel]=\"planejamento.nome\" [nzValue]=\"planejamento.id\"></nz-option>\n              </nz-select>\n              <small>A etapa ser\u00E1 identificada pelo assunto e pelo tipo do registro.</small>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n\n      <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n          <nz-form-item>\n            <nz-form-label nzRequired>Tipo do Registro</nz-form-label>\n            <nz-form-control nzErrorTip=\"Selecione o tipo do registro\">\n              <nz-select formControlName=\"tipoRegistro\" nzPlaceHolder=\"Ex: Assunto, Quest\u00F5es...\">\n                <nz-option *ngFor=\"let t of listaTiposRegistro\" [nzLabel]=\"t.nome\" [nzValue]=\"t.id\"></nz-option>\n              </nz-select>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <nz-form-item>\n            <nz-form-label>Conclus\u00E3o</nz-form-label>\n            <nz-form-control>\n              <label><input type=\"checkbox\" formControlName=\"concluido\" /> Sess\u00E3o conclu\u00EDda</label>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <nz-form-item>\n            <nz-form-label nzRequired>Tempo Estudado</nz-form-label>\n            <nz-form-control nzErrorTip=\"Informe o tempo\">\n              <nz-time-picker formControlName=\"tempoEstudado\" nzFormat=\"HH:mm\" style=\"width: 100%\"></nz-time-picker>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n\n      <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n          <nz-form-item>\n            <nz-form-label>Quest\u00F5es Feitas</nz-form-label>\n            <nz-form-control>\n              <nz-input-number formControlName=\"questoesFeitas\" [nzMin]=\"0\" style=\"width: 100%\"></nz-input-number>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <nz-form-item>\n            <nz-form-label>Acertos</nz-form-label>\n            <nz-form-control>\n              <nz-input-number formControlName=\"questoesAcertadas\" [nzMin]=\"0\" style=\"width: 100%\"></nz-input-number>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n          <nz-form-item>\n            <nz-form-label>Detalhes</nz-form-label>\n            <nz-form-control>\n              <button nz-button nzSize=\"small\" type=\"button\" class=\"question-log-button\" (click)=\"questoesAbaAberta = true\">\n                <i nz-icon nzType=\"plus\"></i> Registros\n                <span *ngIf=\"registrosQuestoes.length\">({{ registrosQuestoes.length }})</span>\n              </button>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n\n      <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n          <nz-form-item>\n            <nz-form-label>Observa\u00E7\u00F5es Gerais</nz-form-label>\n            <nz-form-control>\n              <textarea nz-input formControlName=\"observacoes\" rows=\"2\"></textarea>\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n      <div class=\"form-footer\">\n        <button nz-button nzType=\"primary\" [nzLoading]=\"salvando\">\n          <i nz-icon nzType=\"plus\"></i> {{ textoBotaoSalvar }}\n        </button>\n      </div>\n    </form>\n  </nz-card>\n\n<nz-modal\n  [(nzVisible)]=\"questoesAbaAberta\"\n  nzTitle=\"Registros das quest\u00F5es feitas\"\n  [nzFooter]=\"null\"\n  [nzWidth]=\"620\"\n  (nzOnCancel)=\"questoesAbaAberta = false\">\n  <ng-container *nzModalContent>\n    <div class=\"question-log-modal\">\n      <div class=\"question-log-entry\" [formGroup]=\"registroQuestoesForm\">\n        <input nz-input formControlName=\"descricao\" placeholder=\"Ex: Caderno de erros, bloco 01, quest\u00F5es 1 a 15\" />\n        <nz-input-number formControlName=\"feitas\" [nzMin]=\"0\" [nzStep]=\"1\" nzPlaceHolder=\"Feitas\"></nz-input-number>\n        <nz-input-number formControlName=\"acertadas\" [nzMin]=\"0\" [nzStep]=\"1\" nzPlaceHolder=\"Acertos\"></nz-input-number>\n        <button nz-button nzType=\"default\" type=\"button\" (click)=\"adicionarRegistroQuestoes()\">\n          <i nz-icon nzType=\"plus\"></i> Adicionar\n        </button>\n      </div>\n\n      <div class=\"question-log-summary\" *ngIf=\"registrosQuestoes.length\">\n        <span>Total: <strong>{{ totalQuestoes('acertadas') }}/{{ totalQuestoes('feitas') }}</strong></span>\n        <span>{{ calcularAproveitamento(totalQuestoes('feitas'), totalQuestoes('acertadas')) }} de aproveitamento</span>\n      </div>\n\n      <div class=\"question-log-list\" *ngIf=\"registrosQuestoes.length\">\n        <div class=\"question-log-item\" *ngFor=\"let registro of registrosQuestoes; let i = index\">\n          <span>{{ registro.descricao || 'Registro sem descri\u00E7\u00E3o' }}</span>\n          <strong>{{ registro.acertadas }}/{{ registro.feitas }}</strong>\n          <button nz-button nzType=\"text\" nzDanger type=\"button\" (click)=\"removerRegistroQuestoes(i)\" aria-label=\"Remover registro de quest\u00F5es\">\n            <i nz-icon nzType=\"delete\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</nz-modal>\n\n<ng-template #extraTemplate>\n  <span class=\"record-count\">{{ modoEdicao ? 'Editando registro #' + registroEditandoId : totalRegistros + ' registros' }}</span>\n</ng-template>\n", styles: [".registro-container {\n  margin: 0 auto;\n}\n\n.form-footer {\n  text-align: right;\n  margin-top: 10px;\n  padding-top: 20px;\n  border-top: 1px solid var(--border, #e5e7eb);\n}\n\nnz-form-label {\n  font-weight: 600;\n}\n\n.registro-card .ant-card-body {\n  padding: clamp(18px, 3vw, 28px);\n}\n\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 28px 0 22px;\n  color: var(--text, #0f172a);\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.section-title::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background: var(--border, #e5e7eb);\n}\n\n.record-count {\n  display: inline-flex;\n  align-items: center;\n  min-height: 30px;\n  padding: 0 12px;\n  border-radius: 999px;\n  background: #eff6ff;\n  color: #1677ff;\n  font-size: 13px;\n  font-weight: 800;\n}\n\n.question-log-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  width: 100%;\n  min-height: 32px;\n  padding: 0 10px;\n  font-weight: 750;\n}\n\n.question-log-modal {\n  display: grid;\n  gap: 14px;\n}\n\n.question-log-entry {\n  display: grid;\n  grid-template-columns: minmax(180px, 1fr) 100px 100px auto;\n  gap: 10px;\n  align-items: center;\n}\n\n.question-log-entry nz-input-number {\n  width: 100%;\n}\n\n.question-log-entry button {\n  white-space: nowrap;\n}\n\n.question-log-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.question-log-summary span {\n  display: inline-flex;\n  align-items: center;\n  min-height: 28px;\n  padding: 0 10px;\n  border-radius: 999px;\n  background: #f1f5f9;\n}\n\n.question-log-list {\n  display: grid;\n  gap: 8px;\n  max-height: 260px;\n  overflow: auto;\n}\n\n.question-log-item {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto 34px;\n  gap: 10px;\n  align-items: center;\n  min-height: 38px;\n  padding: 6px 8px 6px 12px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 6px;\n  background: var(--surface, #fff);\n}\n\n.question-log-item span {\n  min-width: 0;\n  overflow-wrap: anywhere;\n  color: var(--text, #0f172a);\n  font-weight: 650;\n}\n\n.question-log-item strong {\n  color: #1677ff;\n  white-space: nowrap;\n}\n\n.dropdown-wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  padding: 8px;\n  border-top: 1px solid #f0f0f0;\n}\n\n.dropdown-wrapper input {\n  flex: 1;\n  margin-right: 8px;\n  height: 32px;\n}\n\n.add-item-btn {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  padding: 0 8px;\n  color: #1890ff;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.add-item-btn:hover {\n  color: #40a9ff;\n}\n\n@media (max-width: 900px) {\n  [nz-col] {\n    width: 100%;\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n\n  .form-footer {\n    text-align: left;\n  }\n}\n\n@media (max-width: 760px) {\n  .registro-card .ant-card-body {\n    padding: 16px;\n  }\n\n  .section-title {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 8px;\n    margin: 22px 0 16px;\n  }\n\n  .section-title::after {\n    width: 100%;\n    flex: 0 0 auto;\n  }\n\n  .question-log-entry {\n    grid-template-columns: 1fr;\n  }\n\n  .question-log-entry button {\n    width: 100%;\n  }\n\n  .dropdown-wrapper {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .dropdown-wrapper input {\n    margin-right: 0;\n  }\n\n  .add-item-btn {\n    justify-content: center;\n    min-height: 34px;\n  }\n\n  .form-footer button {\n    width: 100%;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegistroListaComponent, { className: "RegistroListaComponent", filePath: "src/app/pages/registro-lista/registro-lista.ts", lineNumber: 58 }); })();
