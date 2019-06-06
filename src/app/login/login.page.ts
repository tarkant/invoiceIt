import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  public login: string;
  public password: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.logOut();
  }

  public onLogin() {
    this.authService.login(this.login, this.password).subscribe(token => {
      console.log(token);
    });
  }

}
