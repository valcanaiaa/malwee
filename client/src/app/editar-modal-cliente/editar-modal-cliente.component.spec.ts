import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModalClienteComponent } from './editar-modal-cliente.component';

describe('EditarModalClienteComponent', () => {
  let component: EditarModalClienteComponent;
  let fixture: ComponentFixture<EditarModalClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarModalClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarModalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
