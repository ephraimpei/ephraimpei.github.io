import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project-item',
  template: `
    <div class="project-item">
      <h3>{{project.title}}</h3>
      <p>{{project.description}}</p>
      <h4><a href="{{project['live-link']}}">Live</a></h4>
      <h4><a href="{{project['github-link']}}">Github</a></h4>
    </div>
  `,
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItem {

  @Input()
  project: Project;

}
