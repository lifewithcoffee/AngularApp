import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

/**
 * Declare "providers: [ CounterService ]" to make sure each CounterComponent
 * can have its own CounterService, see angular doc:
 * https://angular.io/guide/dependency-injection-in-action#multiple-service-instances-sandboxing
 */
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  providers: [ CounterService ]
})
export class CounterComponent implements OnInit {
  public currentCount = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.currentCount = this.counterService.getCount();
  }

  public incrementCounter() {
    this.counterService.increaseCount();
    this.currentCount = this.counterService.getCount();
  }
}
