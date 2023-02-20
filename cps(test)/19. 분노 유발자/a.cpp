#include <stdio.h>

int arr[101];
int main() {
    // freopen("in1.txt", "rt", stdin);
    int n,i, max=-2147, cnt=0;

    scanf("%d", &n);
    for(i=1; i<=n; i++)
        scanf("%d", &arr[i]);

    max = arr[n];

    for(i=n-1; i>=1; i--) {
        if(arr[i] > max) {
            max = arr[i];
            cnt++;
        }
    }

    printf("%d", cnt);
}