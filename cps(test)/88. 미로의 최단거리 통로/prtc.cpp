#include <bits/stdc++.h>
using namespace std;

int dx[4] = { -1, 0, 1, 0};
int dy[4] = { 0, 1, 0, -1};

int main() {
    int n=7, i,j;

    vector<vector<int>> graph(n+1, vector<int>(n+1, 11111));

    for(i=1; i<=n; i++) 
        for(j=1; j<=n; j++) {
            cin>>graph[i][j];
        }
    
    queue<pair<int,int>> Q;

    Q.push(make_pair(1,1));
    graph[1][1] = 1;

    while(!Q.empty()) {
        pair<int,int> now = Q.front();
        Q.pop();
        for(int i=0; i<4; i++) {
            int x = dx[i] + now.first;
            int y = dy[i] + now.second;
            if( x >= 1 && x <= n && y >= 1 && y <= n && graph[x][y] == 0) {
                graph[x][y] += graph[now.first][now.second] + 1;
                Q.push(make_pair(x,y));
            }
        }
    }
    cout<< graph[n][n] - 1;
    
}