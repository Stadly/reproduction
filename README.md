`npm run check` fails:

```
Error: Property 'toHaveNoViolations' does not exist on type 'Assertion<AxeResults>'. 
it('has no violations', async () => {
        expect(await axe("<main>test</main>")).toHaveNoViolations();
});
```

Adding `import "vitest-axe/extend-expect";` to the test file fixes the problem. It is not enough that it is in `vitest-setup.ts`.

Reported issue: https://github.com/chaance/vitest-axe/issues/10
