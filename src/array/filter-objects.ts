export const filterObjects = (
  arr: any[],
  key: string,
  value?: string,
  key2?: string
) => {
  let newArray = arr
    .filter(function (item) {
      if (!value) return item[key];
      else return item[key] === value;
    })
    .map(function (item) {
      if (!value) return item[key];
      if (key2) return item[key2];
      return item;
    });
  return newArray;
};

export const filterObjectsByNumber = (
  arr: any[],
  key: string,
  value: number,
  operator?: string
) => {
  let newArray = arr.filter(function (item) {
    switch (operator) {
      case ">":
        return item[key] > value;
      case ">=":
        return item[key] >= value;
      case "<":
        return item[key] < value;
      case "<=":
        return item[key] <= value;
      case "=":
      default:
        return item[key] === value;
    }
  });
  return newArray;
};

export const removeObjects = (
  arr: any[],
  key: string,
  value: string
) => {
  let newArray = arr.filter(function (item) {
    return item[key] !== value;
  });
  return newArray;
};
