import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachernotificationComponent } from './teachernotification.component';

describe('TeachernotificationComponent', () => {
  let component: TeachernotificationComponent;
  let fixture: ComponentFixture<TeachernotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachernotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachernotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
