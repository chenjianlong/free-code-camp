# Build a Planet Class

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a class named `Planet`.
2. The `Planet` class should have an `__init__` method that:
    * Has four parameters: `self`, `name`, `planet_type`, and `star`.
    * Raises a `TypeError` with the message `name, planet type, and star must be strings` if any of the arguments passed in is not a string type.
    * Raises a `ValueError` with the message `name, planet_type, and star must be non-empty strings` if any of the arguments passed in is an empty string.
    * Assigns the values passed in to the instance attributes `name`, `planet_type`, and `star`.
3. The `Planet` class should have an `orbit` method that returns a string in the format `{name} is orbiting around {star}...`.
4. The `Planet` class should have a `__str__` method that returns a string in the format `Planet: {name} | Type: {planet_type} | Star: {star}`.
5. You should create three instances of the `Planet` class named `planet_1`, `planet_2`, and `planet_3`.
6. You should print each planet object to see the `__str__` method output.
7. You should call the `orbit` method on each planet object and print the result.