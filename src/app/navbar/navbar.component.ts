import { Component, OnInit } from '@angular/core';
import { LogoutService } from "../services/logout-service/logout-service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private logoutService: LogoutService;

  constructor( logoutService: LogoutService ) { 
    this.logoutService = logoutService;
  }

  ngOnInit(): void {
  }

  public async logout(): Promise<void> {
    this.logoutService.logout();
  }
}
