# Build a Date Conversion Program

In this lab, you will code a date conversion program that converts a given date to different formats. For example, the current date `Fri Sep 27 2024 16:04:43 GMT+0500 (Pakistan Standard Time)` would be formatted in the following 2 ways:

* `(MM/DD/YYYY): 9/27/2024.`
* `(Month Day, Year): September 27, 2024`.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a variable named `currentDate` and assign it the current date and time using the `Date` object.
2. You should create a variable named `currentDateFormat` and assign it the string `Current Date and Time: [current date]`. Replace `[current date]` with the result of the `currentDate` variable.
3. You should log the value of `currentDateFormat` to the console.
4. You should create a function named `formatDateMMDDYYYY` that takes the date object as a parameter. You can name this parameter whatever you like.
5. Your `formatDateMMDDYYYY` function should convert the current date to `month/day/year` format and return the string `Formatted Date (MM/DD/YYYY): [month]/[day]/[year]`.
6. You should create a function named `formatDateLong` that takes the date object as a parameter.
7. Your `formatDateLong` function should convert the current date to `Month Day, Year` format and return the string `Formatted Date (Month Day, Year): [formatted date]`.

**Note:** For the tests to pass, make sure that you use `en-US` for the locale when formatting the dates.