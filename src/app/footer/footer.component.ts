import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  styleSymbol = {
    fontSize: '20px',
    marginRight: '7px',
    marginLeft: '7px',
  };
}
