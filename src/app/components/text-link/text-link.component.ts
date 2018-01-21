import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-link',
  template: `
    <a
      class='text-link'
      routerLink="{{href}}"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact: true}"
      *ngIf="exactMatch; else noExactMatch">
        {{text}}
    </a>
    <ng-template #noExactMatch>
      <a
        class='text-link'
        routerLink="{{href}}"
        routerLinkActive="active">
        {{text}}
      </a>
    </ng-template>
  `
})
export class TextLink {

  @Input()
  text: string;

  @Input()
  href: string;

  @Input()
  exactMatch: boolean;

}
