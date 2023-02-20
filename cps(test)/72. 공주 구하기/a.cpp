#include <iostream>
#include <queue>
#include <vector>
using namespace std;

// int ch[1001];
int main() {
    int n,k, i;
    cin>>n>>k;

    queue<int> Q;

    for(i=1; i<=n; i++) {
        Q.push(i);
    }

    while(!Q.empty()) {
        for(i=1; i<k; i++) {
            Q.push(Q.front());
            Q.pop();
        }
        Q.pop();
        if(Q.size() == 1) {
            printf("%d\n", Q.front());
            Q.pop();
        }
    }
}