import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/AuthService';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent implements OnInit {
  loggedInUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Fetch user data when the component initializes
    this.loggedInUser = this.authService.getLoggedInUser();
  }

}
