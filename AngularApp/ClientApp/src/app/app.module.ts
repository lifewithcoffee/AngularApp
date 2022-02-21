import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { ListDemoComponent } from './list-demo/list-demo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

/**
 * _note_: always import 'MatInputModule' when importing 'MatFormFieldModule'     |form|
 * otherwise, using <mat-form-field> will get error 'mat-form-field must contain a MatFormFieldControl'
 */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ExpansionDemoComponent } from './expansion-demo/expansion-demo.component';
// import {  } from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CounterListComponent,
    ListDemoComponent,
    TabDemoComponent,
    ExpansionDemoComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'counter-list', component: CounterListComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'list-demo', component: ListDemoComponent },
      { path: 'tab-demo', component: TabDemoComponent },
      { path: 'expansion-demo', component: ExpansionDemoComponent },
    ]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
