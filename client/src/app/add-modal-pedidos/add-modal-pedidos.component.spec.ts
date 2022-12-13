import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalPedidosComponent } from './add-modal-pedidos.component';

describe('AddModalPedidosComponent', () => {
  let component: AddModalPedidosComponent;
  let fixture: ComponentFixture<AddModalPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
