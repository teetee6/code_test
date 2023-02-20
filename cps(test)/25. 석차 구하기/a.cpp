#include <stdio.h>

int cnt[101];
int main() {
    // freopen("input.txt", "rt", stdin);
    int n;
    scanf("%d", &n);

    int arr[101];

    int i,j;
    for(i=1; i<=n; i++) {
        scanf("%d", &arr[i]);
    }

    for(i=2; i<=n; i++) {
        for(j=i-1; j>=1; j--) {
            if(arr[j] < arr[i])
                cnt[j]++;
            if(arr[i] < arr[j]) 
                cnt[i]++;
        }
    }

    for(i=1; i<=n; i++) 
        printf("%d ", cnt[i] + 1);
}


// #include<stdio.h>
// int main(){
// 	//freopen("input.txt", "rt", stdin);
// 	int i, j, a[200], b[200], n;
// 	scanf("%d", &n);
// 	for(i=1; i<=n; i++){
// 		scanf("%d", &a[i]);
// 		b[i]=1;
// 	}
// 	for(i=1; i<=n; i++){
// 		for(j=1; j<=n; j++){
// 			if(a[j]>a[i]) b[i]++;
// 		}
// 	}
// 	for(i=1; i<=n; i++){
// 		printf("%d ", b[i]);
// 	}
// 	return 0;
// }