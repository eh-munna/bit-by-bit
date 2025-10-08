// scanf to take input from user

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




