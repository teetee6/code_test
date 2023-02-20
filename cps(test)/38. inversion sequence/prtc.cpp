#include <bits/stdc++.h>
using namespace std;
int main() {
    freopen("input.txt", "rt", stdin);
    int i,j, n, pos;
    scanf("%d", &n);
    vector<int> os(n+1), is(n+1);

    for(i=1; i<=n; i++){
		scanf("%d", &is[i]);
	}
	for(i=n; i>=1; i--){
		pos=i;
		for(j=1; j<=is[i]; j++){
			os[pos]=os[pos+1];
			pos++;
		}
		os[pos]=i;
	}
	for(i=1; i<=n; i++){
		printf("%d ", os[i]);
	}	
}