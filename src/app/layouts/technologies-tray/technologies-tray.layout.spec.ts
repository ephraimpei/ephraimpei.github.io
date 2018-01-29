import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TechnologiesTray } from './technologies-tray.layout';
import { TechnologyIcon, IconLink } from '../../components';

describe('TechnologiesTray', () => {
  let component: TechnologiesTray;
  let fixture: ComponentFixture<TechnologiesTray>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TechnologiesTray,
        TechnologyIcon,
        IconLink,
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesTray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
