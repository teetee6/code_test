#include<stdio.h>
#include<vector>
#include<algorithm>
using namespace std;
int n;
int Count(int len, int x[]){  // len은 말 구간 사이의 최솟값이라 보면됨.
	int i, cnt=1, pos=x[1];  
	for(i=2; i<=n; i++){
		if(x[i]-pos>=len){	// len=5이면, 말 구간 사이의 거리가 최솟값 포함 5이상이어야 하므로, 실제구간길이는 5,6,7,...
			cnt++;
			pos=x[i];
		}
	}
	return cnt;
}
int main(){
	//freopen("input.txt", "rt", stdin);
	int m, i, lt=1, rt, mid, res;	// 구간 길이의 최소값은 1이어야 한다.
	scanf("%d %d", &n, &m);
	int *x = new int[n+1];
	for(i=1; i<=n; i++){
		scanf("%d", &x[i]);
	}
	sort(x+1, x+n+1);
	rt=x[n];
	while(lt<=rt){
		mid=(lt+rt)/2;
		if(Count(mid, x)>=m){
			res=mid;
			lt=mid+1;
		}
		else rt=mid-1;
	}
	printf("%d\n", res);
	delete[] x;
	return 0;
}

// 말간의 거리(mid)가 최대가 되게 하면서, 최소갯수의 말은 배치해야 한다.