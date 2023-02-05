export const scrollTo = (id: string) => {
  let el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const scrollToBottom = (id: string) => {
  let el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "end" });
};
