import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  faculty: boolean = false
  course: boolean = false

  selectedCardName
    
  universities = []
  faculties = []
  courses = []
  constructor(
    private universityService: UniversityService,
    private courseService: CourseService
    ) { }

  ngOnInit(): void {
    this.getUniversity()
  }

  getUniversity() {
    this.universityService.getUniversities().subscribe(data => {
      this.universities = data
    })
  }

  onUniversitySelect(name) {
    this.faculty = true
    let uni = this.universities.find(o => o.name == name)
    this.faculties = uni.faculties
    console.log(this.faculties)
  }

  onFacultySelect(name) {
    this.course = true
    this.selectedCardName = name

    this.courseService.getCourses(name).subscribe(data => {
      this.courses = data
      console.log(this.courses, "ello")
    })
  }

  onCourseSelect(name) {

  }
} 
