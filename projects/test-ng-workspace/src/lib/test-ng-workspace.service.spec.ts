import { TestBed } from '@angular/core/testing';

import { TestNgWorkspaceService } from './test-ng-workspace.service';

describe('TestNgWorkspaceService', () => {
  let service: TestNgWorkspaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestNgWorkspaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
