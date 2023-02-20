#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<pair<int,int>> hs, pz;
int m, ch[20], res=2147000;

void dfs(int s, int L) {
    if(L == m) {
        int sum = 0;
        for(int i=0; i<hs.size(); i++) {
            int x1 = hs[i].first;
            int y1 = hs[i].second;
            int dis = 2147000;
            for(int j=0; j<L; j++) {
                int x2 = pz[ch[j]].first;
                int y2 = pz[ch[j]].second;
                dis = min(dis, abs(x2-x1) + abs(y2-y1));
            }
            sum += dis;
        }
        if(sum < res) res = sum;
    }
    else {
        for(int i=s; i<pz.size(); i++) {
            ch[L] = i;
            dfs(i+1, L+1);
        }
    }
}



int main() {
    int tmp, n;
    cin>>n>>m;
    for(int i=1; i<=n; i++) {
        for(int j=1; j<=n; j++) {
            cin>>tmp;
            if(tmp == 1) hs.push_back(make_pair(i,j));
            if(tmp == 2) pz.push_back(make_pair(i,j));
        }
    }
    dfs(0,0);
    cout<<res;
}