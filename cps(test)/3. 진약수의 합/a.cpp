#include <stdio.h>

int main( ) {
    freopen("in1.txt", "rt", stdin);
    int n,i, sum=0;
    scanf("%d", &n);

    printf("1");
    sum += 1;
    for(i=2; i<n; i++) {
        if(n % i == 0 ) {
            printf(" + %d", i);
            sum += i;
        }
    }
    printf(" = %d",sum);
}