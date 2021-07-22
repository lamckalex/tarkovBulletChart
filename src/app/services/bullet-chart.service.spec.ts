import { TestBed } from '@angular/core/testing';

import { BulletChartService } from './bullet-chart.service';

describe('BulletChartService', () => {
  let service: BulletChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
