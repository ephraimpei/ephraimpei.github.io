import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project-item',
  template: `
    PROJECT ITEM
  `,
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItem {

  @Input()
  project: Project;

}
