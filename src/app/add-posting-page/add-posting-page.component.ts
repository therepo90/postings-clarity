import { Component, OnInit } from '@angular/core';
import { first, isEmpty } from 'lodash';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { post } from 'selenium-webdriver/http';
import { PostingsService } from '../postings/services/postings.service';
import { CustomValidators } from '../validators/validators';

interface Control {
    field: string;
    ctrl: AbstractControl;
    label: string;
    number?: boolean;
}

@Component({
    selector: 'app-add-posting-page',
    templateUrl: './add-posting-page.component.html',
    styleUrls: ['./add-posting-page.component.scss']
})
export class AddPostingPageComponent implements OnInit {
    form: FormGroup;
    controls: Array<Control>;
    formPending = false;

    constructor(
        private router: Router,
        private postingService: PostingsService
    ) {}

    ngOnInit() {
        this.controls = [
            {
                field: 'title',
                ctrl: new FormControl('', Validators.required),
                label: 'Title'
            },
            {
                field: 'company',
                ctrl: new FormControl('', Validators.required),
                label: 'Company'
            },
            {
                field: 'salaryMin',
                ctrl: new FormControl(0, [Validators.required]),
                label: 'Salary min',
                number: true
            },
            {
                field: 'salaryMax',
                ctrl: new FormControl(0, Validators.required),
                label: 'Salary max',
                number: true
            },
            {
                field: 'city',
                ctrl: new FormControl('', Validators.required),
                label: 'City'
            },
            {
                field: 'street',
                ctrl: new FormControl('', Validators.required),
                label: 'Street'
            },
            {
                field: 'postalCode',
                ctrl: new FormControl('', [
                    Validators.required,
                    CustomValidators.validPostalCode()
                ]),
                label: 'Postal code'
            }
        ];

        const formControls = this.controls.reduce(
            (prev, curr) => ({
                ...prev,
                [curr.field]: curr.ctrl
            }),
            {}
        );
        this.form = new FormGroup(formControls, [
            CustomValidators.validSalaries('salaryMin', 'salaryMax')
        ]);
    }

    onBack() {
        this.router.navigateByUrl('/postings');
    }

    onSubmit() {
        this.formPending = true;
        this.postingService
            .addPosting(this.form.getRawValue())
            .then((res) => this.router.navigateByUrl('/postings'))
            .finally(() => (this.formPending = false));
    }

    getError(control: Control): string {
        const ctrlError = isEmpty(control.ctrl.errors) ? null : 'Invalid field';
        const formError = this.form.errors && this.form.errors[control.field];
        return ctrlError || formError;
    }

    hasError(control: Control): boolean {
        const hasCtrlError =
            control.ctrl.invalid &&
            (control.ctrl.dirty || control.ctrl.touched);
        const hasFormError =
            this.form.errors && Boolean(this.form.errors[control.field]);
        return hasCtrlError || hasFormError;
    }
}
