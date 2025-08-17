import {
  capitalize,
  camelCase,
  snakeCase,
  kebabCase,
  pascalCase,
  slugify,
  sentenceCase,
  upperCaseWords,
  lowerCaseWords,
  toggleCase,
  dotCase,
  constantCase,
} from "../src/index.js";

describe("String Utilities", () => {
  test("capitalize", () => {
    expect(capitalize("fRED")).toBe("Fred");
    expect(capitalize("")).toBe("");
  });

  test("camelCase", () => {
    expect(camelCase("FRED flinstone")).toBe("fredFlinstone");
    expect(camelCase("")).toBe("");
  });

  test("snakeCase", () => {
    expect(snakeCase("FRED flinstone")).toBe("fred_flinstone");
    expect(snakeCase("")).toBe("");
  });

  test("kebabCase", () => {
    expect(kebabCase("FRED flinstone")).toBe("fred-flinstone");
    expect(kebabCase("")).toBe("");
  });

  test("pascalCase", () => {
    expect(pascalCase("FRED flinstone")).toBe("FredFlinstone");
    expect(pascalCase("")).toBe("");
  });

  test("slugify", () => {
    expect(slugify("FRED flinstone!")).toBe("fred-flinstone");
    expect(slugify("FRED flinstone!", { separator: "_" })).toBe("fred_flinstone");
    expect(slugify("")).toBe("");
  });

  test("sentenceCase", () => {
    expect(sentenceCase("fRED flinstone")).toBe("FRED flinstone");
    expect(sentenceCase("hello WORLD")).toBe("Hello WORLD");
    expect(sentenceCase("")).toBe("");
  });

  test("upperCaseWords", () => {
    expect(upperCaseWords("fred flinstone")).toBe("FRED FLINSTONE");
    expect(upperCaseWords("fred-flinstone", { separator: "-" })).toBe("FRED-FLINSTONE");
    expect(upperCaseWords("")).toBe("");
  });

  test("lowerCaseWords", () => {
    expect(lowerCaseWords("FRED FLINSTONE")).toBe("fred flinstone");
    expect(lowerCaseWords("FRED-FLINSTONE", { separator: "-" })).toBe("fred-flinstone");
    expect(lowerCaseWords("")).toBe("");
  });

  test("toggleCase", () => {
    expect(toggleCase("Hello World")).toBe("hELLO wORLD");
    expect(toggleCase("fRED")).toBe("Fred");
    expect(toggleCase("")).toBe("");
  });

  test("dotCase", () => {
    expect(dotCase("FRED flinstone")).toBe("fred.flinstone");
    expect(dotCase("helloWorld")).toBe("hello.world");
    expect(dotCase("")).toBe("");
  });

  test("constantCase", () => {
    expect(constantCase("FRED flinstone")).toBe("FRED_FLINSTONE");
    expect(constantCase("helloWorld")).toBe("HELLO_WORLD");
    expect(constantCase("")).toBe("");
  });
});
