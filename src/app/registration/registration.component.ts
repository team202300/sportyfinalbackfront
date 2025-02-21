import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    email: '',
    password: '',
    role: 'USER'
  };

  loading = false;  // to show a loading state during registration
  errorMessage = ''; // to show error messages if any

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.loading = true;  // show loading state
    this.errorMessage = '';  // clear previous error messages

    // Send POST request to your backend to register the user
    this.http.post('http://localhost:8089/rest/auth/register', this.user)
      .subscribe(
        (response) => {
          console.log('Registration successful', response);
          this.loading = false;
          this.router.navigate(['/login']);  // Redirect to login page after successful registration
        },
        (error) => {
          this.loading = false;
          console.error('There was an error!', error);
          this.errorMessage = 'Registration failed, please try again.';  // Show error message
        }
      );
  }
}
