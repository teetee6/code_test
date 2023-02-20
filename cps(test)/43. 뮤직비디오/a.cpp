#include<stdio.h>
#include<algorithm>
using namespace std;
int a[1001], n;
int Count(int s){
	int i, cnt=1, sum=0;
	for(i=1; i<=n; i++){
		if(sum+a[i]>s){		// 용량은 = 까지 포함하므로, 등호가 없어야함!
			cnt++;
			sum=a[i];
		}
		else sum=sum+a[i];
	}
	return cnt;
}
int main(){
	// freopen("input.txt", "rt", stdin);
	int m, i, lt=1, rt=0, mid, res, maxx=-2147000000;
	scanf("%d %d", &n, &m);
	for(i=1; i<=n; i++){
		scanf("%d", &a[i]);
		rt=rt+a[i];     // rt = 전체 노래 길이
		if(a[i]>maxx) maxx=a[i];
	}
	while(lt<=rt){  // dvd가 적게 필요했다면, 용량이 컸다는 거므로, 용량을 줄여서 다시 탐색하자.
		mid=(lt+rt)/2;      // mid = DVD당 노래길이(용량)
		if(mid>=maxx && Count(mid)<=m){		// 1곡을 dvd 여러곳에 나눠담으면 안됨. 즉, 1~9분이라 치면, DVD의 한곡당 최소값을 9분으로 쳐야함.
			res=mid;
			rt=mid-1;
		}
		else lt=mid+1;
	}
	printf("%d\n", res);
	return 0;
}

// DVD의 용량(mid)가 최소가 되게 하면서, 최대갯수의 DVD에 배치해야 한다. 