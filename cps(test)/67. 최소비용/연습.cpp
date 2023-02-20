#include <stdio.h>

int n, graph[30][30], ch[30], cost=2147000;

void dfs(int v, int sum) {
    if(v == n) {
        if(sum < cost) cost = sum;
    }
    else {
        for(int i=1; i<=n; i++) {
            if(graph[v][i] != 0 && ch[i] == 0) {
                ch[i] = 1;
                dfs(i, sum + graph[v][i]);
                ch[i] = 0;
            }
        }
    }
}

int main() {
    int m, i, a,b,c;
    scanf("%d %d", &n, &m);
    for(i=1; i<=m; i++) {
        scanf("%d %d %d", &a, &b, &c);
        graph[a][b] = c;
    }
    ch[1] = 1;
    dfs(1, 0);
    printf("%d", cost);
}