import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormPageComponent} from './form-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormPageComponent],
  exports: [FormPageComponent],
})
export class FormPageModule { }
