import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  form: FormGroup;
  controls: Array<any>;

  constructor(private router: Router) { }

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

  }
}
