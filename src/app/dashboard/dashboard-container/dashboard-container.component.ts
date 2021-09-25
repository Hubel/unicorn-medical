import { Component, Input, OnInit } from '@angular/core';
import { Question } from '@userscripters/stackexchange-api-types/lib/types';

import { SoQuestionsService } from '../../core/services/data/so-questions.service';
import { WeatherData, WeatherService } from '../../core/services/data/weather.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  @Input() tags?: string[];
  @Input() count?: number;
  // TODO: I don't really like this 'mixin' approach. It fulfills this simple requirement but it wouldn't allow
  //  any further adjustment. The container should manage to hold arbitrary items and the order should follow an
  //  interchangeable strategy.
  @Input() mixInWeather?: boolean = false;

  public questions: Question[];
  public weatherData: WeatherData[];

  constructor(private soQuestionsService: SoQuestionsService,
              private weatherService: WeatherService) {
    this.questions = [];
    this.weatherData = [];
  }

  async ngOnInit() {
    if (this.tags) {
      this.questions = await this.soQuestionsService.getQuestionsForTags(this.tags, this.count);
    }
    if (this.mixInWeather && this.count) {
      this.weatherData = this.weatherService.getRandomData(this.count);
    }
  }

  countArray() {
    return new Array(this.count);
  }
}
