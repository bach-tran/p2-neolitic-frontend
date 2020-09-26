import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout-service/logout-service';

@Component({
  selector: 'app-newcommunity-nav',
  templateUrl: './newcommunity-nav.component.html',
  styleUrls: ['./newcommunity-nav.component.css']
})
export class NewcommunityNavComponent implements OnInit {

  constructor(private logoutService: LogoutService, private router: Router) { }

  ngOnInit(): void {
  }

  public async logout(): Promise<void> {
    this.logoutService.logout();
    this.router.navigate(['login']);
  }
}
