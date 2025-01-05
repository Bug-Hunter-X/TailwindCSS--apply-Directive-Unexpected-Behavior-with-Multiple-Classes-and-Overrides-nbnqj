```javascript
// Solution: Using direct utility classes instead of @apply

.my-class {
  text-blue-500;
  /* ... other styles ... */
}

.another-class {
  text-red-500;
}

/* This approach is more predictable and easier to maintain. It eliminates the potential ambiguity and unexpected overrides caused by the @apply directive when used on multiple classes. */
```