import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private count: number = 10;

  constructor() { }

  public getCount():number { return this.count; }
  public increaseCount() { this.count += 10; }
}
