module.exports = {
    extends: ['plugin:@typescript-eslint/recommended-type-checked'],
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                project: true,
                tsconfigRootDir: __dirname,
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        extraFileExtensions: ['.svelte'],
        project: ['tsconfig.json', 'tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
    },
};
