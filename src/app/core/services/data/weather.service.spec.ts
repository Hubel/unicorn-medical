import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the required amount of data entries', () => {
    const length = 5;
    expect(service.getRandomData(length)).toHaveSize(length);
  });

  it('should deliver wind direction', () => {
    const length = 5;
    const data = service.getRandomData(length);
    expect(data.find(weatherDataEntry => !weatherDataEntry.direction)).toBeFalsy();
  });
});
