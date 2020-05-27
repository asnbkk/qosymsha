import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';
import { CourseService } from 'src/app/services/course.service';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  // faculty: boolean = false
  // course: boolean = false
  // tutor: boolean = false
// 
  // selectedCardName
  // selectedCourseName
    // 
  // universities = []
  // faculties = []
  // courses = []
  // tutors = []
  // constructor(
    // private universityService: UniversityService,
    // private courseService: CourseService,
    // private tutorService: TutorService
    // ) { }
// 
  // ngOnInit(): void {
    // this.getUniversity()
  // }
// 
  // getUniversity() {
    // this.universityService.getUniversities().subscribe(data => {
      // this.universities = data
    // })
  // }
// 
  // onUniversitySelect(name) {
    // this.faculty = true
    // let uni = this.universities.find(o => o.name == name)
    // this.faculties = uni.faculties
    // console.log(this.faculties)
  // }
// 
  // onFacultySelect(name) {
    // this.course = true
    // this.selectedCardName = name
// 
    // this.courseService.getCourses(name).subscribe(data => {
      // this.courses = data
    // })
  // }

  // onCourseSelect(name) {
  //   this.selectedCourseName = name
  //   this.tutor = true
  //   this.tutorService.getByCourse(name).subscribe(data => {
  //     this.tutors = data
  //   })
  // }
  universities = [
    {"name": "Казахстанско-Британский технический университет"},
    {"name": "Назарбаев Университет"}
  ]

  tutors = [
    {
      "name": "makpal", 
      "status": "chill out - have fun", 
      "position": "Студент КБТУ", 
      "studentAmount": "1",
      "rating": "90",
      "bio": "Господа, внедрение современных методик требует от нас анализа новых предложений. Как принято считать, базовые сценарии поведения пользователей лишь добавляют."
    },
    {
      "name": "shmakpal", 
      "status": "chill out - have have", 
      "position": "Студент ЧБТУ", 
      "studentAmount": "4",
      "rating": "75",
      "bio": "Господа, внедрение современных методик требует от нас анализа новых предложений."
    },
    {
      "name": "shmakpal", 
      "status": "chill out - have have", 
      "position": "Студент ЧБТУ", 
      "studentAmount": "10",
      "rating": "75",
      "bio": "Господа, внедрение современных методик требует от нас анализа новых предложений."
    }
  ]
  
  ngOnInit() {

  }
} 
