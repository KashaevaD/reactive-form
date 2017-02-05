import { FormGroup } from '@angular/forms';

export function isEqual(pass1: string, pass2: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[pass1];
    let confirm = group.controls[pass2];
    if (password.value !== confirm.value) {
      return {
        isEqual: true
      };
    }
  }
}
