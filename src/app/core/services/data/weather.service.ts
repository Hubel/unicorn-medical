import {Injectable} from '@angular/core';

import { weatherData } from '../weatherdata';

export interface WeatherData {
  date: string;
  time: string;
  tempA: number;
  temp3: number;
  humidity: number;
  pressure: number;
  rain: number;
  wind: number;
  direction: number;
  brightness: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly data: WeatherData[];

  constructor() {
    this.data = weatherData.map(data => ({
      date: data['Datum'],
      time: data['Zeit'],
      tempA: data['Temp. A.'],
      temp3: data['Temp. 3'],
      humidity: data['Feuchte A.'],
      pressure: data['Luftdruck'],
      rain: data['Regen'],
      wind: data['Wind'],
      direction: data['Richtung'],
      brightness: data['Helligkeit']
    } as WeatherData));
  }

  public getRandomData(length: number): WeatherData[] {
    if (length <= 0) {
      return [];
    }
    let sampleSet = new Set<number>();
    for (let i = 0; i < length; i++) {
      let index;
      do {
        index = Math.floor(Math.random() * this.data.length);
      } while (sampleSet.has(index));
      sampleSet.add(index);
    }
    return [...sampleSet].map(i => this.data[i]);
  }
}
