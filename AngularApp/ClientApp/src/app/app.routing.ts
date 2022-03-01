import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

import { DatapickerDemoComponent } from './pages/datapicker-demo/datapicker-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';

const routes: Routes = [
  { path: 'tree-demo', component: TreeDemoComponent },
  { path: 'datapicker-demo', component: DatapickerDemoComponent },
];

@NgModule({
  declarations: [
    TreeDemoComponent,
  ],
  imports: [ 
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ 
    MatIconModule,
    MatButtonModule,
    RouterModule,
   ]
})
export class AppRoutingModule { }
