import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

const authConfig: AuthConfig = {
  loginUrl: 'https://stackoverflow.com/oauth/dialog',
  issuer: 'https://stackoverflow.com/oauth',
  redirectUri: window.location.origin,
  clientId: '20983',
  oidc: false,
  responseType: 'code',
  disableAtHashCheck: true,
  showDebugInformation: true,
  requireHttps: false,
  tokenEndpoint: 'https://stackoverflow.com/oauth/access_token'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  constructor(private oauthService: OAuthService) {
  }

  init() {
    this.oauthService.configure(authConfig);
    this.oauthService.scope = '';
    this.oauthService.tryLoginImplicitFlow().then(res => console.log('Try OAuth login:', res)).catch(console.error);
    this.isAuthenticatedSubject$.next(this.isLoggedIn);
  }

  login() {
    this.oauthService.initImplicitFlow();
    this.isAuthenticatedSubject$.next(this.isLoggedIn);
  }

  logout() {
    this.oauthService.logOut();
    this.isAuthenticatedSubject$.next(this.isLoggedIn);
  }

  get isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  // This should not be directly accessible but the OAuthModule does not attach is automatically to requests
  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }
}
