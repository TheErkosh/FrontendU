import { Component } from '@angular/core';
import { User } from '../../model/User';
import { AuthService } from '../service/AuthService';
import { AttendanceDTO } from '../../model/AttendanceDTO';

@Component({
  selector: 'app-attendancetable',
  templateUrl: './attendancetable.component.html',
  styleUrl: './attendancetable.component.css'
})
export class AttendancetableComponent {

  students: User[] = [];
  selectedDate: string;
  selectedDay: string;
  selectedHour: string;
  selectedWeeks: string; // Add the selectedWeeks property
  selectedStatuses: { [key: number]: string } = {};

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.userService.getStudents().subscribe(data => {
      this.students = data;
    });
  }


  addAttendance(): void {
    this.students.forEach(student => {
      const attendance: AttendanceDTO = {
        userId: student.id,
        date: this.selectedDate,
        hours: this.selectedHour,
        status: this.selectedStatuses[student.id] || 'PRESENT',
        days: this.selectedDay,
        weeks: this.selectedWeeks // Assign selected weeks
      };
      this.userService.addAttendance(attendance).subscribe(() => {
        console.log('Attendance added successfully');
      }, error => {
        console.error('Error adding attendance:', error);
      });
    });
  }
}