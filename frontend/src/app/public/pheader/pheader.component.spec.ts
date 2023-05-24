import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PheaderComponent } from './pheader.component';

describe('PheaderComponent', () => {
  let component: PheaderComponent;
  let fixture: ComponentFixture<PheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PheaderComponent]
    });
    fixture = TestBed.createComponent(PheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
