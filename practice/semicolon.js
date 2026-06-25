alert("Hello! : Statement with semicolon");
alert("World : Statement without semicolon")

// Semi-colon can be omitted if line breaks do exist but not always.
// Here, JavaScript interprets the line break as an “implicit” 
// semicolon. This is called an automatic semicolon insertion.

alert("Hello : Error free statements with semicolon");
[1, 2].forEach(alert);

// automatic semicolon insertion do not work in all cases. 
alert("Hello : Error containing statement without semicolon\nCheck console for error message")
[1, 2].forEach(alert);
// JavaScript does not assume a semicolon before square brackets [...]. 
// So, the code in the last example is treated as a single statement.
// Above statements are treated like: 
// alert("Hello")[1, 2].forEach(alert);