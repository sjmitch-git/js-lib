export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)) as T;
  }
  // Handle objects
  const cloned = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
};
