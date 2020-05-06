import { AbstractControl } from '@angular/forms';

export function passwordValidator(control : AbstractControl) : {[key : string] : boolean } | null {
    const pwd = control.get('password');
    const confPwd = control.get('confirmPassword');
    if(pwd.pristine || confPwd.pristine) {
        return null;
    }
    return pwd && confPwd && pwd.value != confPwd.value ? {'mismatch':true} : null;
}