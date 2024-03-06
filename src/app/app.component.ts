import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule ,RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
  <router-outlet></router-outlet>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  newsTitle: string = 'brasil News'
  
}
