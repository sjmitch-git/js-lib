module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"], // Focus on src for testing
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
  },
  transformIgnorePatterns: [],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Strip .js extensions for ESM imports
  },
};
