#include<stdio.h>
#include<algorithm>
#include<queue>
#include<vector>
using namespace std;
int dist[101];
struct Edge{
	int s;
	int e;
	int val;
	Edge(int a, int b, int c){
		s=a;
		e=b;
		val=c;
	}
};

int main(){
	freopen("input.txt", "rt", stdin);
	vector<Edge> Ed;
	int i, n, m, a, b, c, j;
	scanf("%d %d", &n, &m);
	for(i=1; i<=m; i++){
		scanf("%d %d %d", &a, &b, &c);
		Ed.push_back(Edge(a, b, c));	//그냥 다 넣어줌
	}
	for(i=1; i<=n; i++){
		dist[i]=2147000000;
	}
	dist[1]=0;
	for(i=1; i<n; i++){  // i는 간선의 갯수. 총 n-1번해줌.
		for(j=0; j<Ed.size(); j++){
			int s=Ed[j].s;
			int e=Ed[j].e;
			int w=Ed[j].val;
			if(dist[s]!=2147000000 && dist[s]+w<dist[e]){	// 출발이 무한대면 할 필요없음. 갱신할 필요가 있으면 갱신해줌.
				dist[e]=dist[s]+w;
			}
		}
	}
	// 위의 과정에서 1~n까지의 모든 최단거리가 최종정리가 되었다.
	
	// 이제는, 음의 사이클이 있는지 확인해보자.
	// 간선의 갯수 n개로 해서 더 낮아질 수 있는 최소비용이 있는지 보자.(그것이 음의 사이클이다)
	for(j=0; j<Ed.size(); j++){	
		int u=Ed[j].s;
		int v=Ed[j].e;
		int w=Ed[j].val;
		if(dist[u]!=2147000000 && dist[u]+w<dist[v]){
			printf("-1\n");
			exit(0);
		}
	}
	printf("%d\n", dist[n]);
	return 0;
}