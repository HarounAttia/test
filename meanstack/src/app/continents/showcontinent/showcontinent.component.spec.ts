import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcontinentComponent } from './showcontinent.component';

describe('ShowcontinentComponent', () => {
  let component: ShowcontinentComponent;
  let fixture: ComponentFixture<ShowcontinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcontinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcontinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
