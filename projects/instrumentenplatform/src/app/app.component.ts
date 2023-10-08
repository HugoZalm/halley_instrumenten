import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from './services/state.service';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from './../environments/environment';
import { CountriesService } from './services/countries.services';
import { Country } from './model/interfaces/country';
// import { WeatherItem } from './model/interfaces/weather-item';
import { DummyWeatherService } from './services/dummy-weather.services';
import { IWeatherData } from './model/interfaces/weather-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('sidenav') sideNav!: MatSidenav;

  public loading = false;
  public lang: {[index: string]: string} = {};
  countries: Country[] = [];
  weather: IWeatherData[] = [];
  mocksMode = environment.useMocks;


  constructor(
    public state: StateService,
    private translate: TranslateService,
    public sidenav: SidenavService,
    private gqlService: DummyWeatherService //CountriesService
  ) {
    this.translate.setDefaultLang('nl');
    this.translate.use(this.state.language.get().value);
  }

  ngOnInit() {
    this.translate.get("HOME").subscribe(items => {
      this.lang = items;
    });
    // this.gqlService.getCountries().subscribe(countries => {
    //   this.countries = countries;
    // });
    this.gqlService.getWeather().subscribe(weather => {
      this.weather = weather;
    });
  }


  ngAfterViewInit() {
    console.log('sidenav.set', this.sidenav);
    this.sidenav.set(this.sideNav);
  }

  // toTop() {
  //   window.scrollTo(0, 0);
  // }

}
