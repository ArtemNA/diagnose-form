import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosesFormComponent } from './diagnoses-form.component';

describe('DiagnosesFormComponent', () => {
  let component: DiagnosesFormComponent;
  let fixture: ComponentFixture<DiagnosesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosesFormComponent]
    });
    fixture = TestBed.createComponent(DiagnosesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
