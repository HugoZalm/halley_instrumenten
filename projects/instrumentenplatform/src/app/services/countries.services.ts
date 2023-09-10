import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { gql } from '@apollo/client/core';

export const countriesGql = gql`
query countries {
    countries {
        name
        native
        emoji
    }
}`;

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private apollo: Apollo) {}

  getCountries() {
    return this.apollo.query({
      query: countriesGql
    }).pipe(
      map(countries => (countries.data as any).countries)
    );
  }
}
