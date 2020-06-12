export function pxNumber(value?: number, second = '') {
  if (!value) {
    return second;
  }

  return `${value}px`;
}

export function margin(value?: number | 'auto') {
  if (value === 'auto') {
    return 'auto';
  }

  return pxNumber(value);
}
