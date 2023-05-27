import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEditComponent } from './p-edit.component';

describe('PEditComponent', () => {
  let component: PEditComponent;
  let fixture: ComponentFixture<PEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PEditComponent]
    });
    fixture = TestBed.createComponent(PEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
