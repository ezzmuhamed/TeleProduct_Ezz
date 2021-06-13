import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestraionComponent } from './regestraion.component';

describe('RegestraionComponent', () => {
  let component: RegestraionComponent;
  let fixture: ComponentFixture<RegestraionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestraionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
