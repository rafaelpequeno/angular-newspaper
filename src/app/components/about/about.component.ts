import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { BlogTitleComponent } from '../blog-title/blog-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavComponent, BlogTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
