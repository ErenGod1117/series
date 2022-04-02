import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografiasComponent } from './biografias.component';

describe('BiografiasComponent', () => {
  let component: BiografiasComponent;
  let fixture: ComponentFixture<BiografiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiografiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiografiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
