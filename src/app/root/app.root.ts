import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

const CURTAINS_PAGES = ['/thoughts', '/projects', '/resume'];

@Component({
  selector: 'app-root',
  templateUrl: './app.root.html',
  styleUrls: ['./app.root.scss']
})
export class AppRoot {
  private isNotCurtainsPage = false;
  private curtainsToNotCurtainsPage = false;
  private curtainsToCurtainsPage = false;
  private previousUrl: string;

  constructor(private router: Router) {
    const AppRootRef = this;

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isGoingToCurtainsPage = CURTAINS_PAGES.some(page => page === event.url);
        const isFromCurtainsPage = CURTAINS_PAGES.some(page => page === AppRootRef.previousUrl);

        AppRootRef.curtainsToNotCurtainsPage = !isGoingToCurtainsPage && isFromCurtainsPage;
        AppRootRef.curtainsToCurtainsPage = isGoingToCurtainsPage && isFromCurtainsPage;
        AppRootRef.isNotCurtainsPage = !isGoingToCurtainsPage;
        AppRootRef.previousUrl = event.url;
      }
    });
  }

  getRootClass() {
    return this.isNotCurtainsPage ? 'small-bg' : '';
  }

  getAppClass() {
    let klass = 'app-base-layer';
    klass += this.isNotCurtainsPage ? '' : ' curtains-active';
    klass += this.curtainsToNotCurtainsPage ? ' curtains-inactive' : '';
    klass += this.curtainsToCurtainsPage ? ' animations-inactive' : '';
    return klass;
  }
}
