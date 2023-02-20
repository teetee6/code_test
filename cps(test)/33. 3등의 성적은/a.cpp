#include <stdio.h>

int arr[101];
int main() {
    // freopen("input.txt", "rt", stdin);
    int n, i, j,tmp, cnt=0, idx;
    scanf("%d", &n);
    for(i=0; i<n; i++){
		scanf("%d", &arr[i]);
	}

    for(i=0; i<n-1; i++) {
        idx = i;
        for(j=i+1; j<n; j++) {
            if(arr[j] > arr[idx]) idx = j;
        }
        tmp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = tmp;
    }

    // for(i=0; i<n-1; i++) {
    //     for(j=0; j<n-1-i; j++) {
    //         if(arr[j] < arr[j+1]) {
    //             tmp = arr[j];
    //             arr[j] = arr[j+1];
    //             arr[j+1] = tmp;
    //         }
    //     }
    // }

    for(i=1; i<n; i++ ) {
        if(arr[i-1] != arr[i]) cnt++;
        if(cnt==2) {
            printf("%d\n", arr[i]);
            break;
        }
    }
}