import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication-service/authentication-service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    if (await this.authenticationService.checkAuthorization()) {
      const user: User = this.authenticationService.getUser();

      if (user == null) {
        this.router.navigate(['login']);
      }
    }
  }
}
