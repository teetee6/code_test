#include <stdio.h>

int main() {
    int a,b, sum=0;
    scanf("%d %d", &a, &b);

    printf("%d", a);
    sum += a;
    for(int i=a+1; i<=b; i++) {
        printf(" + %d", i);
        sum += i;
    }

    printf(" = %d", sum);

    return 0;
}