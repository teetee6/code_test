#include <iostream>
#include <queue>
using namespace std;

int ch[10001], dx[3] = {1, -1, 5};
int main( ) {
    int s,e,i, dest;
    cin>>s>>e;

    queue<int> Q;
    Q.push(s);
    ch[s] = 1;
    while(!Q.empty()) {
        int x = Q.front();
        if(x==e) break;
        Q.pop();
        for(i=0; i<3; i++) {
            dest = x + dx[i];
            if(ch[dest] == 0) {
                Q.push(dest);
                ch[dest] = ch[x] + 1;
            }
        }
    }

    cout<<ch[e] -1;
}