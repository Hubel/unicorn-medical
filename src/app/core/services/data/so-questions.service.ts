import { Injectable } from '@angular/core';
import { Question } from '@userscripters/stackexchange-api-types/lib/types';

import { SoConnectorService } from './so-connector.service';

@Injectable({
  providedIn: 'root'
})
export class SoQuestionsService {

  constructor(private connector: SoConnectorService) { }

  async getQuestionsForTags(tags: string[], pageSize = 5): Promise<Question[]> {
    const qustionsResponse = await this.connector.get<Question>('search', {
      pagesize: pageSize,
      order: 'desc',
      sort: 'creation',
      tagged: tags.join(' ')
    });
    if (qustionsResponse?.items && qustionsResponse?.items.length > 0) {
      return qustionsResponse?.items;
    }
    return [];
  }
}
