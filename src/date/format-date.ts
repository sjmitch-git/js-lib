export const formatDate = (date: Date | number, locale: string, format?: string) => {
  const getOptions = (format?: string): Intl.DateTimeFormatOptions => {
    switch (format) {
      case "day dd/mm/yyyy":
        return {
          weekday: "long",
          year: "numeric",
          month: "2-digit",
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
          month: "2-digit",
          day: "2-digit",
        };
    }
  };
  const formatter = Intl.DateTimeFormat(locale, getOptions(format));
  let formatted = formatter.format(date);

  if (locale === "en-GB" && format === "day dd month yyyy") {
    formatted = formatted.replace(/(\w+) (\d{1,2} \w+ \d{4})/, "$1, $2");
  }

  return formatted;
};
