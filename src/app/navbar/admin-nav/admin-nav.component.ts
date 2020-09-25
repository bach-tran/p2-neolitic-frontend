import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout-service/logout-service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private logoutService: LogoutService, private router: Router) { 
    this.logoutService = logoutService;
  }

  ngOnInit(): void {
  }

  public async logout(): Promise<void> {
    this.logoutService.logout();
    this.router.navigate(['login']);
  }

  public createNewCommunity(): void {
    console.log("to do!");
  }
}
