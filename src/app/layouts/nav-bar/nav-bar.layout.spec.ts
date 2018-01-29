import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavBarLayout } from './nav-bar.layout';
import { ResponsiveLink, TextLink, IconLink } from '../../components';

describe('NavBarLayout', () => {
  let component: NavBarLayout;
  let fixture: ComponentFixture<NavBarLayout>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavBarLayout,
        ResponsiveLink,
        TextLink,
        IconLink
      ],
      imports: [ RouterTestingModule ]
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
