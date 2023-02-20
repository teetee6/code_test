#include <bits/stdc++.h>
using namespace std;

struct Loc {
    int h;
    int w;
    Loc(int a, int b) {
        h = a;
        w = b;
    }
};

int n;
int dx[4] = {-1, 0, 1, 0}, dy[4] = {0, 1, 0, -1};

vector<vector<int>> tom(1001, vector<int>(1001, 0)), dis(1001, vector<int>(1001, 0));

// int tom[1001][1001], dis[1001][1001];

int main() {
    int m, i,j;
    cin>>m>>n;

    queue<Loc> Q;

    for(i=1; i<=n; i++) 
        for(j=1; j<=m; j++) {
            cin>>tom[i][j];
            if(tom[i][j] == 1) Q.push(Loc(i,j));
        }

    while(!Q.empty()) {
        Loc now = Q.front();
        Q.pop();

        for(i=0; i<=3; i++) {
            int new_h = now.h + dx[i];
            int new_w = now.w + dy[i];
            if(new_h <1 || new_h > n || new_w <1 || new_w > m) continue;

            if(tom[new_h][new_w] == 0) {
                tom[new_h][new_w] = 1;
                dis[new_h][new_w] = dis[now.h][now.w] + 1;
                Q.push(Loc(new_h, new_w));
            }
        }
    }

    int chk=-1;
    for(i=1; i<=n; i++) 
        for(j=1; j<=m; j++) {
            if(tom[i][j] == 0) {
                chk = 1;
                break;
            }
        }
    
    int max = 0;
    if(chk == 1) 
        printf("-1");
    else {
        
        for(i=1; i<=n; i++) 
            for(j=1; j<=m; j++) {
                if(dis[i][j] > max) 
                    max = dis[i][j];
            }
        
        cout<<max;
    }
    
}