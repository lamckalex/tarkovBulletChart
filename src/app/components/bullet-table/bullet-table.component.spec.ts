import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletTableComponent } from './bullet-table.component';

describe('BulletTableComponent', () => {
  let component: BulletTableComponent;
  let fixture: ComponentFixture<BulletTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
