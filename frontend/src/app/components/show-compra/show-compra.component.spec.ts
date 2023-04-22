import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompraComponent } from './show-compra.component';

describe('ShowCompraComponent', () => {
  let component: ShowCompraComponent;
  let fixture: ComponentFixture<ShowCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
