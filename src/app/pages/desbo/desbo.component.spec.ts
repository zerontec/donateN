import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesboComponent } from './desbo.component';

describe('DesboComponent', () => {
  let component: DesboComponent;
  let fixture: ComponentFixture<DesboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
