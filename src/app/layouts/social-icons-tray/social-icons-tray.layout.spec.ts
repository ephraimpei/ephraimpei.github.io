import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RouterModule } from '@angular/router';

import { SocialIconsTray } from './social-icons-tray.layout';
import { IconLink } from '../../components';
import { appRoutes } from '../../routes';

describe('SocialIconsTray', () => {
  let component: SocialIconsTray;
  let fixture: ComponentFixture<SocialIconsTray>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocialIconsTray,
        IconLink
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialIconsTray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
