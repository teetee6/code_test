#include <stdio.h>
#include <vector>
#include <queue>
using namespace std;
int ch[101];

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
    int i, n, m, a,b,c, res=0;
    priority_queue<Edge> Q;

    scanf("%d %d" , &n, &m);
    vector<Edge> map[n+1];

    for(int i=1; i<=m; i++) {
        scanf("%d %d %d", &a, &b, &c);
        map[a].push_back(Edge(b,c));
        map[b].push_back(Edge(a,c));
    }

    Q.push(Edge(1,0));
    while(!Q.empty()) {
        Edge now = Q.top();
        Q.pop();
        if(ch[now.e] == 0) {
            ch[now.e] = 1;
            res += now.val;
            for(i=0; i<map[now.e].size(); i++) {
                if( ch[map[now.e][i].e] == 0) {
                    Q.push(Edge(map[now.e][i].e, map[now.e][i].val));
                }
            }
        }        
    }
    printf("%d", res);
}