import { Component, OnInit } from '@angular/core';
import { AttendanceDTO } from '../../model/AttendanceDTO';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/AuthService';

@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.component.html',
  styleUrl: './attendancelist.component.css'
})
export class AttendancelistComponent implements OnInit {

  userId: number;
  attendanceList: AttendanceDTO[];
  

  constructor(private route: ActivatedRoute, private attendanceService: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.loadAttendanceData();
    });
  }

  loadAttendanceData(): void {
    this.attendanceService.getAttendanceByUserId(this.userId).subscribe(data => {
      this.attendanceList = data;
    });
  }

  getStatusStyle(status: string): any {
    let style = {};
    switch (status) {
      case 'PRESENT':
        style = { 'color': 'green' };
        break;
      case 'ABSENT':
        style = { 'color': 'red' };
        break;
      case 'PERMITTED':
        style = { 'color': 'gray' };
        break;
      case 'MANUAL':
        style = { 'color': 'yellow' };
        break;
      default:
        style = {};
    }
    return style;
  }
}
