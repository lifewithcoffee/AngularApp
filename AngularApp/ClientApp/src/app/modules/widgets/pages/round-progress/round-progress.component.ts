
import {interval as observableInterval, Observable } from 'rxjs';

import {tap, takeWhile} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-round-progress',
  templateUrl: './round-progress.component.html',
  styleUrls: ['./round-progress.component.scss']
})
export class RoundProgressComponent implements OnInit {
  max = 10;
  current = 0;

  constructor() { }

  ngOnInit() {
  }

  start() {
    const interval = observableInterval(1000);

    interval.pipe(
      takeWhile(_ => !this.isFinished),
      tap(i => this.current += 1),)
      .subscribe();
  }

  finish() {
    this.current = this.max;
  }

  reset() {
    this.current = 0;
  }

  get maxVal(){
    return isNaN(this.max) || this.max < 1 ? 1 : this.max;
  }

  get currentVal(){
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished(){
    return this.currentVal >= this.maxVal;
  }
}
