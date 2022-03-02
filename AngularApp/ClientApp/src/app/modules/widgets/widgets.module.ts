import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherService } from './services/weather.service';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { VideojsComponent } from './videojs/videojs.component';
import { RoundProgressComponent } from './round-progress/round-progress.component';

import { WidgetsRoutingModule } from './widgets.routing';
import { ViewerjsComponent } from './viewerjs/viewerjs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoundProgressModule,
    WidgetsRoutingModule
  ],
  exports: [RoundProgressModule],
  declarations: [
    RoundProgressComponent,
    ChartjsComponent,
    VideojsComponent,
    ViewerjsComponent
  ],
  providers: [WeatherService]
})
export class WidgetsModule { }
