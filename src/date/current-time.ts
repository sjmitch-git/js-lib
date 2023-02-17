export const currentTime = (timezone: string, locale?: string) => {
  const formatOptions = (): Intl.DateTimeFormatOptions => {
    return {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: timezone,
    };
  };
  const formatter = Intl.DateTimeFormat(locale, formatOptions());
  return formatter.format(new Date());
};
