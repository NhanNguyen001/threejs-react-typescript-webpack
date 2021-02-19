module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    overrides: [
        {
            files: [
                '**/*.test.{ts,tsx}',
                '**/testUtils/*.{ts,tsx}',
            ],
            env: {
                jest: true,
            },
            rules: {
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './packages/*/tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
    ],
    rules: {
        'max-len': ['error', { code: 120 }],
        'linebreak-style': 'off',
        'no-console': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
        'no-continue': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
        'react/state-in-constructor': ['warn', 'never'],
        'react/destructuring-assignment': ['warn', 'always', { ignoreClassFields: true }],
        'import/prefer-default-export': 'off',
        'import/default': 'off',
        'import/order': ['warn', { alphabetize: { order: 'asc' } }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                mjs: 'never',
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // Only for typescript
        'react/prop-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-extraneous-dependencies': [
            'off',
            {
                devDependencies: [
                    '**/*.stories.tsx',
                ],
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
