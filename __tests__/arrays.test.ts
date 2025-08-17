import { removeDuplicates, filterObjects, mergeArrays, shuffleArray } from "../src/index.js";

describe("Array functions", () => {
  const wizards = [
    {
      name: "Radagast",
      spells: ["Talk to animals", "Make plants grow"],
      tool: "staff",
    },
    {
      name: "Merlin",
      spells: ["Dancing teacups", "Turn into fish"],
      tool: "wand",
    },
    {
      name: "Gandalf",
      spells: ["You shall not pass", "Disappear"],
      tool: "staff",
    },
  ];

  describe("removeDuplicates", () => {
    test("removes duplicates from number array", () => {
      const input = [4, 2, 3, 1, 4, 1, 2, 5, 3, 4];
      expect(removeDuplicates(input).sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5]);
    });

    test("removes duplicates from string array", () => {
      const input = [
        "mike",
        "charlie",
        "ken",
        "cindy",
        "mike",
        "charlie",
        "ken",
        "cindy",
        "ken",
        "cindy",
      ];
      expect(removeDuplicates(input).sort()).toEqual(["charlie", "cindy", "ken", "mike"]);
    });
  });

  describe("filterObjects", () => {
    test("returns objects where tool equals staff", () => {
      expect(filterObjects(wizards, "tool", "staff")).toEqual([
        { name: "Radagast", spells: ["Talk to animals", "Make plants grow"], tool: "staff" },
        { name: "Gandalf", spells: ["You shall not pass", "Disappear"], tool: "staff" },
      ]);
    });

    test("returns names where tool equals staff", () => {
      expect(filterObjects(wizards, "tool", "staff", "name")).toEqual(["Radagast", "Gandalf"]);
    });

    test("returns all names", () => {
      expect(filterObjects(wizards, "name")).toEqual(["Radagast", "Merlin", "Gandalf"]);
    });

    test("returns all spells", () => {
      expect(filterObjects(wizards, "spells")).toEqual([
        ["Talk to animals", "Make plants grow"],
        ["Dancing teacups", "Turn into fish"],
        ["You shall not pass", "Disappear"],
      ]);
    });
  });

  describe("mergeArrays", () => {
    const spells = [
      ["Talk to animals", "Make plants grow"],
      ["Dancing teacups", "Turn into fish", "Talk to animals"],
      ["You shall not pass", "Disappear"],
    ];

    test("merges multiple arrays", () => {
      expect(mergeArrays(spells)).toEqual([
        "Talk to animals",
        "Make plants grow",
        "Dancing teacups",
        "Turn into fish",
        "Talk to animals",
        "You shall not pass",
        "Disappear",
      ]);
    });

    test("merges arrays and removes duplicates", () => {
      expect(mergeArrays(spells, true).sort()).toEqual([
        "Dancing teacups",
        "Disappear",
        "Make plants grow",
        "Talk to animals",
        "Turn into fish",
        "You shall not pass",
      ]);
    });
  });

  describe("shuffleArray", () => {
    test("randomizes array order", () => {
      const input = [1, 2, 3, 4, 5];
      const result = shuffleArray(input);
      expect(result).toHaveLength(input.length);
      expect(result.sort((a, b) => a - b)).toEqual(input.sort((a, b) => a - b));
    });
  });
});
