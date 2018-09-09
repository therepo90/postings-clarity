import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posting } from '../models/posting';
import { PostingNew } from '../models/posting-new';

@Injectable()
export abstract class PostingsProviderService {
    abstract getPostings(): Observable<Posting[]>;
    abstract addPosting(posting: PostingNew): Promise<any>;
}
