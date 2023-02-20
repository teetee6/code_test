#include <stdio.h>

int main() {
    // freopen("input.txt", "rt", stdin);
    int n,i,j;
    scanf("%d", &n);
    int arr[n+1] = {0,};

    for(i=2; i<=n; i++) {
        for(j=1; i*j<=n; j++) {
            arr[i*j]++;
        }
    }

    for(i=1; i<=n; i++) {
        printf("%d ", arr[i] + 1);
    }
}

