#include <stdio.h>
#include <algorithm>
using namespace std;

int main() {
    // freopen("input.txt", "rt", stdin);
    int n,m, i,j, p1=1, p2 =1;

    scanf("%d", &n);
    int a[n+1];
    for(i=1; i<=n; i++) 
        scanf("%d", &a[i]);

    scanf("%d", &m);
    int b[m+1];
    for(i=1; i<=m; i++)
        scanf("%d", &b[i]);

    sort(a+1, a+1+n);
    sort(b+1, b+1+m);

    while(p1 <=n, p2<=m) {
        if(a[p1] == b[p2]) {
            printf("%d ", a[p1]);
            p1++;
            p2++;
        }
        else if(a[p1] < b[p2]) p1++;
        else p2++;
    }
}