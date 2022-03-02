
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get('http://samples.openweathermap.org/data/2.5/history/city?q=London,UK&appid=b1b15e88fa797225412429c1c50c122a1').pipe(
      map(result => result));
  }

}
