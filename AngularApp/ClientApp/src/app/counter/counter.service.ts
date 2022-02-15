import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _count$: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  readonly count$: Observable<number> = this._count$.asObservable();

  constructor() { }

  public getCount(): number {return this._count$.getValue(); }
  public increaseCount(amount: number): void { this._count$.next(this._count$.getValue() + amount); }
}