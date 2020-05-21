import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  faculty: boolean = false
  universities = []
  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
    this.getUniversity()
  }

  getUniversity() {
    this.universityService.getUniversities().subscribe(data => {
      this.universities = data
    })
  }

  onUniversitySelect(id) {
    this.faculty = true
  }
} 
