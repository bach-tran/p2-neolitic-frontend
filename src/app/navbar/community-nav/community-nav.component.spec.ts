import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNavComponent } from './community-nav.component';

describe('CommunityNavComponent', () => {
  let component: CommunityNavComponent;
  let fixture: ComponentFixture<CommunityNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
