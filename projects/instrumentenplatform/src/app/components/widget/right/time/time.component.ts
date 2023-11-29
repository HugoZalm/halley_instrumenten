import { Component, Input } from '@angular/core';

export enum DateFormat {
  Numbers,
  Verbose
}

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {

  private months: string[] = [];

  private pTime: Date | undefined = undefined;
  @Input() set time(value: Date) {
    this.pTime = value;
    this.redraw();
  }

  public items: String[] = [];

  ngOnInit() {
    this.months = [
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
      "december"]
  }

  private redraw() {
    this.items = [];
    const item: string = this.getDateString(DateFormat.Verbose);
    this.items.push(item);
    this.items.push("lijn 2");
    this.items.push("lijn 3");
    this.items.push("lijn 4");
  }

  getDateString(type: DateFormat): string {
    let daystring = "";
    if (this.pTime) {
      const day = this.pTime;
      const YYYY = day.getFullYear().toString()
      const MM = day.getMonth() > 8 ? (day.getMonth() + 1).toString() : "0" + (day.getMonth() + 1);
      const DD = day.getDate().toString();
      const mm = this.months[day.getMonth()];
      switch(type) {
        case DateFormat.Verbose:
          daystring = DD + " " + mm + " " + YYYY;
          break;
        case DateFormat.Numbers:
        default:
          daystring = DD + "-" + MM + "-" + YYYY;
          break;
      }
    }
    return daystring
    };

}
