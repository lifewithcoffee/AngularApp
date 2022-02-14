import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * This component demonstrate fetching data via an REST API from a server.
 */
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];

  /**
   * @param http An HttpClient instance
   * @param baseUrl An injected string from 'BASE_URL'
   * @returns There's no return.
   */
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

/**
 * The interface of WeatherForecast object returned from server API /weatherforecast
 */
interface WeatherForecast {
  /**
   * 
   */
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
