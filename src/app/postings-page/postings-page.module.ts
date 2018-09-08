import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostingsModule} from '../postings/postings.module';
import {PostingsPageComponent} from './postings-page.component';

@NgModule({
  imports: [
    CommonModule,
    PostingsModule,
  ],
  declarations: [PostingsPageComponent]
})
export class PostingsPageModule { }
