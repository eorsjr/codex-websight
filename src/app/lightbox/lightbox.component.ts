import { Component, HostBinding } from '@angular/core';
import { LightboxService } from '../services/lightbox.service';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../buttons/icon-button/icon-button.component';

@Component({
  selector: 'cxw-lightbox',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css',
})
export class LightboxComponent {

  constructor(public lightboxService: LightboxService) { }

  public loaded = false;

  /**
   * Binds the `lightbox--visible` class to the host element based on the lightbox's visibility state.
   * @returns {boolean} True if the lightbox should be visible, false otherwise.
   */
  @HostBinding('class.lightbox--visible')
  get visible(): boolean {
    return this.lightboxService.lightboxOpen();
  }

  /**
   * Called when the lightbox image loads.
   * Triggers the fade-in effect.
   * @returns {void}
   */
  public onImageLoad(): void {
    this.loaded = true;
  }

  /**
   * Closes the lightbox overlay.
   * @returns {void}
   */
  public closeLightbox(): void {
    this.loaded = false;
    this.lightboxService.closeLightbox();
  }

  /**
   * Shows the previous image in the lightbox.
   * @returns {void}
   */
  public showPreviousImage(): void {
    this.loaded = false;
    this.lightboxService.showPreviousImage();
  }

  /**
   * Shows the next image in the lightbox.
   * @returns {void}
   */
  public showNextImage(): void {
    this.loaded = false;
    this.lightboxService.showNextImage();
  }

}
