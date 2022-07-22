import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAddFormComponent } from './inventory-add-form.component';

describe('InventoryAddFormComponent', () => {
  let component: InventoryAddFormComponent;
  let fixture: ComponentFixture<InventoryAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryAddFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
