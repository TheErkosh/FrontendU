import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student/student.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { AttendancetableComponent } from './attendancetable/attendancetable.component';
import { AttendancelistComponent } from './attendancelist/attendancelist.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { TeachernotificationComponent } from './teachernotification/teachernotification.component';
import { StudentNotificationComponent } from './student-notification/student-notification.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'attendance-list/:userId', component:AttendancelistComponent},
  {path:'my-profile', component:MyprofileComponent},
  {path:'change-password', component:ChangepasswordComponent},

  // Student
  {path:'student', component:StudentComponent},
  {path:'users/:userId/courses/:courseId/selected-group', component:CourseComponent},
  {path:'student-notification', component:StudentNotificationComponent},

  // Teacher
  {path:"teacher", component:TeacherComponent},
  {path:"attendance-table", component:AttendancetableComponent},
  {path:"teacher-notification", component:TeachernotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
