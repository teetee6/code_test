#include <stdio.h>
#include <vector>
#include <algorithm>
#define x first
#define y second
using namespace std;
int ch[30], dist[30];

int main()
{
	freopen("input.txt", "rt", stdin);
	int n, m, i, j, a, b, c, min_j;
	vector<pair<int, int>> graph[30];
	scanf("%d %d", &n, &m);
	for (i = 1; i <= m; i++)
	{
		scanf("%d %d %d", &a, &b, &c);
		graph[a].push_back(make_pair(b, c));
	}
	for (i = 0; i <= n; i++)
		dist[i] = 2147000000;
	dist[1] = 0;

	//체크하고 연결된 곳의 값만 갱신해 줄거임
	for (i = 1; i <= n; i++)
	{
		min_j = 0;
		for (j = 1; j <= n; j++)
		{
			// 무한대보다 작고(그러고 나서 제일 최소값인것), 체크 안되어 있는것.
			if (ch[j] == 0 && dist[j] < dist[min_j])
				min_j = j; // 체크안되있는 제일 작은곳
		}
		ch[min_j] = 1;
		for (j = 0; j < graph[min_j].size(); j++)
		{
			int dest = graph[min_j][j].x;
			int cost = graph[min_j][j].y;
			if (dist[dest] > dist[min_j] + cost)
			{
				dist[dest] = dist[min_j] + cost;
			}
		}
	}
	for (i = 2; i <= n; i++)
	{
		if (dist[i] != 2147000000)
			printf("%d : %d\n", i, dist[i]);
		else
			printf("%d : impossible\n", i);
	}
	return 0;
}