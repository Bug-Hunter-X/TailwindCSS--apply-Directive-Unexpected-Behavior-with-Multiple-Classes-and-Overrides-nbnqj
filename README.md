# TailwindCSS @apply Directive Unexpected Behavior

This repository demonstrates an uncommon bug related to Tailwind CSS's `@apply` directive. The bug manifests when using `@apply` with multiple classes and subsequently overriding styles.

## Bug Description

The `@apply` directive, while generally useful, can lead to unpredictable styling when used across multiple classes and subsequent overrides.  The order of `@apply` directives within a class definition and their interaction with classes defined elsewhere can produce unexpected results. There is no simple, always consistent way to manage the order or guarantee specific overwrites when using `@apply` multiple times in multiple classes.

## How to Reproduce

1.  Clone this repository.
2.  Run the provided Tailwind CSS project. (Setup instructions may be needed in the bug file.)
3.  Observe the unexpected styles as shown in the comments in the `bug.js` file.

## Solution

The solution involves avoiding this problem by refactoring the CSS to use direct utility classes.  This will avoid the potential confusion from multiple layers of `@apply` and conflicting styles. Check the `bugSolution.js` for the more predictable and maintainable approach.

## Note

This issue highlights the importance of a well-organized CSS structure and a cautious approach when employing the `@apply` directive, especially in complex projects with potentially conflicting styles across classes.