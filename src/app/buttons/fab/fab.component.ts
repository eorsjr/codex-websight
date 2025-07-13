import { Component, Input } from '@angular/core';

@Component({
  selector: 'cxw-fab',
  standalone: true,
  imports: [],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.css'
})
export class FabComponent {
  @Input() size: 'base' | 'medium' | 'large' = 'base';
  @Input() color: 'tonal-primary' | 'tonal-secondary' | 'tonal-tertiary' | 'primary' | 'secondary' | 'tertiary' = 'tonal-primary';
  @Input() icon: string = 'grid_guides';

  get classes(): string[] {
    return [
      "fab",
      this.size,
      this.color,
      this.icon
    ];
  }
}
