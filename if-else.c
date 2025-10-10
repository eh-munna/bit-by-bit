#include <stdio.h>

int main () {
    int age;

    printf("Enter your age: ");

    scanf("%d", &age);

    if(age >= 18 ){
        printf("You are eligible to vote.\n");
    }
    else{
        printf("You are not eligible to vote.\n"); 
    }

    if (age > 35) {
        printf("You are old.\n");
    } else if (age >= 30 && age <= 35) {
        printf("You are middle-aged.\n");
    }
    else
    {
        printf("You are young.\n");
    }
    



    return 0;




}


