# **Bit By Bit** – Fullstack Learning Journey

---

## **TypeScript 2.4 – Asynchronous Programming**

Welcome to the **`typeScript_2.4`** branch of **Bit By Bit!**

This branch dives into **asynchronous programming in TypeScript**, focusing on:

- **Promises**
- **Async/Await**
- **Error Handling**

These concepts are **core building blocks** for handling real-world tasks like fetching data from APIs, performing I/O operations, or simulating delayed tasks.

---

### ✅ **What I've Learned**

---

#### 🔹 **Creating a Promise**

A Promise represents the **eventual completion or failure** of an asynchronous task.

```ts
const myPromise = () => {
  return new Promise((resolve, reject) => {
    const data = 'Hello, World!';
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject(new Error('No data found'));
      }
    }, 1000);
  });
};
```

- `resolve(value)` → Successfully finishes the async task.
- `reject(error)` → Returns an error if the task fails.

---

#### 🔸 **Consuming a Promise with Async/Await**

`async/await` syntax makes asynchronous code **look synchronous** and improves readability.

```ts
const result = async () => {
  try {
    const data = await myPromise();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

result();
```

- `await` pauses execution until the Promise resolves or rejects.
- `try/catch` ensures **proper error handling**.

---

#### 🧪 **Practical Utility: Async Function Wrapper**

You can wrap async calls in reusable utility functions.

```ts
const safeAsync = async <T>(promise: Promise<T>) => {
  try {
    const result = await promise;
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
};

(async () => {
  const { data, error } = await safeAsync(myPromise());
  if (data) console.log('Data:', data);
  if (error) console.error('Error:', error);
})();
```

This pattern is useful when working with **multiple async calls** in projects.

---

### 🔧 **Summary**

| Goal                   | Approach          | Example                      |
| ---------------------- | ----------------- | ---------------------------- |
| Create async operation | `new Promise()`   | `const p = new Promise(...)` |
| Wait for async result  | `await`           | `const data = await p`       |
| Handle success/failure | `try/catch` block | See `result()` example above |

---

### 📚 **Resources**

- [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Async/Await in TypeScript](https://www.typescriptlang.org/docs/handbook/2/async-await.html)
- [Error Handling with Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

---

### **How to Use This Branch**

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
   git checkout typeScript_2.4
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
