import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {LocalStorageService} from './services/local-storage.service';
import {StorageService} from './services/storage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StorageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StorageModule, providers: [
        {
          provide: StorageService, useClass: LocalStorageService,
        }
      ]
    };
  }
}
