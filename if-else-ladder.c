
#include <stdio.h>

int main()
{
    int age;

    printf("Enter your age: ");

    scanf("%d", &age);
    if (age > 35)
    {
        printf("You are old.\n");
    }
    else if (age >= 30 && age <= 35)
    {
        printf("You are middle-aged.\n");
    }
    else
    {
        printf("You are young.\n");
    }

    double a = 15 / 4;
    printf("%lf\n", a);

    return 0;
}