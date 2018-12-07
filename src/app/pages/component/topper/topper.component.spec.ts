import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopperComponent } from './topper.component';

describe('TopperComponent', () => {
  let component: TopperComponent;
  let fixture: ComponentFixture<TopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
