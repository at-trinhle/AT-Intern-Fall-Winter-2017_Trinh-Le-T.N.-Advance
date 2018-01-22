import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'form-compo',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})

export class LoginComponent {

  hideElement = false;
  @Output() relocate = new EventEmitter();
  loginUser(myForm: NgForm) {
    // console.log(myForm.value);
    // console.log(myForm.valid);

    localStorage.setItem('typedata', JSON.stringify(myForm.valid));
    this.relocate.emit('ok');
    if(myForm.valid === true) {
      this.hideElement = true;
    }
  }
}
