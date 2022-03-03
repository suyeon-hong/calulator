export const numberFommatting = (number) => {
  return number.toLocaleString('KR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const removeComma = (string) => {
  return string.replaceAll(',', '');
};
