import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinteComponent } from './cliente.component';

describe('ClinteComponent', () => {
  let component: ClinteComponent;
  let fixture: ComponentFixture<ClinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
