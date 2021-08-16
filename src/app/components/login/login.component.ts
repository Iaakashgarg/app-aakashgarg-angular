import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoggedInUser } from 'src/app/models/loggedInUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedInUser: LoggedInUser = {} as LoggedInUser;

  constructor(private userService: UserService, private router: Router,
    private toastService: ToastrService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  get form() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.validateUser(this.loginForm.value).subscribe(res => {
    if (res != null && res != undefined) {
        this.loggedInUser = { id: res.id, name: res.name, username: res.username, email: res.email, isLoggedIn: true, address: res.address };
        localStorage.setItem('user', JSON.stringify(this.loggedInUser));
        this.toastService.success('Login in successful');
        this.userService.setUserSub(this.loggedInUser);
        this.router.navigateByUrl('/home');
      }
      else {
        this.toastService.error('Invalid credentials');
      }
    }
      , err => {
        console.error(err)
        this.toastService.error('Something went wrong');
      });
  }


}
