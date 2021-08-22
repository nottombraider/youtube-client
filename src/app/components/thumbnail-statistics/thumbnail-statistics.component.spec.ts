import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailStatisticsComponent } from './thumbnail-statistics.component';

describe('ThumbnailStatisticsComponent', () => {
  let component: ThumbnailStatisticsComponent;
  let fixture: ComponentFixture<ThumbnailStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
