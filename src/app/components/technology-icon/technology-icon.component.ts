import { Component, Input } from '@angular/core';
import { TECHNOLOGIES, TECHNOLOGIES_SRC_MAPPING } from '../../constants/technologies';

@Component({
  selector: 'app-technology-icon',
  template: `
    <div class='technology-icon'>
      <img src={{src}} />
    </div>
  `,
  styleUrls: ['./technology-icon.component.scss']
})
export class TechnologyIcon {
  private src: string;

  @Input()
  technology: TECHNOLOGIES;

  constructor() {
    this.src = TECHNOLOGIES_SRC_MAPPING[`${this.technology}`];
  }
}
