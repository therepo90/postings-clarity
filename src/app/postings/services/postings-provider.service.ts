import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posting } from '../models/posting';

@Injectable()
export abstract class PostingsProviderService {
    abstract getPostings(): Observable<Posting[]>;
    abstract addPosting(posting: Posting): Promise<any>;
}
