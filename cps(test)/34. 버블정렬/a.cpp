#include <stdio.h>
int arr[101];

int main() {
    freopen("input.txt", "rt", stdin);

    int n, i,j, tmp;
    scanf("%d", &n);

    for(i=0; i<n; i++)
        scanf("%d", &arr[i]);

    for(i=0; i<n-1; i++) {
        for(j=0; j<n-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }

    for(i=0; i<n; i++)
        printf("%d ", arr[i]);
}