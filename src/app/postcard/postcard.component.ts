import { Component, Input, OnInit } from '@angular/core';
import { Postcard } from '../models/postcard';

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
    this.imgSource = `http://ec2-18-220-126-199.us-east-2.compute.amazonaws.com:8085/neolitic/post/image/${this.postcard.id}`;
    
  }

}
