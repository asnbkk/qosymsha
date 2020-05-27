import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.css']
})
export class TutorCardComponent implements OnInit {
  @Input() tutor
  constructor() { }

  ngOnInit(): void {
  }

}
