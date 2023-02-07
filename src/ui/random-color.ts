export const randomColor = (format: string) => {
  switch (format) {
    case "hex":
      return randomHex();
    case "rgb":
      return randomRgb();
    case "hsl":
      return randomHsl();
    default:
      return randomHex();
  }
};

export const randomHex = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const randomHsl = () => {
  return "hsl(" + Math.floor(Math.random() * 360) + ", 50%, 50%)";
};

export const randomRgb = () => {
  return `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`;
};
