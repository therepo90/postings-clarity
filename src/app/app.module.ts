import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddPostingPageModule } from './add-posting-page/add-posting-page.module';
import { PostingsPageModule } from './postings-page/postings-page.module';
import { PostingsModule } from './postings/postings.module';
import { StorageModule } from './storage/storage.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        StorageModule.forRoot(),
        PostingsModule.forRoot(),
        PostingsPageModule,
        AddPostingPageModule,
        AppRoutingModule,
        ClarityModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
