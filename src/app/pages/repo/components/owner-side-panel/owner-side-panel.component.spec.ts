import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSidePanelComponent } from './owner-side-panel.component';

describe('OwnerSidePanelComponent', () => {
  let component: OwnerSidePanelComponent;
  let fixture: ComponentFixture<OwnerSidePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OwnerSidePanelComponent]
    });
    fixture = TestBed.createComponent(OwnerSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
