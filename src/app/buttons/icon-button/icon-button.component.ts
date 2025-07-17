import { Component, Input } from '@angular/core';

@Component({
  selector: 'cxw-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {
  @Input() type = 'default';
  @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 's';
  @Input() shape: 'round' | 'square' = 'round';
  @Input() width: 'narrow' | 'default' | 'wide' = 'default';
  @Input() color: 'filled' | 'tonal' | 'outlined' | 'standard' = 'filled';
  @Input() icon: string = 'grid_guides';


  get classes(): string {
    const classes: string[] = ["icon-button"];

    classes.push(`icon-button--size-${this.size}`);
    classes.push(`icon-button--shape-${this.shape}`);
    classes.push(`icon-button--width-${this.width}`);
    classes.push(`icon-button--color-${this.color}`);

    return classes.join(' ');
  }
}
