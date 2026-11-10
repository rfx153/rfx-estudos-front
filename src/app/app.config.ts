import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Configurações Globais do NG-ZORRO
import { provideNzI18n, pt_BR } from 'ng-zorro-antd/i18n';
import { provideNzNativeDateAdapter } from 'ng-zorro-antd/core/time';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { NzModalModule } from 'ng-zorro-antd/modal';

// Registra o idioma português para formatação de datas, números, etc.
registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(), // <-- Permite que o Angular converse com o seu Java (API)
    provideAnimationsAsync(), // <-- Garante que os efeitos visuais do NG-ZORRO funcionem lisos
    provideNzI18n(pt_BR), // <-- Força os componentes do Zorro a falarem Português
    provideNzNativeDateAdapter({ locale: 'pt-BR', firstDayOfWeek: 1 }),
    importProvidersFrom(NzModalModule),
  ]
};
