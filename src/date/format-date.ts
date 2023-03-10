export const formatDate = (date: number, locale: string, format?: string) => {
  const getOptions = (format?: string): Intl.DateTimeFormatOptions => {
    switch (format) {
      case "day dd/mm/yyyy":
        return {
          weekday: "long",
          year: "numeric",
          month: "numeric",
          day: "numeric",
        };
      case "long":
      case "day dd month yyyy":
        return {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
      case "short":
      case "dd month yyyy":
        return {
          year: "numeric",
          month: "long",
          day: "numeric",
        };
      case "time":
        return {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        };
      case "dd/mm/yyyy":
      default:
        return {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        };
    }
  };
  const formatter = Intl.DateTimeFormat(locale, getOptions(format));
  return formatter.format(date);
};
