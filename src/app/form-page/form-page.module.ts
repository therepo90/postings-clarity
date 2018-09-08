import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClarityModule} from '@clr/angular';
import {FormPageComponent} from './form-page.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  declarations: [FormPageComponent],
  exports: [FormPageComponent],
})
export class FormPageModule { }
