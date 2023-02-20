#include <iostream>
#include <algorithm>
using namespace std;

int arr[11], op[4], n, Max=-2147000000, Min=2147000000;

void dfs(int L, int sum) {
    if(L == n) {
        if(Max < sum) Max = sum;
        if(Min > sum) Min = sum;
    }
    else {
        if(op[0] != 0) {
            op[0]--;
            dfs(L+1, sum + arr[L]);
            op[0]++;
        } 
        if(op[1] != 0) {
            op[1]--;
            dfs(L+1, sum - arr[L]);
            op[1]++;
        }
        if(op[2] != 0) {
            op[2]--;
            dfs(L+1, sum * arr[L]);
            op[2]++;
        } 
        if(op[3] != 0) {
            op[3]--;
            dfs(L+1, sum / arr[L]);
            op[3]++;
        }
    }
}

int main() {
    int i;
    cin>>n;
    for(i=0; i<n; i++) cin>>arr[i];
    for(i=0; i<4; i++) {
        cin>>op[i];
    }
    dfs(1, arr[0]);
    cout<<Max<<endl<<Min;
}