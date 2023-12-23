import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewstaffComponent } from './addnewstaff.component';

describe('AddnewstaffComponent', () => {
  let component: AddnewstaffComponent;
  let fixture: ComponentFixture<AddnewstaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewstaffComponent]
    });
    fixture = TestBed.createComponent(AddnewstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
