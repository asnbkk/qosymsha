import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.css']
})
export class UniversityCardComponent implements OnInit {
  @Input() university
  @Input() status = true
  constructor() { }

  ngOnInit(): void {
  }

}
