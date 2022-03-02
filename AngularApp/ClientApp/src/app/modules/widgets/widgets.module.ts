import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { WeatherService } from './services/weather.service';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ChartjsComponent } from './pages/chartjs/chartjs.component';
import { VideojsComponent } from './pages/videojs/videojs.component';
import { RoundProgressComponent } from './pages/round-progress/round-progress.component';

import { WidgetsRoutingModule } from './widgets.routing';
import { ViewerjsComponent } from './pages/viewerjs/viewerjs.component';
import { WidgetListComponent } from './pages/widget-list/widget-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    RoundProgressModule,
    WidgetsRoutingModule,    
  ],
  exports: [RoundProgressModule],
  declarations: [
    RoundProgressComponent,
    ChartjsComponent,
    VideojsComponent,
    ViewerjsComponent,
    WidgetListComponent
  ],
  providers: [WeatherService]
})
export class WidgetsModule { }
