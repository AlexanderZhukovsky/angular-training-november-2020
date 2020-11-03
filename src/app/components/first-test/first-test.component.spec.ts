import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTestComponent } from './first-test.component';

describe('FirstTestComponentComponent', () => {
  let component: FirstTestComponent;
  let fixture: ComponentFixture<FirstTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
