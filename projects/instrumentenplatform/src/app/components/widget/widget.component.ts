import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { DataType } from '../../model/enums/data-type';
import { ChartInfo } from '../../model/interfaces/chart-info';
import { WeatherData } from '../../model/classes/weather-data';
import { DataService } from '../../services/data.services';
import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() type: DataType = DataType.AIR;
  @Input() info: boolean = true;
  @Input() more: boolean = true;
  @Input() chartsInfo: ChartInfo[] = [];

  public currentTime: Date = new Date();
  public currentData: WeatherData = new WeatherData(new Date());

  constructor(
    private dataService: DataService,
    private clockService: ClockService
  ) {}

  ngOnInit(): void {
    this.dataService.weatherData$.subscribe(weather => {
      this.currentData = weather;
    });
    this.clockService.clockData$.subscribe((date) => {
      this.currentTime = date;
    });
  }

}