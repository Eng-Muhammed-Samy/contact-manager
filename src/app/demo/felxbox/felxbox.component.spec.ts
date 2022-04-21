import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelxboxComponent } from './felxbox.component';

describe('FelxboxComponent', () => {
  let component: FelxboxComponent;
  let fixture: ComponentFixture<FelxboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelxboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FelxboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
