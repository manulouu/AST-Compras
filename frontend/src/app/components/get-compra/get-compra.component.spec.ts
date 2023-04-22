import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompraComponent } from './get-compra.component';

describe('GetCompraComponent', () => {
  let component: GetCompraComponent;
  let fixture: ComponentFixture<GetCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
