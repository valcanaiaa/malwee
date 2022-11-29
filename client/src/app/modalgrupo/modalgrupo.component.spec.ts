import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalgrupoComponent } from './modalgrupo.component';

describe('ModalgrupoComponent', () => {
  let component: ModalgrupoComponent;
  let fixture: ComponentFixture<ModalgrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalgrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
