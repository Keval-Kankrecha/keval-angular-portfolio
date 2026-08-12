import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'keval-ng-portfolio';

  // The boot animation belongs to the portfolio; /bio-data opens straight up.
  showBoot = window.location.pathname.replace(/\/+$/, '') === '';

  onBootComplete(): void {
    this.showBoot = false;
  }

  goToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  }
}