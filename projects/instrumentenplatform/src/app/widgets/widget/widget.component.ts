import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { DataType } from '../../model/enums/data-type';
import { ChartInfo } from '../../model/interfaces/chart-info';
import { WeatherData } from '../../model/classes/weather-data';
import { DataService } from '../../services/data.service';
import { ClockService } from '../../services/clock.service';
import { MaterialModule } from '../../shared/material.module';
// import { ActionsComponent, AnalogClockComponent, EmptySvgComponent } from '../left/LeftWidgetComponents.module';
// import { ActionsComponent, AnalogClockComponent, EmptySvgComponent } from '../left/LeftWidgetComponents.module';
import { AirComponent, PrecipitationComponent, TimeComponent } from '../right/RightWidgetsComponents.module';
import { BaseModule } from '../../shared/base.module';
import { EmptySvgComponent } from '../left/empty-svg/empty-svg.component';
import { AnalogClockComponent } from '../left/analog-clock/analog-clock.component';
import { ActionsComponent } from '../left/actions/actions.component';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  standalone: true,
  imports: [MaterialModule, BaseModule, EmptySvgComponent, AnalogClockComponent, ActionsComponent, TimeComponent, AirComponent, PrecipitationComponent]
})
export class WidgetComponent implements OnInit {

  @Input() type: DataType = DataType.AIR;
  @Input() info: boolean = true;
  @Input() more: boolean = true;
  @Input() chartsInfo: ChartInfo[] = [];

  public dataType = DataType;
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