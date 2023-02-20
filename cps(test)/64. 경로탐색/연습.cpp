#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

int n, cnt;
vector<vector<int>> graph(33, vector<int>(33, 0));  // 전역변수에서 n+1을 셋팅하면 오류남
vector<int> ch(33,0), path(33,0);
// int graph[30][30], ch[30], path[30];

void dfs(int v, int L) {
    if(v == n) {
        cnt++;
        for(int i=0; i<L; i++)
            cout<<path[i]<<" ";
        cout<<endl;
    }
    else {
        for(int i=1; i<=n; i++) {
            if(graph[v][i] == 1 && ch[i] == 0) {
                ch[i] = 1;
                path[L] = i;
                dfs(i, L+1);
                ch[i] = 0;
            }
        }
    }
}


int main() {
    freopen("input.txt", "rt", stdin);
    ios_base::sync_with_stdio(false);
    int i, m, a,b;
    cin>>n>>m;

    for(i=1; i<=m; i++) {
        cin>>a>>b;
        graph[a][b] = 1;
    }

    path[0] = 1;
    ch[1] = 1;
    dfs(1, 1);

    cout<<cnt;
}