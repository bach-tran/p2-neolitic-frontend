import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable(
{providedIn: 'root'}
)
export class RegistrationService {
    
    private currentUser: User;
    
    constructor(private http: HttpClient, private router: Router) { }
    
    public async register(firstName: string, lastName: string, username: string, password: string, confirmPassword: string): Promise<User> {
        const response: Promise<User> = this.http.post<User>(environment.API_URL + ':' + environment.PORT + '/neolitic/user/register', {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
            confirmPassword: confirmPassword
        }, {
            withCredentials: true
        }).toPromise();
    
        this.setUser(await response);

        return response;
    }

    public async checkAuthorization(): Promise<boolean> {
        try {
            const response = await this.http.get<User>(environment.API_URL + ':' + environment.PORT + '/neolitic/user/current', {
            withCredentials: true
            }).toPromise();

            this.setUser(response);

            return true;
        } catch (error) {
            return false;
        }
    }

    public setUser(user: User): void {
        this.currentUser = user;
    }

    public getUser(): User {
        return this.currentUser;
    }
}