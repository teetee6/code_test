#include <stdio.h>
#include <vector>
using namespace std;

int dist[30], ch[30];

int main() {
    int i,j, n,m, min, a,b,c;
    freopen("input.txt", "rt", stdin);
    scanf("%d %d", &n, &m);

    vector<pair<int,int>> map[30];

    for(i=0; i<=n; i++) {
        dist[i] = 2147000000;
    }

    for(i=1; i<=m; i++) {
        scanf("%d %d %d", &a, &b, &c);
        map[a].push_back(make_pair(b,c));
    }

    dist[1] = 0;
    for(i=1; i<=n; i++) {
        min=0;
        for(j=1; j<=n; j++) {
            if(ch[j] == 0 && dist[j] < dist[min]) {
                min = j;
            }
        }
        ch[min] = 1;
        for(j=0; j<map[min].size(); j++) {
            if( dist[min] + map[min][j].second < dist[ map[min][j].first ] ) {
                dist[ map[min][j].first ] = dist[min] + map[min][j].second;
            }
        }
    }

    for(i=2; i<=n; i++) {
        if(dist[i] == 2147000000) 
            printf("%d : impossible\n", i);
        else 
            printf("%d : %d\n", i, dist[i]);
    }
}