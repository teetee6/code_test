#include<stdio.h>
#include<vector>
#include<algorithm>
using namespace std;	
void D(int x){
	if(x==0) return;
	else{
		D(x/2);
		printf("%d", x%2);
	}
}	
int main(){
	// freopen("input.txt", "rt", stdin);
	int n;      // 11이면 나머지 나오는 순서는 1101 순임 (뒤집으면 정답 1011)
	scanf("%d", &n);
	D(n);
	return 0;
}