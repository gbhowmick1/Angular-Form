import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRefVarFormComponent } from './temp-ref-var-form.component';

describe('TempRefVarFormComponent', () => {
  let component: TempRefVarFormComponent;
  let fixture: ComponentFixture<TempRefVarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempRefVarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempRefVarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
