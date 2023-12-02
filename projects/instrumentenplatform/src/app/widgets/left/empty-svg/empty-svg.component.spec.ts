import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySvgComponent } from './empty-svg.component';

describe('EmptySvgComponent', () => {
  let component: EmptySvgComponent;
  let fixture: ComponentFixture<EmptySvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptySvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
