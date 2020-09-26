import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout-service/logout-service';

@Component({
  selector: 'app-community-nav',
  templateUrl: './community-nav.component.html',
  styleUrls: ['./community-nav.component.css']
})
export class CommunityNavComponent implements OnInit {

  constructor(private logoutService: LogoutService, private router: Router) { }

  ngOnInit(): void {
  }

  public async logout(): Promise<void> {
    this.logoutService.logout();
    this.router.navigate(['login']);
  }

}
