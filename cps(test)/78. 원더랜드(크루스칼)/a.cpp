#include <stdio.h>
#include <algorithm>
#include <queue>
#include <vector>
using namespace std;
int unf[10001];
// 스패닝 비용이 작은 값부터 탐색을 시작해서, disjoint 집합을 점점 크게 union 확장해 나감.
struct Edge
{
	int s;
	int e;
	int val;
	Edge(int a, int b, int c)
	{
		s = a;
		e = b;
		val = c;
	}
	bool operator<(const Edge &b) const
	{
		return val < b.val;
	}
};

int Find(int v)
{
	if (v == unf[v])
		return v;
	else
		return unf[v] = Find(unf[v]);
}

void Union(int a, int b)
{
	a = Find(a);
	b = Find(b);
	if (a != b)
		unf[a] = b;
}

int main()
{
	//freopen("input.txt", "rt", stdin);
	vector<Edge> Ed;
	int i, n, m, a, b, c, cnt = 0, res = 0;
	scanf("%d %d", &n, &m);
	for (i = 1; i <= n; i++)
	{
		unf[i] = i;
	}
	for (i = 1; i <= m; i++)
	{
		scanf("%d %d %d", &a, &b, &c);
		Ed.push_back(Edge(a, b, c));
	}
	sort(Ed.begin(), Ed.end());
	for (i = 0; i < m; i++)
	{
		int fa = Find(Ed[i].s); // 서로가 disjoint인지 먼저 확인.
		int fb = Find(Ed[i].e);
		if (fa != fb)
		{ // 서로의 root가 같다면(disjoint가 아니라면), 간선 연결시 루프가 생김.
			res += Ed[i].val;
			Union(Ed[i].s, Ed[i].e); // Union()해서 결국에는 같은 그룹임을 보장함.
		}
		// 77. 친구인가의 예제에서는
		// 먼저 주어진 입력값에 따라 disjoint set을 무작정 Union해준 후, 최종 입력값이 같은 그룹인지 확인해주는 방법이었음.
		// 78. 크루스칼에서는
		// 우리가 스스로 먼저 disjoint set인것들만 골라서 Union해줘야함.
	}
	printf("%d\n", res);
	return 0;
}

//		1. Edge 하나하나 자신만의 disjoint set을 가진다(초기화)
//		2. 입력받은 Edge정보를 val 오름차순으로 정렬한다. (vector 이용)
//		3. Edge의 val이 낮은 순으로 시작하여,
//		 Find()로 루트값을 갱신해가며,
//		 서로 disjoint set이면 (root가 달라서 루프가 안생기므로),
//		 Union을 행한다.