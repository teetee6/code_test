#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;
int unf[10001];

struct Edge {
    int s, e, val;
    Edge(int a, int b, int c) {
        s = a;
        e = b;
        val = c;
    }
    bool operator<(const Edge &b) const {
        return val < b.val;
    }
};

int Find(int v) {
    if(v == unf[v]) return v;
    else return unf[v] = Find(unf[v]);
}

void Union(int a, int b) {
    a = Find(a);
    b = Find(b);
    if(a != b) unf[a] = b;
}

int main() {
    int n,m, i, a,b,c, res=0;
    vector<Edge> Ed;
    scanf("%d %d", &n, &m);
    for(i=1; i<=n; i++) {
        unf[i]= i;
    }

    for(i=1; i<=m; i++) {
        scanf("%d %d %d", &a, &b, &c);
        Ed.push_back(Edge(a,b,c));
    }
    sort(Ed.begin(), Ed.end());

    int fa, fb;
    for(i=0; i<m; i++) {
        fa = Find(Ed[i].s);
        fb = Find(Ed[i].e);
        if(fa != fb) {
            Union(Ed[i].s,Ed[i].e);
            res += Ed[i].val;
        }
    }
    printf("%d", res);
}