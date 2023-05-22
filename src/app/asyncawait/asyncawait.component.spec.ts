import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncawaitComponent } from './asyncawait.component';

describe('AsyncawaitComponent', () => {
  let component: AsyncawaitComponent;
  let fixture: ComponentFixture<AsyncawaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncawaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncawaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
