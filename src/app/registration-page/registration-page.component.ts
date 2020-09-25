import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RegistrationService } from '../services/registration-service/registration-service';
import { AuthenticationService } from '../services/authentication-service/authentication-service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;

  constructor(private registrationService: RegistrationService, private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    if (await this.authenticationService.checkAuthorization()) {
      const user: User = this.authenticationService.getUser();

      this.navigateRole(user);
    }
  }

  private async navigateRole(user: User): Promise<void> {
    if (user.role.userRole === 'admin') {
      this.router.navigate(['consumer-home']);
    } else if (user.role.userRole === 'consumer') {
      this.router.navigate(['consumer-home']);
    } else {
      alert('Unknown User Role, cancelling session');
      await this.authenticationService.logout();
    }
  }

  async registerNew(): Promise<void> {
    if(this.password === this.confirmPassword) { 
      try {
        const user: User = await this.registrationService.register(this.firstName, this.lastName, this.username, this.password, this.confirmPassword);

        await this.navigateRole(user);

      } catch (error) {
        alert("Oh no, we had a problem registering. Please try again.");
        console.log(error);
      }
    } else {
      alert("Passwords do not match, please try again.");
    }
  }
}
