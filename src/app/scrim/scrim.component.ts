import { Component, effect, HostBinding, HostListener } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { ScrimService } from '../services/scrim.service';

@Component({
  selector: 'cxw-scrim',
  standalone: true,
  templateUrl: './scrim.component.html',
  styleUrls: ['./scrim.component.css']
})
export class ScrimComponent {

  constructor(private scrollService: ScrollService, public scrimService: ScrimService) {
    effect(() => {
      if (scrimService.isVisible()) {
        this.scrollService.disableScroll();
      } else {
        this.scrollService.enableScroll();
      }
    });
  }

  /**
   * Binds the `scrim--visible` class to the host element based on the scrim's visibility state.
   * @returns {boolean} True if the scrim should be visible, false otherwise.
   */
  @HostBinding('class.scrim--visible')
  get visible(): boolean {
    return this.scrimService.isVisible();
  }

  /**
   * Binds the `z-index` style property to the host element.
   * @returns {number} The z-index value for the scrim.
   */
  @HostBinding('style.z-index')
  get zIndex(): number {
    return this.scrimService.zIndex();
  }

  /**
   * Listens for click events on the host element and performs the configured action.
   * @returns {void}
   */
  @HostListener('click')
  public onClick(): void {
    this.scrimService.performClickAction();
  }
}