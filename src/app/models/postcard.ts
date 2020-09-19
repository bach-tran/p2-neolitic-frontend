import { Time } from '@angular/common';
import { Community } from './community';

export class Postcard {
    public id: number;
    public image: Blob;
    public caption: string;
    public community: Community;
    public author: number;
    public timePosted: Time;
}