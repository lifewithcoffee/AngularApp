import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RoundProgressComponent } from './round-progress/round-progress.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { VideojsComponent } from './videojs/videojs.component';
import { ViewerjsComponent } from './viewerjs/viewerjs.component';

const routes: Routes = [
  { path: 'widgets', children:[
    { path: 'round-progress', component: RoundProgressComponent},
    { path: 'chartjs', component: ChartjsComponent},
    { path: 'videojs', component: VideojsComponent},
    { path: 'viewerjs', component: ViewerjsComponent},
  ]},
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class WidgetsRoutingModule { }
