import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project-item',
  template: `
    <div class="project-item">
      <hr>
      <h3>{{project.title}}</h3>
      <p>{{project.description}}</p>
      <app-technologies-tray [technologies]="project['technologies']"></app-technologies-tray>
      <h4><a href="{{project['live-link']}}">Live Site</a></h4>
      <div *ngIf="project['github-link']; else privateGithub">
        <h4><a href="{{project['github-link']}}">Github Repo</a></h4>
      </div>
      <ng-template #privateGithub><p>[Private Repository]</p></ng-template>
      <div class="lede">
        <a [href]="getSiteLink()">
          <img [src]="getLedeSrc()"/>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItem {

  @Input()
  project: Project;

  getLedeSrc() {
    return `assets/png/${this.project.image}`;
  }

  getSiteLink() {
    return this.project['live-link'];
  }

}
