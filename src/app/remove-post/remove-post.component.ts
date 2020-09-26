import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-remove-post',
  templateUrl: './remove-post.component.html',
  styleUrls: ['./remove-post.component.css']
})
export class RemovePostComponent implements OnInit {
  @Input() postcardId : string
  @Output() updatePosts: EventEmitter<void> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public async delete(): Promise<Object> {
    const response: Promise<Object> = this.http.delete(environment.API_URL + ':' + environment.PORT + '/neolitic/post/' + this.postcardId, {
      withCredentials: true
    }).toPromise();

    this.updatePosts.emit();

    return response;
  }

}
