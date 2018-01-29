import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesTray } from './technologies-tray.layout';
import { IconLink } from '../../components';

describe('TechnologiesTray', () => {
  let component: TechnologiesTray;
  let fixture: ComponentFixture<TechnologiesTray>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TechnologiesTray
      ]
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
