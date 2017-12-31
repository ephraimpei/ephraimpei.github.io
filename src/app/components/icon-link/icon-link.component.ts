import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  template: `
    <div class='icon-link'>
      <a>
        <img src={{src}} />
      </a>
    </div>
  `,
  styleUrls: ['./icon-link.component.scss']
})
export class IconLink {

  @Input()
  src: string;

}
