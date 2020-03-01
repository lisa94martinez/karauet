import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechoutComponent } from './chechout.component';

describe('ChechoutComponent', () => {
  let component: ChechoutComponent;
  let fixture: ComponentFixture<ChechoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
