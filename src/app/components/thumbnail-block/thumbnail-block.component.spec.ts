import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailBlockComponent } from './thumbnail-block.component';

describe('ThumbnailBlockComponent', () => {
  let component: ThumbnailBlockComponent;
  let fixture: ComponentFixture<ThumbnailBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
