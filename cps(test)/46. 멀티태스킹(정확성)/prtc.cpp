#include <stdio.h>

int a[2001];
int main() {
    int n,k, i, tot=0, cnt=0, p=0;
    scanf("%d", &n);
    for(i=1; i<=n; i++) {
        scanf("%d", &a[i]);
        tot = tot+a[i];
    }
    scanf("%d", &k);
    if(k >= tot) {
        printf("-1");
        return 0;
    }

    while(1) {
        p++;
        if(p>n) p=1;
        if(a[i] == 0 ) continue;
        a[p]--;
        cnt++;
        if(cnt==k) break;
    }

    while(1) {
        p++;
        if(p>n) p=1;
        if(a[p] !=0) break;
    }
    printf("%d", p);
}