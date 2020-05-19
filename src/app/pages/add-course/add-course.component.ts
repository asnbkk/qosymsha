import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  universities = [
    {"img": "assets/img/1.jpg", "name": "Казахстанско-Британский технический университет", "city": "Алматы"},
    {"img": "assets/img/2.jpg", "name": "Назарбаев Университет", "city": "Астана"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
