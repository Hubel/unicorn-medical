import { Component, Input, OnInit } from '@angular/core';
import { Question } from '@userscripters/stackexchange-api-types/lib/types';

import { SoQuestionsService } from '../../core/services/data/so-questions.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  @Input() tags?: string[];

  public questions: Question[];

  constructor(private soQuestionsService: SoQuestionsService) {
    this.questions = [];
  }

  async ngOnInit() {
    if (this.tags) {
      this.questions = await this.soQuestionsService.getQuestionsForTags(this.tags, 2);
    }
  }
}
