import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterStateService {

  private _values$: BehaviorSubject<CounterState> = new BehaviorSubject<CounterState>({value1: 12, value2: 24});
  readonly values$: Observable<CounterState> = this._values$.asObservable();

  constructor() { }

  public getCount(): CounterState { return this._values$.getValue(); }

  public increaseCount(amount: number): void {
    var newValue1 = this._values$.getValue().value1 + amount;
    this._values$.next( { value1: newValue1, value2: newValue1 * 2 }); 
  }
}

export interface CounterState {
  value1: number;
  value2: number;
}
