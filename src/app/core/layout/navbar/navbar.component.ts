import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@userscripters/stackexchange-api-types/lib/types';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { Subject } from 'rxjs/internal/Subject';
import { SoUserService } from '../../services/data/so-user.service';

@Component({
  selector: 'ae-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public user?: User;
  private destroyed$ = new Subject();

  constructor(public authService: AuthService,
              private soUserService: SoUserService) {
  }

  ngOnInit() {
    this.authService.isAuthenticated$.pipe(takeUntil(this.destroyed$)).subscribe(async isAuthenticated => {
      this.user = isAuthenticated ? await this.soUserService.getUserName() : undefined;
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
