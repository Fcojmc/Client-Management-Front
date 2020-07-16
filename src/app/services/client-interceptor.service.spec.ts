import { TestBed } from '@angular/core/testing';

import { ClientInterceptorService } from './client-interceptor.service';

describe('ClientInterceptorService', () => {
  let service: ClientInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
