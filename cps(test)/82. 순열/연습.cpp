#include <iostream>
using namespace std;
int n,r, arr[20], ch[20], res[20], cnt=0;

void dfs(int L) {
    if(L==r+1) {
        for(int i=1; i<L; i++ ) 
            cout<<arr[res[i]]<<" ";
        cout<<endl;
        cnt++;
    }
    else {
        for(int i=1; i<=n; i++) {
            if(ch[i] == 0) {
                ch[i] = 1;
                res[L] = i;
                dfs(L+1);
                ch[i] = 0;
            }
        }
    }
}

int main() {
    freopen("input.txt", "rt", stdin);
    cin>>n>>r;
    for(int i=1; i<=n; i++)
        cin>>arr[i];
    
    dfs(1);
    cout<<cnt;
}