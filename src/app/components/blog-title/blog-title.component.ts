import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-title',
  standalone: true,
  imports: [],
  templateUrl: './blog-title.component.html',
  styleUrl: './blog-title.component.css'
})
export class BlogTitleComponent {
  @Input() title: string = ''
}
