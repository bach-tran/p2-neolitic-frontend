import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    this.imgSource = environment.API_URL + ':' + environment.PORT + `/neolitic/post/image/${this.postcard.id}`;

  }

}
