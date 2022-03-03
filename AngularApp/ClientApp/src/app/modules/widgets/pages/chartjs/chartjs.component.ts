import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  // chart = [];
  @ViewChild('myCanvas') myDiv: ElementRef<HTMLCanvasElement>;

  canvas: CanvasRenderingContext2D;

  // constructor(private _weather: WeatherService) { }
  constructor() { }

  ngOnInit() {

    /**
     * _note_: Chart.js 3 is tree-shakeable, so it is necessary to import and register
     *         the controllers, elements, scales and plugins you are going to use.
     * from:
     * https://stackoverflow.com/questions/67238650/problem-for-display-a-chart-with-chart-js-and-angular
     * 
     * see also (chartjs doc):
     * https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc
     */
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.canvas = this.myDiv.nativeElement.getContext('2d');
    console.log(`canvas = ${this.canvas}`);
  // }
  // ngAfterContentInit(): void {
  let chart = new Chart(this.canvas, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  //   this._weather.dailyForecast()
  //     .subscribe(res => {
  //       console.log(res);

  //       const temp_max = res['list'].map(i => i.main.temp_max);
  //       const temp_min = res['list'].map(i => i.main.temp_max);
  //       const alldates = res['list'].map(i => i.dt);

  //       const weatherDates = [];
  //       alldates.forEach(element => {
  //         console.log(`element = ${element}`);
  //         const jsdate = new Date(element * 1000);
  //         weatherDates.push(jsdate.toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric'}));
  //       });

  //       console.log(weatherDates);
      
  //       this.chart = new Chart('canvas', {
  //         type: 'line',
  //         data: {
  //           labels: weatherDates,
  //           datasets: [
  //             {
  //               data: temp_max,
  //               borderColor: '#3cba9f',
  //               fill: false
  //             },
  //             {
  //               data: temp_min,
  //               borderColor: '#ffcc00',
  //               fill: false
  //             }
  //           ]
  //         },
  //         options: {
  //           plugins:{
  //             legend: {
  //               display: false
  //             },
  //           },
  //           scales: {
  //             x: {
  //               display: true
  //             },
  //             y: {
  //               display: true
  //             }
  //           },
  //           // scales: {
  //           //   xAxes: [{
  //           //     display: true
  //           //   }],
  //           //   yAxes: [{
  //           //     display: true
  //           //   }]
  //           // }
  //         }
  //       });

  //     });
  }

}
