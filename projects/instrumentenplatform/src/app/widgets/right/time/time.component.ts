import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
// import { ItemListComponent } from '../RightWidgetsComponents.module';

export enum DateFormat {
  Numbers,
  Verbose,
  VerboseShort,
  FullVerbose,
  FullVerboseShort,
  DayName,
  DayNameShort
}

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class TimeComponent {

  private strings: {
    months: string[],
    days: string[],
    months_short: string[],
    days_short: string[],
   } = {
    months: [],
    days: [],
    months_short: [],
    days_short: [],
  };

  private pTime: Date | undefined = undefined;
  @Input() set time(value: Date) {
    this.pTime = value;
    this.redraw();
  }

  public items: String[] = [];

  ngOnInit() {
    this.initStrings();
  }

  private redraw() {
    this.items = [];
    // const item: string = this.getDateString(DateFormat.Verbose);
    this.items.push(this.getDateString(DateFormat.Verbose));
    this.items.push(this.getDateString(DateFormat.VerboseShort));
    this.items.push(this.getDateString(DateFormat.Numbers));
    this.items.push(this.getDateString(DateFormat.DayName));
    this.items.push(this.getDateString(DateFormat.FullVerboseShort));
    this.items.push(this.getDateString(DateFormat.FullVerbose));
  }

  getDateString(type: DateFormat): string {
    let daystring = "";
    if (this.pTime) {
      const day = this.pTime;
      const YYYY = day.getFullYear().toString()
      const M = day.getMonth() > 8 ? (day.getMonth() + 1).toString() : (day.getMonth() + 1);
      const MM = day.getMonth() > 8 ? (day.getMonth() + 1).toString() : "0" + (day.getMonth() + 1);
      const MMM = this.strings.months_short[day.getMonth()];
      const MMMM = this.strings.months[day.getMonth()];
      const D = day.getDate().toString();
      const DD = day.getDate() > 8 ? day.getDate().toString() : "0" + (day.getDate().toString());
      const dd = this.strings.days_short[day.getDate()];
      const ddd = this.strings.days[day.getDate()];
      switch(type) {
        case DateFormat.Verbose:
          daystring = D + " " + MMMM + " " + YYYY;
          break;
        case DateFormat.VerboseShort:
          daystring = D + " " + MMM + " " + YYYY;
          break;
        case DateFormat.FullVerbose:
          daystring = ddd + " " + D + " " + MMMM + " " + YYYY;
          break;
        case DateFormat.FullVerboseShort:
          daystring = dd + " " + D + " " + MMM + " " + YYYY;
          break;
        case DateFormat.DayName:
          daystring = ddd;
          break;
        case DateFormat.DayNameShort:
          daystring = dd;
          break;
        case DateFormat.Numbers:
        default:
          daystring = DD + "-" + MM + "-" + YYYY;
          break;
      }
    }
    return daystring
    };

    private initStrings() {
      this.strings = {
        months: [
        "januari",
        "februari",
        "maart",
        "april",
        "mei",
        "juni",
        "juli",
        "augustus",
        "september",
        "oktober",
        "november",
        "december"
      ],
      days: [
        "maandag",
        "dinsdag",
        "woensdag",
        "donderdag",
        "vrijdag",
        "zaterdag",
        "zondag"
      ],
      months_short: [
        "jan",
        "feb",
        "maa",
        "apr",
        "mei",
        "jun",
        "jul",
        "aug",
        "sep",
        "okt",
        "nov",
        "dec"
      ],
      days_short: [
        "ma",
        "di",
        "wo",
        "do",
        "vr",
        "za",
        "zo"
      ]
    }
  }

}
