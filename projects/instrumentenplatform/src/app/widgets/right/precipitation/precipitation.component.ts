import { Component, Input } from '@angular/core';
import { WeatherData } from '../../../model/classes';
import { MaterialModule } from '../../../shared/material.module';
// import { ItemListComponent } from '../RightWidgetsComponents.module';

@Component({
  selector: 'app-precipitation',
  templateUrl: './precipitation.component.html',
  styleUrls: ['./precipitation.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class PrecipitationComponent {

  protected pData: WeatherData = new WeatherData(new Date());
  @Input() set currentData(value: WeatherData) {
    this.pData = value;
    this.redraw();
  }

  public items: String[] = [];

  private redraw() {
    this.items = [];
    this.items.push(this.getPrecipitation());
    this.items.push("lijn 2");
    this.items.push("lijn 3");
    this.items.push("lijn 4");
  }

  getPrecipitation(): string {
    return this.pData?.precipitation?.value ? this.pData.precipitation.value.toString() + " mm/uur" : "- mm/uur";
  };

}
