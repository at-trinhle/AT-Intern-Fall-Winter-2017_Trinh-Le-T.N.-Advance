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
}
export function ValidateComputer(local: AbstractControl) {
  if(!(local.value.endsWith('.mp3') || local.value.endsWith('.mp4'))) {
    return { computer: true};
  }
}
