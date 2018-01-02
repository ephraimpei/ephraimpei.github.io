import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-space',
  // templateUrl: './content-space.component.html',
  template: `
    <div class='content-space-wrapper'>
      <section class='content-space'>
        <ng-content></ng-content>
      </section>
    </div>
  `,
  styleUrls: ['./content-space.component.scss']
})
export class ContentSpace { }
