import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUserComponent } from './products-user.component';

describe('ProductsUserComponent', () => {
  let component: ProductsUserComponent;
  let fixture: ComponentFixture<ProductsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
