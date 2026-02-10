# Build an Nth Fibonacci Number Calculator

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a function named `fibonacci`.
2. You should define a list named `sequence` within the `fibonacci` function, and it should be initialized with the values `[0, 1]`.
3. The `fibonacci` function should accept one parameter, a positive integer `n`.
4. Calling `fibonacci(n)` should use a dynamic programming approach to compute and return the `n`-th number from the Fibonacci sequence, where each number is the sum of the two preceding numbers.
5. Each computed number at the position `n` in the Fibonacci sequence should be stored in the `sequence` list at index `n - 1`.