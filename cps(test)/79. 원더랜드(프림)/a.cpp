#include <stdio.h>
#include <algorithm>
#include <queue>
#include <vector>
using namespace std;
// 임의의 점에서 시작하여, 그 점에서 연결된 가지않았던 점들을 향하는 경로를 모두 push함.
// push 다 하고, 그 임의의 점은 pop()함.
// 큐는 최소 힙(우선순위 큐)이다.
// 다음 연산 시, 가장 작은 스패닝 비용(top값)의 점부터 시작함. 위의 과정을 반복.
// 큐를 비우면 실행 끝.
int ch[30];
struct Edge
{
	int e;
	int val;
	Edge(int a, int b)
	{
		e = a;
		val = b;
	}
	bool operator<(const Edge &b) const
	{						//b가 주인공임.
		return val > b.val; // 최소힙. (우선순위 큐 입장에서, 들어오는 매개변수 순서를 작은순으로 하는건 최소힙임)
							// 매개변수로 넘어온 b.val 값이 기준값이 됨. 작은걸 우선하니 최소힙.
							// return val<b.val;  은 최대힙.
							//	 (priority_queue는
							//	  벡터처럼 한번에 sort 안함.
							//	  매개변수 들어올 때마다 최소힙으로 처리함)
	}
};

int main()
{
	priority_queue<Edge> Q;			// Edge(목적지, 비용)
	vector<pair<int, int>> map[30]; // map[출발지] pair<목적지, 비용>
	int i, n, m, a, b, c, res = 0;
	scanf("%d %d", &n, &m);
	for (i = 1; i <= m; i++)
	{
		scanf("%d %d %d", &a, &b, &c);
		map[a].push_back(make_pair(b, c));
		map[b].push_back(make_pair(a, c)); // 양방향임을 잊지말기!!
	}
	Q.push(Edge(1, 0)); //아무 점이나 상관 없음.
	while (!Q.empty())
	{
		Edge tmp = Q.top();
		Q.pop();	   // 그 다음 출발지를 뽑겠다
		int v = tmp.e; // 새로운 출발지가 되었다. ( 그 출발지가 아직 안간 곳 이어야함 )
		int cost = tmp.val;
		if (ch[v] == 0)
		{ // 그 출발지 안갔으면
			res += cost;
			ch[v] = 1;
			for (i = 0; i < map[v].size(); i++)
			{
				if (ch[map[v][i].first] == 0)
				{
					Q.push(Edge(map[v][i].first, map[v][i].second));
				}
			}
		}
	}
	printf("%d\n", res);
	return 0;
}