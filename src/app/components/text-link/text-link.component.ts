import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-link',
  template: `
    <a
      class='text-link'
      routerLink="{{href}}"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact: exactMatch}"
      *ngIf="type === 'internal'; else external">
      {{text}}
    </a>
    <ng-template #external>
      <a
        class='text-link'
        href="{{href}}">
        {{text}}
      </a>
    </ng-template>
  `
})
export class TextLink {

  @Input()
  text = '';

  @Input()
  href = '/#';

  @Input()
  exactMatch = false;

  @Input()
  type: 'internal' | 'external' = 'internal';

}
