import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AheaderComponent } from './aheader.component';

describe('AheaderComponent', () => {
  let component: AheaderComponent;
  let fixture: ComponentFixture<AheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AheaderComponent]
    });
    fixture = TestBed.createComponent(AheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
