import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForClassStyleComponent } from './for-class-style.component';

describe('ForClassStyleComponent', () => {
  let component: ForClassStyleComponent;
  let fixture: ComponentFixture<ForClassStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForClassStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
