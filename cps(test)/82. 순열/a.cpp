#include <iostream>
using namespace std;

int n,r, res[20], ch[20], arr[20], cnt;

void D(int L) {
    if(L == r) {
        for(int i=0; i<L; i++) {
            cout<<res[i]<<" ";
        }
        cout<<endl;
        cnt++;
    } else {
        for(int i=1; i<=n; i++) {
            if(ch[i] == 0) {
                res[L] = arr[i];
                ch[i] = 1;
                D(L+1);
                ch[i] = 0;
            }
        }
    }
}

int main() {
    freopen("input.txt", "rt", stdin);
    cin>>n>>r;
    for(int i=1; i<=n; i++) cin>>arr[i];

    D(0);
    cout<<cnt;
}