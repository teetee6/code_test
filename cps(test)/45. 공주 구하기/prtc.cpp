#include <stdio.h>
#include <vector>
using namespace std;
int main() {
    int n,k, i,pos=0, bpos=0, cnt=0;
    scanf("%d %d", &n, &k);
    vector<int> prince(n+1);

    while(1) {
        for(i=1; i<=k; i++) {
            while(1) {
                pos++;
                if(pos>n) pos=1;
                if(prince[pos] == 0) break;
            }
        }
        prince[pos] = 1;
        cnt++;
        if(cnt == n-1) break;
    }

    for(i=1; i<=n; i++){
		if(prince[i]==0){
			printf("%d\n", i);
			break;
		}
	}
}