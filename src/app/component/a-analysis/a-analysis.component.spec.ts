import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAnalysisComponent } from './a-analysis.component';

describe('AAnalysisComponent', () => {
  let component: AAnalysisComponent;
  let fixture: ComponentFixture<AAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AAnalysisComponent]
    });
    fixture = TestBed.createComponent(AAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
