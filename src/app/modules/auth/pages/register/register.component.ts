import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { appName } from '../../../../app.config';
import { IRegister } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: false,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

    public name: string = '';
    public email: string = '';
    public password: string = '';
    public confirmPassword: string = '';
    public terms: boolean = false;
    public error: string = '';
    
    constructor(
        private Title: Title,
        private Auth: AuthService,
        private Router: Router
    ){}

    ngOnInit(): void {
        this.Title.setTitle(`Register - ${appName}`);
    }

    register(){
        if(this.terms == false) {
            this.error = 'Accept the terms and conditions to signup!';
            return;
        }
        if(this.password != this.confirmPassword){
            this.error = 'Passowrd and Confirm Password is not matched!';
            return;
        }

        const user: IRegister = {
            email: this.email,
            name: this.name,
            password: this.password
        }

        this.Auth.register(user)
        .subscribe({
            next: (data) => {
                this.Router.navigate(['/auth/login']);
            },
            error: (error) => {
                this.error = error.error.error;
            }
        });
        
    }
    
}
