#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> graph[30];
vector<int> ch(30);
int main() {
    freopen("input.txt", "rt", stdin);
    queue<int> Q;
    int a,b, n,m, i;
    cin>>n>>m;
    for(i=1; i<=m; i++) {
        cin>>a>>b;
        graph[a].push_back(b);
    }

    Q.push(1);
    ch[1] = 1;
    while(!Q.empty()) {
        int now = Q.front();
        Q.pop();

        for(int i=0; i<graph[now].size(); i++) {
            if(ch[graph[now][i]] == 0) {
                ch[graph[now][i]] = ch[now] + 1;
                Q.push(graph[now][i]);
            }
        }
    }

    for(int i=2; i<=n; i++) {
        cout<<i<<" : "<<ch[i] - 1<<endl;
    }
}