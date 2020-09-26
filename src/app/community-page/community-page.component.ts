import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Postcard } from '../models/postcard'
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service/authentication-service';
import { User } from '../models/user';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})

export class CommunityPageComponent implements OnInit, OnDestroy {
  @Input() communityId: number;

  modalPostcardId: number;

  private sub: any;
  postcards = [];

  constructor(private http: HttpClient, private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    if (await this.authenticationService.checkAuthorization()) {
      const user: User = this.authenticationService.getUser();

      if (user == null) {
        this.router.navigate(['login']);
      } else {
        this.sub = this.route.params.subscribe(params => {
          this.communityId = +params['communityId'];
        });
    
        this.getPostcards();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public async getPostcards(): Promise<Postcard[]> {
    const response = this.http.get<Postcard[]>(environment.API_URL + ':' + environment.PORT + `/neolitic/post?communityId=${this.communityId}`, {
      withCredentials: true
    }).toPromise();

    this.setPostcards(await response);

    return response;
  }

  public setPostcards(postcards: Postcard[]): void {
    postcards.sort((a, b) => (a.timePosted > b.timePosted) ? -1 : 1);

    this.postcards = postcards;
  }

  public displayModal(postcardId: any) {
    this.modalPostcardId = postcardId;
  }

  public updatePosts() {
    var seconds = 2;
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}

    this.getPostcards();
  }
}
