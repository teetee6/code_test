#include <stdio.h>

int main() {
    int i, n, m, max = -2147;
    scanf("%d %d", &n, &m);
    
    int arr[n], cnt=0;

    for(i=0; i<n; i++) {
        scanf("%d", &arr[i]);

        if(arr[i] > m) {
            cnt++;
            if(cnt > max) max = cnt;
        }
        else {
            cnt=0;
        }
    }

    if(max == -2147)
        printf("-1");
    else
        printf("%d", max);
}