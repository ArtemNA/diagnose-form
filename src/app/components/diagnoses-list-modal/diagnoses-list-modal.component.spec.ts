import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosesListModalComponent } from './diagnoses-list-modal.component';

describe('DiagnosesListModalComponent', () => {
  let component: DiagnosesListModalComponent;
  let fixture: ComponentFixture<DiagnosesListModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosesListModalComponent]
    });
    fixture = TestBed.createComponent(DiagnosesListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
