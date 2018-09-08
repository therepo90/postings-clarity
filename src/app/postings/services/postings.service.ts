import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Posting} from '../models/posting';
import {PostingsProviderService} from './postings-provider.service';

@Injectable()
export class PostingsService {

  constructor(private provider: PostingsProviderService) {}

  addPosting(posting: Posting): Promise<any> {
    return this.provider.addPosting(posting);
  }

  getPostings(): Observable<Posting[]> {
    return this.provider.getPostings();
  }
}
