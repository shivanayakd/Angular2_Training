import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraydataComponent } from './arraydata.component';

describe('ArraydataComponent', () => {
  let component: ArraydataComponent;
  let fixture: ComponentFixture<ArraydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
