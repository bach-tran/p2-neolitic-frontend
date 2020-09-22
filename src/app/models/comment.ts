import { Time } from '@angular/common';
import { User } from './user';

export class Comment {
    private id: number;
	private text: string;
	private author: User;
	private timePosted: Time;
}