import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcountriesComponent } from './showcountries.component';

describe('ShowcountriesComponent', () => {
  let component: ShowcountriesComponent;
  let fixture: ComponentFixture<ShowcountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
