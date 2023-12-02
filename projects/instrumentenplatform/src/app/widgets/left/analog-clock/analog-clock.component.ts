import { AfterViewInit, Component, Input } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss'],
  standalone: true,
  imports: [MaterialModule]
})
export class AnalogClockComponent implements AfterViewInit {

  @Input() height: number = 0;
  private pTime: Date | undefined = undefined;
  @Input() set time(value: Date) {
    this.pTime = value;
    this.redraw(value);
  }
  public style: string = '';
  private hour: Element | null = null;
  private min: Element | null = null;
  private sec: Element | null = null;

  constructor() {}

  ngAfterViewInit(): void {
    this.hour = document.getElementById('hour');
    this.min = document.getElementById('min');
    this.sec = document.getElementById('sec');
    this.style = 'height:' + this.height + 'px;width:' + this.height + 'px';
    this.redraw(this.pTime);
  }

  private rotate(el: Element, deg: number, correctie: number) {
    if (el != null) {
      const x = 50;
      const y = 50;
      el.setAttribute('transform', 'rotate('+ deg +' ' + x + ' ' + y + ')');
    }
  }

  private redraw(d: Date | undefined) {
    if (d === undefined) { return; }
    if (this.sec === null) { return; }
    if (this.min === null) { return; }
    if (this.hour === null) { return; }
    this.rotate(this.sec, 6*d.getSeconds(), 1); 
    this.rotate(this.min, 6*d.getMinutes(), 2);
    this.rotate(this.hour, 30*(d.getHours()%12) + d.getMinutes()/2, 2);
  }

}