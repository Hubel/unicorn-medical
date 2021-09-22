import { Component } from '@angular/core';

import { SearchService } from './core/services/search.service';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private authService: AuthService,
              private _searchService: SearchService) {
    this.authService.init();
  }

  triggerService() {
    this._searchService.search('angular2').subscribe((res) => {
      console.log('API RESULT', res);
    });
  }

}
