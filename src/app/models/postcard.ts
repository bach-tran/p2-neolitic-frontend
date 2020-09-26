import { Time } from '@angular/common';
import { Community } from './community';
import { User } from './user';

export class Postcard {
    public id: number;
    public caption: string;
    public author: User;
    public timePosted: Time;
    public communityName: string;
}