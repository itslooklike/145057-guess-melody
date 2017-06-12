export const getRandomTrueFalse = () => {
  return Math.round(Math.random());
};

export const getRandomValuesFromArray = (arr, amount = 3) => {
  const result = [];

  while (result.length < amount) {
    const randomValue = Math.floor(Math.random() * arr.length);
    const currentValue = arr[randomValue];

    if (!result.includes(currentValue)) {
      result.push(currentValue);
    }
  }

  return result;
};
