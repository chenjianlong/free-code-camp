# Build a Book Organizer

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have an array of objects named `books` where each object in the array should have a string `title`, another string `authorName`, and a number `releaseYear`.
2. Your `books` array should have a minimum of three objects.
3. You should have a callback function named `sortByYear` that accepts two books as parameter for sorting the array.
4. The `sortByYear` function should return `-1` if the `releaseYear` of the first book is smaller than that of the second book.
5. The `sortByYear` function should return `1` if the `releaseYear` of the first book is bigger than that of the second book.
6. The `sortByYear` function should return `0` if both `releaseYear` values are equal.
7. You should filter out books written after a certain year such as 1950 from the `books` array and save the filtered array in a new array named `filteredBooks`.
8. You should sort the books in the `filteredBooks` array according to their `releaseYear` in ascending order. You learned in a prior lesson that the `sort()` method will sort the array in place. This means the `filteredBooks` array will be mutated.