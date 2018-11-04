import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaPhotosComponent } from './nasa-photos.component';

describe('NasaPhotosComponent', () => {
  let component: NasaPhotosComponent;
  let fixture: ComponentFixture<NasaPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
