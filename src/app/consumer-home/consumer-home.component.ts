import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Community } from '../models/community'

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})

export class ConsumerHomeComponent implements OnInit {
  communities = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getCommunities();
  }

  private async getCommunities(): Promise<Community[]> {
    const response = this.http.get<Community[]>(environment.API_URL + ':' + environment.PORT + '/neolitic/community', {
      withCredentials: true
    }).toPromise();

    this.setCommunities(await response);

    return response;
  }

  public setCommunities(communities: Community[]): void {
    this.communities = communities;
  }

}
