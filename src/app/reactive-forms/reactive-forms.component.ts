import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'chu-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})

export interface States {
  value:string;
  viewValue:string
}

export class ReactiveFormsComponent implements OnInit {
  registrationForm: FormGroup;
  states: States[] = [
    {value:'NY-0', viewValue:'New York'},
    {value:'CA-1', viewValue:'California'},
    {value:'PA-2', viewValue:'Pennsylvania'},
    {value:'CO-3', viewValue:'Colorado'},
    {value:'GA-4', viewValue:'Georgia'},
    {value:'FL-5', viewValue:'Florida'}
  ]

  constructor(private fb: FormBuilder) {

    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[abc]$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^[abc]$/)]],

      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}$/)]],

      email: ['', Validators.required, Validators.pattern(/^[a-z]@[a-z].[a-z]/)],

      username: ['', [Validators.required, Validators.pattern(/^[abc]$/)]],
      
      pass: this.fb.group({
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{10})(?=.*[!?&$#-])/)]],
        confirmPassword: ['', Validators.required],
      }, {validators: this.mustMatch}),
      
      address: this.fb.group({
        city: ['', Validators.pattern(/^[abc]$/)],
        state: [''],
        postalCode: ['']
      })

    })

  }

  ngOnInit() {

  }

  mustMatch(group: FormGroup){
    let passwoord = group.controls.password.value;
    let confirmPasswoord = group.controls.confirmPassword.value;

    return passwoord === confirmPasswoord ? null : {error: true}
  }


}
