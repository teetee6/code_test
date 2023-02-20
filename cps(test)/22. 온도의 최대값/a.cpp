#include <stdio.h>

int arr[100001];
int main() {
    // freopen("input.txt", "rt", stdin);
    int n,k, i,j, sum=0, max=-2147000000;
    scanf("%d %d", &n, &k);

    for(i=1; i<k; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    for(i=k; i<=n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];

        if(sum > max) max = sum;
        sum -= arr[i-k+1];
    }

    printf("%d", max);
}

// #include<stdio.h>
// #include<vector>
// using namespace std;			
// int main(){
// 	freopen("input.txt", "rt", stdin);
// 	int n, k, i, j, sum=0, max=-2147000000;
// 	scanf("%d %d", &n, &k);
// 	vector<int> a(n);
// 	for(i=0; i<n; i++){
// 		scanf("%d", &a[i]);
// 	}
// 	for(i=0; i<=n-k; i++){
// 		sum=0;
// 		for(j=i; j<i+k; j++){
// 			sum=sum+a[j];
// 		}
// 		if(sum>max) max=sum;
// 	}
// 	printf("%d\n", max);
// 	return 0;
// }