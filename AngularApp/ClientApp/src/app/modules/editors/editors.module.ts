import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorsRoutingModule } from './editors-routing.module';
import { QuillEditorComponent } from './pages/quill-editor/quill-editor.component';
import { EditorsComponent } from './pages/editors/editors.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    QuillEditorComponent,
    EditorsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    EditorsRoutingModule
  ]
})
export class EditorsModule { }
