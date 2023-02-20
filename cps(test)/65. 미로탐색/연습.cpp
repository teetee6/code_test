#include <iostream>
#include <vector>
#include <queue>
using namespace std;

// vector<vector<int>> graph(8, vector<int>(8));
// vector<vector<int>> ch(8, vector<int>(8));

int graph[8][8], ch[8][8];
int cnt;

int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

queue<pair<int,int>> Q;

void dfs(int x, int y) {
    if(x == 7 && y == 7) {
        cnt++;
    }
    else {
        for(int i=0; i<4; i++) {
            int new_h = x + dx[i];
            int new_w = y + dy[i];
            if(new_h <1 || new_h >7 || new_w <1 || new_w >7) continue;

            if(graph[new_h][new_w] == 0 && ch[new_h][new_w] == 0) {
                ch[new_h][new_w] = 1;
                Q.push(make_pair(new_h,new_w));
                dfs(new_h, new_w);
                ch[new_h][new_w] = 0;
            }
            
        }
    }
}

int main() {
    freopen("input.txt", "rt", stdin);
    int i,j;

    for(i=1; i<=7; i++)
        for(j=1; j<=7; j++)
            cin>>graph[i][j];

    ch[1][1] = 1;
    dfs(1,1);
    cout<<cnt;
}