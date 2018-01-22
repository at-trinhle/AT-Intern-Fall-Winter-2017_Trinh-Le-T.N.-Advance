import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder,Validators } from '@angular/forms';
import { ValidateUrl, CheckGmail } from '../validators/url.validator';

@Component({
  selector: 'feature',
  templateUrl: 'feature.component.html',
  styleUrls: ['feature.component.css']
})

export class FeatureComponent implements OnInit{
  @Input() inforPage;

  infoForm: FormGroup;
  //checkFiles = false;

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.infoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)] ],
      author: this.fb.group({
        nameAuthor: ['', [Validators.required, Validators.minLength(3)]],
        phone: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(10),
        ])],
        email: ['', Validators.compose([
          Validators.required,
          Validators.email,
          CheckGmail
        ])],
      }),
      type: ['', Validators.required],
      files: this.fb.group({
        computer: ['', Validators.compose([
          
        ])],
        youtube: ['', Validators.compose([ 
          ValidateUrl
        ])]
      })
    });
  }

  onSubmit() {
    console.log(this.infoForm);
    // console.log(this.infoForm.controls.author.controls.phone.value);
    // console.log(this.infoForm.controls.files.controls.youtube.value);

  }

  test(event: any) {
    if(event.srcElement.files.length) {
      console.log(event.srcElement.files[0].name);
      //console.log(this.infoForm.controls.author.controls.phone.value);

      //this.checkFiles = true;
      this.infoForm.controls.files['controls'].computer.value = event.srcElement.files[0].name; 
      // this.infoForm.controls.files['controls'].computer.setValue(event.srcElement.files[0]); 
      console.log(this.infoForm.controls.files['controls'].computer.value);
    }
  }
}
