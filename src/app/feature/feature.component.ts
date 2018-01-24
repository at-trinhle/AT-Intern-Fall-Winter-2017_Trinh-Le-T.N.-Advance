import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder,Validators } from '@angular/forms';
import { ValidateUrl, CheckGmail, ValidateComputer } from '../validators/url.validator';

@Component({
  selector: 'feature',
  templateUrl: 'feature.component.html',
  styleUrls: ['feature.component.css']
})

export class FeatureComponent implements OnInit{
  @Input() inforPage;

  infoForm: any;

  errorInfo: string;
  linksPlaceholder: string;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.infoForm = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(3)
      ]],
      author: this.fb.group({
        nameAuthor: ['', [
          Validators.required, 
          Validators.minLength(3)
        ]],
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
      type: ['computer', Validators.required],
      files: this.fb.array([])
    });
    this.newFile();
    console.log(this.infoForm.controls.files)
  }

  youtubeLink() {
    this.errorInfo = 'Link must start with: https://www.youtube.com/';
    this. linksPlaceholder = 'Link youtube';
    return new FormControl('', [ValidateUrl]);
  }

  fileMp3() {
    this.errorInfo = 'File must end with: .mp3 or .mp4';
    this. linksPlaceholder = 'File mp3 or mp4';
    return new FormControl('', [ValidateComputer]);
  }

  newFile() {
    this.infoForm.controls.type.valueChanges.subscribe(value => {
      if(value === 'computer')  {
        this.fileMp3();
      }
      else {
        this.youtubeLink();
      }
    });
    if (this.infoForm.controls.type.value === 'youtube'){
      this.infoForm.controls.files.push(this.youtubeLink());
    }
    else {
      this.infoForm.controls.files.push(this.fileMp3());
    }
  }

  onSubmit() {
    console.log(this.infoForm.value);
  }
}
