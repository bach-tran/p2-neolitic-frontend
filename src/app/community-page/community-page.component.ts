import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Postcard } from '../models/postcard'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})

export class CommunityPageComponent implements OnInit, OnDestroy {
  @Input() communityId: number;

  private sub: any;
  postcards = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.communityId = +params['communityId']; 
    });

    this.getPostcards();

    console.log(this.postcards);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private async getPostcards(): Promise<Postcard[]> {
    const response = this.http.get<Postcard[]>(environment.API_URL + ':' + environment.PORT + `/neolitic/post?communityId=${this.communityId}`, {
      withCredentials: true
    }).toPromise();

    this.setPostcards(await response);

    console.log(this.postcards);
    return response;
  }

  public setPostcards(postcards: Postcard[]): void {
    postcards.sort((a, b) => (a.timePosted > b.timePosted) ? -1 : 1);

    this.postcards = postcards;
  }
}
