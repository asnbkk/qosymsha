import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPublicComponent } from './settings-public.component';

describe('SettingsPublicComponent', () => {
  let component: SettingsPublicComponent;
  let fixture: ComponentFixture<SettingsPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
