import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalUsuarioComponent } from './add-modal-usuario.component';

describe('AddModalUsuarioComponent', () => {
  let component: AddModalUsuarioComponent;
  let fixture: ComponentFixture<AddModalUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
