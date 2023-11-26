import { Injectable, OnDestroy } from '@angular/core';
import { Apollo, Subscription } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { gql } from '@apollo/client/core';
import { WeatherData } from '../model/classes/weather-data';
import { BehaviorSubject } from 'rxjs';
import { StateService } from './state.service';

export const mockweatherGql = gql`
query mockweather($date: Date) {
    weather(date: $date) {
      STN
    }
}`;

export const weatherGql = gql`
query weather($date: Date) {
    weather(date: $date) {
      STN
    }
}`;



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private weatherSource = new BehaviorSubject<WeatherData>(new WeatherData());
  weatherData$ = this.weatherSource.asObservable();
 
  constructor(
    private apollo: Apollo,
    private state: StateService
    ) {}

  getWeather(): void {
    this.apollo.query({
      query: this.state.demo ? mockweatherGql : weatherGql,
      variables: {
        date: new Date()
      }
    })
    .pipe(
      map(weather => weather.data as WeatherData)
    )
    .subscribe((data) => {
      this.weatherSource.next(data as WeatherData)
    });
  }

}