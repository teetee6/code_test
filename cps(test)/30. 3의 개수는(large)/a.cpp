#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int cnt=0, k=1, cur,lt,rt;

    while(1) {
        cur = (n/k) % 10;
        lt = n / (k*10);
        rt = n % k;

        if(cur == 0 ) break;
        if(cur> 3) cnt+= (lt+1) * k;
        else if(cur<3) cnt+= (lt*k);
        else cnt += (lt*k) + (rt+1);

        k *= 10;
    }

    printf("%d", cnt);
}