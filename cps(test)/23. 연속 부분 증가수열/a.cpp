#include <stdio.h>

int main() {
    int n, i,j, pre, now, cnt, max=-2147;

    scanf("%d", &n);
    scanf("%d", &pre);
    cnt = 1;

    for(i=2; i<=n; i++) {
        scanf("%d", &now);
        if(now >= pre) {
            cnt++;
            if(cnt > max) max = cnt;
        }
        else
            cnt = 1;

        pre = now;
    }
    if(max == -2147)
        printf("1");
    else
        printf("%d", max);
}

// #include<stdio.h>			
// int main(){
// 	freopen("input.txt", "rt", stdin);
// 	int n, i, pre, now, cnt, max;
// 	scanf("%d", &n);
// 	scanf("%d", &pre);
// 	cnt=1;
// 	max=1;
// 	for(i=2; i<=n; i++){
// 		scanf("%d", &now);
// 		if(now>=pre){
// 			cnt++;
// 			if(cnt>max) max=cnt;
// 		}
// 		else cnt=1;
// 		pre=now;
// 	}
// 	printf("%d\n", max);	
// 	return 0;
// }