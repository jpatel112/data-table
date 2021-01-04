import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedInfoComponent } from './received-info.component';

describe('ReceivedInfoComponent', () => {
  let component: ReceivedInfoComponent;
  let fixture: ComponentFixture<ReceivedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
