import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTradeComponent } from './table-trade.component';

describe('TableTradeComponent', () => {
  let component: TableTradeComponent;
  let fixture: ComponentFixture<TableTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
