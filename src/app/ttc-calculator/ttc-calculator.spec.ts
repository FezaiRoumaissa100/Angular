import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtcCalculator } from './ttc-calculator';

describe('TtcCalculator', () => {
  let component: TtcCalculator;
  let fixture: ComponentFixture<TtcCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TtcCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtcCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
