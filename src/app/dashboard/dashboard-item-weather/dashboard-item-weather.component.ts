import { Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

import { WeatherData } from '../../core/services/data/weather.service';

@Component({
  selector: 'app-dashboard-item-weather',
  templateUrl: './dashboard-item-weather.component.html',
  styleUrls: ['./dashboard-item-weather.component.scss']
})
export class DashboardItemWeatherComponent implements OnChanges {

  @ViewChild('windCompass', { static: false }) windCompass?: ElementRef;
  @Input() item?: WeatherData;

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item']) {
      let variableChange = changes['myVariable'];
      if (this.item?.direction) {
        this.renderer.setStyle(this.windCompass?.nativeElement, 'transform', `rotate(${this.item.direction}deg)`);
      }
    }
  }
}
