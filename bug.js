```javascript
// Example showing unexpected behavior with Tailwind's @apply directive

.my-class {
  @apply text-blue-500;
  /* ... other styles ... */
}

/* ... later in the stylesheet ... */

.another-class {
  @apply text-red-500;
}

/*If you have a class like:
.my-class {
  @apply text-blue-500;
}
And later you override with:
.my-class {
  @apply text-red-500; 
}
Then the `text-red-500` will be applied correctly.
However, if you have different classes with different @apply directives:
.my-class {
  @apply text-blue-500;
}
.another-class {
  @apply text-red-500;
}
And then modify `.another-class` with a new @apply directive:
.another-class {
  @apply text-red-500; 
}
The unexpected behavior might occur. This is because applying multiple @apply directives on different classes might cause conflicts or unexpected style overrides.
*/
```