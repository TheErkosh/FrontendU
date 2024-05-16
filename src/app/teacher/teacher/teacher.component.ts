import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/AuthService';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {
  courses: any[];
  userId: number;
  
  constructor(private userService: AuthService) { }

  ngOnInit() {
    // Retrieve userId from localStorage
    const userIdString = localStorage.getItem('userId');
    if (!userIdString) {
      // Handle if userId is not found in localStorage
      console.error('User ID not found in localStorage');
      return;
    }

    // Parse userIdString to number
    this.userId = parseInt(userIdString, 10);

    // Fetch courses selected by user
    this.userService.getCoursesSelectedByUser(this.userId).subscribe(
      (courses: any[]) => {
        this.courses = courses;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
}
