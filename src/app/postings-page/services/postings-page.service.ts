import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posting } from '../../postings/models/posting';
import { PostingsService } from '../../postings/services/postings.service';

@Injectable()
export class PostingsPageService {
    constructor(private service: PostingsService) {}

    getPostings(): Observable<Posting[]> {
        return this.service.getPostings();
    }
}
