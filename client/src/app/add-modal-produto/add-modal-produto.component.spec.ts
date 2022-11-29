import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalProdutoComponent } from './add-modal-produto.component';

describe('AddModalProdutoComponent', () => {
  let component: AddModalProdutoComponent;
  let fixture: ComponentFixture<AddModalProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
