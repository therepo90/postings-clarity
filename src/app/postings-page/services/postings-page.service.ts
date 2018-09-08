import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Posting} from '../../postings/models/posting';
import {PostingsService} from '../../postings/services/postings.service';

@Injectable()
export class PostingsPageService {

  constructor(private service: PostingsService) {}

  addPosting(posting: Posting): Promise<any> {
    return this.service.addPosting(posting);
  }

  getPostings(): Observable<Posting[]> {
    return this.service.getPostings();
  }
}
