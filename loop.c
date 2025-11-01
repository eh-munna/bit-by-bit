#include <stdio.h>

int main()
{

    // for (int i = 1; i <= 10; i++)
    // {
    //     printf("Iteration %d\n", i);
    // }
    // for (int i = 1; i <= 10; i =i * 2)
    // {
    //     printf("Iteration %d\n", i);
    // }

    // for (int i = 1; i <= 10; i++)
    // {
    //     if (i % 2 == 0)
    //     {
    //         printf("Even number: %d\n", i);
    //     }
    //     else
    //     {
    //         printf("Odd number: %d\n", i);
    //     }
    // }

    printf("Enter a positive integer: ");
    int sum = 0;
    int n;
    scanf("%d", &n);

    for (int i = 0; i <= n; i++)
    {
        sum += i;
    }
    printf("Sum of all numbers from 1 to %d is %d\n", n, sum);

    return 0;
}