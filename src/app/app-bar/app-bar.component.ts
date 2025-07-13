import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { NavigationService } from '../services/navigation.service';
import { IconButtonComponent } from '../buttons/icon-button/icon-button.component';
import { BasicDialogComponent } from "../basic-dialog/basic-dialog.component";
import { ButtonComponent } from "../buttons/button/button.component";

@Component({
  selector: 'cxw-app-bar',
  standalone: true,
  imports: [IconButtonComponent, BasicDialogComponent, ButtonComponent],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css'
})
export class AppBarComponent {

  constructor(public themeService: ThemeService, public navService: NavigationService) { }

}
