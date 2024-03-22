import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, concatMap, interval, map } from 'rxjs';
import { WeatherInfo } from '../models';

type WeatherApiResult = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly http = inject(HttpClient); // angular 16

  // getOne(): Observable<WeatherInfo> {
  //   const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';
  //   return this.http.get<WeatherApiResult>(url).pipe(
  //     map((result) => {
  //       return {
  //         temperature: result.current.temperature_2m,
  //         content: `Wind speed: ${result.current.wind_speed_10m} km/h`
  //       }
  //     })
  //   );
  // }

  getOne(): Observable<WeatherInfo> {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';
    const weather$ =  this.http.get<WeatherApiResult>(url).pipe(
      map((result) => {
        return {
          temperature: result.current.temperature_2m,
          content: `Wind speed: ${result.current.wind_speed_10m} km/h`
        }
      })
    );

    return interval(1000).pipe(
      concatMap(tick => weather$)
    )
  }
  
}
