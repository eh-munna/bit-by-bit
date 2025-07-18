# **Bit By Bit** - Fullstack Learning Journey

---

## **TypeScript 1.2 – Branch Overview**

Welcome to the **`typeScript_1.2`** branch of **Bit By Bit!**

This branch explores how to define and work with **functions in TypeScript**, ensuring type-safe, predictable, and maintainable logic across applications.

---

### ✅ **What I've Learned**

#### 🔹 **Function Basics**

Learned how to define functions with typed parameters and return types:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

- Parameters and return values are explicitly typed.
- TypeScript infers return types when not provided (but explicit typing is preferred for clarity).

#### 🔸 **Optional & Default Parameters**

- Used `?` to define optional parameters.
- Applied default values to parameters for flexibility.

```ts
function greet(
  name: string,
  age?: number,
  salutation: string = 'Hello'
): string {
  if (age) {
    return `${salutation}, ${name}. You are ${age} years old.`;
  }
  return `${salutation}, ${name}`;
}
```

#### 🔷 **Function Expressions & Arrow Functions**

- Explored function expressions and concise arrow functions:

```ts
const multiply = (x: number, y: number): number => x * y;
```

- Arrow functions are especially useful in callbacks and concise logic.

#### 🟢 **Void & Never Return Types**

- `void`: Used for functions that don’t return a value (e.g., logging).
- `never`: Used for functions that never complete (e.g., throwing an error or infinite loops).

```ts
function logMessage(message: string): void {
  console.log(message);
}

function throwError(msg: string): never {
  throw new Error(msg);
}
```

#### 🟠 **Function Overloads**

Defined multiple function signatures to support different types or argument structures:

```ts
function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
  console.log(value);
}
```

- Overloads help maintain strict typing while offering flexibility.

#### 🟣 **Callback & Higher-Order Functions**

- Passed functions as arguments and returned them as values:

```ts
function operate(
  a: number,
  b: number,
  fn: (x: number, y: number) => number
): number {
  return fn(a, b);
}
```

- Enabled functional programming patterns with type safety.

---

### 📚 **Resources**

- [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Optional and Default Parameters](https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-and-default-parameters)
- [Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
- [Void and Never](https://www.typescriptlang.org/docs/handbook/2/functions.html#void)
- [Arrow Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#writing-functions)

---

### **How to Use This Branch**

Follow these steps to run this branch in your machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/eh-munna/bit-by-bit.git
   ```

2. **Navigate to the repository folder:**

   ```bash
   cd bit-by-bit
   ```

3. **Switch to this branch:**

   ```bash
   git checkout typeScript_1.2
   ```

4. **Install dependencies:**

   ```bash
   npm install
   ```

5. **Convert to JavaScript:**

   ```bash
   npm run build
   ```

6. **Run the app:**

   ```bash
   npm run start
   ```

---

## **Connect with Me**

Feel free to reach out on any platform:

<div style="display: flex; gap: 20px;">
   <a href="https://www.linkedin.com/in/eh-munna/">
      <img src="https://img.shields.io/badge/LinkedIn-%230A66C2?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn">
   </a>
   <a href="https://github.com/eh-munna">
      <img src="https://img.shields.io/badge/GitHub-%23121011?style=flat&logo=github&logoColor=white" alt="GitHub">
   </a>
   <a href="mailto:emran.h.munna@gmail.com">
      <img src="https://img.shields.io/badge/emran.h.munna@gmail.com-%23D14836?style=flat&logo=gmail&logoColor=white" alt="Email">
   </a>
</div>
