#include <stdio.h>
int a[701][701], dy[701][701];
int main() {
    int h,w, n,m, i,j, tmp, max=-2147;
    scanf("%d %d", &h, &w);
    for(i=1; i<=h; i++) {
        for(j=1; j<=w; j++) {
            scanf("%d", &a[i][j]);
            dy[i][j] = dy[i-1][j] + dy[i][j-1] -dy[i-1][j-1] + a[i][j];
        }
    }
    scanf("%d %d", &n, &m);
    for(i=n; i<=h; i++) {
        for(j=m; j<=w; j++) {
            tmp = dy[i][j] - dy[i-n][j] - dy[i][j-m] + dy[i-n][j-m];
            if(tmp > max) max=tmp;
        }
    }
    printf("%d", max);
}