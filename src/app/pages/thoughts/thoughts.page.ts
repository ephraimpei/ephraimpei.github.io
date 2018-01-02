import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  template: `
    <main class="thoughts-page">
      <app-content-space></app-content-space>
    </main>
  `,
  styles: [
    `.thoughts-page
    {
      height: 100%;
    }`
  ]
})
export class ThoughtsPage {

  constructor() { }

}
