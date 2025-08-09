import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { ScrollingService } from '../../services/scrolling.service';

@Component({
  selector: 'cxw-navigation-rail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation-rail.component.html',
  styleUrl: './navigation-rail.component.css'
})
export class NavigationRailComponent {

  constructor(public navService: NavigationService, public scrollingService: ScrollingService) { }
}
