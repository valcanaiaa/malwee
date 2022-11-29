import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalGrupoComponent } from './add-modal-grupo.component';

describe('AddModalGrupoComponent', () => {
  let component: AddModalGrupoComponent;
  let fixture: ComponentFixture<AddModalGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
