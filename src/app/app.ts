import { Component, OnInit, PLATFORM_ID, inject, signal, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  private platformId = inject(PLATFORM_ID);

  protected readonly title = signal('rfx-estudos-front');
  modoEscuro = false;

  ngOnInit(): void {
    if (!this.estaNoBrowser()) return;

    const preferenciaSalva = localStorage.getItem('rfx-theme');
    this.modoEscuro = preferenciaSalva
      ? preferenciaSalva === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.aplicarTema();
  }

  alternarTema(): void {
    this.modoEscuro = !this.modoEscuro;
    this.aplicarTema();
  }

  private aplicarTema(): void {
    if (!this.estaNoBrowser()) return;

    document.documentElement.classList.toggle('dark-theme', this.modoEscuro);
    localStorage.setItem('rfx-theme', this.modoEscuro ? 'dark' : 'light');
  }

  private estaNoBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
