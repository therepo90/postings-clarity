import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Posting} from '../postings/models/posting';
import {PostingsPageService} from './services/postings-page.service';

@Component({
  selector: 'app-postings-page',
  templateUrl: './postings-page.component.html',
  styleUrls: ['./postings-page.component.scss'],
})
export class PostingsPageComponent implements OnInit {
  public postings$: Observable<Posting[]>;

  constructor(private service: PostingsPageService) { }

  ngOnInit() {
    this.postings$ = this.service.getPostings();
  }
}
