#include <iostream>
#include <vector>
using namespace std;

vector<int> graph[30], ch(30);
int n,m, cnt;

void dfs(int v) {
    if(v == n) cnt++;
    else {
        for(int i=0; i<graph[v].size(); i++) {
            int next = graph[v][i];
            if(ch[next] == 0) {
                ch[next] = 1;
                dfs(next);
                ch[next] = 0;
            }
        }
    }
}

int main() {
    int a,b;
    cin>>n>>m;
    for(int i=1; i<=m; i++) {
        cin>>a>>b;
        graph[a].push_back(b);
    }

    ch[1] = 1;
    dfs(1);
    cout<<cnt;
}