import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForm';

  RegistrationForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    address: new FormGroup({
      street: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
    }),
    phoneNo: new FormControl("",[Validators.required]),
  });

  OnSubmit(){
    console.log(this.RegistrationForm.value);
  }
}
