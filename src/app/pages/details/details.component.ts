import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id: string | null;
  object: {
    price: string,
    thumbnail: string,
    title: string,
    attributes: { name: string, value_name: string } [],
    pictures: { url: string }[],
  };

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.object = {
      price: '',
      thumbnail: '',
      title: '',
      attributes: [{ name: '', value_name: '' }],
      pictures: [{ url: '' }],
    };
  }

  async ngOnInit() {
    try {
      const response = await fetch(`https://api.mercadolibre.com/items/${this.id}`);
      const responseJson = await response.json();
      console.log(responseJson);
      this.object = responseJson;
    } catch (error) {
      console.log(error);
    }
  }
}
