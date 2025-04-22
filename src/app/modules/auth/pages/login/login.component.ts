import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from '../../../../app.config';
import { ILogin } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: false,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

    public email: string = '';
    public password: string = '';
    public appName: string = appName;

    public error: string = '';

    constructor(
        private Title: Title,
        private Auth: AuthService,
        private Router: Router
    ){}

    ngOnInit(): void {
        this.Title.setTitle(`Login - ${appName}`);
        const token = !!localStorage.getItem('elancex');
        if(token) this.Router.navigate(['/dashboard']);
    }

    login(){
        const user: ILogin = {
            email: this.email,
            password: this.password
        }

        this.Auth.login(user)
        .subscribe({
            next: (data) => {
                localStorage.setItem('elancex', data.token);
                this.Router.navigate(['/dashboard']);
            },
            error: (error) => {
                this.error = error.error.error;
            }
        });
    }
}
