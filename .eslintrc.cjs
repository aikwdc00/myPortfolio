module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'simple-import-sort'],
    rules: {
        'no-undef': 'error',
        'no-unused-vars': 'warn',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/no-duplicates': 'error',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
    },
};