#include <stdio.h>

int n;
int Count(int len, int arr[]) {
    int cnt=1, sum=0;
    for(int i=1; i<=n; i++) {
        if(sum + arr[i] > len) {
            cnt++;
            sum = arr[i];
        }
        else
            sum += arr[i];
    }
    return cnt;
}

int main() {
    int m, lt, rt, mid, res, maxx=-2147;
    scanf("%d %d", &n, &m);

    int *arr = new int[n+1];
    int i;
    for(i=1; i<=n; i++) {
        scanf("%d", &arr[i]);
        rt += arr[i];
        if(maxx < arr[i]) maxx = arr[i];
    }

    lt=1;
    while(lt <= rt) {
        mid = (lt + rt) / 2;
        if(mid >= maxx && Count(mid, arr) <= m) {
            res = mid;
            rt = mid - 1;
        }
        else
            lt = mid + 1;
    }
    printf("%d", res);
}