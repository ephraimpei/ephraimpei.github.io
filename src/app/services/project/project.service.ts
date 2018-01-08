import { Injectable } from '@angular/core';
import { Project } from '../../interfaces/project';
import { PROJECTS } from '../../../data/projects';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

}
