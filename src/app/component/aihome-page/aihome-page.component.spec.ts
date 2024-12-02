import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIHomePageComponent } from './aihome-page.component';

describe('AIHomePageComponent', () => {
  let component: AIHomePageComponent;
  let fixture: ComponentFixture<AIHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AIHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
