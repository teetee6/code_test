#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int s,e,val;
    Edge(int a, int b, int c) {
        s = a;
        e = b;
        val = c;
    }
};

int main() {
    int i, n,m, a,b,c;
    freopen("input.txt","rt", stdin);
    cin>>n>>m;
    vector<Edge> Ed; 

    for(i=1; i<=m; i++) {
        cin>>a>>b>>c;
        Ed.push_back(Edge(a,b,c));
    }

    int dist[n+1];

    for(i=1; i<=n; i++) {
        dist[i] = 2147000000;
    }
    dist[1] = 0;

    for(i=1; i<n; i++) {
        for(int j=0; j<Ed.size(); j++) {
            int s = Ed[j].s;
            int e = Ed[j].e;
            int val = Ed[j].val;
            if(dist[s] != 2147000000 && dist[e] > dist[s] + val ) {
                dist[e] = dist[s] + val;
            }
        }
    }

    for(int j=0; j<Ed.size(); j++) {
        int s = Ed[j].s;
        int e = Ed[j].e;
        int val = Ed[j].val;
        if(dist[s] != 2147000000 && dist[e] > dist[s] + val ) {
            printf("-1");
            exit(0);
        }
    }

    printf("%d", dist[n]);
}