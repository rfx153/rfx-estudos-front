import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Configurações Globais do NG-ZORRO
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

// Registra o idioma português para formatação de datas, números, etc.
registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(), // <-- Permite que o Angular converse com o seu Java (API)
    provideAnimationsAsync(), // <-- Garante que os efeitos visuais do NG-ZORRO funcionem lisos
    { provide: NZ_I18N, useValue: pt_BR } // <-- Força os componentes do Zorro a falarem Português
  ]
};