import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirmodalprodutoComponent } from './excluirmodalproduto.component';

describe('ExcluirmodalprodutoComponent', () => {
  let component: ExcluirmodalprodutoComponent;
  let fixture: ComponentFixture<ExcluirmodalprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirmodalprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirmodalprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
