import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication-service';
import { LogoutService } from 'src/app/services/logout-service/logout-service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  currentUserId: number;

  constructor(private authService: AuthenticationService, private logoutService: LogoutService, private router: Router) { 
    this.logoutService = logoutService;
  }

  async ngOnInit(): Promise<void> {
    if (await this.authService.checkAuthorization()) {
      this.currentUserId = this.authService.getUser().id;
    }
  }

  public async logout(): Promise<void> {
    this.logoutService.logout();
    this.router.navigate(['login']);
  }

  public createNewCommunity(): void {
    this.router.navigateByUrl("/new-society");
  }
}
