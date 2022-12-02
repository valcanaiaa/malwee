import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirModalClienteComponent } from './excluir-modal-cliente.component';

describe('ExcluirModalClienteComponent', () => {
  let component: ExcluirModalClienteComponent;
  let fixture: ComponentFixture<ExcluirModalClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirModalClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirModalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
