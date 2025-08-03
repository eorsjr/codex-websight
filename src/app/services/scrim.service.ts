import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrimService {

  constructor() { }

  public isVisible = signal(false); // Signal to track whether the scrim is visible
  public zIndex = signal(1); // Signal to store the current z-index of the scrim
  private clickAction: () => void = () => { }; // Function to execute when the scrim is clicked

  /**
   * Shows the scrim with the specified z-index and optional click action.
   * @param zIndex The z-index to set for the scrim.
   * @param action An optional function to execute when the scrim is clicked.
   * @returns {void}
   */
  public show(zIndex: number, action: () => void = () => { }): void {
    this.zIndex.set(zIndex);
    this.clickAction = action;
    this.isVisible.set(true);
  }

  /**
   * Hides the scrim.
   * @returns {void}
   */
  public hide(): void {
    this.isVisible.set(false);
    this.clickAction = () => { };
    const scrim = document.querySelector('cxw-scrim') as HTMLElement;
    if (scrim) {
      scrim.setAttribute('aria-hidden', 'true');
    }
  }

  /**
   * Performs the click action associated with the scrim.
   * @returns {void}
   */
  public performClickAction(): void {
    this.clickAction();
  }

  /**
   * Configures the interaction of the scrim.
   * @param ariaLabel The aria-label to set for the scrim.
   * @returns {void}
   */
  public configureInteraction(ariaLabel: string): void {
    const scrim = document.querySelector('cxw-scrim') as HTMLElement;
    if (scrim) {
      scrim.style.cursor = 'pointer';
      scrim.setAttribute('aria-label', ariaLabel);
      scrim.setAttribute('role', 'button');
      scrim.setAttribute('aria-hidden', 'false');
    }
  }
}