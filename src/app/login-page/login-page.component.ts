import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication-service/authentication-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) { }

  async ngOnInit(): Promise<void> {
    if (await this.authenticationService.checkAuthorization()) {
      const user: User = this.authenticationService.getUser();

      this.navigateRole(user);
    }
  }

  private async navigateRole(user: User): Promise<void> {
    if (user.role.userRole === 'admin') {
      this.router.navigate(['admin-home']);
    } else if (user.role.userRole === 'consumer') {
      this.router.navigate(['consumer-home']);
    } else {
      alert('Unknown User Role, cancelling session');
      await this.authenticationService.logout();
    }
  }

  async login(): Promise<void> {
    try {
      const user: User = await this.authenticationService.login(this.username, this.password);

      await this.navigateRole(user);

    } catch (error) {
      alert("Oh no, we had a problem loggin in. Please try again.");
      console.log(error);
    }
  }
}
