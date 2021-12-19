import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonNavigatorComponent } from './person-navigator.component';

describe('PersonNavigatorComponent', () => {
  let component: PersonNavigatorComponent;
  let fixture: ComponentFixture<PersonNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
