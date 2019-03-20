import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotPropertiesComponent } from './hot-properties.component';

describe('HotPropertiesComponent', () => {
  let component: HotPropertiesComponent;
  let fixture: ComponentFixture<HotPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
