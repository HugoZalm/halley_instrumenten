import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../../services/clock.service';

export interface Grid {
  y: {
    min: number;
    max: number;
    interval: number;
  }
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public date: string = this.getDateValue(new Date());

  constructor(
    private clockService: ClockService
  ){}

  ngOnInit(): void {
    this.clockService.clockData$.subscribe((date => {
      this.date = this.getDateValue(date);
    }));
  }

  private getDateValue(day: Date): string {
    const YYYY = day.getFullYear().toString()
    const MM = day.getMonth() > 8 ? (day.getMonth() + 1).toString() : "0" + (day.getMonth() + 1);
    const DD = day.getDate().toString();
    return YYYY + "-" + MM + "-" + DD;
  }

}
