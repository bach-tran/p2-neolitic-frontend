import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Postcard } from '../models/postcard';
import { environment } from 'src/environments/environment';
import { Time } from '@angular/common';
import { AuthenticationService } from '../services/authentication-service/authentication-service';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  public timePosted : Time;
  @Input() postcard: Postcard;
  public imgSource: string;
  public role: string;


  @Output() postcardId: EventEmitter<number> = new EventEmitter();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.imgSource = environment.API_URL + ':' + environment.PORT + `/neolitic/post/image/${this.postcard.id}`;

    this.role = this.authenticationService.getUser().role.userRole;
  }

  emitPostcardId(): void {
    this.postcardId.emit(this.postcard.id);
  }

}
