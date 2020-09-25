import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerNavComponent } from './consumer-nav.component';

describe('ConsumerNavComponent', () => {
  let component: ConsumerNavComponent;
  let fixture: ComponentFixture<ConsumerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
