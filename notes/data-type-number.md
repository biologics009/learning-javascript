# Number data type
It include numerical values which are:
* Integer 
* Float 
* Infinity & -Infinity
* NaN

*`Infinity`, `-Infinity` and `NaN` are special numerical values*


## `Infinty`
* `Infinity` is a number which is greater than any number.
* It represents mathematical infinity.

## `NaN`
* `NaN` represents computational error. 
* It is a result of an incorrect or an **undefined** mathematical operation.
* `NaN` is sticky. Any further mathematical operation on `NaN` returns `NaN`.
* Exception `NaN ** 0` is `1`.
* `NaN` is not equal to `NaN`.

*Doing maths in javascript is safe. Because we can devide by 0 (returns `infinity`), treat non-numeric value as numeric during calculations.*
*The wrost wil be we'll get a NaN but the code/program/script will not be dead i.e. wil never stop with a fatal error (die).* 

