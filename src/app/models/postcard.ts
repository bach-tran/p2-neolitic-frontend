import { Time } from '@angular/common';
import { Community } from './community';

export class Postcard {
    public id: number;
    public caption: string;
    public author: number;
    public timePosted: Time;
}