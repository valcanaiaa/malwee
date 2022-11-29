import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalColecaoComponent } from './add-modal-colecao.component';

describe('AddModalColecaoComponent', () => {
  let component: AddModalColecaoComponent;
  let fixture: ComponentFixture<AddModalColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalColecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
