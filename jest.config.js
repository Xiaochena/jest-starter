/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: "ts-jest",
  // 自动清除 Mock
  clearMocks: true,
  // 开启覆盖率
  collectCoverage: true,
  // 指定生成覆盖率报告文件存放位置
  coverageDirectory: "coverage",
  // 不用管
  coverageProvider: "v8",
  // setupFilesAfterEnv: ["./tests/jest-setup.ts"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./tests/jest-setup.ts"],
};
