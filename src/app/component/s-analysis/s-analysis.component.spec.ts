import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAnalysisComponent } from './s-analysis.component';

describe('SAnalysisComponent', () => {
  let component: SAnalysisComponent;
  let fixture: ComponentFixture<SAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SAnalysisComponent]
    });
    fixture = TestBed.createComponent(SAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
