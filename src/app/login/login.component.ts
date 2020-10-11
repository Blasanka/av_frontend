import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
import { MustMatch } from '../shared/directives/must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginFormSubmitted = false;
  userLoginForm: FormGroup;
  isProcessing = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private api: AuthService) {}

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    const telregex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/;

    this.userLoginForm = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern(telregex) ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get rf() {
    return this.userLoginForm.controls;
  }

  //  On submit click, reset field value
  onSubmit() {
    this.userLoginFormSubmitted = true;
    if (this.userLoginForm.invalid || this.isProcessing) {
      return;
    }

    this.isProcessing = true;
    this.api.login((JSON.stringify(this.userLoginForm.value)))
        .subscribe(
          (data: any) => {
              if (data.code == 200) {
                this.router.navigate(['/']);
                this.api.setSession(data);
                this.isProcessing = false;
              } else if (data.code == 401) {
                this.isProcessing = false;
                console.log(data);
                Swal.fire(
                  'Wrong credentials, Please try again!',
                  data.message,
                  'error',
                );
              } else {
                this.isProcessing = false;
                console.log(data);
                Swal.fire(
                  'Ops...',
                  data,
                  'error',
                );
              }
          },
          (err: any) => {
            console.log(err);
            this.isProcessing = false;
            Swal.fire(
              'Oops...',
              'Something went wrong!',
              'error',
            );
        }
      );
  }

}
