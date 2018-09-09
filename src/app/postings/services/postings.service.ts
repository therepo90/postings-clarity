import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posting } from '../models/posting';
import { PostingsProviderService } from './postings-provider.service';
import { PostingNew } from '../models/posting-new';

@Injectable()
export class PostingsService {
    constructor(private provider: PostingsProviderService) {}

    addPosting(posting: PostingNew): Promise<any> {
        return this.provider.addPosting(posting);
    }

    getPostings(): Observable<Posting[]> {
        return this.provider.getPostings();
    }
}
