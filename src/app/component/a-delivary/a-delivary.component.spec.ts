import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADelivaryComponent } from './a-delivary.component';

describe('ADelivaryComponent', () => {
  let component: ADelivaryComponent;
  let fixture: ComponentFixture<ADelivaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ADelivaryComponent]
    });
    fixture = TestBed.createComponent(ADelivaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
