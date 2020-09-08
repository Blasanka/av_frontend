import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-customer-account-account-details',
  templateUrl: './customer-account-account-details.component.html',
  styleUrls: ['./customer-account-account-details.component.css']
})
export class CustomerAccountAccountDetailsComponent implements OnInit {

  public name           = "Ravindu";
  public birthday       = "1998/09/15";
  public email          = "ravindu@gmail.com";
  public mobile         = "0763468331";
  public gender         = "male";
  public show:boolean   = false;
  public buttonName:any = 'EDIT PROFILE';
 
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }


  showk()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confermPassword: ['', [Validators.required, Validators.minLength(6)]],
        oldPassword: ['', [Validators.required]]

    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
   
}
  

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "SAVE CHANGES";
     
    else
      this.buttonName = "EDIT PROFILE";
 
  }

  passwordChange(){
    Swal.fire({
      title: 'Password Changed!',
      icon: 'success',
      text: 'Your password changed succesfully',
    })
  }

}
