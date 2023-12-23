import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APanalysisComponent } from './a-panalysis.component';

describe('APanalysisComponent', () => {
  let component: APanalysisComponent;
  let fixture: ComponentFixture<APanalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APanalysisComponent]
    });
    fixture = TestBed.createComponent(APanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
