import { Injectable } from '@angular/core';
import { User } from '@userscripters/stackexchange-api-types/lib/types';

import { SoConnectorService } from './so-connector.service';

@Injectable({
  providedIn: 'root'
})
export class SoUserService {

  constructor(private connector: SoConnectorService) { }

  async getUserName(): Promise<User | undefined> {
    const userInfoResponse = await this.connector.get<User>('me');
    if (userInfoResponse?.items && userInfoResponse?.items.length > 0) {
      return userInfoResponse?.items[0];
    }
    return undefined;
  }
}
