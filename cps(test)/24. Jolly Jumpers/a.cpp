#include <stdio.h>
#include <math.h>

int arr[101], ch[101];
int main() {
    int n, tmp;
    scanf("%d", &n);

    scanf("%d", &arr[1]);

    for(int i=2; i<=n; i++) {
        scanf("%d", &arr[i]);
        int pos = abs(arr[i] - arr[i-1]);
        if(pos > 0 && pos < n && ch[pos] == 0)
            ch[pos] = 1;
    }

    for(int i=1; i<=n-1; i++) {
        if(ch[i] == 0) {
            printf("NO");
            return 0;
        }
    }
    printf("YES");
}

// #include<stdio.h>
// #include<vector>
// #include<algorithm>
// using namespace std;
// int main(){
// 	int n, i, now, pre, pos;
// 	scanf("%d", &n);
// 	vector<int> ch(n);
// 	scanf("%d", &pre);
// 	for(i=1; i<n; i++){
// 		scanf("%d", &now);
// 		pos=abs(pre-now);
// 		if(pos>0 && pos<n && ch[pos]==0) ch[pos]=1;
// 		else{
// 			printf("NO\n");
// 			return 0;
// 		}
// 		pre=now;
// 	}
// 	printf("YES\n");
// 	return 0;
// }