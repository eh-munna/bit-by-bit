# **Bit By Bit** - Fullstack Learning Journey

---

## **TypeScript 1.1 – Branch Overview**

Welcome to the **`typeScript_1.1`** branch of **Bit By Bit!**

This branch focuses on the foundational and advanced type features of TypeScript, helping build robust, scalable, and well-typed applications.

---

### ✅ **What I've Learned**

#### 🟦 **Primitive Data Types**

Covered the basic building blocks of TypeScript:

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`

These types help enforce data correctness at the most granular level.

#### 🟪 **Non-Primitive Data Types**

Explored more complex structures including:

- `object`
- `array`
- `function`
- `class`

These allow for modeling real-world entities and program logic in a structured way.

#### 🟨 **Object, Optional, and Literal Types**

- Defined structured `object` shapes with specific properties.
- Used **optional properties** (`prop?: type`) to increase flexibility.
- Applied **literal types** to restrict values to a specific set of strings or numbers for more precise typing.

#### 🟫 **Type Aliases**

Used `type` to create custom type definitions that simplify and reuse complex type structures across the app.

```ts
type User = {
  id: number;
  name: string;
  isActive?: boolean;
};
```

#### 🟧 **Union & Intersection Types**

---

### 🔹 **Union Types (`|`)**

**Union types** let a variable be **one of several types**.
It means: "this **or** that".

**Syntax:**

```ts
let value: string | number;
```

**Example:**

```ts
function printId(id: number | string) {
  console.log("ID:", id);
}

printId(101);         // ✅ OK
printId("abc-123");   // ✅ OK
```

👉 With union types, you can **only use methods** that are **common to all types** in the union, unless you **narrow** the type using type guards.

---

### 🔹 **Intersection Types (`&`)**

**Intersection types** combine **multiple types into one**, requiring the variable to satisfy **all** of them.
It means: "this **and** that".

**Syntax:**

```ts
type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;
```

**Example:**

```ts
const staffMember: Staff = {
  name: "Alice",
  employeeId: 1001
}; // ✅ Must include both name and employeeId
```
---

### 🧩 Additional Example

```ts
type Admin = { role: 'admin'; accessLevel: number };
type User = { name: string };
type AdminUser = Admin & User;

const adminUser: AdminUser = {
  role: 'admin',
  accessLevel: 5,
  name: 'Emran'
}; // ✅ Must satisfy both Admin and User
```
---

### 📚 **Resources**

- [Primitive Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)
- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Optional Properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties)
- [Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- [Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
- [Union and Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#union-and-intersection-types)

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
   git checkout typeScript_1.1
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
