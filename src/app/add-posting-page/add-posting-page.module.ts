import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { PostingsModule } from '../postings/postings.module';
import { AddPostingPageComponent } from './add-posting-page.component';

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ClrFormsNextModule,
        ReactiveFormsModule,
        RouterModule,
        PostingsModule
    ],
    declarations: [AddPostingPageComponent],
    exports: [AddPostingPageComponent]
})
export class AddPostingPageModule {}
