# Strict

A quick review of the new features introduced with ECMAScript version 5.

Specifically with reference to __null__ as well as __undeclared__ and __undefined__ data types.

These new features are invoked by specifying `'use strict'` with [node.js](http://nodejs.org/).

## Rationale

I often like to experiment with language features, for instance here are my experiments with
[Golang](http://github.com/mramshaw/Golang).

In ___this___ repo I am trying out some things with `node.js`.

## Method

We will compare and contrast two mainly identical pieces of code, one ___with___ 'use strict'
and the other ___without___:

```bash
$ diff -uw strict.js not_strict.js 
--- strict.js	2020-02-08 15:43:28.560093898 -0500
+++ not_strict.js	2020-02-08 15:35:35.486426106 -0500
@@ -1,5 +1,3 @@
-"use strict";
-
 // --- null ---
 
 let a = null;
@@ -34,7 +32,7 @@
 // $ node -c strict.js
 // SyntaxError: Delete of an unqualified identifier in strict mode.
 
-//delete g;
+delete g;
 
 // 'undefined'
 console.log("'g' is of type: " + (typeof g));
$
```

Note that the line 'delete g;' is commented-out in `strict.js`.

#### node --check

[This can also be abbreviated as `node -c`.]

This can be useful for catching errors, but it is really just a __syntax check__.

For instance:

```bash
$ node -c strict.js
/home/owner/Documents/node.js/Strict/strict.js:37
delete g;
       ^

SyntaxError: Delete of an unqualified identifier in strict mode.
    at new Script (vm.js:84:7)
    at checkSyntax (internal/main/check_syntax.js:78:3)
    at internal/main/check_syntax.js:42:3
$
```

It will not catch __runtime errors__.

#### without 'use strict'

Here we will explore __null__, __undeclared__ and __undefined__ data types.

```bash
$ node not_strict.js
null
'a' is of type: object
'null' is of type: object
a is null, 'a' === null ? = true
undefined
'b' is of type: undefined
b is undefined, 'b' === undefined ? = true
I am a Global variable
'g' is of type: string
'g' is of type: undefined
$
```

[Data values can be compared to 'null' and 'undefined'.]

#### with 'use strict'

And here we will execute the same code (but with 'delete g;' commented-out),
this time with `"use strict"`:

```bash
$ node strict.js
null
'a' is of type: object
'null' is of type: object
a is null, 'a' === null ? = true
undefined
'b' is of type: undefined
b is undefined, 'b' === undefined ? = true
/home/owner/Documents/node.js/Strict/strict.js:25
g = "I am a Global variable";
  ^

ReferenceError: g is not defined
    at Object.<anonymous> (/home/owner/Documents/node.js/Strict/strict.js:25:3)
    at Module._compile (internal/modules/cjs/loader.js:955:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:991:10)
    at Module.load (internal/modules/cjs/loader.js:811:32)
    at Function.Module._load (internal/modules/cjs/loader.js:723:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1043:10)
    at internal/main/run_main_module.js:17:11
$
```

[As expected, "use strict" resulted in stricter syntax checking.]

## Conclusion

In general, 'use strict' is very useful and can prevent lots of errors.

However, adding it to older code may not always be a good idea. It can
definitely break some older code.

For instance, the `this` keyword can behave differently in strict mode.

## Reference

Some useful references follow.

#### null

Read more about 'null': http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

> The value `null` represents the intentional absence of any object value.
> It is one of JavaScript's [primitive values](http://developer.mozilla.org/en-US/docs/Glossary/Primitive)
> and is treated as [falsy](http://developer.mozilla.org/en-US/docs/Glossary/Falsy) for boolean operations.

#### strict mode

Read more about 'use strict': http://www.w3schools.com/js/js_strict.asp

> The `"use strict"` directive was new in ECMAScript version 5.

ECMAScript version 5 introduced new features. To allow for backward compatibility, these new features will
only apply if `"use strict"` is specified.

And also: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

#### undefined

Read more about 'undefined': http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

> The global `undefined` property represents the primitive value [undefined](http://developer.mozilla.org/en-US/docs/Glossary/Undefined).
> It is one of JavaScript's [primitive types](http://developer.mozilla.org/en-US/docs/Glossary/Primitive).

## Versions

The version of `node.js` used was __v12.15.0__:

```
$ node -v
v12.15.0
$
```

## To Do

- [ ] Verify with different versions of `node`
