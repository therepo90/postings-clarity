import {
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators
} from '@angular/forms';

export class CustomValidators {
    static validPostalCode = (): ValidatorFn =>
        Validators.pattern(/^\d\d-\d\d\d$/);

    static validSalaries = (
        salaryMinField: string,
        salaryMaxField: string
    ): ValidatorFn => (formGroup: FormGroup): ValidationErrors | null => {
        const minSalary = formGroup.controls[salaryMinField].value;
        const maxSalary = formGroup.controls[salaryMaxField].value;
        return maxSalary <= minSalary * 2
            ? null
            : {
                  salary: 'Range is too high',
              };
    };
}
