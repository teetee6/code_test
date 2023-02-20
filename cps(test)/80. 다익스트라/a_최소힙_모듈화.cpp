#include <bits/stdc++.h>
using namespace std;

vector<pair<int, int>> graph[30]; // a -> b가는데 드는 비용.

void dijkstra(vector<int> &dist, int start)
{
	priority_queue<pair<int, int>> pQ;
	pQ.push({0, start});
	dist[start] = 0;
	while (!pQ.empty())
	{
		int now = pQ.top().second;
		int cost = -pQ.top().first;
		pQ.pop();
		if (dist[now] < cost)
			continue;
		for (int i = 0; i < graph[now].size(); i++)
		{
			int next = graph[now][i].first; // graph엔 {정점, 가는비용} pair로 넣어줬음
			int next_cost = graph[now][i].second + cost;
			if (dist[next] > next_cost)
			{
				dist[next] = next_cost;
				pQ.push({-next_cost, next});
			}
		}
	}
}

int main()
{
	ios_base::sync_with_stdio(false);
	freopen("input.txt", "rt", stdin);
	int i, n, m, a, b, c;
	cin >> n >> m;
	vector<int> dist(n + 1, 2147000000);
	for (i = 1; i <= m; i++)
	{
		cin >> a >> b >> c;
		graph[a].push_back(make_pair(b, c));
	}

	dijkstra(dist, 1);

	for (i = 2; i <= n; i++)
	{
		if (dist[i] != 2147000000)
			cout << i << " : " << dist[i] << endl;
		else
			cout << i << " : impossible" << endl;
	}
}
