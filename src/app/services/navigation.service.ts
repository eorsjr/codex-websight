import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { ScrimService } from './scrim.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private scrimService: ScrimService) { }

  public navigationRailOpen = signal(false); // Signal to track whether the navigation rail is open

  /**
   * Toggles the navigation rail's visibility and updates its class.
   * @returns {void}
   */
  public toggleNavigationRail(): void {
    const rail = document.querySelector('cxw-navigation-rail') as HTMLElement;
    if (rail && window.innerWidth < 840) {
      const isOpen = !this.navigationRailOpen();
      this.navigationRailOpen.set(isOpen);
      rail.classList.toggle('navigation-rail--visible', isOpen);
      if (isOpen) this.scrimService.show(2, () => this.toggleNavigationRail());
      else this.scrimService.hide();
    }
  }

  /**
   * Sets up a window resize listener to close the navigation rail if the window width is at least 840px.
   * @returns {void}
   */
  public setupAutoCloseOnResize(): void {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 840) {
        this.closeNavigationRail();
      }
    });
  }

  /**
   * Closes the navigation rail and updates its class.
   * @returns {void}
   */
  public closeNavigationRail(): void {
    const rail = document.querySelector('cxw-navigation-rail') as HTMLElement;
    if (rail && this.navigationRailOpen()) {
      this.navigationRailOpen.set(false);
      rail.classList.remove('navigation-rail--visible');
      this.scrimService.hide();
    }
  }

}
