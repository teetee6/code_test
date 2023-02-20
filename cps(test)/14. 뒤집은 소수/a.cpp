#include <stdio.h>

bool isPrime(int x) {
    if(x==1) return false;
    for(int i=2; i<x; i++) {
        if(x % i == 0)
            return false;
    }
    return true;
}

int reverse(int x) {
    int res = 0;
    while(x != 0) {
        res = res * 10 + (x % 10);
        x /= 10;
    }
    return res;
}

int main() {
    // freopen("in2.txt", "rt", stdin);
    int n,i, tmp;
    scanf("%d", &n);

    for(i=0; i<n; i++) {
        scanf("%d", &tmp);

        int rev_tmp = reverse(tmp);
        if( isPrime(rev_tmp) ) {
            printf("%d ", rev_tmp);
        }
    }
}