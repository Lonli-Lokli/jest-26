const esModules = ['lodash-es/*'].join('|');

module.exports = {
    globals: {
        'ts-jest': {
          tsConfig: '<rootDir>/tsconfig.spec.json',
          stringifyContentPathRegex: '\\.html$',
          astTransformers: {
            before: [
              'jest-preset-angular/build/InlineFilesTransformer',
              'jest-preset-angular/build/StripStylesTransformer',
            ],
          },
        },
      },
      transform: {
        '^.+\\.(ts|js|html)$': 'ts-jest',
      },
      moduleFileExtensions: ['ts', 'html', 'js', 'json'],
      moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '^app/(.*)$': '<rootDir>/src/app/$1',
        '^assets/(.*)$': '<rootDir>/src/assets/$1',
        '^environments/(.*)$': '<rootDir>/src/environments/$1',
      },
      coverageReporters: ['lcov', 'text', 'teamcity'],
      collectCoverageFrom: ['src/**/*.{ts, js, html}', '!src/**/*.spec.ts'],
      clearMocks: true,
      preset: "jest-preset-angular",
    setupFilesAfterEnv: [
      "<rootDir>/src/setup-jest.ts"
    ],
      transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
      snapshotSerializers: [
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
      ],
};
