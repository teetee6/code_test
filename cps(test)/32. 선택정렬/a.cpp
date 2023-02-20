#include <stdio.h>

int arr[101];
int main() {
    freopen("input.txt", "rt", stdin);
    int n, idx, tmp;
    scanf("%d", &n);
    for(int i=0; i<n; i++) 
        scanf("%d", &arr[i]);

    for(int i=0; i<n-1; i++) {
        idx = i;
        for(int j=i+1; j<n; j++) {
            if(arr[idx] > arr[j]) {
                idx = j;
            }
        }
        tmp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = tmp;
    }

    for(int i=0; i<n; i++)
        printf("%d ", arr[i]);
}