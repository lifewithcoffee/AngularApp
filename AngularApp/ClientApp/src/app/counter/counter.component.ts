import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from './counter.service';

/**
 * Declare "providers: [ CounterService ]" to make sure each CounterComponent
 * can have its own CounterService, see angular doc:
 * https://angular.io/guide/dependency-injection-in-action#multiple-service-instances-sandboxing
 */
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  // providers: [ CounterService ]
})
export class CounterComponent implements OnInit, OnDestroy {
  public currentCount = 0;
  private subscription?: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.currentCount = this.counterService.getCount();
    this.subscription = this.counterService.count$.subscribe(
      res => {
        this.currentCount = res;
        console.log(`currentCount value updated to ${res}`);
      },
      err => { console.log(`An error occurred: ${err.message}`); }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log(`subscription unsubscribed`);
  }

  public incrementCounter() {
    this.counterService.increaseCount(11);
  }
}
