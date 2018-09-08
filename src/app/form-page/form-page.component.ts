import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigateByUrl('/postings');
  }
}
