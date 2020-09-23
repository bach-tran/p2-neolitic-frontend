import { Component, Input, OnInit } from '@angular/core';
import { Community } from '../models/community';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.css']
})
export class CommunityCardComponent implements OnInit {

  @Input() community: Community;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.community)
  }

}
