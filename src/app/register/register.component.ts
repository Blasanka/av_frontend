import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { MustMatch } from '../../app/shared/directives/must-match.validator';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSubmitPressed = false;
  userRegisterForm: FormGroup;
  isProcessing = false;
  isOnSubmit = false;
  responseSuccess: string;
  responseFailed: string;
  isVerificationSent = false;
  verificationCode: string;
  mobile: string;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private api: AuthService) {}

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    const telregex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/;

    this.userRegisterForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      verify_code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern(telregex) ]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [true, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get rf() {
    return this.userRegisterForm.controls;
  }

  //  On submit click, reset field value
  onSubmit() {
    this.isSubmitPressed = true;
    if (this.userRegisterForm.invalid) {
      return;
    }

    this.isOnSubmit = true;
    this.api.register((JSON.stringify(this.userRegisterForm.value)))
        .subscribe(
          (data: any) => {
              this.isOnSubmit = false;
              if (data.code == 200) {
                Swal.fire('Thank you!',
                  'You have successfully registered.',
                  'success').then(() => {
                    this.isOnSubmit = false;
                    this.router.navigate(['/login']);
                });
              } else {
                Swal.fire('Sorry!',
                  data.message,
                  'error').then(() => {
                    this.isOnSubmit = false;
                });
              }
          },
          (err: any) => {
            this.isOnSubmit = false;
            console.log(err);
            Swal.fire(
              'Oops...',
              'Something went wrong!',
              'error',
            );
        }
      );
  }

  requestVerifyCode() {
    this.mobile = this.userRegisterForm.value.mobile;
    if (this.mobile.length < 10) {
      this.responseFailed = 'Mobile number is invalid';
      return;
    } else {
      this.responseFailed = null;
    }
    this.isProcessing = true;
    this.api.requestVerifyCode((JSON.stringify({mobile_number: this.mobile})))
        .subscribe(
          (data: any) => {
              this.isProcessing = false;
              if (data.code == 200) {
                this.responseFailed = null;
                this.responseSuccess = data.message;
                this.isVerificationSent = true;
              } else if (data.code == 400) {
                this.responseFailed = data.message;
              } else {
                this.responseFailed = data.message;
              }
              this.isVerificationSent = false;
          },
          (err: any) => {
            this.responseFailed = err;
            this.isProcessing = false;
        }
      );
  }

}
