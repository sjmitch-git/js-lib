module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "dist/lib/es6"],
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
};
