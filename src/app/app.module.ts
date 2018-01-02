import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoot } from './root/app.root';
import {
  IconLink,
  ContentSpace
} from './components';
import {
  NavBarLayout,
  SocialIconsTray
} from './layouts';
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
    // Root
    AppRoot,
    // Pages
    HomePage,
    ResumePage,
    AboutPage,
    ProjectsPage,
    NotFoundPage,
    // Layouts
    NavBarLayout,
    SocialIconsTray,
    // Components
    IconLink,
    ContentSpace
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule { }
