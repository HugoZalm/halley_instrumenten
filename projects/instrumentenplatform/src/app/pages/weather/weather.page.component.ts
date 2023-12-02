import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataService } from '../../services/services';
import { WeatherData } from '../../model/classes';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather.page.component.html',
  styleUrls: ['./weather.page.component.scss'],
  standalone: true
})
export class WeatherPageComponent implements OnInit {
  mocksMode = environment.useMocks;
  weather: WeatherData = new WeatherData(new Date());

  constructor(
    private dummyService: DataService
  ){}

  ngOnInit(): void {
    this.dummyService.weatherData$.subscribe(weather => {
      this.weather = weather;
    });
    setInterval(() => {
      this.dummyService.getWeather();
    } , 1000);
  }

}