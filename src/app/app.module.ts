import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FormPageModule} from './form-page/form-page.module';
import {PostingsPageModule} from './postings-page/postings-page.module';
import {PostingsModule} from './postings/postings.module';
import {StorageModule} from './storage/storage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StorageModule.forRoot(),
    PostingsModule.forRoot(),
    PostingsPageModule,
    FormPageModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
