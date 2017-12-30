import { Routes } from '@angular/router';

import {
  HomePage,
  ResumePage,
  AboutPage,
  ProjectsPage,
  NotFoundPage
} from './pages';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'projects',
    component: ProjectsPage
  },
  {
    path: 'resumes',
    component: ResumePage
  },
  {
    path: 'abouts',
    component: AboutPage
  },
  {
    path: '**',
    component: NotFoundPage
  }
];
