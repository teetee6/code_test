#include <bits/stdc++.h>
using namespace std;
int n,m, ch[15];

struct loc {
    int h,w;
    loc( int a, int b) {
        h = a;
        w = b;
    }
};

vector<loc> house, pizza;

int Min=2147000;

void C(int L, int s) {
    if(L == m) {
        int min_sum=0;
        for(int i=0; i<house.size(); i++) {
            int min_dist = 2147000;

            for(int j=0; j<L; j++) {
                int dh = abs(house[i].h - pizza[ch[j]].h);
                int dw = abs(house[i].w - pizza[ch[j]].w);
                min_dist = min(min_dist, dh+dw);
            }
            min_sum += min_dist;
        }
        Min = min(Min, min_sum);
    } else {
        for(int i=s; i<pizza.size(); i++) {
            ch[L] = i;
            C(L+1, i+1);
        }
    }
}

int main() {
    cin>>n>>m;
    int arr;

    for(int i=1; i<=n; i++) {
        for(int j=1; j<=n; j++) {
            cin>>arr;
            if(arr == 1) house.push_back(loc(i,j));
            if(arr == 2) pizza.push_back(loc(i,j));
        }
    }

    C(0, 0);
    cout<<Min;
}