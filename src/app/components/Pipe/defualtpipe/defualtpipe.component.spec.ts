import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefualtpipeComponent } from './defualtpipe.component';

describe('DefualtpipeComponent', () => {
  let component: DefualtpipeComponent;
  let fixture: ComponentFixture<DefualtpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefualtpipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefualtpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
