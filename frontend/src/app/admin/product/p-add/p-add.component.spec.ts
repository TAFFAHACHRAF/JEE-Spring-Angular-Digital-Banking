import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAddComponent } from './p-add.component';

describe('PAddComponent', () => {
  let component: PAddComponent;
  let fixture: ComponentFixture<PAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PAddComponent]
    });
    fixture = TestBed.createComponent(PAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
