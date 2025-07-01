export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
            },
        ],
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
};
