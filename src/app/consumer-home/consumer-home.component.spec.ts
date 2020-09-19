import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerHomeComponent } from './consumer-home.component';

describe('ConsumerHomeComponent', () => {
  let component: ConsumerHomeComponent;
  let fixture: ComponentFixture<ConsumerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
