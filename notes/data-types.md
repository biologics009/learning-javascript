# Data types in Javascript
*There are 8 **basic** data types in Javascript*

They are:

|S.No.| Data Type | Classifictation | typeOf() returns |
|-----|-----------|-----------------|------------------|
|1.   | Number    | Primitive       | `number`         |
|2.   | BigInt    | Primitive       | `bigint`         |
|3.   | String    | Primitive       | `string`         |
|4.   | Boolean   | Primitive       | `boolean`        |
|5.   | Null      | Primitive       | ***`object`***   |
|6.   | Undefined | Primitive       | `undefined`      |
|7.   | Symbol    | Primitive       | `symbol`         |
|8.   | Object    | Non-Primitive   | `object`         |

* *Although typeof null returns "object", `null` is actually a **primitive data type**, not an object.*
* It is a historical bug in JavaScript.

* Doing maths in javascript is safe.

* `null` is a **primitive value** .
*In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.*
*It’s just a special value which represents “nothing”, “empty” or “value unknown”.*

``` java
// Java
String name = null;
/** 
    here: 
    name ───► null 
**/

String message = "Hello"
/**
 * Here:
 * name
 * ┌──────┐
 * │ ref1 │ ───► String object ("Hello")
 * └──────┘
 * **/

```

``` javascript
// Javascript
let name = null;
/**
 * here:
 * name
 * ┌──────┐
 * │ null │
 * └──────┘
 * **/
```

* If a variable is declared, but not assigned, then its value is `undefined`.
* If a variable is declared and intentionally assigned to `null`, its value is null, empty or unknown.

# `typeof` Operator
The typeof operator returns a string indicating the type of the operand.

Syntax: 
* typeof x 
* typeof(x)

*`typeof` is an operator, **not a function**.* 
**The parentheses here aren’t a part of `typeof`.** *It’s the kind of parentheses used for mathematical grouping.*

``` javascript
console.log(typeof null) // object
// This is an error in typeof operator.
```

* There’s no special “function” type in JavaScript.
* Functions belong to the object type.
* But typeof treats them differently, returning "function". 
* That also comes from the early days of JavaScript. 
* Technically, such behavior isn’t correct, but can be convenient in practice.