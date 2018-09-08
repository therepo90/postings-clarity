import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { StorageModule } from '../storage/storage.module';
import { PostingComponent } from './posting/posting.component';
import { PostingsMockProviderService } from './services/postings-mock-provider.service';
import { PostingsProviderService } from './services/postings-provider.service';
import { PostingsService } from './services/postings.service';

@NgModule({
    imports: [CommonModule, StorageModule, ClarityModule],
    declarations: [PostingComponent],
    exports: [PostingComponent]
})
export class PostingsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PostingsModule,
            providers: [
                {
                    provide: PostingsProviderService,
                    useClass: PostingsMockProviderService
                },
                PostingsService
            ]
        };
    }
}
