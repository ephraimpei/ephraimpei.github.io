import { Component, OnInit } from '@angular/core';

import { Project } from '../../interfaces/project';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project-list',
  template: `
    <ul class="project-list">
      <li *ngFor="let project of projects">
        <app-project-item [project]=project></app-project-item>
      </li>
    </ul>
  `,
  styleUrls: ['./project-list.component.scss']
})
export class ProjectList implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
