import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/Course';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/AuthService';
localStorage.setItem('userId', '3');

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
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
