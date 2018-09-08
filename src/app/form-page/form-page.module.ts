import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ClarityModule, ClrFormsNextModule} from '@clr/angular';
import {FormPageComponent} from './form-page.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ClrFormsNextModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [FormPageComponent],
  exports: [FormPageComponent],
})
export class FormPageModule { }
