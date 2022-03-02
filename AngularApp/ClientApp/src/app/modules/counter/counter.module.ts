import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { CounterListComponent } from './pages/counter-list/counter-list.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'counter-list', component: CounterListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class CounterModule { }