import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './modules/counter/components/counter/counter.component';
import { FetchDataComponent } from './modules/fetch-data/pages/fetch-data/fetch-data.component';
import { CounterListComponent } from './modules/counter/pages/counter-list/counter-list.component';
import { ListDemoComponent } from './pages/list-demo/list-demo.component';
import { ExpansionDemoComponent } from './pages/expansion-demo/expansion-demo.component';
import { DialogDemoComponent } from './components/dialog-demo/dialog-demo.component';
import { TreeDemoComponent } from './pages/tree-demo/tree-demo.component';
import { DatapickerDemoComponent } from './pages/datapicker-demo/datapicker-demo.component';
import { TabDemoComponent } from './pages/tab-demo/tab-demo.component';

/**
 * _note_datepicker-1: import both following modules    |date|datepicker|
 */
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

/**
 * _note_: always import 'MatInputModule' when importing 'MatFormFieldModule'     |form|
 * otherwise, using <mat-form-field> will get error 'mat-form-field must contain a MatFormFieldControl'
 */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/****************************************************************************/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';   // _note_dialog-1: also import MatDialogRef
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTreeModule } from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CounterModule } from './modules/counter/counter.module';
import { FetchDataModule } from './modules/fetch-data/fetch-data.module';
import { UsersModule } from './modules/users/users.module';
import { WidgetsModule } from './modules/widgets/widgets.module';
import { EditorsModule } from './modules/editors/editors.module';

const appRoutes: Routes = [
  
  { path: 'list-demo', component: ListDemoComponent },
  { path: 'dialog-demo', component: DialogDemoComponent },
  { path: 'tree-demo', component: TreeDemoComponent },
  { path: 'datapicker-demo', component: DatapickerDemoComponent },
  { path: 'tab-demo', component: TabDemoComponent },
  { path: 'expansion-demo', component: ExpansionDemoComponent },
  
  // _note_: redirect '' & '**' to /home (NOTE: 1) apply pathMatch: 'full'; 2) must be on the bottom of the routes list)
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

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
    DialogDemoComponent,
    TreeDemoComponent,
    DatapickerDemoComponent,
  ],
  imports: [
    CounterModule,
    FetchDataModule,
    UsersModule,
    EditorsModule,
    WidgetsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatTreeModule,
    MatTabsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [
    MatDatepickerModule,      // _note_datepicker-2: need to add MatDatepickerModule to providers
    {
      provide: MatDialogRef,  // _note_dialog-2: add MatDialogRef to providers
      useValue: {}
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
