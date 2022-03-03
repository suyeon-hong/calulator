export const numberFommatting = (number) => {
  return number.toLocaleString('KR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const removeComma = (string) => {
  return string.replaceAll(',', '');
};

export const checkValidation = (userInput) => {
  if (userInput === '' || userInput < 0 || userInput > 10000) {
    return false;
  } else {
    return true;
  }
};
