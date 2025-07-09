# **Bit By Bit** - Fullstack Learning Journey

## **Video Hosting with Tag-Based Filtering and Related Content**

Build a dynamic video hosting platform where users can explore videos filtered by tags and discover related content seamlessly, all managed through a robust Redux Toolkit architecture with asynchronous data fetching.

---

## **redux_6.1** Branch Overview

Welcome to **redux_6.1** of **Bit By Bit!**

In this branch, I developed a complete video hosting application that fetches and displays videos from an API. Users can:

- Filter videos dynamically by selected tags
- Open a video to view detailed information
- Automatically load and display related videos based on tags or context

All state management and data fetching are handled by **Redux Toolkit**, ensuring a predictable, centralized, and scalable application state.

---

## **Branch Organization**

### **Key Topics Covered**

- Fetched video data from an API using **Redux Thunk** for asynchronous logic
- Managed video collections and individual video details in **Redux slices**
- Implemented filtering logic to show videos matching user-selected tags
- Displayed related videos when a video is opened
- Ensured immutable state updates with **Redux Toolkit createSlice**
- Connected React components to Redux for:

  - Dispatching async thunks
  - Selecting video data and UI state

- Handled loading and error states gracefully for improved user experience

---

## **Resources**

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [Redux Thunk Middleware](https://redux.js.org/usage/writing-logic-thunks)
- [Redux Data Flow Overview](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
- [Using createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)

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
   git checkout redux_5.3
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
