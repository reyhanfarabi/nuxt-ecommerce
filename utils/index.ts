export const toCapitalize = (str: string): string => {
  if (!str) return "";

  return str
    .split(" ")
    .map((s) => s[0].toUpperCase() + s.substring(1).toLowerCase())
    .join(" ");
};
