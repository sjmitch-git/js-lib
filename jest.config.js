module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // For DOM-related functions like scrollTo
  moduleDirectories: ["node_modules", "dist/lib/es6"],
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files
    "^.+\\.(js|jsx)$": "babel-jest", // Transform compiled JavaScript files
  },
  transformIgnorePatterns: [], // Allow transformation of node_modules if needed
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Treat TypeScript as ES modules
  globals: {
    "ts-jest": {
      useESM: true, // Enable ES module support for ts-jest
    },
  },
};
