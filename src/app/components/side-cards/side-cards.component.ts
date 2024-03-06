import { Component, Input } from '@angular/core';
import { News } from '../../news';

@Component({
  selector: 'app-side-cards',
  standalone: true,
  imports: [],
  template: `
  <div class="side-cards">
  <img [src]="news.urlToImage">
  <h4>{{ news.title }}</h4>
</div>`,
  styleUrl: './side-cards.component.css'
})
export class SideCardsComponent {
@Input() news: News = {
  title: '',
  urlToImage: '',
};
}
