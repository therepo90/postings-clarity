import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { PostingsModule } from '../postings/postings.module';
import { PostingsPageComponent } from './postings-page.component';
import { PostingsPageService } from './services/postings-page.service';

@NgModule({
    imports: [CommonModule, PostingsModule, RouterModule, ClarityModule],
    declarations: [PostingsPageComponent],
    providers: [PostingsPageService]
})
export class PostingsPageModule {}
