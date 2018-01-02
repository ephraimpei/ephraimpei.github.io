import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

const CURTAINS_PAGES = ['/thoughts', '/projects', '/resumes'];

@Component({
  selector: 'app-root',
  templateUrl: './app.root.html',
  styleUrls: ['./app.root.scss']
})
export class AppRoot {
  private isHomeOrAboutPage = false;
  private isComingFromCurtainsPage = false;
  private previousUrl: string;

  constructor(private router: Router) {
    const AppRootRef = this;

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isHomeOrAboutPage = event.url === '/' || event.url === '/about';
        AppRootRef.isComingFromCurtainsPage =
          isHomeOrAboutPage && CURTAINS_PAGES.some(page => page === AppRootRef.previousUrl);
        AppRootRef.isHomeOrAboutPage = isHomeOrAboutPage;
        AppRootRef.previousUrl = event.url;
      }
    });
  }

  getRootClass() {
    return this.isHomeOrAboutPage ? 'small-bg' : '';
  }

  getAppClass() {
    let klass = 'app-base-layer';
    klass += this.isHomeOrAboutPage ? '' : ' curtains-active';
    klass += this.isComingFromCurtainsPage ? ' curtains-inactive' : '';
    return klass;
  }
}
