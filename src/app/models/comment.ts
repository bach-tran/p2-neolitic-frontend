import { Time } from '@angular/common';
import { User } from './user';

export class Comment {
    public id: number;
	public text: string;
	public author: User;
	public timePosted: Time;
}