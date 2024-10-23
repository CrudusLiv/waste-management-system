import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router'; // Import Router for navigation
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ 
    MaterialModule, 
    ReactiveFormsModule,
    RouterLink,
        
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; // Variable to hold error messages

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(response => {
        console.log('Login successful', response);
        // Navigate to dashboard or any other route
        this.router.navigate(['/dashboard']); // Adjust the route as needed
      }, error => {
        console.log('Login error', error);
        this.errorMessage = 'Login failed. Please check your credentials and try again.'; // Set error message
      });
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.'; // Validation feedback
    }
  }
  // Boolean to toggle between login and signup forms
  isLoginMode: boolean = true;

  // Method to toggle form mode
  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  
}
