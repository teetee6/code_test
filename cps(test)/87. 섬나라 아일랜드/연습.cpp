#include <bits/stdc++.h>
using namespace std;

int dx[8] = {-1,-1,-1, 0, 1,1,1, 0};
int dy[8] = {-1,0,1,1,1,0,-1,-1};

int main() {
    int n, i,j;
    cin>>n;
    vector<vector<int>> graph(n+2, vector<int>(n+2, 0));

    for(i=1; i<=n; i++) 
        for(j=1; j<=n; j++)
            cin>>graph[i][j];
    
    queue<pair<int, int>> Q;
    int cnt=0;
    for(i=1; i<=n; i++)
        for(j=1; j<=n; j++) {
            if(graph[i][j] == 1) {
                Q.push(make_pair(i,j));
                graph[i][j] = 0;
                cnt++;
            }

            while(!Q.empty()) {
                pair<int,int> now = Q.front();
                Q.pop();
                for(int i=0; i<8; i++) {
                    int new_h = now.first + dx[i];
                    int new_w = now.second + dy[i];
                    // if(new_h < 1 || new_h > n || new_w < 1 || new_w > n || graph[new_h][new_w] == 0) continue;
                    if(graph[new_h][new_w] == 1) {
                        Q.push(make_pair(new_h, new_w));
                        graph[new_h][new_w] = 0;
                    }
                }
            }
                
        }

    cout<<cnt;
}