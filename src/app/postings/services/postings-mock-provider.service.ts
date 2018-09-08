import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Posting} from '../models/posting';
import {PostingsProviderService} from './postings-provider.service';

@Injectable()
export class PostingsMockProviderService extends PostingsProviderService {
  addPosting(posting: Posting): Promise<any> {
    return undefined;
  }

  getPostings(): Observable<Posting[]> {
    return undefined;
  }

}
