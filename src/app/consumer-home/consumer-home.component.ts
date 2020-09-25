import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Community } from '../models/community'
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication-service/authentication-service';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})

export class ConsumerHomeComponent implements OnInit {
  communities = [];
  currentUser: User;
  role: string;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    if (await this.authenticationService.checkAuthorization()) {
      this.currentUser = this.authenticationService.getUser();

      if (this.currentUser == null) {
        this.router.navigate(['login']);
      } else {
        this.role = this.currentUser.role.userRole;
        this.getCommunities();
      }
    }
  }

  private async getCommunities(): Promise<Community[]> {
    const response = this.http.get<Community[]>(environment.API_URL + ':' + environment.PORT + '/neolitic/community', {
      withCredentials: true
    }).toPromise();

    this.setCommunities(await response);

    return response;
  }

  public setCommunities(communities: Community[]): void {
    communities.sort((a, b) => (a.name > b.name) ? 1 : -1);

    this.communities = communities;
  }

}
