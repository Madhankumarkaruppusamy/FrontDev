import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user: User = {
    userName: '',
    email: '',
    password: '',
    mobile: 0,
  };
  isSubmitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private alertify: AlertifyService,
  ) {}
  ngOnInit() {
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, [Validators.required]],
        mobile: [
          null,
          [
            Validators.required,
            Validators.maxLength(10),
            Validators.minLength(10),
          ],
        ],
      },
      { validators: this.passwordMatchingValidator }
    );
  }
  passwordMatchingValidator: ValidatorFn = (fg: AbstractControl) => {
    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatched: true };
  };

  onSubmit() {
    this.isSubmitted = true;

    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.user);
      this.registrationForm.reset();
      this.isSubmitted = false;
      this.alertify.success('Registration Form Successfully Saved!');
    } else {
      this.alertify.error('Kindly fill All Required Fields');
    }
  }

  userData(): User {
    return (this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
}
