import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiagnoseModalComponent } from './edit-diagnose-modal.component';

describe('EditDiagnoseModalComponent', () => {
  let component: EditDiagnoseModalComponent;
  let fixture: ComponentFixture<EditDiagnoseModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDiagnoseModalComponent]
    });
    fixture = TestBed.createComponent(EditDiagnoseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
