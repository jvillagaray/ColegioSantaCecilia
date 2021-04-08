import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertimeComponent } from './registertime.component';

describe('RegistertimeComponent', () => {
  let component: RegistertimeComponent;
  let fixture: ComponentFixture<RegistertimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistertimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
