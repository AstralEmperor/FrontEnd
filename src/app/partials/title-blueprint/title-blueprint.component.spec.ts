import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBlueprintComponent } from './title-blueprint.component';

describe('TitleBlueprintComponent', () => {
  let component: TitleBlueprintComponent;
  let fixture: ComponentFixture<TitleBlueprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleBlueprintComponent]
    });
    fixture = TestBed.createComponent(TitleBlueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
