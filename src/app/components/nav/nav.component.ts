import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
  <nav>
    <a href="/">
      <h4>Noticias</h4>
    </a>
    <a href="/about">
      <h4>Sobre</h4>
    </a>
</nav>
  `,
  styleUrl: './nav.component.css'
})
export class NavComponent {
}
