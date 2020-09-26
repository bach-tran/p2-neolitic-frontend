import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service/authentication-service';
import { LogoutService } from '../../services/logout-service/logout-service';

@Component({
  selector: 'app-consumer-nav',
  templateUrl: './consumer-nav.component.html',
  styleUrls: ['./consumer-nav.component.css']
})
export class ConsumerNavComponent implements OnInit {
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

}
