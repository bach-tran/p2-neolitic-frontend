import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Postcard } from '../models/postcard';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {

  @Input() postcard: Postcard;
  public imgSource: string;

  @Output() postcardId: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.imgSource = environment.API_URL + ':' + environment.PORT + `/neolitic/post/image/${this.postcard.id}`;
  }

  emitPostcardId(): void {
    this.postcardId.emit(this.postcard.id);
  }

}
