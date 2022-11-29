import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalClienteComponent } from './add-modal-cliente.component';

describe('AddModalClienteComponent', () => {
  let component: AddModalClienteComponent;
  let fixture: ComponentFixture<AddModalClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
