import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

const CURTAINS_PAGES = ['/projects'];

type Page = 'home' | 'about' | 'projects' | 'resume' | 'contact';

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
  private currentPage: Page;

  constructor(private router: Router) {
    const AppRootRef = this;

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isGoingToCurtainsPage = CURTAINS_PAGES.some(page => page === event.url);
        const isFromCurtainsPage = CURTAINS_PAGES.some(page => page === AppRootRef.previousUrl);

        AppRootRef.currentPage = event.url === '/' ? 'home' : event.url.slice(1) as Page;
        AppRootRef.curtainsToNotCurtainsPage = !isGoingToCurtainsPage && isFromCurtainsPage;
        AppRootRef.isNotCurtainsPage = !isGoingToCurtainsPage;
        AppRootRef.previousUrl = event.url;
      }
    });
  }

  getRootClass() {
    switch (this.currentPage) {
      case 'home': return 'small-bg';
      case 'about': return 'x-small-bg';
      case 'projects': return '';
      case 'contact': return '';
      default: return 'small-bg';
    }
  }

  getAppClass() {
    let klass = 'app-base-layer';
    klass += this.isNotCurtainsPage ? '' : ' curtains-active';
    klass += this.curtainsToNotCurtainsPage ? ' curtains-inactive' : '';
    return klass;
  }
}
