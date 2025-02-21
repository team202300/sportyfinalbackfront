import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  loading = false;  // to show loading state during login
  errorMessage = ''; // to show error messages if any

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.loading = true;  
    this.errorMessage = '';  
  
    this.http.post<any>('http://localhost:8089/rest/auth/C', this.loginData)
      .subscribe(
        (response) => {
          console.log('Login successful', response);
          
          // Store token and role in localStorage
          localStorage.setItem('token', response.token);  
          localStorage.setItem('role', response.role);  
  
          this.loading = false;
  
          // Redirect based on role
          if (response.role === 'ADMIN') {
            this.router.navigate(['/back-office']);  
          } else {
            this.router.navigate(['/front-office']);  
          }
        },
        (error) => {
          this.loading = false;
          console.error('Login error', error);
          this.errorMessage = 'Invalid email or password. Please try again.';  
        }
      );
  }
  
}
