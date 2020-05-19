import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalButtonComponent } from './personal-button.component';

describe('PersonalButtonComponent', () => {
  let component: PersonalButtonComponent;
  let fixture: ComponentFixture<PersonalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
