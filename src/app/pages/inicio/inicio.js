import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { RegistroService } from '../../services/registro.service';
import { RegistroDetalhesModalComponent } from '../../shared/registro-detalhes-modal/registro-detalhes-modal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/card";
import * as i3 from "ng-zorro-antd/spin";
function InicioComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function InicioComponent_button_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.tocarSomRetro()); });
    i0.ɵɵtext(1, " Tocar som retr\u00F4 ");
    i0.ɵɵelementEnd();
} }
function InicioComponent_a_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 44)(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 46)(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const atalho_r3 = ctx.$implicit;
    i0.ɵɵproperty("href", atalho_r3.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(atalho_r3.icone);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(atalho_r3.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(atalho_r3.descricao);
} }
function InicioComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtext(1, " Nenhum estudo registrado hoje. ");
    i0.ɵɵelementEnd();
} }
function InicioComponent_div_108_article_1_li_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assunto_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(assunto_r6);
} }
function InicioComponent_div_108_article_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 50)(1, "header")(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 51);
    i0.ɵɵlistener("click", function InicioComponent_div_108_article_1_Template_button_click_7_listener() { const materia_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.abrirDetalhesMateria(materia_r5)); });
    i0.ɵɵtext(8, "Ver detalhes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 52)(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "ul");
    i0.ɵɵtemplate(17, InicioComponent_div_108_article_1_li_17_Template, 2, 1, "li", 53);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const materia_r5 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(materia_r5.nome);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", materia_r5.assuntos.length, " assunto(s)");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", materia_r5.questoesFeitas, " quest\u00F5es");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", materia_r5.questoesAcertadas, " acertos");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", materia_r5.percentualAcertos, " de acerto");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", materia_r5.assuntos);
} }
function InicioComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵtemplate(1, InicioComponent_div_108_article_1_Template, 18, 6, "article", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.materiasComAssuntosHoje);
} }
export class InicioComponent {
    registroService = inject(RegistroService);
    cdr = inject(ChangeDetectorRef);
    platformId = inject(PLATFORM_ID);
    router = inject(Router);
    carregando = true;
    horasEstudadasHoje = '0h 00min';
    questoesFeitasHoje = 0;
    percentualAcertosHoje = '0%';
    materiasEstudadasHoje = 0;
    materiasComAssuntosHoje = [];
    detalhesVisiveis = false;
    detalhesTitulo = 'Detalhes do estudo';
    registrosSelecionados = [];
    saudacao = 'Bom dia, Rafael.';
    fraseMotivacional = '';
    somBloqueado = false;
    perfilVisivel = false;
    atalhosEstudo = [
        {
            nome: 'Estratégia novo',
            descricao: 'Abrir painel novo',
            url: 'https://concursos.estrategia.com/inicio?from=sidebar',
            icone: 'EN'
        },
        {
            nome: 'Estratégia antigo',
            descricao: 'Abrir dashboard de cursos',
            url: 'https://www.estrategiaconcursos.com.br/app/',
            icone: 'EA'
        },
        {
            nome: 'Tec Concursos',
            descricao: 'Resolver questões',
            url: 'https://www.tecconcursos.com.br/',
            icone: 'TC'
        }
    ];
    frasesMotivacionais = [
        'Um bloco bem estudado hoje vira tranquilidade na prova.',
        'Constância ganha de intensidade quando o plano é passar.',
        'Cada questão corrigida é um erro a menos no dia decisivo.',
        'Estudo registrado é progresso que você consegue enxergar.',
        'A aprovação gosta de rotina, revisão e um pouco de teimosia.',
        'Hoje não precisa ser perfeito; precisa contar.',
        'Quem mede o estudo aprende a ajustar a rota.',
        'Pequenas sessões bem feitas empilham resultados grandes.'
    ];
    ngOnInit() {
        this.definirSaudacao();
        this.sortearFraseMotivacional();
        this.carregarResumoDeHoje();
        this.tentarTocarSomInicial();
    }
    tocarSomRetro() {
        this.tocarChimeRetro();
        this.somBloqueado = false;
    }
    alternarPerfil() {
        this.perfilVisivel = !this.perfilVisivel;
    }
    abrirDetalhesMateria(materia) {
        this.detalhesTitulo = `Registros de ${materia.nome}`;
        this.registrosSelecionados = materia.registros;
        this.detalhesVisiveis = true;
    }
    editarRegistro(registro) {
        this.detalhesVisiveis = false;
        this.router.navigate(['/novo-registro'], { state: { registroParaEditar: registro } });
    }
    carregarResumoDeHoje() {
        this.carregando = true;
        this.registroService.listarHoje().subscribe({
            next: registros => {
                // O endpoint pode usar o fuso do servidor. Como `dataEstudo` é um
                // LocalDate (YYYY-MM-DD), confirme o dia no fuso local do navegador.
                const hoje = this.formatarDataLocal(new Date());
                const registrosDeHoje = registros.filter(registro => registro.dataEstudo?.substring(0, 10) === hoje);
                const minutosEstudados = registrosDeHoje.reduce((total, registro) => total + this.tempoParaMinutos(registro.tempoEstudado), 0);
                this.horasEstudadasHoje = this.formatarMinutos(minutosEstudados);
                this.questoesFeitasHoje = registrosDeHoje.reduce((total, registro) => total + (registro.questoesFeitas || 0), 0);
                const questoesAcertadasHoje = registrosDeHoje.reduce((total, registro) => total + (registro.questoesAcertadas || 0), 0);
                this.percentualAcertosHoje = this.calcularPercentualAcertos(questoesAcertadasHoje, this.questoesFeitasHoje);
                this.materiasEstudadasHoje = new Set(registrosDeHoje
                    .map(registro => registro.materia?.id ?? registro.materia?.nome)
                    .filter(Boolean)).size;
                this.materiasComAssuntosHoje = this.agruparMateriasEAssuntos(registrosDeHoje);
                this.carregando = false;
                this.cdr.detectChanges();
            },
            error: erro => {
                console.error('Erro ao carregar resumo de hoje:', erro);
                this.carregando = false;
                this.cdr.detectChanges();
            }
        });
    }
    tempoParaMinutos(tempo) {
        if (!tempo)
            return 0;
        const [horas = '0', minutos = '0'] = tempo.split(':');
        return Number(horas) * 60 + Number(minutos);
    }
    formatarMinutos(totalMinutos) {
        const horas = Math.floor(totalMinutos / 60);
        const minutos = totalMinutos % 60;
        return `${horas}h ${String(minutos).padStart(2, '0')}min`;
    }
    percentualMeta(valor, meta) {
        return Math.min(Math.round((valor / meta) * 100), 100);
    }
    calcularPercentualAcertos(acertos, feitas) {
        if (!feitas)
            return '0%';
        return `${Math.round((acertos / feitas) * 100)}%`;
    }
    sortearFraseMotivacional() {
        const indice = Math.floor(Math.random() * this.frasesMotivacionais.length);
        this.fraseMotivacional = this.frasesMotivacionais[indice];
    }
    definirSaudacao() {
        const hora = new Date().getHours();
        if (hora >= 18) {
            this.saudacao = 'Boa noite, Rafael.';
            return;
        }
        if (hora >= 12) {
            this.saudacao = 'Boa tarde, Rafael.';
            return;
        }
        this.saudacao = 'Bom dia, Rafael.';
    }
    formatarDataLocal(data) {
        const ano = data.getFullYear();
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const dia = String(data.getDate()).padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }
    tentarTocarSomInicial() {
        if (!isPlatformBrowser(this.platformId))
            return;
        setTimeout(() => {
            try {
                this.tocarChimeRetro();
            }
            catch {
                this.somBloqueado = true;
                this.cdr.detectChanges();
            }
        }, 450);
    }
    tocarChimeRetro() {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContextClass();
        if (audioContext.state === 'suspended') {
            audioContext.resume().catch(() => {
                this.somBloqueado = true;
                this.cdr.detectChanges();
            });
        }
        const masterGain = audioContext.createGain();
        masterGain.gain.setValueAtTime(0.08, audioContext.currentTime);
        masterGain.connect(audioContext.destination);
        const notas = [
            { frequencia: 523.25, inicio: 0, duracao: 0.16 },
            { frequencia: 659.25, inicio: 0.13, duracao: 0.2 },
            { frequencia: 783.99, inicio: 0.32, duracao: 0.34 },
            { frequencia: 1046.5, inicio: 0.52, duracao: 0.42 }
        ];
        notas.forEach(nota => {
            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();
            const inicio = audioContext.currentTime + nota.inicio;
            const fim = inicio + nota.duracao;
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(nota.frequencia, inicio);
            gain.gain.setValueAtTime(0, inicio);
            gain.gain.linearRampToValueAtTime(0.9, inicio + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, fim);
            oscillator.connect(gain);
            gain.connect(masterGain);
            oscillator.start(inicio);
            oscillator.stop(fim + 0.03);
        });
    }
    agruparMateriasEAssuntos(registros) {
        const materias = new Map();
        registros.forEach(registro => {
            const materiaNome = registro.materia?.nome;
            const assuntoNome = registro.assunto?.nome;
            if (!materiaNome)
                return;
            const materiaId = registro.materia?.id ?? materiaNome;
            const materia = materias.get(materiaId) ?? {
                id: materiaId,
                nome: materiaNome,
                assuntos: [],
                questoesFeitas: 0,
                questoesAcertadas: 0,
                percentualAcertos: '0%',
                registros: []
            };
            if (assuntoNome && !materia.assuntos.includes(assuntoNome)) {
                materia.assuntos.push(assuntoNome);
            }
            materia.questoesFeitas += registro.questoesFeitas || 0;
            materia.questoesAcertadas += registro.questoesAcertadas || 0;
            materia.percentualAcertos = this.calcularPercentualAcertos(materia.questoesAcertadas, materia.questoesFeitas);
            materia.registros.push(registro);
            materias.set(materiaId, materia);
        });
        return Array.from(materias.values()).sort((a, b) => a.nome.localeCompare(b.nome));
    }
    static ɵfac = function InicioComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InicioComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InicioComponent, selectors: [["app-inicio"]], decls: 110, vars: 25, consts: [[1, "home-page"], [1, "home-heading"], [1, "eyebrow"], [1, "home-greeting"], [1, "study-quote"], ["aria-hidden", "true", 1, "retro-widget"], [1, "pixel-spark", "spark-one"], [1, "pixel-spark", "spark-two"], [1, "pixel-orb"], [1, "pixel-shine"], [1, "pixel-eye", "eye-left"], [1, "pixel-eye", "eye-right"], [1, "pixel-shadow"], ["class", "sound-button", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "profile-button", 3, "click"], ["aria-label", "Perfil", 1, "profile-section"], ["src", "/imagens/perfil.png", "alt", "Foto de perfil", 1, "profile-photo"], [1, "profile-content"], [1, "profile-tags"], [3, "nzSpinning"], ["aria-label", "Links de estudo", 1, "links-section"], [1, "links-heading"], [1, "quick-links"], ["class", "quick-link", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngFor", "ngForOf"], [1, "stats-grid"], [1, "stat-card", "hours-card"], [1, "stat-label"], [1, "stat-card", "questions-card"], [1, "stat-card", "subjects-card"], [1, "stat-card", "accuracy-card"], ["aria-label", "Suas metas", 1, "goals-section"], [1, "goals-heading"], [1, "goals-caption"], [1, "goals-grid"], [1, "goal-card"], [1, "goal-icon"], [1, "goal-content"], [1, "goal-title"], [1, "goal-track"], ["nzTitle", "Mat\u00E9rias e assuntos estudados hoje", 1, "studied-list-card"], ["class", "empty-state", 4, "ngIf"], ["class", "studied-list", 4, "ngIf"], [3, "visivelChange", "editar", "visivel", "titulo", "registros"], ["type", "button", 1, "sound-button", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 1, "quick-link", 3, "href"], [1, "quick-link-icon"], [1, "quick-link-text"], [1, "empty-state"], [1, "studied-list"], ["class", "studied-item", 4, "ngFor", "ngForOf"], [1, "studied-item"], ["type", "button", 1, "detail-button", 3, "click"], [1, "studied-metrics"], [4, "ngFor", "ngForOf"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "span", 2);
            i0.ɵɵtext(4, "Hoje");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "strong", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "h1");
            i0.ɵɵtext(8, "Resumo dos estudos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "Acompanhe o ritmo do dia com os principais indicadores da sua sess\u00E3o.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "blockquote", 4);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 5);
            i0.ɵɵelement(14, "div", 6)(15, "div", 7);
            i0.ɵɵelementStart(16, "div", 8);
            i0.ɵɵelement(17, "span", 9)(18, "span", 10)(19, "span", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(21, InicioComponent_button_21_Template, 2, 0, "button", 13);
            i0.ɵɵelementStart(22, "button", 14);
            i0.ɵɵlistener("click", function InicioComponent_Template_button_click_22_listener() { return ctx.alternarPerfil(); });
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "section", 15);
            i0.ɵɵelement(25, "img", 16);
            i0.ɵɵelementStart(26, "div", 17)(27, "span", 2);
            i0.ɵɵtext(28, "Perfil");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "h2");
            i0.ɵɵtext(30, "Minha jornada");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "p");
            i0.ɵɵtext(32, "Este \u00E9 o seu espa\u00E7o para acompanhar estudos, metas e o caminho que est\u00E1 construindo.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 18)(34, "span");
            i0.ɵɵtext(35, "Estudante");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "span");
            i0.ɵɵtext(37, "Pesquisador");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "span");
            i0.ɵɵtext(39, "Concurseiro");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(40, "nz-spin", 19)(41, "section", 20)(42, "div", 21)(43, "span", 2);
            i0.ɵɵtext(44, "Links");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "h2");
            i0.ɵɵtext(46, "Acessos r\u00E1pidos");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div", 22);
            i0.ɵɵtemplate(48, InicioComponent_a_48_Template, 8, 4, "a", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "div", 24)(50, "nz-card", 25)(51, "span", 26);
            i0.ɵɵtext(52, "Horas estudadas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "strong");
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "nz-card", 27)(56, "span", 26);
            i0.ɵɵtext(57, "Quest\u00F5es feitas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "strong");
            i0.ɵɵtext(59);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(60, "nz-card", 28)(61, "span", 26);
            i0.ɵɵtext(62, "Mat\u00E9rias estudadas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "strong");
            i0.ɵɵtext(64);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "nz-card", 29)(66, "span", 26);
            i0.ɵɵtext(67, "Acertos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "strong");
            i0.ɵɵtext(69);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(70, "section", 30)(71, "div", 31)(72, "div")(73, "span", 2);
            i0.ɵɵtext(74, "Foco do dia");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "h2");
            i0.ɵɵtext(76, "Suas metas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(77, "span", 32);
            i0.ɵɵtext(78, "Acompanhe seu progresso");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(79, "div", 33)(80, "article", 34)(81, "div", 35);
            i0.ɵɵtext(82, "Q");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "div", 36)(84, "div", 37)(85, "strong");
            i0.ɵɵtext(86, "Fazer 100 quest\u00F5es");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "span");
            i0.ɵɵtext(88);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(89, "div", 38);
            i0.ɵɵelement(90, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(91, "small");
            i0.ɵɵtext(92);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(93, "article", 34)(94, "div", 35);
            i0.ɵɵtext(95, "M");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "div", 36)(97, "div", 37)(98, "strong");
            i0.ɵɵtext(99, "Estudar 4 mat\u00E9rias");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "span");
            i0.ɵɵtext(101);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(102, "div", 38);
            i0.ɵɵelement(103, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "small");
            i0.ɵɵtext(105);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(106, "nz-card", 39);
            i0.ɵɵtemplate(107, InicioComponent_div_107_Template, 2, 0, "div", 40)(108, InicioComponent_div_108_Template, 2, 1, "div", 41);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(109, "app-registro-detalhes-modal", 42);
            i0.ɵɵtwoWayListener("visivelChange", function InicioComponent_Template_app_registro_detalhes_modal_visivelChange_109_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.detalhesVisiveis, $event) || (ctx.detalhesVisiveis = $event); return $event; });
            i0.ɵɵlistener("editar", function InicioComponent_Template_app_registro_detalhes_modal_editar_109_listener($event) { return ctx.editarRegistro($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.saudacao);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.fraseMotivacional);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ctx.somBloqueado);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.perfilVisivel ? "Ocultar perfil" : "Perfil", " ");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("oculta", !ctx.perfilVisivel);
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("nzSpinning", ctx.carregando);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.atalhosEstudo);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.horasEstudadasHoje);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.questoesFeitasHoje);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.materiasEstudadasHoje);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.percentualAcertosHoje);
            i0.ɵɵadvance(19);
            i0.ɵɵtextInterpolate1("", ctx.questoesFeitasHoje, "/100");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", ctx.percentualMeta(ctx.questoesFeitasHoje, 100), "%");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.percentualMeta(ctx.questoesFeitasHoje, 100), "% conclu\u00EDdo");
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("", ctx.materiasEstudadasHoje, "/4");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", ctx.percentualMeta(ctx.materiasEstudadasHoje, 4), "%");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.percentualMeta(ctx.materiasEstudadasHoje, 4), "% conclu\u00EDdo");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.materiasComAssuntosHoje.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.materiasComAssuntosHoje.length);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("visivel", ctx.detalhesVisiveis);
            i0.ɵɵproperty("titulo", ctx.detalhesTitulo)("registros", ctx.registrosSelecionados);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, NzCardModule, i2.NzCardComponent, NzSpinModule, i3.NzSpinComponent, RegistroDetalhesModalComponent], styles: [".home-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 24px;\n}\n\n.home-heading[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  padding: clamp(20px, 4vw, 34px);\n  border: 1px solid var(--%NS%border, rgba(15, 23, 42, 0.08));\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);\n}\n\n.sound-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 24px;\n  bottom: 18px;\n  padding: 8px 12px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-soft, #f8fafc);\n  color: var(--%NS%text, #0f172a);\n  font-size: 12px;\n  font-weight: 850;\n  cursor: pointer;\n}\n\n.sound-button[_ngcontent-%COMP%]:hover {\n  border-color: #1677ff;\n  color: #1677ff;\n}\n\n.retro-widget[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 auto;\n  width: 112px;\n  height: 112px;\n  image-rendering: pixelated;\n}\n\n.pixel-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 14px;\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(#ffffff 0 0) 18px 8px / 28px 8px no-repeat,\n    linear-gradient(#ef4444 0 0) 8px 16px / 48px 16px no-repeat,\n    linear-gradient(#f97316 0 0) 0 32px / 64px 16px no-repeat,\n    linear-gradient(#fde047 0 0) 8px 48px / 48px 8px no-repeat,\n    linear-gradient(#7f1d1d 0 0) 16px 56px / 32px 8px no-repeat;\n  filter: drop-shadow(0 8px 0 rgba(15, 23, 42, 0.18));\n  animation: _ngcontent-%COMP%_pixel-hop 1.15s steps(2, end) infinite;\n}\n\n.pixel-orb[_ngcontent-%COMP%]::before, \n.pixel-orb[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  background: #ffffff;\n}\n\n.pixel-orb[_ngcontent-%COMP%]::before {\n  left: 8px;\n  top: 24px;\n  width: 8px;\n  height: 8px;\n}\n\n.pixel-orb[_ngcontent-%COMP%]::after {\n  right: 8px;\n  top: 24px;\n  width: 8px;\n  height: 8px;\n}\n\n.pixel-shine[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  top: 18px;\n  width: 16px;\n  height: 8px;\n  background: #fff7ed;\n}\n\n.pixel-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 38px;\n  width: 8px;\n  height: 8px;\n  background: #111827;\n  animation: _ngcontent-%COMP%_pixel-blink 2.6s steps(1, end) infinite;\n}\n\n.eye-left[_ngcontent-%COMP%] {\n  left: 22px;\n}\n\n.eye-right[_ngcontent-%COMP%] {\n  right: 22px;\n}\n\n.pixel-shadow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 28px;\n  bottom: 16px;\n  width: 56px;\n  height: 10px;\n  background: rgba(15, 23, 42, 0.14);\n  animation: _ngcontent-%COMP%_pixel-shadow 1.15s steps(2, end) infinite;\n}\n\n.pixel-spark[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: #facc15;\n  box-shadow:\n    8px 0 #facc15,\n    -8px 0 #facc15,\n    0 8px #facc15,\n    0 -8px #facc15;\n  animation: _ngcontent-%COMP%_pixel-twinkle 1.4s steps(2, end) infinite;\n}\n\n.spark-one[_ngcontent-%COMP%] {\n  right: 8px;\n  top: 18px;\n}\n\n.spark-two[_ngcontent-%COMP%] {\n  left: 8px;\n  bottom: 30px;\n  animation-delay: 0.45s;\n}\n\n@keyframes _ngcontent-%COMP%_pixel-hop {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-10px);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_pixel-shadow {\n  0%,\n  100% {\n    transform: scaleX(1);\n    opacity: 0.2;\n  }\n\n  50% {\n    transform: scaleX(0.72);\n    opacity: 0.12;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_pixel-blink {\n  0%,\n  88%,\n  100% {\n    height: 8px;\n  }\n\n  92% {\n    height: 2px;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_pixel-twinkle {\n  0%,\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  50% {\n    opacity: 0.35;\n    transform: scale(0.75);\n  }\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  color: #1677ff;\n  font-size: 12px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.home-greeting[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  color: var(--%NS%text, #0f172a);\n  font-size: clamp(18px, 3vw, 24px);\n  font-weight: 850;\n}\n\n.home-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 4px 0 8px;\n  color: var(--%NS%text, #0f172a);\n  font-size: clamp(28px, 4vw, 42px);\n  font-weight: 900;\n}\n\n.home-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0;\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 15px;\n}\n\n.study-quote[_ngcontent-%COMP%] {\n  max-width: 620px;\n  margin: 18px 0 0;\n  padding: 12px 14px;\n  border-left: 4px solid #1677ff;\n  border-radius: 0 8px 8px 0;\n  background: var(--%NS%surface-soft, #f8fafc);\n  color: var(--%NS%text, #0f172a);\n  font-size: 15px;\n  font-weight: 750;\n}\n\n.profile-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n  padding: 18px 22px;\n  border: 1px solid var(--%NS%border, rgba(15, 23, 42, 0.08));\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);\n}\n\n.profile-section.oculta[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.profile-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  right: 24px;\n  padding: 8px 14px;\n  border: 1px solid #bfdbfe;\n  border-radius: 999px;\n  color: #1d4ed8;\n  background: #eff6ff;\n  font-size: 13px;\n  font-weight: 850;\n  cursor: pointer;\n}\n\n.profile-button[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n\n.profile-photo[_ngcontent-%COMP%] {\n  width: 104px;\n  height: 104px;\n  flex: 0 0 auto;\n  border: 4px solid #dbeafe;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: center top;\n}\n\n.profile-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 4px 0 6px;\n  color: var(--%NS%text, #0f172a);\n  font-size: 22px;\n}\n\n.profile-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%text-muted, #64748b);\n}\n\n.profile-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.profile-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 999px;\n  color: #1d4ed8;\n  background: #eff6ff;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.links-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.links-heading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.links-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 18px;\n  font-weight: 900;\n}\n\n.quick-links[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.goals-section[_ngcontent-%COMP%] {\n  padding: 18px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n}\n\n.goals-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n\n.goals-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: var(--%NS%text, #0f172a);\n  font-size: 20px;\n}\n\n.goals-caption[_ngcontent-%COMP%], \n.goal-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n}\n\n.goals-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.goal-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n.goal-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 10px;\n  color: #fff;\n  background: #1677ff;\n  font-weight: 900;\n}\n\n.goal-content[_ngcontent-%COMP%] { flex: 1; min-width: 0; }\n.goal-title[_ngcontent-%COMP%] { display: flex; justify-content: space-between; gap: 10px; color: var(--%NS%text, #0f172a); }\n.goal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #1677ff; font-size: 13px; font-weight: 850; }\n.goal-track[_ngcontent-%COMP%] { height: 7px; margin: 10px 0 6px; overflow: hidden; border-radius: 999px; background: #dbeafe; }\n.goal-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: block; height: 100%; border-radius: inherit; background: #1677ff; transition: width .3s ease; }\n\n@media (max-width: 640px) {\n  .goals-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .goals-heading[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; gap: 4px; }\n}\n\n.quick-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 76px;\n  justify-content: center;\n  padding: 14px 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface, #fff);\n  color: var(--%NS%text, #0f172a);\n  text-decoration: none;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);\n  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.quick-link[_ngcontent-%COMP%]:hover {\n  border-color: #1677ff;\n  color: var(--%NS%text, #0f172a);\n  transform: translateY(-2px);\n  box-shadow: 0 16px 34px rgba(22, 119, 255, 0.14);\n}\n\n.quick-link-icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 auto;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 8px;\n  background: #1677ff;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.quick-link-text[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n}\n\n.quick-link-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 850;\n}\n\n.quick-link-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  min-height: 150px;\n}\n\n.stat-card[_ngcontent-%COMP%]   .ant-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 150px;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%text, #0f172a);\n  font-size: clamp(34px, 5vw, 52px);\n  font-weight: 900;\n  line-height: 1;\n}\n\n.hours-card[_ngcontent-%COMP%] {\n  border-top: 4px solid #1677ff;\n}\n\n.questions-card[_ngcontent-%COMP%] {\n  border-top: 4px solid #16a34a;\n}\n\n.subjects-card[_ngcontent-%COMP%] {\n  border-top: 4px solid #f59e0b;\n}\n\n.accuracy-card[_ngcontent-%COMP%] {\n  border-top: 4px solid #8b5cf6;\n}\n\n.studied-list-card[_ngcontent-%COMP%]   .ant-card-head-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 18px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--%NS%text-muted, #64748b);\n  background: var(--%NS%surface-soft, #f8fafc);\n}\n\n.studied-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.studied-item[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid var(--%NS%border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--%NS%surface-muted, #fbfdff);\n}\n\n.studied-item[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.studied-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.studied-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.studied-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%text, #0f172a);\n  font-size: 16px;\n}\n\n.studied-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--%NS%text-muted, #64748b);\n  font-weight: 700;\n}\n\n.detail-button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 7px 11px;\n  border: 1px solid rgba(22, 119, 255, 0.22);\n  border-radius: 8px;\n  background: #eff6ff;\n  color: #1677ff;\n  font-size: 12px;\n  font-weight: 850;\n  cursor: pointer;\n}\n\n.detail-button[_ngcontent-%COMP%]:hover {\n  border-color: #1677ff;\n}\n\n.studied-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.studied-metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  border-radius: 999px;\n  background: var(--%NS%surface, #fff);\n  color: var(--%NS%text, #0f172a);\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.studied-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.studied-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--%NS%text-muted, #475569);\n  font-weight: 650;\n}\n\n.studied-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: #16a34a;\n  box-shadow: 0 0 0 4px #dcfce7;\n}\n\n@media (max-width: 840px) {\n  .home-page[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n\n  .home-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 18px;\n  }\n\n  .sound-button[_ngcontent-%COMP%] {\n    position: static;\n    align-self: stretch;\n  }\n\n  .retro-widget[_ngcontent-%COMP%] {\n    order: -1;\n    align-self: center;\n    width: 86px;\n    height: 86px;\n    transform: scale(0.78);\n    transform-origin: center;\n    margin-bottom: -8px;\n  }\n\n  .home-greeting[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n\n  .home-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n    line-height: 1.08;\n  }\n\n  .home-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .study-quote[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .quick-links[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .quick-link[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    min-height: 64px;\n  }\n\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n\n  .stat-card[_ngcontent-%COMP%], \n   .stat-card[_ngcontent-%COMP%]   .ant-card-body[_ngcontent-%COMP%] {\n    min-height: 112px;\n  }\n\n  .stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n\n  .studied-item[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .detail-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .studied-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n\n  .studied-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n    flex: 0 0 auto;\n    margin-top: 6px;\n  }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InicioComponent, [{
        type: Component,
        args: [{ selector: 'app-inicio', standalone: true, imports: [CommonModule, NzCardModule, NzSpinModule, RegistroDetalhesModalComponent], template: "<section class=\"home-page\">\n  <header class=\"home-heading\">\n    <div>\n      <span class=\"eyebrow\">Hoje</span>\n      <strong class=\"home-greeting\">{{ saudacao }}</strong>\n      <h1>Resumo dos estudos</h1>\n      <p>Acompanhe o ritmo do dia com os principais indicadores da sua sess\u00E3o.</p>\n      <blockquote class=\"study-quote\">{{ fraseMotivacional }}</blockquote>\n    </div>\n\n    <div class=\"retro-widget\" aria-hidden=\"true\">\n      <div class=\"pixel-spark spark-one\"></div>\n      <div class=\"pixel-spark spark-two\"></div>\n      <div class=\"pixel-orb\">\n        <span class=\"pixel-shine\"></span>\n        <span class=\"pixel-eye eye-left\"></span>\n        <span class=\"pixel-eye eye-right\"></span>\n      </div>\n      <div class=\"pixel-shadow\"></div>\n    </div>\n\n    <button class=\"sound-button\" type=\"button\" *ngIf=\"somBloqueado\" (click)=\"tocarSomRetro()\">\n      Tocar som retr\u00F4\n    </button>\n\n    <button class=\"profile-button\" type=\"button\" (click)=\"alternarPerfil()\">\n      {{ perfilVisivel ? 'Ocultar perfil' : 'Perfil' }}\n    </button>\n  </header>\n\n  <section class=\"profile-section\" [class.oculta]=\"!perfilVisivel\" aria-label=\"Perfil\">\n    <img class=\"profile-photo\" src=\"/imagens/perfil.png\" alt=\"Foto de perfil\" />\n    <div class=\"profile-content\">\n      <span class=\"eyebrow\">Perfil</span>\n      <h2>Minha jornada</h2>\n      <p>Este \u00E9 o seu espa\u00E7o para acompanhar estudos, metas e o caminho que est\u00E1 construindo.</p>\n      <div class=\"profile-tags\">\n        <span>Estudante</span>\n        <span>Pesquisador</span>\n        <span>Concurseiro</span>\n      </div>\n    </div>\n  </section>\n\n  <nz-spin [nzSpinning]=\"carregando\">\n    <section class=\"links-section\" aria-label=\"Links de estudo\">\n      <div class=\"links-heading\">\n        <span class=\"eyebrow\">Links</span>\n        <h2>Acessos r\u00E1pidos</h2>\n      </div>\n\n      <div class=\"quick-links\">\n        <a\n          class=\"quick-link\"\n          *ngFor=\"let atalho of atalhosEstudo\"\n          [href]=\"atalho.url\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\">\n          <span class=\"quick-link-icon\">{{ atalho.icone }}</span>\n          <span class=\"quick-link-text\">\n            <strong>{{ atalho.nome }}</strong>\n            <small>{{ atalho.descricao }}</small>\n          </span>\n        </a>\n      </div>\n    </section>\n\n    <div class=\"stats-grid\">\n      <nz-card class=\"stat-card hours-card\">\n        <span class=\"stat-label\">Horas estudadas</span>\n        <strong>{{ horasEstudadasHoje }}</strong>\n      </nz-card>\n\n      <nz-card class=\"stat-card questions-card\">\n        <span class=\"stat-label\">Quest\u00F5es feitas</span>\n        <strong>{{ questoesFeitasHoje }}</strong>\n      </nz-card>\n\n      <nz-card class=\"stat-card subjects-card\">\n        <span class=\"stat-label\">Mat\u00E9rias estudadas</span>\n        <strong>{{ materiasEstudadasHoje }}</strong>\n      </nz-card>\n\n      <nz-card class=\"stat-card accuracy-card\">\n        <span class=\"stat-label\">Acertos</span>\n        <strong>{{ percentualAcertosHoje }}</strong>\n      </nz-card>\n    </div>\n\n    <section class=\"goals-section\" aria-label=\"Suas metas\">\n      <div class=\"goals-heading\">\n        <div>\n          <span class=\"eyebrow\">Foco do dia</span>\n          <h2>Suas metas</h2>\n        </div>\n        <span class=\"goals-caption\">Acompanhe seu progresso</span>\n      </div>\n\n      <div class=\"goals-grid\">\n        <article class=\"goal-card\">\n          <div class=\"goal-icon\">Q</div>\n          <div class=\"goal-content\">\n            <div class=\"goal-title\"><strong>Fazer 100 quest\u00F5es</strong><span>{{ questoesFeitasHoje }}/100</span></div>\n            <div class=\"goal-track\"><span [style.width.%]=\"percentualMeta(questoesFeitasHoje, 100)\"></span></div>\n            <small>{{ percentualMeta(questoesFeitasHoje, 100) }}% conclu\u00EDdo</small>\n          </div>\n        </article>\n\n        <article class=\"goal-card\">\n          <div class=\"goal-icon\">M</div>\n          <div class=\"goal-content\">\n            <div class=\"goal-title\"><strong>Estudar 4 mat\u00E9rias</strong><span>{{ materiasEstudadasHoje }}/4</span></div>\n            <div class=\"goal-track\"><span [style.width.%]=\"percentualMeta(materiasEstudadasHoje, 4)\"></span></div>\n            <small>{{ percentualMeta(materiasEstudadasHoje, 4) }}% conclu\u00EDdo</small>\n          </div>\n        </article>\n      </div>\n    </section>\n\n    <nz-card class=\"studied-list-card\" nzTitle=\"Mat\u00E9rias e assuntos estudados hoje\">\n      <div class=\"empty-state\" *ngIf=\"!materiasComAssuntosHoje.length\">\n        Nenhum estudo registrado hoje.\n      </div>\n\n      <div class=\"studied-list\" *ngIf=\"materiasComAssuntosHoje.length\">\n        <article class=\"studied-item\" *ngFor=\"let materia of materiasComAssuntosHoje\">\n          <header>\n            <div>\n              <strong>{{ materia.nome }}</strong>\n              <small>{{ materia.assuntos.length }} assunto(s)</small>\n            </div>\n            <button type=\"button\" class=\"detail-button\" (click)=\"abrirDetalhesMateria(materia)\">Ver detalhes</button>\n          </header>\n\n          <div class=\"studied-metrics\">\n            <span>{{ materia.questoesFeitas }} quest\u00F5es</span>\n            <span>{{ materia.questoesAcertadas }} acertos</span>\n            <span>{{ materia.percentualAcertos }} de acerto</span>\n          </div>\n\n          <ul>\n            <li *ngFor=\"let assunto of materia.assuntos\">{{ assunto }}</li>\n          </ul>\n        </article>\n      </div>\n    </nz-card>\n  </nz-spin>\n\n  <app-registro-detalhes-modal\n    [(visivel)]=\"detalhesVisiveis\"\n    [titulo]=\"detalhesTitulo\"\n    [registros]=\"registrosSelecionados\"\n    (editar)=\"editarRegistro($event)\">\n  </app-registro-detalhes-modal>\n</section>\n", styles: [".home-page {\n  display: grid;\n  gap: 24px;\n}\n\n.home-heading {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  padding: clamp(20px, 4vw, 34px);\n  border: 1px solid var(--border, rgba(15, 23, 42, 0.08));\n  border-radius: 8px;\n  background: var(--surface, #fff);\n  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);\n}\n\n.sound-button {\n  position: absolute;\n  right: 24px;\n  bottom: 18px;\n  padding: 8px 12px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-soft, #f8fafc);\n  color: var(--text, #0f172a);\n  font-size: 12px;\n  font-weight: 850;\n  cursor: pointer;\n}\n\n.sound-button:hover {\n  border-color: #1677ff;\n  color: #1677ff;\n}\n\n.retro-widget {\n  position: relative;\n  flex: 0 0 auto;\n  width: 112px;\n  height: 112px;\n  image-rendering: pixelated;\n}\n\n.pixel-orb {\n  position: absolute;\n  left: 24px;\n  top: 14px;\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(#ffffff 0 0) 18px 8px / 28px 8px no-repeat,\n    linear-gradient(#ef4444 0 0) 8px 16px / 48px 16px no-repeat,\n    linear-gradient(#f97316 0 0) 0 32px / 64px 16px no-repeat,\n    linear-gradient(#fde047 0 0) 8px 48px / 48px 8px no-repeat,\n    linear-gradient(#7f1d1d 0 0) 16px 56px / 32px 8px no-repeat;\n  filter: drop-shadow(0 8px 0 rgba(15, 23, 42, 0.18));\n  animation: pixel-hop 1.15s steps(2, end) infinite;\n}\n\n.pixel-orb::before,\n.pixel-orb::after {\n  content: \"\";\n  position: absolute;\n  background: #ffffff;\n}\n\n.pixel-orb::before {\n  left: 8px;\n  top: 24px;\n  width: 8px;\n  height: 8px;\n}\n\n.pixel-orb::after {\n  right: 8px;\n  top: 24px;\n  width: 8px;\n  height: 8px;\n}\n\n.pixel-shine {\n  position: absolute;\n  left: 24px;\n  top: 18px;\n  width: 16px;\n  height: 8px;\n  background: #fff7ed;\n}\n\n.pixel-eye {\n  position: absolute;\n  top: 38px;\n  width: 8px;\n  height: 8px;\n  background: #111827;\n  animation: pixel-blink 2.6s steps(1, end) infinite;\n}\n\n.eye-left {\n  left: 22px;\n}\n\n.eye-right {\n  right: 22px;\n}\n\n.pixel-shadow {\n  position: absolute;\n  left: 28px;\n  bottom: 16px;\n  width: 56px;\n  height: 10px;\n  background: rgba(15, 23, 42, 0.14);\n  animation: pixel-shadow 1.15s steps(2, end) infinite;\n}\n\n.pixel-spark {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background: #facc15;\n  box-shadow:\n    8px 0 #facc15,\n    -8px 0 #facc15,\n    0 8px #facc15,\n    0 -8px #facc15;\n  animation: pixel-twinkle 1.4s steps(2, end) infinite;\n}\n\n.spark-one {\n  right: 8px;\n  top: 18px;\n}\n\n.spark-two {\n  left: 8px;\n  bottom: 30px;\n  animation-delay: 0.45s;\n}\n\n@keyframes pixel-hop {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-10px);\n  }\n}\n\n@keyframes pixel-shadow {\n  0%,\n  100% {\n    transform: scaleX(1);\n    opacity: 0.2;\n  }\n\n  50% {\n    transform: scaleX(0.72);\n    opacity: 0.12;\n  }\n}\n\n@keyframes pixel-blink {\n  0%,\n  88%,\n  100% {\n    height: 8px;\n  }\n\n  92% {\n    height: 2px;\n  }\n}\n\n@keyframes pixel-twinkle {\n  0%,\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  50% {\n    opacity: 0.35;\n    transform: scale(0.75);\n  }\n}\n\n.eyebrow {\n  color: #1677ff;\n  font-size: 12px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.home-greeting {\n  display: block;\n  margin-top: 8px;\n  color: var(--text, #0f172a);\n  font-size: clamp(18px, 3vw, 24px);\n  font-weight: 850;\n}\n\n.home-heading h1 {\n  margin: 4px 0 8px;\n  color: var(--text, #0f172a);\n  font-size: clamp(28px, 4vw, 42px);\n  font-weight: 900;\n}\n\n.home-heading p {\n  max-width: 560px;\n  margin: 0;\n  color: var(--text-muted, #64748b);\n  font-size: 15px;\n}\n\n.study-quote {\n  max-width: 620px;\n  margin: 18px 0 0;\n  padding: 12px 14px;\n  border-left: 4px solid #1677ff;\n  border-radius: 0 8px 8px 0;\n  background: var(--surface-soft, #f8fafc);\n  color: var(--text, #0f172a);\n  font-size: 15px;\n  font-weight: 750;\n}\n\n.profile-section {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n  padding: 18px 22px;\n  border: 1px solid var(--border, rgba(15, 23, 42, 0.08));\n  border-radius: 8px;\n  background: var(--surface, #fff);\n  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);\n}\n\n.profile-section.oculta {\n  display: none;\n}\n\n.profile-button {\n  position: absolute;\n  top: 18px;\n  right: 24px;\n  padding: 8px 14px;\n  border: 1px solid #bfdbfe;\n  border-radius: 999px;\n  color: #1d4ed8;\n  background: #eff6ff;\n  font-size: 13px;\n  font-weight: 850;\n  cursor: pointer;\n}\n\n.profile-button:hover {\n  background: #dbeafe;\n}\n\n.profile-photo {\n  width: 104px;\n  height: 104px;\n  flex: 0 0 auto;\n  border: 4px solid #dbeafe;\n  border-radius: 50%;\n  object-fit: cover;\n  object-position: center top;\n}\n\n.profile-content h2 {\n  margin: 4px 0 6px;\n  color: var(--text, #0f172a);\n  font-size: 22px;\n}\n\n.profile-content p {\n  margin: 0;\n  color: var(--text-muted, #64748b);\n}\n\n.profile-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.profile-tags span {\n  padding: 5px 10px;\n  border-radius: 999px;\n  color: #1d4ed8;\n  background: #eff6ff;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.links-section {\n  margin-bottom: 16px;\n}\n\n.links-heading {\n  margin-bottom: 10px;\n}\n\n.links-heading h2 {\n  margin: 3px 0 0;\n  color: var(--text, #0f172a);\n  font-size: 18px;\n  font-weight: 900;\n}\n\n.quick-links {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.goals-section {\n  padding: 18px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n}\n\n.goals-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 14px;\n}\n\n.goals-heading h2 {\n  margin: 3px 0 0;\n  color: var(--text, #0f172a);\n  font-size: 20px;\n}\n\n.goals-caption,\n.goal-content small {\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n}\n\n.goals-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.goal-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-soft, #f8fafc);\n}\n\n.goal-icon {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 10px;\n  color: #fff;\n  background: #1677ff;\n  font-weight: 900;\n}\n\n.goal-content { flex: 1; min-width: 0; }\n.goal-title { display: flex; justify-content: space-between; gap: 10px; color: var(--text, #0f172a); }\n.goal-title span { color: #1677ff; font-size: 13px; font-weight: 850; }\n.goal-track { height: 7px; margin: 10px 0 6px; overflow: hidden; border-radius: 999px; background: #dbeafe; }\n.goal-track span { display: block; height: 100%; border-radius: inherit; background: #1677ff; transition: width .3s ease; }\n\n@media (max-width: 640px) {\n  .goals-grid { grid-template-columns: 1fr; }\n  .goals-heading { align-items: flex-start; flex-direction: column; gap: 4px; }\n}\n\n.quick-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 76px;\n  justify-content: center;\n  padding: 14px 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface, #fff);\n  color: var(--text, #0f172a);\n  text-decoration: none;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);\n  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.quick-link:hover {\n  border-color: #1677ff;\n  color: var(--text, #0f172a);\n  transform: translateY(-2px);\n  box-shadow: 0 16px 34px rgba(22, 119, 255, 0.14);\n}\n\n.quick-link-icon {\n  display: grid;\n  flex: 0 0 auto;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 8px;\n  background: #1677ff;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.quick-link-text {\n  display: grid;\n  gap: 3px;\n}\n\n.quick-link-text strong {\n  font-size: 15px;\n  font-weight: 850;\n}\n\n.quick-link-text small {\n  color: var(--text-muted, #64748b);\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.stat-card {\n  min-height: 150px;\n}\n\n.stat-card .ant-card-body {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 150px;\n}\n\n.stat-label {\n  color: var(--text-muted, #64748b);\n  font-size: 13px;\n  font-weight: 850;\n  text-transform: uppercase;\n}\n\n.stat-card strong {\n  color: var(--text, #0f172a);\n  font-size: clamp(34px, 5vw, 52px);\n  font-weight: 900;\n  line-height: 1;\n}\n\n.hours-card {\n  border-top: 4px solid #1677ff;\n}\n\n.questions-card {\n  border-top: 4px solid #16a34a;\n}\n\n.subjects-card {\n  border-top: 4px solid #f59e0b;\n}\n\n.accuracy-card {\n  border-top: 4px solid #8b5cf6;\n}\n\n.studied-list-card .ant-card-head-title {\n  font-size: 16px;\n}\n\n.empty-state {\n  padding: 18px;\n  border: 1px dashed #cbd5e1;\n  border-radius: 8px;\n  color: var(--text-muted, #64748b);\n  background: var(--surface-soft, #f8fafc);\n}\n\n.studied-list {\n  display: grid;\n  gap: 12px;\n}\n\n.studied-item {\n  padding: 16px;\n  border: 1px solid var(--border, #e5e7eb);\n  border-radius: 8px;\n  background: var(--surface-muted, #fbfdff);\n}\n\n.studied-item header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.studied-item strong,\n.studied-item small {\n  display: block;\n}\n\n.studied-item strong {\n  color: var(--text, #0f172a);\n  font-size: 16px;\n}\n\n.studied-item small {\n  margin-top: 3px;\n  color: var(--text-muted, #64748b);\n  font-weight: 700;\n}\n\n.detail-button {\n  flex: 0 0 auto;\n  padding: 7px 11px;\n  border: 1px solid rgba(22, 119, 255, 0.22);\n  border-radius: 8px;\n  background: #eff6ff;\n  color: #1677ff;\n  font-size: 12px;\n  font-weight: 850;\n  cursor: pointer;\n}\n\n.detail-button:hover {\n  border-color: #1677ff;\n}\n\n.studied-metrics {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.studied-metrics span {\n  padding: 5px 9px;\n  border-radius: 999px;\n  background: var(--surface, #fff);\n  color: var(--text, #0f172a);\n  font-size: 12px;\n  font-weight: 800;\n}\n\n.studied-item ul {\n  display: grid;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.studied-item li {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--text-muted, #475569);\n  font-weight: 650;\n}\n\n.studied-item li::before {\n  content: \"\";\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: #16a34a;\n  box-shadow: 0 0 0 4px #dcfce7;\n}\n\n@media (max-width: 840px) {\n  .home-page {\n    gap: 16px;\n  }\n\n  .home-heading {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 18px;\n  }\n\n  .sound-button {\n    position: static;\n    align-self: stretch;\n  }\n\n  .retro-widget {\n    order: -1;\n    align-self: center;\n    width: 86px;\n    height: 86px;\n    transform: scale(0.78);\n    transform-origin: center;\n    margin-bottom: -8px;\n  }\n\n  .home-greeting {\n    font-size: 19px;\n  }\n\n  .home-heading h1 {\n    font-size: 28px;\n    line-height: 1.08;\n  }\n\n  .home-heading p,\n  .study-quote {\n    font-size: 14px;\n  }\n\n  .quick-links {\n    grid-template-columns: 1fr;\n  }\n\n  .quick-link {\n    justify-content: flex-start;\n    min-height: 64px;\n  }\n\n  .stats-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n\n  .stat-card,\n  .stat-card .ant-card-body {\n    min-height: 112px;\n  }\n\n  .stat-card strong {\n    font-size: 36px;\n  }\n\n  .studied-item header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .detail-button {\n    width: 100%;\n  }\n\n  .studied-item li {\n    align-items: flex-start;\n  }\n\n  .studied-item li::before {\n    flex: 0 0 auto;\n    margin-top: 6px;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InicioComponent, { className: "InicioComponent", filePath: "src/app/pages/inicio/inicio.ts", lineNumber: 34 }); })();
