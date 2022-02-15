import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from './counter.state.service';
import { CounterState } from './counter.state';

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

  private subscription?: Subscription;
  public state: CounterState = <CounterState>{};

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.subscription = this.counterService.values$.subscribe(
      res => {
        this.state.value1 = res.value1;
        this.state.value2 = res.value2;
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
