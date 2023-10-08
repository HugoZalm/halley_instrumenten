import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { gql } from '@apollo/client/core';

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
export class DummyWeatherService {
  constructor(private apollo: Apollo) {}

  getWeather() {
    return this.apollo.query({
      query: weatherGql
    }).pipe(
      map(weather => (weather.data as any).weather)
    );
  }
}
