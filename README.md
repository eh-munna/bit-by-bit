# **Bit By Bit** - Fullstack Learning Journey

---

## **TypeScript 2.1 – Branch Overview**

Welcome to the **`typeScript_2.1`** branch of **Bit By Bit!**

This branch explores key features for creating **robust and expressive type systems** in TypeScript, focusing on **type assertion, narrowing, interfaces, type declarations**, and **aliasing**.

---

### ✅ **What I've Learned**

#### 🔹 **Type Assertion**

- Used to **tell the compiler** the exact type of a variable when you're sure, even if TypeScript can't infer it.

```ts
let someValue: unknown = 'I’m a string';
let strLength: number = (someValue as string).length;
```

- Helps when working with third-party APIs or DOM elements.

---

#### 🔸 **Type Narrowing**

- Enables TypeScript to **refine** types based on control flow.

```ts
function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

- Common narrowing techniques:

  - `typeof`

---

#### 🔷 **Interface vs Type Alias**

- Both are used to **define custom types**.
- **Interfaces** are extendable and often preferred for object shapes.
- **Type aliases** are more flexible — can represent unions, primitives, tuples, etc.

```ts
interface User {
  name: string;
  age: number;
}

type Admin = {
  name: string;
  accessLevel: number;
};
```

- Both can be extended:

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}

type Developer = Person & { language: string };
```

---

#### 🟢 **Type Declarations**

##### ➤ With `type`:

```ts
type Point = {
  x: number;
  y: number;
};
```

##### ➤ With `interface`:

```ts
interface Point {
  x: number;
  y: number;
}
```

- Both define object structures — choice depends on context and use case.

---

#### 🟠 **Aliasing Types for Different Data Structures**

##### ➤ Using `type` for array of strings or numbers:

```ts
type StringArray = string[];
type NumberArray = Array<number>;
```

##### ➤ Using `interface` for array structure:

```ts
interface StringArray {
  [index: number]: string;
}

interface NumberArray {
  [index: number]: number;
}
```

- Best used for enforcing **consistent types in arrays**.
- `type` is generally simpler for primitives, `interface` adds clarity for object/array structure.

---

### 📚 **Resources**

- [Type Assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
- [Type Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Interfaces vs Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Type Declarations](https://www.typescriptlang.org/docs/handbook/2/objects.html#defining-types)
- [Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)

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
   git checkout typeScript_2.1
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
