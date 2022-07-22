import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationRowComponent } from './confirmation-row.component';

describe('ConfirmationRowComponent', () => {
  let component: ConfirmationRowComponent;
  let fixture: ComponentFixture<ConfirmationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
