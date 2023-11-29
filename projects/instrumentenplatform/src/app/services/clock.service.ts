import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private clockSource = new BehaviorSubject<Date>(new Date());
  clockData$ = this.clockSource.asObservable();

  private tick = 1000;
  private now: Date = new Date();
  private interval: ReturnType<typeof setInterval> | undefined;

  constructor(
    private state: StateService
  ) { 
    this.setNow();
  }

  setClock() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.clockSource.next(this.getNow());
    }, this.tick);
  }

  private getNow(): Date {
    if (this.state.demo) {
      this.setNow();
      return this.now;
    } else {
      return new Date();
    }
  }

  private setNow() {
    // TODO: aanpassen voor snelheden.
    this.now = new Date();
    this.now.setFullYear(2011, 0);
  }
}
