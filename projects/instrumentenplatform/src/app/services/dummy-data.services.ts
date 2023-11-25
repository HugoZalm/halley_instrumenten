import { Injectable, OnDestroy } from '@angular/core';
import { Apollo, Subscription } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { gql } from '@apollo/client/core';
import { WeatherData } from '../model/classes/weather-data';
import { BehaviorSubject } from 'rxjs';

export const weatherGql = gql`
query weather {
    weather {
        date
        native
        emoji
    }
}`;

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {
  private weatherSource = new BehaviorSubject<WeatherData>(new WeatherData());
  weatherData$ = this.weatherSource.asObservable();
 
  constructor(private apollo: Apollo) {}

  getWeather(): void {
    this.apollo.query({
      query: weatherGql
    })
    .pipe(
      map(weather => weather.data as WeatherData)
    )
    .subscribe((data) => {
      this.weatherSource.next(data as WeatherData)
    });
  }

}
