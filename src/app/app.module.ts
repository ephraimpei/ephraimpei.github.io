import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Root
import { AppRoot } from './root/app.root';

// Components
import {
  IconLink,
  ContentSpace,
  ProjectItem,
  ProjectList
} from './components';

// Layouts
import {
  NavBarLayout,
  SocialIconsTray
} from './layouts';

// Pages
import {
  HomePage,
  ThoughtsPage,
  ProjectsPage,
  ResumePage,
  AboutPage,
  NotFoundPage
} from './pages';

// Services
import {
  ProjectService
} from './services/project/project.service';

// Routes
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppRoot,
    HomePage,
    ProjectsPage,
    ThoughtsPage,
    ResumePage,
    AboutPage,
    NotFoundPage,
    NavBarLayout,
    SocialIconsTray,
    IconLink,
    ContentSpace,
    ProjectItem,
    ProjectList
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProjectService],
  bootstrap: [AppRoot]
})
export class AppModule { }
