import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication-service';
import { LogoutService } from 'src/app/services/logout-service/logout-service';

@Component({
  selector: 'app-community-nav',
  templateUrl: './community-nav.component.html',
  styleUrls: ['./community-nav.component.css']
})
export class CommunityNavComponent implements OnInit {
  currentUserId: number;

  constructor(private authService: AuthenticationService, private logoutService: LogoutService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    if (await this.authService.checkAuthorization()) {
      this.currentUserId = this.authService.getUser().id;
    }
  }

  public async logout(): Promise<void> {
    this.logoutService.logout();
    this.router.navigate(['login']);
  }

}
