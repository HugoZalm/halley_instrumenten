import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { DataType } from '../../model/enums/data-type';
import { ChartInfo } from '../../model/interfaces/chart-info';
import { WeatherData } from '../../model/classes/weather-data';
import { DataService } from '../../services/data.services';

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

  public currentData: WeatherData = new WeatherData();

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.weatherData$.subscribe(weather => {
      this.currentData = weather;
    });
  }

}