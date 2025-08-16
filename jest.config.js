module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "dist/lib/es6"],
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Strip .js extensions for ESM imports
  },
};
