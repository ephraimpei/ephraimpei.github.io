import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-space',
  template: `
    <section class='content-space'>
      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
      .content-space
      {
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class ContentSpace { }
