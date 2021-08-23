import { TestBed } from '@angular/core/testing';

import { TodoappsService } from './todoapps.service';

describe('TodoappsService', () => {
  let service: TodoappsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoappsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
