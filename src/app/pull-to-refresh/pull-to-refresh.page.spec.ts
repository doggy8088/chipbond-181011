import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullToRefreshPage } from './pull-to-refresh.page';

describe('PullToRefreshPage', () => {
  let component: PullToRefreshPage;
  let fixture: ComponentFixture<PullToRefreshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullToRefreshPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullToRefreshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
