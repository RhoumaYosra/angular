import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YosraComponent } from './yosra.component';

describe('YosraComponent', () => {
  let component: YosraComponent;
  let fixture: ComponentFixture<YosraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YosraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YosraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
