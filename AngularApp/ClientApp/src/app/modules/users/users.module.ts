import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

import { UsersRoutingModule } from './users.routing';
// import { EditorsModule } from '../editors/editors.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    // EditorsModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
  ]
})
export class UsersModule { }
