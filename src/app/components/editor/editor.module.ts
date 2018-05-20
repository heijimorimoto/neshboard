import { NgModule } from '@angular/core';
import { AppSharedModule } from '../../app.shared.module';

import { EditorComponent } from './editor.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    AppSharedModule,
    CKEditorModule
  ],
  declarations: [EditorComponent],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
