import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModaSubGrupoComponent } from './add-moda-sub-grupo.component';

describe('AddModaSubGrupoComponent', () => {
  let component: AddModaSubGrupoComponent;
  let fixture: ComponentFixture<AddModaSubGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModaSubGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModaSubGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
