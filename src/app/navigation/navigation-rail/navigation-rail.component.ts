import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxw-navigation-rail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation-rail.component.html',
  styleUrl: './navigation-rail.component.css'
})
export class NavigationRailComponent {

  constructor(public navService: NavigationService) { }
}
