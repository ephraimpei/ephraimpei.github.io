import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.root.html',
  styleUrls: ['./app.root.scss']
})
export class AppRoot {
  private isHomeOrAboutPage = false;

  constructor(private router: Router) {
    const AppRootRef = this;

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        AppRootRef.isHomeOrAboutPage = event.url === '/' || event.url === '/about';
      }
    });
  }

  getClass() {
    return this.isHomeOrAboutPage ? 'small-bg' : '';
  }
}
