import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorsRoutingModule } from './editors-routing.module';
import { QuillEditorComponent } from './pages/quill-editor/quill-editor.component';


@NgModule({
  declarations: [
    QuillEditorComponent
  ],
  imports: [
    CommonModule,
    EditorsRoutingModule
  ]
})
export class EditorsModule { }
