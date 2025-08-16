/**
 * Converts a string to camelCase.
 * @param str - The input string.
 * @returns The camelCase string.
 */
export const camelCase = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
    .trim();
};

/**
 * Converts a string to kebab-case.
 * @param str - The input string.
 * @returns The kebab-case string.
 */
export const kebabCase = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-") // Normalize multiple dashes
    .toLowerCase()
    .trim();
};

/**
 * Converts a string to PascalCase.
 * @param str - The input string.
 * @returns The PascalCase string.
 */
export const pascalCase = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
    .replace(/^(.)/, (_m, chr) => chr.toUpperCase())
    .trim();
};

/**
 * Converts a string to snake_case.
 * @param str - The input string.
 * @returns The snake_case string.
 */
export const snakeCase = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .replace(/_+/g, "_") // Normalize multiple underscores
    .toLowerCase()
    .trim();
};

/**
 * Capitalizes the first character of a string and lowercases the rest.
 * @param str - The input string.
 * @returns The capitalized string.
 */
export const capitalize = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`.trim();
};

/**
 * Converts a string to Title Case, capitalizing the first letter of each word.
 * @param str - The input string.
 * @returns The Title Case string.
 */
export const titleCase = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  return str
    .toLowerCase()
    .split(/[\s-]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .trim();
};

/**
 * Converts a string to a URL-friendly slug.
 * @param str - The input string.
 * @param options - Optional settings.
 * @param options.separator - The separator to use (default: '-').
 * @returns The slugified string.
 */
export const slugify = (str: string, options: { separator?: string } = {}): string => {
  if (typeof str !== "string" || !str) return "";
  const { separator = "-" } = options;
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, separator)
    .replace(new RegExp(`${separator}+`, "g"), separator);
};

/**
 * Converts a string to sentence case (first word capitalized, others unchanged).
 * @param str - The input string.
 * @returns The sentence case string.
 */
export const sentenceCase = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  const trimmed = str.trim();
  return `${trimmed.charAt(0).toUpperCase()}${trimmed.slice(1)}`;
};

/**
 * Converts all words in a string to uppercase, preserving separators.
 * @param str - The input string.
 * @param options - Optional settings.
 * @param options.separator - Separator to preserve (default: ' ').
 * @returns The uppercase words string.
 */
export const upperCaseWords = (str: string, options: { separator?: string } = {}): string => {
  if (typeof str !== "string" || !str) return "";
  const { separator = " " } = options;
  return str
    .split(new RegExp(`[${separator}-]+`))
    .map((word) => word.toUpperCase())
    .join(separator)
    .trim();
};

/**
 * Converts all words in a string to lowercase, preserving separators.
 * @param str - The input string.
 * @param options - Optional settings.
 * @param options.separator - Separator to preserve (default: ' ').
 * @returns The lowercase words string.
 */
export const lowerCaseWords = (str: string, options: { separator?: string } = {}): string => {
  if (typeof str !== "string" || !str) return "";
  const { separator = " " } = options;
  return str
    .split(new RegExp(`[${separator}-]+`))
    .map((word) => word.toLowerCase())
    .join(separator)
    .trim();
};

/**
 * Inverts the case of each letter in a string.
 * @param str - The input string.
 * @returns The string with toggled case.
 */
export const toggleCase = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  return str
    .split("")
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join("");
};

/**
 * Converts a string to dot.case.
 * @param str - The input string.
 * @returns The dot.case string.
 */
export const dotCase = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1.$2")
    .replace(/[\s_-]+/g, ".")
    .replace(/\.+/g, ".") // Normalize multiple dots
    .toLowerCase()
    .trim();
};

/**
 * Converts a string to CONSTANT_CASE (uppercase with underscores).
 * @param str - The input string.
 * @returns The CONSTANT_CASE string.
 */
export const constantCase = (str: string): string => {
  if (typeof str !== "string" || !str) return "";
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .replace(/_+/g, "_") // Normalize multiple underscores
    .toUpperCase()
    .trim();
};
