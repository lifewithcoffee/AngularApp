import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RoundProgressComponent } from './pages/round-progress/round-progress.component';
import { ChartjsComponent } from './pages/chartjs/chartjs.component';
import { VideojsComponent } from './pages/videojs/videojs.component';
import { ViewerjsComponent } from './pages/viewerjs/viewerjs.component';
import { WidgetListComponent } from './pages/widget-list/widget-list.component';

const routes: Routes = [
  { path: 'widgets', component: WidgetListComponent, children:[
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
