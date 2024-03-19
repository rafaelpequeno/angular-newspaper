import { Component, Input } from '@angular/core';
import { News } from '../../news';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [],
  template: `
  <div class="main-card">
  <img
    [src]='mainNews.image_url'
  />
  <h2>{{mainNews.title}}</h2>
  <p>{{mainNews.description}}</p>
</div>
  `,
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {
  @Input() mainNews: News = {
    title: '',
    image_url: '',
    description: ''
  }

}
