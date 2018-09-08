import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from '../storage/services/local-storage.service';
import {StorageService} from '../storage/services/storage.service';
import {PostingsMockProviderService} from './services/postings-mock-provider.service';
import {PostingsProviderService} from './services/postings-provider.service';
import {PostingsService} from './services/postings.service';
import { PostingComponent } from './posting/posting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostingComponent],
  exports: [PostingComponent],
})
export class PostingsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PostingsModule, providers: [
        {
          provide: PostingsProviderService, useClass: PostingsMockProviderService,
        },
        PostingsService,
      ]
    };
  }

}
