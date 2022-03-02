
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './pages/user-list/user-list.component';

// _note_: demo of child routes
const routes: Routes = [
  { path: 'user', children: [
    { path: 'list', component: UserListComponent, children: [
      { path: 'detail/:name', component: UserComponent }
    ]}
  ]},
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class UsersRoutingModule { }
