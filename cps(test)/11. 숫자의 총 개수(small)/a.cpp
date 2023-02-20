#include <stdio.h>

int main() {
    int n,i,j, cnt=0, tmp;
    scanf("%d", &n);
    
    for(i=1; i<=n; i++) {
        tmp = i;
        while(tmp != 0) {
            cnt++;
            tmp /= 10;
        }
    }
    
    printf("%d", cnt);
}