import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontinentComponent } from './addcontinent.component';

describe('AddcontinentComponent', () => {
  let component: AddcontinentComponent;
  let fixture: ComponentFixture<AddcontinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcontinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcontinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
