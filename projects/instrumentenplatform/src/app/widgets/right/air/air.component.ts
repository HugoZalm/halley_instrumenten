import { Component, Input } from '@angular/core';
import { WeatherData } from '../../../model/classes/weather-data';
import { MaterialModule } from '../../../shared/material.module';
// import { ItemListComponent } from '../RightWidgetsComponents.module';

export enum DateFormat {
  Numbers,
  Verbose
}

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class AirComponent {

  protected pData: WeatherData = new WeatherData(new Date());
  @Input() set currentData(value: WeatherData) {
    this.pData = value;
    this.redraw();
  }

  public items: String[] = [];

  private redraw() {
    this.items = [];
    this.items.push(this.getAirPressure());
    this.items.push("lijn 2");
    this.items.push("lijn 3");
    this.items.push("lijn 4");
  }

  getAirPressure(): string {
    return this.pData?.air?.airpressure ? this.pData.air.airpressure.toString() + " HPa" : "- HPa";
  };
}
