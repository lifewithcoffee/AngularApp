import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorsComponent } from './pages/editors/editors.component';
import { QuillEditorComponent } from './pages/quill-editor/quill-editor.component';

const routes: Routes = [
  { path: 'editors', component: EditorsComponent, children:[
    { path: 'quill-editor', component: QuillEditorComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorsRoutingModule { }
