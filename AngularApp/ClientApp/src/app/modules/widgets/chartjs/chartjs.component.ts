import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  chart = [];

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        console.log(res);

        const temp_max = res['list'].map(i => i.main.temp_max);
        const temp_min = res['list'].map(i => i.main.temp_max);
        const alldates = res['list'].map(i => i.dt);

        const weatherDates = [];
        alldates.forEach(element => {
          console.log(`element = ${element}`);
          const jsdate = new Date(element * 1000);
          weatherDates.push(jsdate.toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric'}));
        });

        console.log(weatherDates);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });

      });
  }

}
