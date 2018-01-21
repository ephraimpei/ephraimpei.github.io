import { Routes } from '@angular/router';

import {
  HomePage,
  ProjectsPage,
  ResumePage,
  AboutPage,
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
    path: 'resume',
    component: ResumePage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: '**',
    component: NotFoundPage
  }
];
