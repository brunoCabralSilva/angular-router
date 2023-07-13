import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: {
    id: string;
    permalink: string;
    thumbnail: string;
    title: string;
    price: string;
    seller: { nickname: string };
  }[];

  constructor() {
    this.items = [];
  }

  returnWord(word: string): string {
    let newWord = '';
    for (let i = 0; i < word.length; i += 1) {
      if (newWord.length < 45) {
        newWord += word[i];
      }
    }
    if (word.length > 40) newWord += '...';
    return newWord;
  };

  async ngOnInit() {
    try {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=MLB5726`);
      const responseJson = await response.json();
      this.items = responseJson.results;
      return responseJson;
    } catch (error) {
      return error;
    }
  };
}

