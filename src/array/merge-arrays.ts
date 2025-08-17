export const mergeArrays = (arrs: any[], removeDuplicates: boolean = false) => {
  if (removeDuplicates) return Array.from(new Set(arrs.flat()));
  return arrs.flat();
};
