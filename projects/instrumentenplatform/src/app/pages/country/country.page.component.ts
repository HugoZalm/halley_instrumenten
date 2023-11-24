import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../model/interfaces/country';
// import { WeatherItem } from '../../model/interfaces/weather-item';
// import { DummyDataService } from '../../services/dummy-data.services';
// import { IWeatherData } from '../../model/interfaces/weather-data';

@Component({
  selector: 'app-country-page',
  templateUrl: './country.page.component.html',
  styleUrls: ['./country.page.component.scss']
})
export class CountryPageComponent implements OnInit {
  mocksMode = environment.useMocks;
  countries: Country[] = [];
  // weather: IWeatherData[] = [];

  constructor(
    private countryService: CountriesService
    // private dummyService: DummyDataService
  ){}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
    // this.dummyService.getWeather().subscribe(weather => {
    //   this.weather = weather;
    // });
  }

}