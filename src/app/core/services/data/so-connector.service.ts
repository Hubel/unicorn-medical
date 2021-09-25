import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SoHttpParams, SoResponse } from './so.types';


export const soApiBaseUrl = 'https://api.stackexchange.com';
const soApiVersion = '2.3';
const soApiUrl = `${soApiBaseUrl}/${soApiVersion}`;

@Injectable({
  providedIn: 'root'
})
export class SoConnectorService {

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Performs a GET request at the StackOverflow API using the user's auth token stored in session storage.
   * Possible improvements:
   * - Return an observable and allow refetching
   * @param method
   * @param params
   */
  public async get<T>(method: string, params?: SoHttpParams): Promise<SoResponse<T>> {
    const accessToken = sessionStorage.getItem('access_token') || '';
    const response = await this.httpClient.get(`${soApiUrl}/${method}`, {
      params: {
        ...params,
        site: 'stackoverflow',
        // Actually this should not be necessary by defining 'sendAccessToken' on the OAuthModule but somehow it does not append the token
        access_token: accessToken,
        key: 'vtH3o)*O9kx1VaIcwcSA6A(('
      }
    }).toPromise() as unknown as SoResponse<T>;
    if (response.error_message) {
      throw new Error(response.error_message);
    }
    return response;
  }
}
