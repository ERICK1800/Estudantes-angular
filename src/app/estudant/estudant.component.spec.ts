import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudantComponent } from './estudant.component';

describe('EstudantComponent', () => {
  let component: EstudantComponent;
  let fixture: ComponentFixture<EstudantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
