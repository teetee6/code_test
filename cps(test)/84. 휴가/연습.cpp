#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> T(20), P(20);
int n, maX=-2147;

void dfs(int L, int sum) {
    if(L > n) {
        if(sum > maX) 
            maX = max(maX, sum);
    }
    else {
        if(L + T[L] <= n+1) {
            dfs(L+T[L], sum + P[L]);
        }
        dfs(L+1, sum);
    }
}

int main() {
    int i;
    cin>>n;
    for(i=1; i<=n; i++) {
        cin>>T[i]>>P[i];
    }
    dfs(1, 0);
    cout<<maX;
}