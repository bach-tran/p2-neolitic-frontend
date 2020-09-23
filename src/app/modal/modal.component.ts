import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';
import { Postcard } from '../models/postcard';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges {

  @Input() postcardId: number;
  commentText: string;
  comments = [];

  constructor(private http: HttpClient, private router: Router) { } ;
  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.postcardId) {
      this.getComments();
    }
  }

  private async getComments(): Promise<Comment[]> {
    const response = this.http.get<Comment[]>(environment.API_URL + ':' + environment.PORT + `/neolitic/comment?postId=${this.postcardId}`,
    {
      withCredentials: true
    }).toPromise();

    this.setComments(await response);

    return response;
  }

  public setComments(comments: Comment[]): void {
    comments.sort((a, b) => (a.timePosted > b.timePosted) ? -1 : 1);

    this.comments = comments;
  }

  public async postComment(): Promise<void> {
    const response = this.http.post<Comment>(environment.API_URL + ':' + environment.PORT + '/neolitic/comment', {
      postId: this.postcardId,
      text: this.commentText
    },
    {
      withCredentials: true
    }).toPromise();

    // this.comments.unshift(await response);
    this.commentText = "";

    await response;
    await this.getComments();
  }
}
