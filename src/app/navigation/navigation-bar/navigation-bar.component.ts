import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingService } from '../../services/scrolling.service';

@Component({
  selector: 'cxw-navigation-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  constructor(public scrollingService: ScrollingService) {}
}
