import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../../model/User';
import { AttendanceDTO } from '../../model/AttendanceDTO';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  private _loggedInUser: any;
  private authToken: string | null = null;
  
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/login', { username, password });
  }


  getCoursesSelectedByUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/users/${userId}/courses`);
  }

  getSelectedGroupForCourse(userId: number, courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/users/${userId}/courses/${courseId}/selected-group`);
  }

  // markAttendance(formData: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiServerUrl}/mark`, formData);
  // }

  getStudents(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/students`);
  }

  addAttendance(attendance: AttendanceDTO): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/mark`, attendance);
  }

  getAttendanceByUserId(userId: number): Observable<AttendanceDTO[]> {
    return this.http.get<AttendanceDTO[]>(`${this.apiServerUrl}/attendance/${userId}`);
  }


  isAuthenticated(): boolean {
    return !!this._loggedInUser; // Returns true if user is logged in
  }

  getUserRole(): string {
    return this._loggedInUser ? this._loggedInUser.role : null; // Returns user's role or null if not logged in
  }

  setLoggedInUser(user: any): void {
    this._loggedInUser = user;
    this.fetchUserData(); // Fetch user data after successful login
  }

  fetchUserData(): void {
    // Fetch additional user data using the authentication token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
    this.http.get<any>(`${this.apiServerUrl}/user`, { headers }).subscribe(
      (userData) => {
        // Update the logged-in user with additional data
        this._loggedInUser = userData;
      },
      (error) => {
        console.error('Failed to fetch user data:', error);
      }
    );
  }

  setAuthToken(token: string): void {
    this.authToken = token;
  }

  // Method to retrieve the authentication token
  getAuthToken(): string | null {
    return this.authToken;
  }

  // Method to retrieve the logged-in user data
  getLoggedInUser(): any {
    return this._loggedInUser;
  }

  changePassword(username: string, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/change-password`, { username, oldPassword, newPassword });
  }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiServerUrl}/user`);
  // }



  


  // getCoursesSelectedByUser(userId: number): Observable<Course[]> {
  //   return this.http.get<Course[]>(`http://localhost:8080/users/${userId}/courses`);
  // }
  

}
