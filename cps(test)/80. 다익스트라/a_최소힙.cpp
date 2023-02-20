#include <bits/stdc++.h>
using namespace std;
struct Edge
{			 // 1번 정점에서 vex정점으로 가는데의 최소 비용을 찾을때마다 Edge를 큐에 넣어줌.
	int vex; // 목적지
	int dis; // 비용
	Edge(int a, int b)
	{
		vex = a;
		dis = b;
	}
	bool operator<(const Edge &b) const
	{
		return dis > b.dis;
	}
};

int main()
{
	ios_base::sync_with_stdio(false);
	freopen("input.txt", "rt", stdin);
	priority_queue<Edge> Q;
	vector<pair<int, int>> graph[30]; // a -> b가는데 드는 비용.
	int i, n, m, a, b, c;
	cin >> n >> m;
	vector<int> dist(n + 1, 2147000000);
	for (i = 1; i <= m; i++)
	{
		cin >> a >> b >> c;
		graph[a].push_back(make_pair(b, c));
	}
	Q.push(Edge(1, 0));
	dist[1] = 0;
	// 일반적인 다익스트라 풀이법(연산횟수 n회)는,
	// 한번 탐색 후 연결된 경로값들 갱신후 체크안한 목적지만 가는 방식인데,
	//   이것은 체크하는것(연산횟수 n회) 없이,
	//   최소 출발점으로부터 경로값이 최솟값으로 갱신되어 연결된 곳은
	//   그냥 다 큐에 넣고 간다. 철저히 체크하지 않으며 가서 연산횟수가 주는것이다.

	while (!Q.empty())
	{
		int now = Q.top().vex;	// 출발지
		int cost = Q.top().dis; // 출발지로 가는데 최소 비용
		Q.pop();
		// if (cost > dist[now])
		if (cost != dist[now])
			continue; // 출발지에 대하여,
					  // 미리 구한 값(dist[now])가 더 작다면, 굳이 간선 계산 안해도됨. (없어도 되지만, 연산량 많이 줄어들죠! ==> ch[]배열 대체 역할?)
		for (i = 0; i < graph[now].size(); i++)
		{
			int next = graph[now][i].first; // 도착지
			// int nextDis = cost + graph[now][i].second; // 도착지까지 비용
			int nextDis = dist[now] + graph[now][i].second; // 도착지까지 비용
			if (dist[next] > nextDis)
			{								 // 원래 구했던 값 >> 도착지 비용
				dist[next] = nextDis;		 // 갱신!
				Q.push(Edge(next, nextDis)); // 그 최소경로의 지점(도착지)에서, 또 다시 연결된걸 탐색하는게 다익스트라!
			}
		}
	}

	//	while부분 변수명 헷갈려서 이름 바꿨음
	//		while(!Q.empty()) {
	//			int now = Q.top().vex;
	//			int now_cost = Q.top().dis;
	//			Q.pop();
	//			if( dist[now] < now_cost ) continue;
	//			for(i=0; i<graph[now].size(); i++) {
	//				int next = graph[now][i].first;
	//				int next_cost = now_cost + graph[now][i].second;
	//				if( dist[next] > next_cost ) {
	//					dist[next] = next_cost;
	//					Q.push(Edge(next, next_cost));
	//				}
	//			}
	//		}

	for (i = 2; i <= n; i++)
	{
		if (dist[i] != 2147000000)
			cout << i << " : " << dist[i] << endl;
		else
			cout << i << " : impossible" << endl;
	}
}
