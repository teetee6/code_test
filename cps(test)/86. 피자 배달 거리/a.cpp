#include<stdio.h>
int ch[20], m, n;

void DFS(int L, int cnt){
	if(L>n) return;
	if(cnt==m){
        for(int i=0; i<m; i++) 
            printf("%d ", ch[i]);
        puts("");
	}
	else{
		ch[cnt]=L;
		DFS(L+1, cnt+1);
		DFS(L+1, cnt);
	}
}

int main(){
	int i, j, a;
	scanf("%d %d", &n, &m);

	DFS(0, 0);
	return 0;
}