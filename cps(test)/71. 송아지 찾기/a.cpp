#include<stdio.h>
#include<vector>
#include<queue>
#include<algorithm>
using namespace std;
int ch[10001], d[3]={1, -1, 5};
int main(){
	// freopen("input.txt", "rt", stdin);
	int s, e, x, pos, i;
	queue<int> Q;
	scanf("%d %d", &s, &e);
	ch[s]=1;
	Q.push(s);
	while(!Q.empty()){
		x=Q.front();
		Q.pop();
		for(i=0; i<3; i++){
			pos=x+d[i];
			if(pos<=0 || pos>10000) continue;
			if(pos==e){
				printf("%d\n", ch[x]);	// 시작점의 체크값이 1이라서 +1된 상태임. 꼭 이렇게 아니더라도 -1만 시키면 됨.
				exit(0);
			}
			if(ch[pos]==0){
				ch[pos]=ch[x]+1;
				Q.push(pos);
			}
		}
	}
	return 0;
}

// 4 -> 9 -> 14의 순서로 감.
// 9에서 14로 갈 때, 발견하여 종료함.

