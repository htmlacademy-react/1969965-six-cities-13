import dayjs from 'dayjs';

export function formatDate(date: string, format: string) {
  if (date === '') {
    return '';
  }

  return dayjs(date).format(format);
}

