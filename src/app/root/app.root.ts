import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

const CURTAINS_PAGES = ['/thoughts', '/projects'];

@Component({
  selector: 'app-root',
  templateUrl: './app.root.html',
  styleUrls: ['./app.root.scss']
})
export class AppRoot {
  private isHomeOrAboutPage = false;
  private isNotCurtainsPage = false;
  private curtainsToNotCurtainsPage = false;
  private previousUrl: string;

  constructor(private router: Router) {
    const AppRootRef = this;

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isGoingToHomeOrAboutPage = event.url === '/' || event.url === '/about';
        const isGoingToCurtainsPage = CURTAINS_PAGES.some(page => page === event.url);
        const isFromCurtainsPage = CURTAINS_PAGES.some(page => page === AppRootRef.previousUrl);

        AppRootRef.isHomeOrAboutPage = isGoingToHomeOrAboutPage;
        AppRootRef.curtainsToNotCurtainsPage = !isGoingToCurtainsPage && isFromCurtainsPage;
        AppRootRef.isNotCurtainsPage = !isGoingToCurtainsPage;
        AppRootRef.previousUrl = event.url;
      }
    });
  }

  getRootClass() {
    return this.isHomeOrAboutPage ? 'small-bg' : '';
  }

  getAppClass() {
    let klass = 'app-base-layer';
    klass += this.isNotCurtainsPage ? '' : ' curtains-active';
    klass += this.curtainsToNotCurtainsPage ? ' curtains-inactive' : '';
    return klass;
  }
}
