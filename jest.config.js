module.exports = {
    roots: ['<rootDir>/src'],

    setupFilesAfterEnv: ['<rootDir>/enzyme-setup.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
        },
    },

    modulePathIgnorePatterns: ['node_modules'],

    coveragePathIgnorePatterns: ['/node_modules/'],

    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },

    reporters: ['default'],
};
