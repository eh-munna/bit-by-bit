# **Bit By Bit** – My Learning Journey

---

## **Intro to Programming with C 1.1 – Basic Syntax, Variables & Data Types**

Welcome to the **`intro-to-programming-with-c_1.1`** branch of **Bit By Bit!**

This branch focuses on the **basics of C programming**, helping me strengthen my **fundamental programming skills**.

---

### ✅ **What I've Learned**

- **Basic Syntax**: Writing a complete C program with `main()` function.
- **Variables**: Declaring, initializing, and using variables of different types.
- **Data Types**: Understanding `int`, `float`, `char`, and `bool`.
- **Input/Output**: Using `printf()` to display values.
- **Boolean Values**: Using `stdbool.h` and boolean variables.
- **Taking Input**: Using `scanf()` to take input from the user.

---

### 📄 **Example Code**

````c
#include <stdio.h>

int main() {
    int takeInput;

    printf("Enter a number: ");
    scanf("%d", &takeInput);
    printf("You have entered: %d\n", takeInput);

    // Write a C program that will take 2 numbers from the user and then print the 2nd number first and then first number.

    int first, second;
    printf("Enter first number: ");
    scanf("%d", &first);
    printf("Enter second number: ");
    scanf("%d", &second);
    printf("Your numbers are: %d %d\n", second, first);

    return 0;
}
```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    int number = 10;
    char charValue = 'C';
    bool boolValue = true;
    float floatValue = 5.624;

    printf("This is a number: %d\n", number);
    printf("This is a character: %c\n", charValue);
    printf("This is a float: %.2f\n", floatValue);
    printf("This is a boolean: %d\n", boolValue);

    return 0;
}
````

---

### 📚 **Resources**

- [C Programming Tutorial](https://www.learn-c.org/) – Interactive C programming tutorials.
- [C Reference](https://en.cppreference.com/w/c) – Complete reference for C syntax and standard library.

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
git checkout intro-to-programming-with-c_1.1
```

4. **Compile and run code:**

```bash
gcc your_file.c -o your_file && ./your_file
```

---

### **Connect with Me**

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
