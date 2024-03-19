import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey: string = 'pub_403408d479d3a6c6270ec6540545af92bfcec'
  subject: string = 'brasil';


  async getAllNews(subject: string) {
    const apiUrl: string = `https://newsdata.io/api/1/news?apikey=${this.apiKey}&q=${subject}&size=7&language=pt`
    
    const response = await fetch(apiUrl)
    
    const data = await response.json()
    
    const returnData = {
      firstNews: data.results[0],
      news: data.results.slice(1)
    }
    return returnData
  }
}
