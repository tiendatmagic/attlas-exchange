import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestTradingComponent } from './invest-trading.component';

describe('InvestTradingComponent', () => {
  let component: InvestTradingComponent;
  let fixture: ComponentFixture<InvestTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestTradingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
