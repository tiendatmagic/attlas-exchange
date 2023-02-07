import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCryptoComponent } from './free-crypto.component';

describe('FreeCryptoComponent', () => {
  let component: FreeCryptoComponent;
  let fixture: ComponentFixture<FreeCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCryptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
