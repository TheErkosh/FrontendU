import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/AuthService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  username: string;
  password: string;
  loginFailed: boolean = false; // Track login failure

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (response: any) => {
          const role = response.role;
          this.authService.setLoggedInUser(response);
          this.router.navigate([`/${role}`.toLowerCase()]);
        },
        error => {
          console.error('Login failed:', error);
          this.loginFailed = true; // Set loginFailed to true on unsuccessful login
        }
      );
  }

  onFocus(event: any) {
    event.target.parentNode.parentNode.classList.add('focus');
  }

  onBlur(event: any) {
    const parent = event.target.parentNode.parentNode;
    if (event.target.value === '') {
      parent.classList.remove('focus');
    }
  }

}
