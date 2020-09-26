import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../../services/logout-service/logout-service';

@Component({
  selector: 'app-consumer-nav',
  templateUrl: './consumer-nav.component.html',
  styleUrls: ['./consumer-nav.component.css']
})
export class ConsumerNavComponent implements OnInit {
  
  constructor(private logoutService: LogoutService, private router: Router) {
    this.logoutService = logoutService;
  }

  ngOnInit(): void {
  }

  public async logout(): Promise<void> {
    this.logoutService.logout();
    this.router.navigate(['login']);
  }

}
