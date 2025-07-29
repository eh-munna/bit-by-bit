# **Bit By Bit** - Fullstack Learning Journey

---

## **TypeScript 2.2 – Branch Overview**

Welcome to the **`typeScript_2.2`** branch of **Bit By Bit!**

This branch dives into **generics in TypeScript**, showcasing how to write flexible, reusable, and type-safe components for arrays, functions, interfaces, and configurations.

---

### ✅ **What I've Learned**

#### 🔹 **Generics in TypeScript**

- Generics let you write code that works with **any type**, but still maintains **type safety**.

```ts
type ArrGeneric<T> = Array<T>;
type ArrGenericDifferent<T> = T[];

const genStrArr: ArrGeneric<string> = ['apple', 'banana'];
const genNumArr: ArrGenericDifferent<number> = [1, 2, 3];
```

- You can define **custom object types** with generics:

```ts
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

const users: ArrGeneric<User> = [
  { name: 'John', age: 30, isActive: true },
  { name: 'Jane', age: 25, isActive: false },
];
```

- Tuples with generics:

```ts
type GenericTuple<T, K> = [T, K];
const pair: GenericTuple<string, number> = ['apple', 1];
```

---

#### 🔸 **Using Generics with Interfaces**

- Interfaces can be generic, making them more **adaptable to various data types**.

```ts
interface Developer<T> {
  name: string;
  age: number;
  skills: T[];
}

const mobileDeveloper: Developer<string> = {
  name: 'Alice',
  age: 28,
  skills: ['React Native', 'Flutter'],
};
```

---

#### 🔷 **Default Parameters in Generics**

- You can assign **default types** to generic parameters, useful when optional customization is desired.

```ts
interface Config<V, U = null> {
  value: V;
  options?: U;
}

const settings: Config<string> = {
  value: 'dark',
};
```

- You can still override the default if needed:

```ts
const customSettings: Config<string, { theme: string }> = {
  value: 'light',
  options: { theme: 'minimal' },
};
```

---

#### 🟢 **Using Generics with Functions**

- Generic functions can accept and return values of various types while preserving type information:

```ts
function processInput<T>(input: T): T[] {
  return [input];
}

const strArr = processInput<string>('Hello TS');
const numArr = processInput<number>(42);
```

- You can also use multiple generics:

```ts
function matchCouple<T, K>(person1: T, person2: K): [T, K] {
  return [person1, person2];
}

const couple = matchCouple<string, string>('Alice', 'Jane');
```

---

### 📚 **Resources**

- [Generics Handbook](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Generic Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-objects)
- [Default Type Parameters](https://www.typescriptlang.org/docs/handbook/2/generics.html#default-type-arguments)
- [Generic Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures)

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
   git checkout typeScript_2.2
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
