import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student/student.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { AuthInterceptor } from './service/AuthInterceptor';
import { CourseComponent } from './course/course.component';
import { AttendancetableComponent } from './attendancetable/attendancetable.component';
import { AttendancelistComponent } from './attendancelist/attendancelist.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { TeachernotificationComponent } from './teachernotification/teachernotification.component';
import { StudentNotificationComponent } from './student-notification/student-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    TeacherComponent,
    CourseComponent,
    AttendancetableComponent,
    AttendancelistComponent,
    MyprofileComponent,
    ChangepasswordComponent,
    TeachernotificationComponent,
    StudentNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    RouterOutlet,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
