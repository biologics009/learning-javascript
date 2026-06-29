# Hoisting
* Hoisting is a *Javascript only* feature.
* Variable and function definitons move at the **top of their scope** during compilation before executing the program.
* This is known as **hoisting**
* Due to hoisting, `var` and `function` can be *used before and defined/declared later*.
* `function` declarations are fully hoisted, i.e. their entire function body is also hoisted.
* `let` and `const` variables cannot be used before their definiton.
* `let` and `const` variables are also hoisted but they remain in Temporal Dead Zone.
* only **declaration/definition** is hoisted **not assignment**.
* function expressions behave like `let` and `const`.

```javascript
# Function Decleration
function myFunction () {
    console.log("Hello!")
}

# Function Expression
var sayHi = function (){
    console.log("Hi")
}

```

## Summery
| Declaration Type            | Hoisted?      | Accessible Before Declaration?| value            |
| --------------------------- | ------------- | ----------------------------- | ---------------- |
| `var`                       | Yes           | Yes                           | `undefined`      |
| `let`                       | Yes           | No                            | `ReferenceError` |
| `const`                     | Yes           | No                            | `ReferenceError` |
| Function Declaration        | Yes           | Yes                           | `Entire function`|
| Function Expression (`var`) | Variable only | No                            | `undefined`      |
