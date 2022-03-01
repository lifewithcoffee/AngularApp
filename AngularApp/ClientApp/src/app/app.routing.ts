import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatapickerDemoComponent } from './pages/datapicker-demo/datapicker-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ExpansionDemoComponent } from './expansion-demo/expansion-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { CounterComponent } from './counter/counter.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ListDemoComponent } from './list-demo/list-demo.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'counter-list', component: CounterListComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'list-demo', component: ListDemoComponent },
  { path: 'dialog-demo', component: DialogDemoComponent },
  { path: 'tree-demo', component: TreeDemoComponent },
  { path: 'datapicker-demo', component: DatapickerDemoComponent },
  { path: 'tab-demo', component: TabDemoComponent },
  { path: 'expansion-demo', component: ExpansionDemoComponent },
];

@NgModule({
  declarations: [
    TreeDemoComponent,
  ],
  imports: [ 
    MatIconModule,
    MatTreeModule,
    MatTabsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  exports: [ 
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    RouterModule,
   ]
})
export class AppRoutingModule { }
