import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecicloComponent } from './detalleciclo.component';

describe('DetallecicloComponent', () => {
  let component: DetallecicloComponent;
  let fixture: ComponentFixture<DetallecicloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallecicloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecicloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
