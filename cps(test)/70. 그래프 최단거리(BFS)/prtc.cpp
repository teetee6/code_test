#include <stdio.h>
#include <vector>
#include <queue>
using namespace std;
int ch[30], dist[30];

vector<int> map[30];
int main() {
    freopen("input.txt","rt",stdin);
    int i, n,m, a,b;
    scanf("%d %d", &n, &m);
    for(i=1; i<=m; i++) {
        scanf("%d %d", &a, &b);
        map[a].push_back(b);
    }
    queue<int> Q;
    Q.push(1);
    ch[1] = 1;
    while(!Q.empty()) {
        int x = Q.front();
        Q.pop();
        for(i=0; i<map[x].size(); i++) {
            if( ch[map[x][i]] == 0 ) {
                ch[map[x][i]] = 1;
                Q.push(map[x][i]);
                dist[map[x][i]] = dist[x] + 1;
            }
        }
    }
    for(i=2; i<=n; i++) {
        printf("%d : %d\n", i, dist[i]);
    }
}