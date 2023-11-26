import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private now: Date;

  constructor(
    private state: StateService
  ) { 
    this.now = new Date();
  }

  public getNow(): Date {
    if (this.state.demo) {
      return this.now;
    } else {
      return new Date();
    }
  }

}
