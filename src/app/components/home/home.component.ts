import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { BlogTitleComponent } from '../blog-title/blog-title.component';
import { MainCardComponent } from '../main-card/main-card.component';
import { NavComponent } from '../nav/nav.component';
import { SideCardsComponent } from '../side-cards/side-cards.component';
import { CommonModule } from '@angular/common';
import { News } from '../../news';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, BlogTitleComponent, MainCardComponent, NavComponent, SideCardsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  subject: string = 'brasil';
  newsTitle: string = `${this.subject} News`
  newslist: News[] = [];
  mainNews: News = {
    title: '',
    urlToImage: ''
  }
  newsService: NewsService = inject(NewsService);

  constructor() {
    this.newsService.getAllNews(this.subject).then((data) => {
      this.newslist = data.news;
      this.mainNews = data.firstNews;
    })
  }

  filterSubject(subject: string) {
    this.subject = subject;

    this.newsTitle = `${this.subject} News`

    this.newsService.getAllNews(this.subject).then((data) => {
      this.newslist = data.news;
      this.mainNews = data.firstNews;
    })
  }
}
