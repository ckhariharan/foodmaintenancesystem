import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasecrudopComponent } from './firebasecrudop.component';

describe('FirebasecrudopComponent', () => {
  let component: FirebasecrudopComponent;
  let fixture: ComponentFixture<FirebasecrudopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirebasecrudopComponent]
    });
    fixture = TestBed.createComponent(FirebasecrudopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
