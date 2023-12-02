import { Component, OnInit } from '@angular/core';
import { Widget } from '../../model/interfaces/widget';
import { DataType } from '../../model/enums/data-type';
import { MaterialModule } from '../../shared/material.module';
import { BaseModule } from '../../shared/base.module';
import { WidgetComponent } from '../../widgets/widget/widget.component';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard.page.component.html',
  styleUrls: ['./dashboard.page.component.scss'],
  standalone: true,
  imports: [MaterialModule, BaseModule, WidgetComponent]
})
export class DashboardPageComponent implements OnInit {

  title = 'Dashboard';
  widgets: Widget[] = [];
  // gridColumns = 3;
  // cards: Card[] = [];
  // currentData: WeatherData = new WeatherData();
  // now: Date = new Date();
  mobile: boolean = false;
  // public activeWidget = -1;

  constructor(){}
    // private dataService: DataService,
    // public state: StateService,
    // public loading: LoadingService,
    // private timeService: TimeService,
    // private astronomy: AstronomyService,
    // private tameteo: TameteoService) {
    // this.state.setTitle(this.title);
  // }

  ngOnInit(): void {
    if (window.screen.width < 780) { // 768px portrait
      this.mobile = true;
    }
  
    // this.currentData = new WeatherData();
    // this.timeService.tick.subscribe((now) => {
    //   this.astronomy.setDateTime(now);
    // });
    this.createWidgets();
  }

  // setOpened(itemIndex: number) {
  //   this.activeWidget = itemIndex;
  // }

  // setClosed(itemIndex: number) {
  //   if(this.activeWidget === itemIndex) {
  //     this.activeWidget = -1;
  //   }
  // }

  private createWidgets() {
    this.widgets = [];
    this.widgets.push({
      type: DataType.TIME,
      info: true,
      more: true,
      chartsInfo: []
    });
    // this.widgets.push({
    //   type: DataType.TEMPERATURE,
    //   info: true,
    //   more: false,
    //   chartsInfo: [
    //     {
    //       charttype: 'line',
    //       datatype: DataType.TEMPERATURE,
    //       label: 'Lijn',
    //     },
    //     {
    //       charttype: 'bar',
    //       datatype: DataType.TEMPERATURE,
    //       label: 'Balk',
    //     }
    //   ]
    // });
    // this.widgets.push({
    //   type: DataType.WIND,
    //   info: true,
    //   more: false,
    //   chartsInfo: [
    //     {
    //       charttype: 'heatmap',
    //       datatype: DataType.WIND,
    //       label: 'Heatmap',
    //     }
    //   ]
    // });
    // this.widgets.push({
    //   type: DataType.CAMERA,
    //   info: true,
    //   more: true,
    //   chartsInfo: []
    // });
    // this.widgets.push({
    //   type: DataType.MOON,
    //   info: true,
    //   more: true,
    //   chartsInfo: []
    // });
    // this.widgets.push({
    //   type: DataType.SUN,
    //   info: true,
    //   more: true,
    //   chartsInfo: [
    //     {
    //       charttype: 'line',
    //       datatype: DataType.SUN,
    //       label: 'Lijn',
    //     },
    //     {
    //       charttype: 'bar',
    //       datatype: DataType.SUN,
    //       label: 'Balk',
    //     }
    //   ]
    // });
    this.widgets.push({
      type: DataType.AIR,
      info: true,
      more: false,
      chartsInfo: [
        {
          charttype: 'line',
          datatype: DataType.AIR,
          label: 'Lijn',
        },
        {
          charttype: 'bar',
          datatype: DataType.AIR,
          label: 'Balk',
        }
      ]
    });
    this.widgets.push({
      type: DataType.PRECIPITATION,
      info: true,
      more: false,
      chartsInfo: [
        {
          charttype: 'bar',
          datatype: DataType.PRECIPITATION,
          label: 'Balk',
        }
      ]
    });
    // this.widgets.push({
    //   type: DataType.FORECAST,
    //   info: true,
    //   more: false,
    //   chartsInfo: []
    // });
  }

}
