import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthedNavComponent } from './unauthed-nav.component';

describe('UnauthedNavComponent', () => {
  let component: UnauthedNavComponent;
  let fixture: ComponentFixture<UnauthedNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthedNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
