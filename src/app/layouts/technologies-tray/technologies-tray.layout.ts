import { Component, Input, OnInit } from '@angular/core';
import { TECHNOLOGIES } from '../../constants/technologies';

@Component({
  selector: 'app-technologies-tray',
  templateUrl: './technologies-tray.layout.html',
  styleUrls: ['./technologies-tray.layout.scss']
})
export class TechnologiesTray {

  @Input()
  technologies: TECHNOLOGIES[];

}
