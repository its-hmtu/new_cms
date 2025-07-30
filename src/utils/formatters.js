import dayjs from 'dayjs';

export const formatNumber = (value, options = {}) => {
  if (value === null || value === undefined || isNaN(value)) return '0';

  const { decimals = 0, prefix = '', suffix = '', locale = 'en-US' } = options;

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(Number(value));
};

export function formatPeriod(startDate, endDate) {
  return `${dayjs(startDate).format('YYYY/MM/DD')} - ${dayjs(endDate).format('YYYY/MM/DD')}`;
}

export function formatDate(date, format = 'YYYY/MM/DD HH:mm:ss') {
  return dayjs(date).format(format);
}

export function columnSorter(dataIndex, type = 'string') {
  switch (type) {
    case 'number':
      return (a, b) => a[dataIndex] - b[dataIndex];
    case 'date':
      return (a, b) => new Date(a[dataIndex]) - new Date(b[dataIndex]);
    case 'string':
    default:
      return (a, b) =>
        a[dataIndex]?.toString()?.localeCompare(b[dataIndex].toString(), undefined, {
          numeric: true,
          sensitivity: 'base',
        });
  }
}
