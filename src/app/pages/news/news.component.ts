import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './news.component.html'
})
export class NewsComponent {

}
