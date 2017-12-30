import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLayout } from './nav-bar.layout';

describe('NavBarLayout', () => {
  let component: NavBarLayout;
  let fixture: ComponentFixture<NavBarLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarLayout ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
