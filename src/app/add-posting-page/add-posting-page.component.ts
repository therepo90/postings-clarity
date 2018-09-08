import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {post} from 'selenium-webdriver/http';
import {PostingsService} from '../postings/services/postings.service';

interface Control {
  field: string;
  ctrl: FormControl;
  label: string;
}

@Component({
  selector: 'app-add-posting-page',
  templateUrl: './add-posting-page.component.html',
  styleUrls: ['./add-posting-page.component.scss']
})
export class AddPostingPageComponent implements OnInit {

  form: FormGroup;
  controls: Array<Control>;

  constructor(private router: Router, private postingService: PostingsService) { }

  ngOnInit() {
    this.controls = [
      {field: 'title', ctrl: new FormControl('', Validators.required), label: 'Title'},
      {field: 'company', ctrl:  new FormControl('', Validators.required), label: 'Company' },
      {field: 'salaryMin', ctrl:  new FormControl('', Validators.required,), label: 'Salary min' },
      {field: 'salaryMax', ctrl:  new FormControl('', Validators.required), label: 'Salary max' },
      {field: 'city', ctrl:  new FormControl('', Validators.required), label: 'City' },
      {field: 'street', ctrl:  new FormControl('', Validators.required), label: 'Street' },
      {field: 'postalCode', ctrl:  new FormControl('',
          [Validators.required, Validators.pattern(/^\d\d-\d\d\d$/)]
        ), label: 'Postal code' },
    ];

    const formControls = this.controls.reduce((prev, curr) => (
      {
        ...prev,
        [curr.field]: curr.ctrl,
      }
    ), {});
    this.form = new FormGroup(formControls);
  }

  onBack() {
    this.router.navigateByUrl('/postings');
  }

  onSubmit() {
     this.postingService.addPosting(this.form.getRawValue());
  }
}
