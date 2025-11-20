# **Bit By Bit** - Fullstack Learning Journey

---

# **TypeScript 2.7 – Branch Overview**

This branch focuses on **key-based type extraction** in TypeScript — specifically how `typeof`, `keyof`, and indexed access types work together to create **exact, literal-safe**, compile-time-verified systems.

The core idea:
You define a frozen object → TypeScript reads its shape → you extract keys → you extract values → you restrict functions to those values.

---

## **Core Concept: Using `typeof` + `keyof` Instead of Enums**

```ts
const ROLE = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
} as const;
```

`as const` locks:

- the property names
- the literal values (`"admin"`, `"user"`, `"guest"`)
- and converts everything into **readonly** literals

### Step 1 — Extract the object’s type

```ts
type T1 = typeof ROLE;
```

TypeScript reads the **shape** of the object:

```ts
{
  readonly ADMIN: "admin";
  readonly USER: "user";
  readonly GUEST: "guest";
}
```

No runtime code. Pure type introspection.

---

### Step 2 — Extract only the keys

```ts
type KeysOfRole = keyof typeof ROLE;
```

This builds a union of the object's **property names**:

```
"ADMIN" | "USER" | "GUEST"
```

---

### Step 3 — Extract only the values

```ts
type RoleValues = (typeof ROLE)[KeysOfRole];
 >> Here, KeysOfRole which is actually: type KeysOfRole = keyof typeof ROLE;
```

TypeScript resolves it like this:

```
typeof ROLE["ADMIN" | "USER" | "GUEST"]

↓

typeof ROLE["ADMIN"] | typeof ROLE["USER"] | typeof ROLE["GUEST"]

↓

"admin" | "user" | "guest"
```

You now have a **value union type** directly extracted from a real object.

---

### Step 4 — Use it in a function

```ts
function getRole(role: (typeof ROLE)[KeysOfRole]): string {
  return `Role is: ${role}`;
}

getRole(ROLE.ADMIN); // Valid
getRole('admin'); // Also valid (same literal)
```

Why both work:
TypeScript erases types at runtime.
`ROLE.ADMIN` is `"admin"`.
`"admin"` is `"admin"`.
The function accepts any value from the union `"admin" | "user" | "guest"`

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
   git checkout typeScript_2.7
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
