import { Component, ElementRef, Input, input, signal, ViewChild } from '@angular/core';
import { ButtonComponent } from "../buttons/button/button.component";
import { ScrimService } from '../services/scrim.service';

@Component({
  selector: 'cxw-basic-dialog',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './basic-dialog.component.html',
  styleUrl: './basic-dialog.component.css'
})
export class BasicDialogComponent {
  @Input('aria-label') ariaLabel: string = 'Dialog';
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  public isOpen = signal(false); // Signal to track whether the dialog is open

  constructor(private scrimService: ScrimService) { }

  /**
   * Opens the dialog and sets shows the scrim.
   * @returns {void}
   */
  public openDialog(): void {
    this.isOpen.set(true);
    this.scrimService.show(3);
    this.dialog.nativeElement.showModal();
  }

  /**
   * Closes the dialog and hides the scrim.
   * @returns {void}
   */
  public closeDialog(): void {
    this.isOpen.set(false);
    this.scrimService.hide();
    this.dialog.nativeElement.close();
  }

}
