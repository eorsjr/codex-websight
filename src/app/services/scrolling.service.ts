import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';
import { effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  private pane: HTMLElement | null = null; // Pane element
  private railOpen = false; // Tracks if the navigation rail is open
  private prevScrollPos = 0; // Previous scroll position to determine scroll direction


  constructor(private navService: NavigationService) {
    effect(() => {
      this.railOpen = this.navService.navigationRailOpen();
    });
  }

  /**
   * Initializes the ScrollingService.
   * @returns {void}
   */
  public initialize(): void {
    this.pane = document.querySelector('cxw-pane') as HTMLElement;

    if (this.pane) {
      this.pane.addEventListener('scroll', this.handleScrollVisibility.bind(this));
      window.addEventListener('resize', this.handleScrollVisibility.bind(this));
      this.handleScrollVisibility();
    }
  }

  /**
   * Disables scrolling.
   * @returns {void}
   */
  public disableScroll(): void {
    if (this.pane) {
      this.pane.style.overflow = 'hidden';
    }
  }

  /**
   * Enables scrolling.
   * @returns {void}
   */
  public enableScroll(): void {
    if (this.pane) {
      this.pane.style.overflow = 'auto';
    }
  }

  /**
   * Scrolls the pane to the top smoothly, and resets the URL.
   * @returns {void}
   */
  public scrollToTop(): void {
    if (this.pane) {
      this.pane.scrollTo({ top: 0, behavior: 'smooth' as ScrollBehavior });
    }
    const cleanUrl = window.location.href.split('#')[0];
    window.history.replaceState({}, document.title, cleanUrl);
  }

  /**
   * Jumps to the top of the pane without smooth scrolling.
   * @returns {void}
   */
  public jumpToTop(): void {
    if (this.pane) {
      this.pane.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }

  /**
   * Toggles visibility of elements based on scroll direction.
   * @returns {void}
   */
  public handleScrollVisibility(): void {
    if (!this.pane) {
      return;
    }

    const navComponent = document.querySelector('cxw-navigation-bar') as HTMLElement;
    const appBar = document.querySelector('.app-bar') as HTMLElement;
    const fab = document.querySelector('.fab') as HTMLElement;

    const currentScrollPos = this.pane.scrollTop;

    const isScrollingUp = currentScrollPos < this.prevScrollPos;
    const isScrollingDown = currentScrollPos > this.prevScrollPos;
    const isAtTop = currentScrollPos <= 5;

    if (!this.railOpen) {
      if (window.innerWidth >= 840 || isScrollingUp || isAtTop) {
        navComponent?.classList.remove('navigation-bar--hidden');
        appBar?.classList.remove('app-bar--hidden');
        fab?.classList.remove('fab--hidden');
      } else if (isScrollingDown) {
        navComponent?.classList.add('navigation-bar--hidden');
        appBar?.classList.add('app-bar--hidden');
        fab?.classList.add('fab--hidden');
      }
    }

    this.prevScrollPos = currentScrollPos;
  }
}
