import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Root
import { AppRoot } from './root/app.root';

// Components
import {
  IconLink,
  ContactForm,
  ContentSpace,
  ProjectItem,
  ProjectList,
  ResponsiveLink,
  TextLink,
  TechnologyIcon,
} from './components';

// Layouts
import {
  NavBarLayout,
  SocialIconsTray,
  TechnologiesTray,
} from './layouts';

// Pages
import {
  HomePage,
  ProjectsPage,
  ContactPage,
  AboutPage,
  ResumePage,
  NotFoundPage,
} from './pages';

// Services
import {
  ProjectService
} from './services';

// Routes
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppRoot,
    HomePage,
    ProjectsPage,
    ContactPage,
    AboutPage,
    ResumePage,
    NotFoundPage,
    NavBarLayout,
    SocialIconsTray,
    TechnologiesTray,
    IconLink,
    ContactForm,
    ContentSpace,
    ProjectItem,
    ProjectList,
    ResponsiveLink,
    TextLink,
    TechnologyIcon,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProjectService],
  bootstrap: [AppRoot]
})
export class AppModule { }
