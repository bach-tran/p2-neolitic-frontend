import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() postId: number;
  comments = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getComments();
  }

  private async getComments(): Promise<Comment[]> {
    const response = this.http.get<Comment[]>(environment.API_URL + ':' + environment.PORT + `/neolitic/comment?postId=${this.postId}`, {
      withCredentials: true
    }).toPromise();

    this.setComments(await response);

    return response;
  }

  public setComments(comments: Comment[]): void {
    comments.sort((a, b) => (a.timePosted > b.timePosted) ? -1 : 1);

    this.comments = comments;
  }
}
