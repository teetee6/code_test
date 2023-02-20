#include <stdio.h>

int cnt[1001];
int main() {
    int n, i,j;
    scanf("%d", &n);
    
    for(i=2; i<=n; i++) {
        int tmp = i; 
        j = 2;
        while(tmp != 1) {
            if(tmp % j == 0) {
                cnt[j]++;
                tmp /= j;
                continue;
            }
            else j++;
        }
    }

    printf("%d! = ", n);

    for(i=2; i<=n; i++) {
        if(cnt[i] == 0) continue;
        printf("%d ", cnt[i]);
    }
}