import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {StorageService} from '../../storage/services/storage.service';
import {Posting} from '../models/posting';
import {PostingsProviderService} from './postings-provider.service';

@Injectable()
export class PostingsMockProviderService extends PostingsProviderService {
  postingsKey = 'POSTINGS';

  constructor(private storage: StorageService) {
    super();
  }

  async addPosting(posting: Posting) {
    // this.storage.setItem(posting.id, posting);
  }

  getPostings(): Observable<Posting[]> {
    return of([
      {
        id: '5',
        title: 'Coding Wizard',
        company: 'Microsoft',
        salaryMin: 5000,
        salaryMax: 10000,
        city: 'Cracow',
        street: 'Lipna 7',
        postalCode: '30-222',
      },
      {
        id: '17',
        title: 'Regular C++ Developer',
        company: 'CD-Project',
        salaryMin: 9000,
        salaryMax: 20000,
        city: 'Warsaw',
        street: 'Klonowa 10',
        postalCode: '33-623',
      }
    ]);
  }

}
