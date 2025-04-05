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
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'import/no-unresolved': 'error', // 檢查未解析的模組
        'import/named': 'error', // 檢查命名導入是否正確
        'import/default': 'error', // 檢查默認導入是否正確
        'import/namespace': 'error', // 檢查命名空間導入是否正確
        'import/no-duplicates': 'error', // 防止重複導入
    },
}
