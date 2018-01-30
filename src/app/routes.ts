import { Routes } from '@angular/router';

import {
  HomePage,
  ProjectsPage,
  AboutPage,
  ContactPage,
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
    path: 'about',
    component: AboutPage
  },
  {
    path: 'contact',
    component: ContactPage
  },
  {
    path: '**',
    component: NotFoundPage
  }
];
