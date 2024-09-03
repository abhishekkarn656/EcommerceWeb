import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserStorageService } from '../Services/auth/storage/user-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Updated to 'styleUrls'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router // Corrected import
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    const username = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;
    this.authService.login(username, password).subscribe(
      (resp:any) => {
        // console.log("Token",UserStorageService.getToken);
        // console.log("User",UserStorageService.getUser);
        // console.log("Is Admin LOgged in",UserStorageService.isAdminLoggedIn);
        // console.log("Is User LOgged in",UserStorageService.isCustomerLoggedIn);
        if (UserStorageService.isAdminLoggedIn()) {
          console.log("hhhhhhhhhhhhhhhhhhhhhhh");

          this.router.navigateByUrl('/admin/dashboard');
          
          
        }
        else if(UserStorageService.isCustomerLoggedIn()){
          this.router.navigate(['/customer/dashboard']);
        }
        // this.snackbar.open('Login Success', 'ok', { duration: 5000 });
        console.log(resp);
       // this.router.navigate(['signup']);
        // Navigate to another route if needed
        
      },
      (error:any) => {
        this.snackbar.open('Bad Credentials', 'Error', { duration: 5000 });
        console.log(error);
        
      }
    );
  }
}
