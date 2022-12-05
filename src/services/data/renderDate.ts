import { DateTime } from 'luxon';

export const getDateTimeNow = () => {
  return DateTime.now();
};

export const getDateTimeFromString = (date: string) => {
  return DateTime.fromFormat(date, 'dd/MM/yyyy');
};

export const computePeriod = (start: string, end: string | null) => {
  if (!end || !start) {
    return '';
  }

  const startDate = getDateTimeFromString(start);
  const endDate =
    end === 'maintenant' ? getDateTimeNow() : getDateTimeFromString(end);

  if (!startDate.isValid || !endDate.isValid) {
    return 'Format de date invalide';
  }

  const finalDate = { year: 0, months: 0 };
  const deltaYears = endDate.diff(startDate, 'years').years;
  if (deltaYears > 1) {
    finalDate.year = Math.floor(deltaYears);
  }
  const deltaMonths = endDate.diff(startDate, 'months').months;
  finalDate.months = Math.round(deltaMonths - finalDate.year * 12);

  let stringToRender = '';
  if (finalDate.year > 0) {
    stringToRender += finalDate.year + ' an' + (finalDate.year > 1 ? 's' : '');
  }
  if (finalDate.months > 0) {
    stringToRender +=
      (finalDate.year > 0 ? ' et ' : ' ') + finalDate.months + ' mois';
  }

  return stringToRender;
};
