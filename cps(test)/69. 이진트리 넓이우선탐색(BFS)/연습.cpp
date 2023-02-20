#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int ch[10];
vector<pair<int,int>> graph[10];

int main() {
    freopen("input.txt", "rt", stdin);
    int a,b;
    for(int i=1; i<=6; i++) {
        cin>>a>>b;
        graph[a].push_back(make_pair(b,1));
        graph[b].push_back(make_pair(a,1));
    }

    queue<int> Q;
    Q.push(1);
    ch[1] = 1;

    while(!Q.empty()) {
        int now = Q.front();
        Q.pop();
        printf("%d ", now);
        for(int i=0; i<graph[now].size(); i++) {
            if(ch[graph[now][i].first] == 0 && graph[now][i].second == 1) {
                ch[graph[now][i].first] = 1;
                Q.push(graph[now][i].first);
            }
        }
    }
}