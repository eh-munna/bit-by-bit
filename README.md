# **Bit By Bit** - Fullstack Learning Journey

## **Redux To-Do Management with API Integration**

Manage a dynamic to-do list using Redux reducers and asynchronous API calls via Redux Thunk, ensuring a predictable and centralized application state.

---

## **redux_4.3** Branch Overview

Welcome to **redux_4.3** of **Bit By Bit!**

In this branch, I focused on building a complete to-do list application that interacts with an external API. The application fetches, creates, updates, and deletes tasks through HTTP requests handled by Redux Thunk middleware. All fetched data is stored in the Redux state, providing a single source of truth for UI components.

---

## **Branch Organization**

### **Key Topics Covered**

- Fetched to-do data from an API using Redux Thunk for async logic
- Created reducers to add new tasks to the Redux store from API responses
- Implemented deletion logic for individual tasks both on the server and in the store
- Added functionality to clear all completed tasks via API calls
- Managed arrays immutably in reducers for consistent and predictable state updates
- Built filtering logic for tasks based on completion status (complete, incomplete, all)
- Implemented color-based task filtering for priority management
- Connected React components to Redux for dispatching async actions and selecting task data from the store

---

### **Resources**

- [Redux Thunk Documentation](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)
- [Redux Reducers Documentation](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)
- [Redux Actions and Data Flow](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)

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
   git checkout redux_4.3
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
