import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout-service/logout-service';

@Component({
  selector: 'app-consumer-nav',
  templateUrl: './consumer-nav.component.html',
  styleUrls: ['./consumer-nav.component.css']
})
export class ConsumerNavComponent implements OnInit {
  
  constructor( private logoutService: LogoutService ) {
    this.logoutService = logoutService;
  }

  ngOnInit(): void {
  }

  public async logout(): Promise<void> {
    this.logoutService.logout();
  }

}
