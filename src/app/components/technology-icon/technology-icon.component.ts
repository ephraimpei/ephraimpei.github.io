import { Component, Input, OnInit } from '@angular/core';
import { TECHNOLOGIES, TECHNOLOGY_METADATA } from '../../constants/technologies';

@Component({
  selector: 'app-technology-icon',
  template: `<app-icon-link [href]="getHref()" [src]="getSvg()" type="external"></app-icon-link>`
})
export class TechnologyIcon {

  @Input()
  technology: TECHNOLOGIES;

  getSvg() {
    return TECHNOLOGY_METADATA[`${this.technology}`].svg;
  }

  getHref() {
    return TECHNOLOGY_METADATA[`${this.technology}`].href;
  }

}
