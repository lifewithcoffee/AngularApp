import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CounterState } from './counter.state';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _values$: BehaviorSubject<CounterState> = new BehaviorSubject<CounterState>({value1: 10, value2: 20});
  readonly values$: Observable<CounterState> = this._values$.asObservable();

  constructor() { }

  public getCount(): CounterState { return this._values$.getValue(); }

  public increaseCount(amount: number): void {
    var newValue1 = this._values$.getValue().value1 + amount;
    this._values$.next( { value1: newValue1, value2: newValue1 * 2 }); 
  }
}