# **Bit By Bit** - Fullstack Learning Journey

---

## **TypeScript 2.3 – Branch Overview**

Welcome to the **`typeScript_2.3`** branch of **Bit By Bit!**

This branch explores **key-based constraints in TypeScript**, including `keyof`, `extends`, and `extends keyof`. These features help build **type-safe**, **flexible**, and **controlled** utilities for accessing object properties and enforcing structure.

---

### ✅ **What I've Learned**

---

#### 🔹 **`keyof` Operator in TypeScript**

- `keyof` lets you extract the **keys of an object type** into a **union of string literals**.

```ts
interface User {
  name: string;
  email: string;
  phone?: string;
}

type KeyOfUser = keyof User; // "name" | "email" | "phone"

const key1: KeyOfUser = 'name'; // ✅
const key2: KeyOfUser = 'email'; // ✅
const key3: KeyOfUser = 'Jane'; // ❌ Error
```

- `keyof` must be used with `type`, **not** `interface`.

```ts
// ✅ Valid
type Keys = keyof User;

// ❌ Invalid
// interface Invalid extends keyof User {} // Error: interfaces can only extend other interfaces or classes
```

---

#### 🔸 **Using `extends` for Type Constraints**

- You can **constrain generic types** using `extends`, ensuring that the input must match a particular structure.

```ts
interface UserContact {
  email: string;
  address: string;
  phone?: string;
}

const extendedUserModel = <T extends UserContact>(input: T) => {
  const role = 'user';
  return {
    ...input,
    role,
  };
};

const input = {
  name: 'Jane Doe',
  age: 30,
  email: 'a@b.com',
  address: '123 Main St',
};

const user = extendedUserModel(input); // ✅ Valid because it includes UserContact props
```

---

#### 🔷 **Using `extends keyof` for Key-Based Access**

- You can write **safe functions** that only accept valid keys of an object using `extends keyof`.

```ts
const getValue = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
};

const carMake = getValue(car, 'make'); // ✅ OK
const carYear = getValue(car, 'year'); // ✅ OK

// ❌ Error: Property 'price' does not exist
// const carPrice = getValue(car, 'price');
```

> This pattern is especially useful for **utility functions** where dynamic access is needed but still needs **type safety**.

---

#### 🧪 **Practical Utility: Generic User with Role**

```ts
const userModel = <T>(input: T) => {
  const role = 'user';
  return {
    ...input,
    role,
  };
};

const baseInput = {
  name: 'Jane Doe',
  age: 30,
};

const user1 = userModel(baseInput); // Generic user with role
```

```ts
// Now extend with constraints
const extendedInput = {
  ...baseInput,
  email: 'a@b.com',
  address: '123 Main St',
};

const user2 = extendedUserModel(extendedInput); // ✅ Valid: has email & address
```

---

### 🔧 Summary

| Goal                   | Correct keyword  | Example                            |          |
| ---------------------- | ---------------- | ---------------------------------- | -------- |
| Define an object shape | `interface`      | `interface User { name: string; }` |          |
| Get the keys of a type | `type` + `keyof` | `type Keys = keyof User`           |          |
| Alias any other type   | `type`           | \`type A = string                  | number\` |

---

### 📚 **Resources**

- [Keyof Operator](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)
- [Type Constraints with `extends`](https://www.typescriptlang.org/docs/handbook/2/generics.html#constraints)
- [Generic Key Access Patterns](https://www.typescriptlang.org/docs/handbook/2/objects.html#keyof-type-operator)
- [Note](https://www.notion.so/eh-munna/Next-Level-Web-Development-5e208d26ca694a69846f0b4ac2e361b1?source=copy_link#24050d4905ac8040bdd5f852deaf100e)

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
   git checkout typeScript_2.3
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
