import { Component } from '@angular/core';
import { PaneComponent } from "./pane/pane.component";
import { AppBarComponent } from "./app-bar/app-bar.component";
import { ScrimComponent } from './scrim/scrim.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { FabComponent } from "./buttons/fab/fab.component";
import { ThemeService } from './services/theme.service';
import { NavigationService } from './services/navigation.service';
import { ScrollService } from './services/scroll.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationBarComponent } from "./navigation/navigation-bar/navigation-bar.component";
import { NavigationRailComponent } from "./navigation/navigation-rail/navigation-rail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaneComponent, AppBarComponent, ScrimComponent, LightboxComponent, FabComponent, NavigationBarComponent, NavigationRailComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'codex-websight';

  constructor(private router: Router, private themeService: ThemeService, private navigationService: NavigationService, public scrollService: ScrollService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.themeService.setInitialFont();
      });
  }

  ngAfterViewInit() {
    this.themeService.setInitialTheme();
    this.themeService.setInitialColorScheme();
    this.themeService.handleColorSchemeChange();
    setTimeout(() => {
      this.themeService.updateThemeColor();
    });
    this.scrollService.initialize();
    this.navigationService.setupAutoCloseOnResize();
  }
}
