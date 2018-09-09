import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { StorageService } from '../../storage/services/storage.service';
import { Posting } from '../models/posting';
import { PostingsProviderService } from './postings-provider.service';
import { PostingNew } from '../models/posting-new';

interface DBPostings {
    [key: string]: Posting;
}

const BASE_POSTINGS: DBPostings = {
    '5': {
        id: '5',
        title: 'Coding Wizard',
        company: 'Microsoft',
        salaryMin: 5000,
        salaryMax: 10000,
        city: 'Cracow',
        street: 'Lipna 7',
        postalCode: '30-222'
    },
    '17': {
        id: '17',
        title: 'Regular C++ Developer',
        company: 'CD-Project',
        salaryMin: 9000,
        salaryMax: 20000,
        city: 'Warsaw',
        street: 'Klonowa 10',
        postalCode: '33-623'
    }
};

@Injectable()
export class PostingsMockProviderService extends PostingsProviderService {
    POSTINGS_KEY = 'POSTINGS';
    private postingsSubject$ = new BehaviorSubject<Posting[]>([]);
    public postings$ = this.postingsSubject$.asObservable();

    constructor(private storage: StorageService) {
        super();
        Object.entries(BASE_POSTINGS).forEach(([key, value]) =>
            this.addMock(value)
        );
        this.updatePostings();
    }

    async addPosting(postingNew: PostingNew) {
        const id = new Date().getTime().toString();
        const posting = {
            ...postingNew,
            id
        };
        const storagePostings = this.getPostingsFromStorage();
        this.storage.save(this.POSTINGS_KEY, {
            ...storagePostings,
            [posting.id]: { ...posting }
        });
        this.updatePostings();
    }

    getPostings(): Observable<Posting[]> {
        return this.postings$;
    }

    private updatePostings() {
        const storagePostings = this.getPostingsFromStorage();
        this.postingsSubject$.next(
            Object.entries(storagePostings).map(([key, value]) => value)
        );
    }

    private getPostingsFromStorage(): DBPostings {
        return this.storage.get(this.POSTINGS_KEY) as DBPostings;
    }

    private addMock(posting: Posting) {
        const storagePostings = this.getPostingsFromStorage();
        this.storage.save(this.POSTINGS_KEY, {
            ...storagePostings,
            [posting.id]: { ...posting }
        });
    }
}
