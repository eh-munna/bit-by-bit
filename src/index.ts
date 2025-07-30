{
  // ********************************************* //

  // Making Generic User

  const userModel = <T>(input: T) => {
    const role = 'user';
    return {
      ...input,
      role,
    };
  };

  const input = {
    name: 'Jane Doe',
    age: 30,
  };

  const user1 = userModel(input);
  console.log({ user1 });

  // Constraints in typescript

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
  // const extendedUserModel = <T>(input: T & UserContact) => {
  //   const role = 'user';
  //   return {
  //     ...input,
  //     role,
  //   };
  // };

  const extendedInput = {
    ...input,
    email: 'a@b.com',
    address: '123',
  };

  const user2 = extendedUserModel(extendedInput);
  console.log({ user2 });

  // Constraint using key of

  interface User {
    name: string;
    email: string;
    phone?: string;
  }

  type KeyOfUser = keyof User;

  const name: KeyOfUser = 'name';

  const getValue = <T, K extends keyof T>(input: T, key: K) => {
    return input[key];
  };

  const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
  };

  const carMake = getValue(car, 'make');
  console.log({ carMake });
}

/* 
  
  
  To use `keyof`, then must use `type`, not `interface`.

Here’s why:

### 🔑 `keyof` always produces a **type**, specifically a **union of string literal types** representing the keys of an object or interface.

You can’t use `interface` to define a union of keys.

---

### ✅ Valid (using `type`):

```ts
interface User {
  name: string;
  email: string;
  phone?: string;
}

type KeyOfUser = keyof User;
// KeyOfUser = "name" | "email" | "phone"
```

---

### ❌ Invalid (using `interface`):

```ts
interface KeyOfUser extends keyof User {} // ❌ Error: An interface can only extend another interface or class
```

---

### 🔧 Summary

| Goal                   | Correct keyword  | Example                            |          |
| ---------------------- | ---------------- | ---------------------------------- | -------- |
| Define an object shape | `interface`      | `interface User { name: string; }` |          |
| Get the keys of a type | `type` + `keyof` | `type Keys = keyof User`           |          |
| Alias any other type   | `type`           | \`type A = string                  | number\` |

  */
