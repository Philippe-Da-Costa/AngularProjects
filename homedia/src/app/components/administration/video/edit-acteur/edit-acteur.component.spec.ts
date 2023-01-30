import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActeurComponent } from './edit-acteur.component';

describe('EditActeurComponent', () => {
  let component: EditActeurComponent;
  let fixture: ComponentFixture<EditActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditActeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
