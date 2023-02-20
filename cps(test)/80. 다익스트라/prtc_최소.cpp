#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int e, val;
    Edge(int a, int b) {
        e = a;
        val = b;
    }
    bool operator<(const Edge &b) const {
        return val > b.val;
    }
};

int main() {
    int n,m, i, a,b,c;
    freopen("input.txt", "rt", stdin);
    cin>>n>>m;
    vector<Edge> graph[30];
    priority_queue<Edge> Q;
    vector<int> dist(n+1, 2147000000);

    for(i=1; i<=m; i++) {
        cin>>a>>b>>c;
        graph[a].push_back(Edge(b,c));
    }
    dist[1] = 0;
    Q.push(Edge(1, 0));
    while(!Q.empty()) {
        Edge now = Q.top();
        Q.pop();
        int start = now.e;
        int cost = now.val;
        if(dist[start] < cost) continue;

        for(i=0; i<graph[start].size(); i++) {
            int next = graph[start][i].e;
            int nextDis = graph[start][i].val + cost;
            if( dist[next] > nextDis ) {
                dist[next] = nextDis;
                Q.push(Edge( next, nextDis ));
            }
        }
    }

    for(i=2; i<=n; i++) {
        if(dist[i] == 2147000000) 
            cout<<i<<" : impossible"<<endl;
        else
            cout<<i<<" : "<<dist[i]<<endl;
    }
}