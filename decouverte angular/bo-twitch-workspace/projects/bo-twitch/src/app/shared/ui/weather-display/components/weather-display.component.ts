import { Component, inject } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'twt-weather-display',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent {
  //private readonly service = inject(WeatherService);
  public weather$ = inject(WeatherService).getOne();
}
