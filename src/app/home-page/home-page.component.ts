import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication-service/authentication-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
