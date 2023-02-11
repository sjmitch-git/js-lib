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
