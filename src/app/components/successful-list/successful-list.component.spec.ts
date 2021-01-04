import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulListComponent } from './successful-list.component';

describe('SuccessfulListComponent', () => {
  let component: SuccessfulListComponent;
  let fixture: ComponentFixture<SuccessfulListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
