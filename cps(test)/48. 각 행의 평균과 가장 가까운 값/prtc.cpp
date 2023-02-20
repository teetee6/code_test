#include <stdio.h>
#include <math.h>

int main() {
    int i,j, n, ave, tmp, res, a[10][10], min;

    for(i=1; i<=9; i++) {
        tmp = 0;
        for(j=1; j<=9; j++) {
            scanf("%d", &a[i][j]);
            tmp += a[i][j];
        }
        ave = (tmp / 9.0) + 0.5;
        
        printf("%d ", ave);
        min = 2147000000;
        
        for(j=1; j<=9; j++) {
            tmp = abs(a[i][j] - ave);
            if(tmp < min) {
                min = tmp;
                res = a[i][j];
            } else if(tmp == min) {
                if(a[i][j] > res)
                    res = a[i][j];
            }
        }
        printf("%d\n", res);
    }
}