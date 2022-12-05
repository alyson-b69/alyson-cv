import { computeIsEven } from './utils';

describe('utils computeIsEven Unit Test Suites', () => {
  it('should return true', () => expect(computeIsEven(2)).toEqual(true));
  it('should return false', () => expect(computeIsEven(1)).toEqual(false));
});
