#include <stdio.h>

int digit_sum(int x) {
    int res = 0;
    while(x != 0) {
        res += x % 10;
        x /= 10;
    }
    return res;
}

int main() {
    // freopen("input.txt", "rt", stdin);
    int n,i, tmp, sum, res, max = -2147;
    scanf("%d", &n);

    for(i=1; i<=n; i++) {
        scanf("%d", &tmp);
        sum = digit_sum(tmp);
        // printf("[%d] ", sum);

        if(sum > max) {
            max = sum;
            res = tmp;
        }
        else if(sum == max) {
            if(tmp > res) {
                res = tmp;
            }
        }
    }

    printf("%d", res);
}