import { AbstractControl, Validators, ValidatorFn } from "@angular/forms";

/*export function forbiddenNameValidator(control : AbstractControl) : {[key : string] : any} | null {
    const forbidden =  /admin/.test(control.value);    
    return forbidden ? {'forbiddenNameValidator' : {value : control.value}} : null;
}*/

export function forbiddenNameValidator(value : RegExp) : ValidatorFn {
    return (control : AbstractControl) : {[key : string] : any} | null => 
    {
        const forbidden =  value.test(control.value);    
        return forbidden ? {'forbiddenNameValidator' : {value : control.value}} : null;
    }
}