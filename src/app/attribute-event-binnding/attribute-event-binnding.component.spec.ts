import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeEventBinndingComponent } from './attribute-event-binnding.component';

describe('AttributeEventBinndingComponent', () => {
  let component: AttributeEventBinndingComponent;
  let fixture: ComponentFixture<AttributeEventBinndingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeEventBinndingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeEventBinndingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
