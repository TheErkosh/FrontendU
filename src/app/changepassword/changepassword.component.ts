import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/AuthService';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  errorMessage: string | null;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group({
      username: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  changePassword(): void {
    if (this.changePasswordForm.valid) {
      const { username, oldPassword, newPassword } = this.changePasswordForm.value;
      this.authService.changePassword(username, oldPassword, newPassword)
        .subscribe(
          () => {
            alert("password didn't change")
            this.errorMessage = null;
            this.changePasswordForm.reset();
          },
          (error) => {
            alert("password changed successully")
            // Error occurred while changing password
            this.errorMessage = error.error.message;
          }
        );
    }
  }


}
