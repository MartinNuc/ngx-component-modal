import { TestBed, inject } from '@angular/core/testing';

import { NgxComponentModalService } from './ngx-component-modal-lib.service';

describe('NgxComponentModalLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxComponentModalService]
    });
  });

  it('should be created', inject([NgxComponentModalService], (service: NgxComponentModalService) => {
    expect(service).toBeTruthy();
  }));
});
