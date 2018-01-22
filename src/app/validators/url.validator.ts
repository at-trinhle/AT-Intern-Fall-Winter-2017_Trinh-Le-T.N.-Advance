import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https://www.youtube.com/')) {
    return { validUrl: true };
  }
  return null;
}
export function CheckGmail(gmail: AbstractControl) {
  if(!gmail.value.endsWith('@gmail.com')) {
    return { validGmail : true};
  }
  return null;
}
