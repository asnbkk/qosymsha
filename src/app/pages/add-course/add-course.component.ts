import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  faculty: boolean = false
  // universityStatus: boolean = false
  
  universities = []
  faculties = []
  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
    this.getUniversity()
  }

  getUniversity() {
    this.universityService.getUniversities().subscribe(data => {
      this.universities = data
    })
  }

  onUniversitySelect(name) {
    // this.universityStatus = true
    this.faculty = true
    let uni = this.universities.find(o => o.name == name)
    this.faculties = uni.faculties
    console.log(this.faculties)
  }
} 
