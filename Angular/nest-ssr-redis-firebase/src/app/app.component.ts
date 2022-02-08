import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fullstack-sample-project';

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  loginWithRedirect() {
    if (isPlatformBrowser(this.platformId)) {

    }
  }
}
