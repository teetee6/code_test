#include <stdio.h>

int main() {
    // freopen("input.txt", "rt", stdin);
    int n, cnt2=0, cnt5=0;
    scanf("%d" , &n);

    for (int i=2; i<=n; i++) {
        int tmp = i;
        while(tmp % 2 == 0) {
            tmp /= 2;
            cnt2++;
        }
        while(tmp % 5 == 0) {
            tmp /= 5;
            cnt5++;
        }
    }

    if(cnt2 > cnt5) printf("%d", cnt5);
    else printf("%d", cnt2);
}


// #include<stdio.h>
// #include<vector>
// #include<algorithm>
// using namespace std;
// int main(){
// 	freopen("input.txt", "rt", stdin);
// 	int n, i, j, tmp, cnt1=0, cnt2=0;
// 	scanf("%d", &n);
// 	for(i=2; i<=n; i++){
// 		tmp=i;
// 		j=2;
// 		while(1){
// 			if(tmp%j==0){
// 				if(j==2) cnt1++;
// 				else if(j==5) cnt2++;
// 				tmp=tmp/j;
// 			}
// 			else j++;
// 			if(tmp==1) break;
// 		}
// 	}
// 	if(cnt1<cnt2) printf("%d\n", cnt1);
// 	else printf("%d\n", cnt2);
// 	return 0;
// }
				
		
	