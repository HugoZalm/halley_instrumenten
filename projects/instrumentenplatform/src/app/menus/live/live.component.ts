import { Component, OnInit } from '@angular/core';

export interface Grid {
  y: {
    min: number;
    max: number;
    interval: number;
  }
}

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {

  ngOnInit(): void {}

}
