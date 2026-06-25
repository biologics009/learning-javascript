# Learning JavaScript 🚀

A personal repository documenting my journey of learning JavaScript from fundamentals to advanced concepts through notes, coding exercises, mistakes, and projects.

## 🎯 Goals

* Build a strong understanding of JavaScript fundamentals.
* Learn by writing code instead of memorizing syntax.
* Maintain concise notes and a mistake journal.
* Practice concepts through exercises and mini-projects.
* Create projects to apply and reinforce learning.

---

## 📂 Repository Structure

```text
Learning-JavaScript/
│
├── notes/
│   ├── variables.md
│   ├── functions.md
│   └── closures.md
│
├── mistakes/
│   └── javascript-mistakes.md
│
├── practice/
│   ├── arrays/
│   ├── objects/
│   └── promises/
│
└── projects/
    ├── calculator/
    ├── todo-app/
    └── quiz-app/
```

---

## 📚 Learning Approach

For every topic:

1. Learn the concept.
2. Understand why it works.
3. Write the code from memory.
4. Experiment and modify the code.
5. Build something using the concept.
6. Review and revisit periodically.

**Principle:**

> Read once → Write twice → Modify once → Build once → Review later.

---

## 📝 Notes

The `notes` directory contains concise explanations, mental models, important concepts, and comparisons between JavaScript features.

Example topics:

* Variables and Data Types
* Functions and Scope
* Closures
* Objects and Prototypes
* Asynchronous JavaScript
* DOM Manipulation

---

## ❌ Mistake Journal

The `mistakes` directory records:

* Errors I encountered
* Incorrect assumptions
* Debugging observations
* Lessons learned

The goal is to avoid repeating the same mistakes and build deeper understanding.

### Example Entry

```md
# Mistake #1
Date: 25 June 2026

Topic: Hoisting

Mistake:
I assumed that `let` behaves like `var`.

Code:
console.log(a);
let a = 10;

What Happened:
ReferenceError: Cannot access 'a' before initialization

Why It Happened:
Variables declared with `let` and `const` are hoisted but remain in the
Temporal Dead Zone (TDZ) until their declaration is executed.

Lesson Learned:
- `var` → Hoisted and initialized with `undefined`
- `let` and `const` → Hoisted but inaccessible in the TDZ
- Do not access `let` or `const` variables before declaration.
```

**Rule:** Every bug, misconception, or unexpected behavior gets an entry in the mistake journal. Over time, this becomes a personalized debugging handbook.


---

## 💻 Practice

The `practice` directory contains:

* Small code snippets
* Exercises
* Coding challenges
* Experiments with JavaScript features

Each topic is explored through hands-on coding.

---

## 🚀 Projects

Projects are built to apply concepts in real-world scenarios.

Planned projects include:

* Calculator
* To-Do App
* Quiz App
* Expense Tracker
* Weather App
* Notes App

---

## 🛠️ Technologies

* JavaScript (ES6+)
* HTML5
* CSS3
* Visual Studio Code
* Git & GitHub

---

## 📈 Progress Philosophy

I am not aiming to memorize JavaScript syntax. The focus is on:

**Understanding → Practice → Application → Revision**

Consistent coding and project building are the primary methods of learning in this repository.

---

**Happy Coding! 🚀**
