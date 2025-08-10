import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { ScrimService } from './scrim.service';

/**
 * Interface representing a navigation item.
 */
export interface NavItem {
  routerLink?: string;
  icon: string;
  label: string;
  ariaLabel: string;
  showOnBar: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private scrimService: ScrimService) { }

  // Navigation items
  public navItems: NavItem[] = [
    { routerLink: '/', icon: 'home', label: 'Home', ariaLabel: 'Home', showOnBar: true },
    { routerLink: '/components', icon: 'dashboard', label: 'Components', ariaLabel: 'Components', showOnBar: true },
    { routerLink: '/extras', icon: 'extension', label: 'Extras', ariaLabel: 'Extras', showOnBar: true },
    { routerLink: '/visuals', icon: 'photo', label: 'Visuals', ariaLabel: 'Visuals', showOnBar: true },
    { routerLink: '/news', icon: 'news', label: 'News', ariaLabel: 'News', showOnBar: true },
    {icon: 'stars', label: 'Label', ariaLabel: 'Label', showOnBar: false },
    {icon: 'stars', label: 'Label', ariaLabel: 'Label', showOnBar: false }
  ];

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
      if (isOpen) {
        this.scrimService.show(2, () => this.closeNavigationRail());
        this.scrimService.configureInteraction('Close Navigation Rail');
      } else {
        this.scrimService.hide();
      }
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
