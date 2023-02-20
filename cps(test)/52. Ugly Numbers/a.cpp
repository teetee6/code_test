#include <bits/stdc++.h>
using namespace std;
int a[1501];
int main(){
	//freopen("input.txt", "rt", stdin);
	int n, i, p2, p3, p5, min=0;
	scanf("%d", &n);
	a[1]=1;
	p2=p3=p5=1;
	for(i=2; i<=n; i++){
		if(a[p2]*2<a[p3]*3) min=a[p2]*2;
		else min=a[p3]*3;
		if(a[p5]*5<min) min=a[p5]*5;
		if(min==a[p2]*2) p2++;
		if(min==a[p3]*3) p3++;
		if(min==a[p5]*5) p5++;
		a[i]=min;
	}
	printf("%d\n", a[n]);	
	return 0;
}

// a[i]번째에 들어갈 최솟값을 찾고, 최솟값의 후보가 여러개면(여러 포인터들로 부터 나왔으면) 그 포인터들을 모두 +1처리.

// 2*3으로 이루어진것은, 2+2+2 로도 표현되니까, 그냥 2,3,5 포인터로 진행하면 됨.