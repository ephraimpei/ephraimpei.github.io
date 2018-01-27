import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-link',
  template: `
    <div class='responsive-link'>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./responsive-link.component.scss']
})
export class ResponsiveLink { }
