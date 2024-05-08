import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinAgeValidation(value: number) : ValidatorFn {
  return (control : AbstractControl) => {
    let valueOfControl : number = control.value
    if(control.value == null) return null;
    if(valueOfControl >= value) return null;
    return {ageError : "Ton age doit être supérieur ou égal à " + value}
  }

}
