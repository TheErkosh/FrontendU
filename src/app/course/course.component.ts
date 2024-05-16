import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/AuthService';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  userId: number;
  courseId: number;
  selectedGroup: any;
  loading: boolean;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: AuthService
  ) {}

  ngOnInit() {
    const userIdString = localStorage.getItem('userId');
    if (!userIdString) {
      console.error('User ID not found in localStorage');
      // Handle this case appropriately, e.g., redirect to login page
      return;
    }

    this.userId = parseInt(userIdString, 10);

    this.route.params.subscribe(params => {
      const courseIdParam = +params['courseId']; // Extract courseId from route parameters
      if (!isNaN(courseIdParam)) {
        this.courseId = courseIdParam;
        this.loadSelectedGroup();
      } else {
        console.error('Invalid courseId:', params['courseId']);
        // Handle this case appropriately, e.g., display an error message
      }
    });
  }

  loadSelectedGroup() {
    this.loading = true;
    this.courseService.getSelectedGroupForCourse(this.userId, this.courseId).subscribe(
      (group: any) => {
        this.selectedGroup = group;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching selected group:', error);
        this.error = 'Error fetching selected group. Please try again later.';
        this.loading = false;
      }
    );
  }
}
