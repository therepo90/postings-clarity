import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Posting} from '../models/posting';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent implements OnInit {
  @Input() public posting: Posting;

  constructor() {
  }

  ngOnInit() {
  }

}
