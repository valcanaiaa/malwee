import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModalProdutoComponent } from './editar-modal-produto.component';

describe('EditarModalProdutoComponent', () => {
  let component: EditarModalProdutoComponent;
  let fixture: ComponentFixture<EditarModalProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarModalProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarModalProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
