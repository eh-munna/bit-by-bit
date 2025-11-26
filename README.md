# **Bit By Bit** - Fullstack Learning Journey

## **Node_1.1 – Branch Overview**

## **Core Concepts are:**

- Understanding `process.argv` (Command-Line Arguments)
- Reading Files with the fs Module
  - Synchronous File Reading
  - Asynchronous File Reading
- Writing and Appending Files with the fs Module
  - Synchronous File Writing
  - Asynchronous File Writing
- Deleting Files with the fs Module
- Introduction to the path Module
  - Get the file directory, file name, extension, and file path object
  - Removing file extensions
  - Concatenating path segments
- Organizing Files with the path Module
  - Creating directories
  - Copying files
  - Moving files
- Introduction to the os Module
  - Get the current working directory
  - Get the operating system
  - Get the system's release level
  - Get the system's architecture
- Introduction to the Crypto Module
  - Generating a random string
  - Hashing a string
  - Encrypting and decrypting a string
- Configuring Environment Variables

---

## **Notes:**

### **`process.argv`**

```js
const args = process.argv; // Get command-line arguments
```

- `process` is a global object provided by Node.
- `process.argv` is an array containing all command-line arguments used when running the script.

### **How `process.argv` Works**

1. **Index 0:** Path to the Node executable
2. **Index 1:** Path to the script being executed
3. **Index ≥ 2:** User-provided arguments

### **Example**

Running:

```bash
node process.js arg1 arg2 arg3
```

Produces:

```js
[
  '/path/to/node', // Index 0
  '/path/to/process.js', // Index 1
  'arg1', // Index 2
  'arg2', // Index 3
  'arg3', // Index 4
];
```

```js
console.log('Arguments:', args);
```

---

## **Resources:**

## **How to Use This Branch**

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
   git checkout node_1.1
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
