import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { DatapickerDemoComponent } from './pages/datapicker-demo/datapicker-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ExpansionDemoComponent } from './expansion-demo/expansion-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';

const routes: Routes = [
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
    RouterModule.forChild(routes)
  ],
  exports: [ 
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    RouterModule,
   ]
})
export class AppRoutingModule { }
