# **Bit By Bit** - Fullstack Learning Journey

## **Redux: Simple Data Fetching**

Fetch data from a server using Redux.

---

## **redux_4.2** Branch Overview

Welcome to **redux_4.2** of **Bit By Bit!**

In this branch, I practiced fetching data from a server in Redux using custom middleware to handle asynchronous logic. The implementation allows the application to request todo data from an external API and store it in the Redux store. I created a custom `fetchingMiddleware` that checks if a dispatched action is a function and invokes it, enabling async flows similar to Redux Thunk.

---

## **Branch Organization**

### **Key Topics Covered**

- Implemented custom middleware to support dispatching async functions
- Created an asynchronous action (thunk) to fetch todo data from an API
- Practiced updating the Redux store immutably with the fetched data
- Reviewed the flow of dispatching regular and async actions in Redux

---

### **Resources**

- [Redux Async Logic](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)
- [Redux Middleware](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware)

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
   git checkout redux_4.2
   ```

4. **Install dependencies:**

   ```bash
   npm install
   ```

5. **Run the app:**

   ```bash
   npm run dev
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
