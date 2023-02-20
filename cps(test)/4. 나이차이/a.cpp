#include <stdio.h>

int main() {
    int n,i, max=-2147, min=2147, tmp;

    scanf("%d", &n);

    for(i=1; i<=n; i++) {
        scanf("%d", &tmp);
        if(min > tmp) min = tmp;
        if(max < tmp) max = tmp;
    }

    printf("%d", max-min);
}