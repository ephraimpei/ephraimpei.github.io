import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoot } from './root/app.root';
import { NavBarLayout } from './layouts';
import {
  HomePage,
  ResumePage,
  AboutPage,
  ProjectsPage
} from './pages';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppRoot,
    HomePage,
    ResumePage,
    AboutPage,
    ProjectsPage,
    NavBarLayout,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule { }
