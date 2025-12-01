import { TestBed } from '@angular/core/testing';

import { Embauche } from './embauche';

describe('Embauche', () => {
  let service: Embauche;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Embauche);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
