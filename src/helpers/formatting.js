export const numberToHumanReadableString = (num, locale = 'en-US') =>
    num ? Intl.NumberFormat(locale).format(num) : 'missing data';
