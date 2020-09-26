import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Postcard } from '../models/postcard';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication-service/authentication-service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userId: number;
  username: string;
  modalPostcardId: number;

  private sub: any;
  postcards = [];

  constructor(private authService: AuthenticationService, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    if (await this.authService.checkAuthorization()) {
      const user: User = this.authService.getUser();

      if (user == null) {
        this.router.navigate(['login']);
      } else {
        this.username = user.username;
        this.sub = this.route.params.subscribe(params => {
          this.userId = +params['userId'];
        });
    
        this.getMyPostcards();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public async getMyPostcards(): Promise<Postcard[]> {
    const response = this.http.get<Postcard[]>(environment.API_URL + ':' + environment.PORT + `/neolitic/post?userId=${this.userId}`, {
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

    this.getMyPostcards();
  }
}
