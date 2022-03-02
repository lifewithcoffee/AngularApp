
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

// _note_: demo of child routes
const routes: Routes = [
  { path: 'user', children: [
    { path: 'list', component: UserListComponent, children: [
      { path: 'detail/:name', component: UserDetailsComponent }
    ]}
  ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class UsersRoutingModule { }
