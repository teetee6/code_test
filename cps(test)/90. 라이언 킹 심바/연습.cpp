#include <bits/stdc++.h>
using namespace std;

int dx[4] = {-1, 0, 1, 0}; 
int dy[4] = {0, 1, 0, -1};

struct Simba {
    int eat;
    int size;
    void sizeUp() {
        size++;
        eat = 0;
    }
};

struct Loc {
    int h, w, dis;
    Loc(int a, int b, int c) {
        h = a;
        w = b;
        dis = c;
    }
    bool operator<(const Loc &b) const {
        if(dis != b.dis) return dis > b.dis;
        if(h != b.h) return h > b.h;
        else return w > b.w;
    }
};

int main() {
    int n, i,j, res=0;
    cin>>n;

    priority_queue<Loc> Q;
    Simba simba;
    simba.eat = 0;
    simba.size = 2;

    vector<vector<int>> graph(n+1, vector<int>(n+1,0)), ch(n+1, vector<int>(n+1,0));

    for(i=1; i<=n; i++)
        for(j=1; j<=n; j++) {
            cin>>graph[i][j];
            if(graph[i][j] == 9) {
                graph[i][j] = 0;
                ch[i][j] = 1;
                Q.push(Loc(i,j,0));
            }
        }
    
    while(!Q.empty()) {
        Loc now = Q.top();
        Q.pop();

        // �������ִ���

        if(graph[now.h][now.w] > 0 && graph[now.h][now.w] < simba.size) {
            graph[now.h][now.w] = 0;
            simba.eat++;
            if(simba.size == simba.eat) 
                simba.sizeUp();
            
            res = now.dis;
            while(!Q.empty()) Q.pop();
            for(i=1; i<=n; i++)
                for(j=1; j<=n; j++)
                    ch[i][j] = 0;
        }

        // ����Ž��
        for(i=0; i<4; i++) {
            int new_h = now.h + dx[i];
            int new_w = now.w + dy[i];
            if(new_h < 1 || new_h > n || new_w < 1 || new_w > n) continue;
            
            if(graph[new_h][new_w] <= simba.size && ch[new_h][new_w] == 0) {
                ch[new_h][new_w] = 1;
                Q.push(Loc(new_h, new_w, now.dis + 1));
            }

        }
    }

    cout<<res;
}