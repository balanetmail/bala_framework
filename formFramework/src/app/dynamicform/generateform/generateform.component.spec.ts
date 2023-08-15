import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateformComponent } from './generateform.component';

describe('GenerateformComponent', () => {
  let component: GenerateformComponent;
  let fixture: ComponentFixture<GenerateformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateformComponent]
    });
    fixture = TestBed.createComponent(GenerateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
