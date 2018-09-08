import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostingsService} from '../postings/services/postings.service';

@Component({
  selector: 'app-add-posting-page',
  templateUrl: './add-posting-page.component.html',
  styleUrls: ['./add-posting-page.component.scss']
})
export class AddPostingPageComponent implements OnInit {

  form: FormGroup;
  controls: Array<any>;

  constructor(private router: Router, private postingService: PostingsService) { }

  ngOnInit() {
    this.controls = [
      {field: 'title', ctrl: new FormControl('', Validators.required), label: 'Title'},
      {field: 'company', ctrl:  new FormControl('', Validators.required), label: 'Company' },
      {field: 'salaryMin', ctrl:  new FormControl('', Validators.required), label: 'Salary min' },
      {field: 'salaryMax', ctrl:  new FormControl('', Validators.required), label: 'Salary max' },
      {field: 'city', ctrl:  new FormControl('', Validators.required), label: 'City' },
      {field: 'street', ctrl:  new FormControl('', Validators.required), label: 'Street' },
      {field: 'postalCode', ctrl:  new FormControl('', Validators.required), label: 'Postal code' },
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
    const posting = {};
    // this.postingService.addPosting()
  }
}
