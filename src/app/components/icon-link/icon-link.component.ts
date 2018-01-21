import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  template: `
    <div class='icon-link'>
      <a routerLink="{{href}}" *ngIf="type === 'internal'; else external">
        <img src={{src}} />
      </a>
    </div>
    <ng-template #external>
      <a href="{{href}}">
        <img src={{src}} />
      </a>
    </ng-template>
  `,
  styleUrls: ['./icon-link.component.scss']
})
export class IconLink {

  @Input()
  src = '';

  @Input()
  href = '/#';

  @Input()
  type: 'internal' | 'external' = 'internal';

}
