import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey: string = 'd8f5990ae95a4af6a6f89f06ec38a250'
  subject: string = 'brasil';


  async getAllNews(subject: string) {
    const apiUrl: string = `https://newsapi.org/v2/everything?q=${subject.length > 0 ? subject.toLowerCase() : this.subject}&language=pt&sortBy=publishedAt&pageSize=7&apiKey=${this.apiKey}`
    
    const response = await fetch(apiUrl)
    
    const data = await response.json()
    
    const returnData = {
      firstNews: data.articles[0],
      news: data.articles.slice(1)
    }
    return returnData
  }
}
