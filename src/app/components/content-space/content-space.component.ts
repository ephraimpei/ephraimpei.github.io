import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-space',
  template: `
    <section class='content-space'>
      <ng-content></ng-content>
    </section>
  `,
  styleUrls: ['./content-space.component.scss']
})
export class ContentSpace { }
