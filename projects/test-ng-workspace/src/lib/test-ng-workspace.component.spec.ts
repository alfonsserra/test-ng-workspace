import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgWorkspaceComponent } from './test-ng-workspace.component';

describe('TestNgWorkspaceComponent', () => {
  let component: TestNgWorkspaceComponent;
  let fixture: ComponentFixture<TestNgWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
