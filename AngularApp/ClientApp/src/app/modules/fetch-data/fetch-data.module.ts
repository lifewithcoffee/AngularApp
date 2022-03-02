import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';

const routes: Routes = [
  { path: 'fetch-data', component: FetchDataComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class FetchDataModule { }
