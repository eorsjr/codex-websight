import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { PaneComponent } from "./pane/pane.component";
import { AppBarComponent } from "./app-bar/app-bar.component";
import { ScrimComponent } from './scrim/scrim.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { FabComponent } from "./buttons/fab/fab.component";
import { ThemeService } from './services/theme.service';
import { ElevationService } from './services/elevation.service';
import { NavigationService } from './services/navigation.service';
import { ScrollingService } from './services/scrolling.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, PaneComponent, AppBarComponent, ScrimComponent, LightboxComponent, FabComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'codex-websight';

  constructor(private router: Router, private themeService: ThemeService, private elevationService: ElevationService, private navigationService: NavigationService, public scrollingService: ScrollingService) {
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
    this.elevationService.initialize();
    this.navigationService.setupAutoCloseOnResize();
  }
}
