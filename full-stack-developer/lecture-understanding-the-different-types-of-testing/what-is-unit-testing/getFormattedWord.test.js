import { getFormattedWord } from "./getFormattedWord.js";

test('capitalizes the first letter of a word', () => {
  expect(getFormattedWord('hello')).toBe('Hello');
});

test("returns an empty string when no argument is provided", () => {
  expect(getFormattedWord()).toBe("");
});
