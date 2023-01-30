import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActeurComponent } from './list-acteur.component';

describe('ListActeurComponent', () => {
  let component: ListActeurComponent;
  let fixture: ComponentFixture<ListActeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
