# Build a Player Interface

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define an abstract class named `Player` that inherits from the `abc.ABC` class.
2. The Player class should have an `__init__` method that sets:
    * The `moves` attribute to an empty list.
    * The `position` attribute to `(0, 0)`.
    * The `path` attribute to a list containing the initial position.
3. The `Player` class should have a method named `make_move` that:
    * Uses `random.choice` to get a random move from the `moves` attribute (defined in the concrete class).
    * Adds the values from the selected move to the current position and updates the `position` attribute.
    * Appends the new `position` tuple to the `path` attribute.
    * Returns the new `position`.
4. The `Player` class should have an abstract method named `level_up` to be implemented in concrete classes.
5. You should define a `Pawn` class that inherits from the `Player` class.
6. The `Pawn` class should use `super()` to call the parent's `__init__` method and then set the moves attribute to a list of tuples representing x, y coordinates.
7. Each coordinate tuple should represent a movement of `1` unit in the following directions: up, down, left, right.
8. The `Pawn` class should implement a concrete `level_up` method by adding more moves to the `moves` attribute. The added moves should represent the four diagonal movements (for example, `1` unit down plus `1` unit left).

> **Note:** Standard library modules should be imported without using aliases. Tests related to the `Player` class will fail until the `Pawn` class becomes instantiable.

