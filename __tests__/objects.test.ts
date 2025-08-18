import { deepClone, pick } from "../src/index.js";

describe("Object utilities", () => {
  describe("deepClone", () => {
    test("clones a simple object without mutating the original", () => {
      const original = { a: 1, b: "test" };
      const clone = deepClone(original);
      clone.a = 2;
      expect(original.a).toBe(1); // Original unchanged
      expect(clone).toEqual({ a: 2, b: "test" });
    });

    test("clones a nested object", () => {
      const original = { a: 1, b: { c: 2, d: { e: 3 } } };
      const clone = deepClone(original);
      clone.b.d.e = 4;
      expect(original.b.d.e).toBe(3); // Original unchanged
      expect(clone.b.d.e).toBe(4);
    });

    test("clones an array with objects", () => {
      const original = [{ a: 1 }, { b: 2 }];
      const clone = deepClone(original);
      clone[0].a = 3;
      expect(original[0].a).toBe(1); // Original unchanged
      expect(clone[0].a).toBe(3);
    });

    test("returns primitives unchanged", () => {
      expect(deepClone(42)).toBe(42);
      expect(deepClone("test")).toBe("test");
      expect(deepClone(null)).toBe(null);
    });
  });

  describe("pick", () => {
    test("picks specified keys from an object", () => {
      const obj = { name: "Gandalf", age: 300, tool: "staff" };
      const result = pick(obj, ["name", "tool"]);
      expect(result).toEqual({ name: "Gandalf", tool: "staff" });
    });

    test("returns empty object for empty keys array", () => {
      const obj = { name: "Gandalf", age: 300 };
      const result = pick(obj, []);
      expect(result).toEqual({});
    });
  });
});
