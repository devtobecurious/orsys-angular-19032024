import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: []
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    // R G R => TDD
    // A rrange

    // A ct

    // A ssert
    expect(service).toBeTruthy();
  });
});
