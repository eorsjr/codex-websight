import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'cxw-navigation-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  constructor(public navService: NavigationService, public scrollService: ScrollService) {}
}
