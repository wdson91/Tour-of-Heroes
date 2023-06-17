import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { editHeroResolver } from './edit-hero.resolver';

describe('editHeroResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => editHeroResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
