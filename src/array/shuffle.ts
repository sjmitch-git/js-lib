export const shuffleArray = (arr: any[]) => {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    Math.round(Math.random()) ? newArr.push(arr[i]) : newArr.unshift(arr[i]);
  }
  return newArr;
};
