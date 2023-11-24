import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DummyDataService } from '../../services/dummy-data.services';
import { IWeatherData } from '../../model/interfaces/weather-data';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather.page.component.html',
  styleUrls: ['./weather.page.component.scss']
})
export class WeatherPageComponent implements OnInit {
  mocksMode = environment.useMocks;
  weather: IWeatherData[] = [];

  constructor(
    private dummyService: DummyDataService
  ){}

  ngOnInit(): void {
    this.dummyService.getWeather().subscribe(weather => {
      this.weather = weather;
    });
  }

}