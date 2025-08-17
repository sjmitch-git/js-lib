export const randomColor = (format: 'hex' | 'rgb' | 'hsl' | undefined = 'hex'): string => {
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

export const randomHex = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const randomHsl = (): string => {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);
  return `hsl(${h},${s}%,${l}%)`;
};

export const randomRgb = (): string => {
  return `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`;
};
