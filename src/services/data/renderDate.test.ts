import { computePeriod, getDateTimeNow } from './renderDate';
import { getDateTimeFromString } from './renderDate';
import { DateTime } from 'luxon';

describe('computePeriod Unit Test Suites', () => {
  it('should return empty string if no start or not end', () =>
    expect(computePeriod('', '05/12/2022')).toEqual(''));

  it('should return "Format de date invalide" if start or end is not valid', () =>
    expect(computePeriod('no', 'valid')).toEqual('Format de date invalide'));

  it('should return 7 mois', () =>
    expect(computePeriod('28/05/2020', '19/12/2020')).toEqual(' 7 mois'));
});

describe('getDateTimeFromString Unit Test Suites', () => {

  it('should be instance of DateTime', () =>
    expect(getDateTimeFromString('05/12/2022')).toBeInstanceOf(DateTime));

  it('should return DateTime', () =>
    expect(getDateTimeFromString('05/12/2022')).toEqual(
      DateTime.fromFormat('05/12/2022', 'dd/MM/yyyy'),
    ));
});

describe('getDateTimeNow Unit Test Suites', () => {
  it('should be instance of DateTime', () =>
    expect(getDateTimeNow()).toBeInstanceOf(DateTime));
});
