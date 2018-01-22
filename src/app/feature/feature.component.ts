import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder,Validators } from '@angular/forms';
import { ValidateUrl } from '../validators/url.validator';

@Component({
  selector: 'feature',
  templateUrl: 'feature.component.html',
  styleUrls: ['feature.component.css']
})

export class FeatureComponent implements OnInit{
  @Input() inforPage;

  infoForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.infoForm = this.fb.group({
      name: ['', Validators.required ],
      author: this.fb.group({
        nameAuthor: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.email],
      }),
      types: this.fb.group({
        type: ['', Validators.required]
      }),
    });
   
  }

  onSubmit() {
  }
}

// function emailValidator(formControl: FormControl) {
//   if(formControl.value.includes('@gmail.com')) {
//     return 'ok';
//   }
//   else {
//     return 'Email not invalid';
//   }
// }
