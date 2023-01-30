import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediasComponent } from './add-medias.component';

describe('AddMediasComponent', () => {
  let component: AddMediasComponent;
  let fixture: ComponentFixture<AddMediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMediasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
