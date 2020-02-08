// --- null ---

let a = null;

console.log(a);

console.log("'a' is of type: " + (typeof a));
console.log("'null' is of type: " + (typeof null));
console.log("a is null, 'a' === null ? = " + (a === null));

// --- undefined ---

let b;

console.log(b);

console.log("'b' is of type: " + (typeof b));
console.log("b is undefined, 'b' === undefined ? = " + (b === undefined));

// --- undeclared ---

// Will not be allowed in 'use strict' mode (note no 'const', 'let' or 'var')
g = "I am a Global variable";

console.log(g);

// String
console.log("'g' is of type: " + (typeof g));

// The 'delete' below will generate an exception in 'use strict' mode:
//
// $ node -c strict.js
// SyntaxError: Delete of an unqualified identifier in strict mode.

delete g;

// 'undefined'
console.log("'g' is of type: " + (typeof g));

// Is it possible to check for 'undefined' ? No, syntax error
console.log("g is undefined, 'g' === undefined ? = " + (g === undefined));
