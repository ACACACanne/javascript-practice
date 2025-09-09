 Reflection: JavaScript Practice Repository
____________________________________________________________________________________________________________________
Purpose and Motivation:
This repository was created as a personal sandbox to explore and reinforce core JavaScript concepts. My goal was to move beyond passive learning and actively engage with syntax, logic, and quirks of the language through hands-on experimentation. It also served as a space to document my understanding, test edge cases, and reflect on how JavaScript behaves in real-world scenarios.


Key Learnings:

Variables and Scope
Reaffirmed the importance of using `let` and `const` over `var` to avoid scope-related bugs.
Practiced block vs function scope and understood how `const` protects reference integrity but not immutability.

Type Coercion and Comparison:
Explored how JavaScript handles implicit type conversion (`'5' + 10` vs `'5' - 2`).
Differentiated between `==` (loose equality) and `===` (strict equality), and why the latter is preferred for predictable logic.

Control Flow:
Practiced `if/else`, `switch`, and ternary operators to handle conditional logic.
Used grading logic and day-of-week mapping to simulate real-world decision trees.

Loops and Iteration:
Implemented `for`, `while`, and `do-while` loops to understand iteration patterns.
Used `break` and `continue` to control loop behavior and skip or exit conditions.

Boolean Logic and Truthy/falsy Values:
Identified common truthy and falsy values (`0`, `""`, `null`, `undefined`, `[]`, `{}`).
Practiced using `Boolean()` to test value behavior in conditional contexts.

Arrays and Functions:
Manipulated arrays with `.push()` and logged results to reinforce dynamic data structures.
Wrote simple functions to encapsulate logic and return values.


Challenges and Small Moments:
Scope confusion with `var`: Initially accessed `var x` outside its block and was surprised it didn’t throw an error. This led to deeper research into scoping rules.
Type coercion surprises: `'5' - 2` returning `3` was unintuitive at first, but helped me appreciate JavaScript’s flexibility—and its potential pitfalls.
Loop Control: Using `continue` to skip even numbers was a fun way to test logic flow and reinforce modulo operations.


Creative Decisions:
Structured code in thematic blocks (variables, conditionals, loops) for clarity and future reference.
Annotated each section with comments to explain not just *what* the code does, but *why* it matters.


Final Thoughts:

This practice repo has been a valuable space for deepening my understanding of JavaScript fundamentals. It’s not just about syntax—it’s about thinking like a developer, anticipating edge cases, and writing code that’s both functional and readable. I’m proud of the progress I’ve made and excited to build on this foundation with more advanced projects.
