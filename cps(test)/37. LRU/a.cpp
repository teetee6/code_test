#include <bits/stdc++.h>
using namespace std;

int main() {
    int s,n, i,j, tmp, pos;
    cin>>s>>n;

    vector<int> cache(s);
    for(i=1; i<=n; i++) {
        cin>>tmp;
        pos = -1;
        for(j=0; j<s; j++) {
            if(cache[j] == tmp) {
                pos = j;
            }
        }
        if(pos == -1) {
            for(j=s-1; j>=1; j--) {
                cache[j] = cache[j-1];
            }
        }
        else {
            for(j=pos; j>=1; j--) {
                cache[j] = cache[j-1];
            }
        }
        cache[0] = tmp;
    }

    for(i=0; i<s; i++) 
        printf("%d ", cache[i]);
}