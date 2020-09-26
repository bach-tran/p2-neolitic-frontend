import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcommunityNavComponent } from './newcommunity-nav.component';

describe('NewcommunityNavComponent', () => {
  let component: NewcommunityNavComponent;
  let fixture: ComponentFixture<NewcommunityNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcommunityNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcommunityNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
