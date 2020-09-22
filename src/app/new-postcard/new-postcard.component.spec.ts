import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostcardComponent } from './new-postcard.component';

describe('NewPostcardComponent', () => {
  let component: NewPostcardComponent;
  let fixture: ComponentFixture<NewPostcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
