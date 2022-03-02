import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './pages/user-list/user-list.component';

import { UsersRoutingModule } from './users.routing';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
// import { EditorsModule } from '../editors/editors.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    // EditorsModule
  ],
  declarations: [
    UserListComponent,
    UserDetailsComponent,
  ]
})
export class UsersModule { }
