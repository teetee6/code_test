#include <iostream>
#include <vector>
using namespace std;

int n, Min=2147000;
vector<pair<int,int>> graph[30];
vector<int> ch(30);

void dfs(int v, int sum) {
    if(v == n) {
        if(sum < Min)
            Min = sum;
    }
    else {
        for(int i=0; i<graph[v].size(); i++) {
            if(ch[graph[v][i].first] == 0) {
                ch[graph[v][i].first] = 1;
                dfs(graph[v][i].first, sum+ graph[v][i].second);
                ch[graph[v][i].first] = 0;
            }
        }
    }
}

int main() {
    int i, m, a,b,c;
    cin>>n>>m;
    
    for(i=1; i<=m; i++) {
        cin>>a>>b>>c;
        graph[a].push_back(make_pair(b,c));
    }

    ch[1] = 1;
    dfs(1, 0);
    cout<<Min;
}