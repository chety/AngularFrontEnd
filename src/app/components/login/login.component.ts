import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  login() {
    if (!this.loginForm.valid) {
      this.toastrService.warning("Please fill all required files", "Missing Field");
      return;
    }

    const loginModel: LoginModel = { ...this.loginForm.value };
    this.authService.login(loginModel).subscribe(response => {
      this.toastrService.info(`Welcome to Product Management Program`)
      localStorage.setItem("token",response.data.token);
    }, errResponse => {
      const {message} = errResponse.error
      this.toastrService.error(`Error occured: ${message}`);
    });
  }

}
